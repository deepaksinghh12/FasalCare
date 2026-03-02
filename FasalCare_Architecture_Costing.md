# 🌾 FasalCare – Minimal Costing + Architecture + API Workflow

## 1. Project Overview

**FasalCare** is a full-stack agricultural support platform tailored for Indian farmers, designed with an MVP (Minimum Viable Product) approach to keep initial costs low while maintaining high scalability.

**Core Technologies**:
- **Frontend & Fullstack**: Next.js 14 (App Router)
- **Styling & UI**: TypeScript + Tailwind CSS + shadcn/ui
- **Deployment**: Vercel (Hobby/Free Tier initially)
- **Data Integration**: Government APIs (Agmarknet / data.gov.in)
- **AI/ML Layer (Future-proof)**: Python FastAPI server (crop disease detection)

**Key Features**:
✔ Real-time mandi prices
✔ Government scheme finder
✔ AI-based crop disease analysis (Scalable approach)
✔ Multi-language support (Static JSON/Dictionaries)

---

## 2. Minimal Development Cost Breakdown (MVP Phase)

To keep the initial investment low, the development timeline is compressed to **1.5 to 2.5 months**, focusing only on core/critical features.

| Role | Duration | Minimal Rate | Estimated Cost |
| :--- | :--- | :--- | :--- |
| **Frontend Developer (Next.js)** | 1.5 months | ₹30,000–₹40,000/mo | ₹45,000 – ₹60,000 |
| **Backend / API Developer** | 1 month | ₹40,000–₹50,000/mo | ₹40,000 – ₹50,000 |
| **UI/UX Designer** | 0.5 months | ₹15,000–₹25,000/mo | ₹15,000 – ₹25,000 |
| **AI/ML Setup (Basic)** | 1 month | ₹40,000–₹50,000/mo | ₹40,000 – ₹50,000 |
| **Testing + QA** | 0.5 months | ₹15,000/mo | ₹15,000 |

💵 **Total Minimal Development Cost**:
➡ **₹1,15,000 – ₹1,50,000** (Without AI integration)
➡ **₹1,55,000 – ₹2,00,000** (With basic AI model integration)

---

## 3. Infrastructure & Hosting Cost (Minimal / Yearly)

We are utilizing generous free tiers for the MVP phase to minimize OPEX (Operational Expenditure).

| Service | Plan / Usage | Estimated Cost (Yearly) |
| :--- | :--- | :--- |
| **1. Vercel Hosting (Frontend + API)** | Hobby (Free) → Perfect for MVP & low traffic | **₹0** |
| **2. Database (Supabase/Planetscale)** | Starter (Free Tier) | **₹0** |
| **3. Domain (fasalcare.in/.com)** | Yearly registration | **₹600 – ₹900 / year** |
| **4. ML Model Hosting (FastAPI)** | Render / Railway (Free/Starter CPU instances) | **₹0 – ₹2,000 / year** |

> ⚠️ **Important Note on Render & ML Hosting**:  
> For the MVP, we will use lightweight models on basic free/starter tiers of Render or Railway. **However, in the future, to use heavy AI/ML models (like YOLOv8 or advanced architectures for highly accurate crop disease detection), we will need more Render platform subscriptions for GPU instances. This will likely cost around ₹3,000 – ₹8,000 per month depending on usage and traffic.**

💵 **Total Yearly Ops Cost (Initial Phase)**:
➡ **₹600 – ₹2,900 / year** (Highly optimized)

---

## 4. Full System Architecture

### A. Frontend (Next.js App Router)
- **Technologies**: TypeScript, Tailwind, Shadcn UI, React Server Components (RSC) & Client Components.
- **Image Upload**: For disease diagnosis (using client-side compression before sending).
- **Features**: 
  - Responsive, simple, and low-bandwidth UI suitable for rural areas.
  - Multilingual using an internal dictionary (`lib/translations.ts`) – *Zero third-party API cost*.
  - Search-based offline-first modules where possible.

### B. Data Flow Explanation
1. User interacts with UI (Client Component).
2. Client seamlessly calls internal Next.js API (`/api/**`).
3. Internal API proxies to external sources:
   - **Agmarknet API** for live prices.
   - **Local Static JSON** for Government Schemes.
   - **FastAPI ML Server** for leaf diagnosis.
4. Next.js API cleans, standardizes, and caches the response.
5. Server Component renders UI instantly.

---

## 5. API Endpoints Strategy (Cost-Effective)

### 1. `/api/mandi` – Real-Time Market Prices
- **Purpose**: Fetch live prices from Agmarknet via data.gov.in.
- **Workflow**: Next.js API intercepts request → Fetches from Agmarknet → Sorts by modal price → **Caches response globally for 1-12 hours** to save bandwidth and improve speed.

### 2. `/api/lang` – Language Handler
- **Architecture**: Zero-cost static dictionary stored in `lib/translations.ts`.
- **Workflow**: Translates content locally (Hindi/Gujarati/Marathi/etc.) without incurring Google Translate or external AWS localization API fees.

### 3. `/api/schemes` – Government Schemes (Static JSON)
- **Data Source**: `lib/data/schemes.json`
- **Cost**: **Free**. Schemes rarely change, making local static JSON the fastest and most cost-effective solution. Works offline and requires zero DB calls.

### 4. `/api/diagnosis` – Crop Disease ML API
- **Workflow**: Leaf Image Upload → Sent to Python FastAPI on Render → Inference is run → Returns JSON.
- **Cost-Saving Tip**: Implement request limits and compress images on the Next.js frontend before sending them to the Render FastAPI to save bandwidth limits on the free tier.

---

## 6. Conclusion — Why FasalCare Architecture is Smart & Scalable
✔ **Serverless**: Auto-scales on Vercel at zero base cost.
✔ **Modular & Lightweight**: JSON-based scheme data provides offline capabilities and instant loads.
✔ **Zero-Cost Localization**: In-house multi-language support.
✔ **Progressive Scalability**: Starts with zero/low-cost ML hosting, naturally scaling to paid GPU subscriptions **only** when user demand and heavy model integration explicitly require it.
✔ **Mobile-Ready**: Easy to migrate Next.js logic and UI components to a React Native app eventually.
