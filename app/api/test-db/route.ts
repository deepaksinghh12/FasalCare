import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import User from '@/lib/models/User';

export async function GET() {
    try {
        await connectToDatabase();
        return NextResponse.json({
            status: 'success',
            message: 'Connected to MongoDB successfully!'
        }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({
            status: 'error',
            message: 'Failed to connect to database',
            error: error.message
        }, { status: 500 });
    }
}
