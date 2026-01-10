# Project Kisan - Comprehensive System Architecture

## 1. High-Level Architecture

**Project Kisan** is a modern web application built for Indian farmers, leveraging **Next.js 14+ (App Router)** for a robust full-stack experience.

```mermaid
graph TD
    User[User / Farmer] -->|Access via Browser| Frontend[Next.js Frontend]
    Frontend -->|Page Navigation| AppRouter[App Router /app]
    
    subgraph "Frontend Layer"
        AppRouter -->|Render| Pages[Pages & Layouts]
        Pages -->|Use| Components[UI Components /shadcn]
        Pages -->|Use| Hooks[Custom Hooks]
    end
    
    subgraph "Data Layer / API"
        Pages -->|Fetch Data| API[Internal API Routes /api]
        API -->|Proxy Request| ExternalAPIs[External APIs]
        Pages -->|Read| StaticData[JSON Data Assets]
    end
    
    ExternalAPIs -->|Real-time Data| DataGov[Version 2.0 (Agmarknet)]
    StaticData -->|Structured Info| SchemesInfo[Govt Schemes DB]
```

---

## 2. Directory & Component Flow

### A. The Application Core (`app/`)
The `app/` directory uses file-system-based routing.
- **`layout.tsx`**: The root wrapper. Defines global fonts (Inter), metadata, and global providers (Redux, Context, etc. if added).
- **`page.tsx`**: The main Landing Page.

### B. Feature Modules

#### 1. 💰 Market Prices (`app/market/`)
- **Page**: `page.tsx`
- **Logic**: 
  - On load, it calls `/api/mandi?commodity=Wheat&state=Rajasthan`.
  - Displays a list of prices sorted by modal price (highest to lowest).
  - Uses `lucide-react` icons for trends.
- **Data Flow**:
  1. User searches for "Mustard".
  2. `fetchPrices('Mustard')` sends GET request to local API.
  3. API fetches from `data.gov.in`.
  4. Response is parsed and UI updates.

#### 2. 🧾 Government Schemes (`app/schemes/`)
- **Page**: `page.tsx`
- **Logic**:
  - Imports huge JSON dataset from `@/lib/data/schemes.json`.
  - Filters schemes locally based on user search query or category buttons.
  - Renders expandable cards using `Collapsible` component.
- **Data Source**: Static JSON for high performance (no API latency).

#### 3. 🪴 Disease Diagnosis (`app/diagnosis/`)
- **Page**: `page.tsx`
- **Logic**:
  - User uploads an image.
  - **Current State**: Uses a simulation (mock) to demonstrate the UI flow (Upload -> Analyzing Progress -> Result).
  - *Future Integration*: Connect to a Python/FastAPI backend running a TensorFlow model.

---

## 3. API Specifications (`app/api/`)

### Endpoints

#### `GET /api/mandi`
**Purpose**: Proxies requests to the Government's Agmarknet API to avoid CORS issues and hide API keys.
- **Query Params**:
  - `state`: (string, default: "Rajasthan") - State to search in.
  - `commodity`: (string, default: "Wheat") - Crop name.
- **Response Format**:
  ```json
  {
    "summary": "Best rate for Wheat is ₹2200...",
    "prices": [
      {
        "district": "Jaipur",
        "market_name": "Jaipur Grain Mandi",
        "modal_price": 2200,
        "arrival_date": "10/01/2026"
      },
      ...
    ]
  }
  ```

---

## 4. Key Libraries & Utilities

### `lib/` Directory
- **`utils.ts`**: Contains `cn()` helper function to merge Tailwind classes dynamically (essential for `shadcn/ui`).
- **`translations.ts`**: (New) A TypeScript dictionary containing UI text in 10+ Indian languages (Hindi, Tamil, Punjabi, etc.).
- **`data/schemes.json`**: (New) A centralized database of government schemes.

### `components/ui/` (Design System)
We use **shadcn/ui**, which provides accessible, installable components.
- **Core Components Used**: `Card`, `Button`, `Input`, `Badge`, `Collapsible`.
- **Styling**: All styled via `tailwind.config.ts`.

---

## 5. Development Workflow

1.  **Run Dev Server**: `npm run dev` (Starts at port 3000).
2.  **Edit Pages**: Modify `app/[feature]/page.tsx` for visual changes.
3.  **Edit Logic**: Modify `lib/` or internal functions in pages.
4.  **Edit API**: Modify `app/api/[route]/route.ts`.
