
import { NextResponse } from 'next/server';

const DATA_GOV_API_KEY = "579b464db66ec23bdd00000151bbb54b4d9e452c5523c3bce2ccc5f4";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const state = searchParams.get('state') || 'Rajasthan';
    const commodity = searchParams.get('commodity') || 'Wheat';

    const apiUrl = "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070";

    try {
        const response = await fetch(`${apiUrl}?api-key=${DATA_GOV_API_KEY}&format=json&offset=0&limit=500&filters[state]=${encodeURIComponent(state)}&filters[commodity]=${encodeURIComponent(commodity)}`);

        if (!response.ok) {
            throw new Error(`External API error: ${response.statusText}`);
        }

        const data = await response.json();
        const records = data.records || [];

        if (records.length === 0) {
            return NextResponse.json({
                error: `No live prices found for ${commodity} in ${state}.`
            }, { status: 404 });
        }

        // Process and Sort
        const processedPrices = records
            .map((record: any) => ({
                district: record.district || "N/A",
                market_name: record.market || "N/A",
                modal_price: parseFloat(record.modal_price) || 0,
                arrival_date: record.arrival_date || "N/A"
            }))
            .filter((p: any) => p.modal_price > 0)
            .sort((a: any, b: any) => b.modal_price - a.modal_price);

        if (processedPrices.length === 0) {
            return NextResponse.json({
                error: `Price data available but all zero for ${commodity} in ${state}.`
            }, { status: 404 });
        }

        const bestMandi = processedPrices[0];
        const summary = `📈 Best rate for ${commodity} in ${state} today is ₹${bestMandi.modal_price}/quintal at ${bestMandi.market_name}.`;

        return NextResponse.json({
            query: { state, commodity, source: "data.gov.in (Agmarknet)" },
            summary,
            prices: processedPrices
        });

    } catch (error: any) {
        return NextResponse.json({ error: "Failed to fetch market data", details: error.message }, { status: 500 });
    }
}
