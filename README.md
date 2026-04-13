# First Website

A starter project combining a **Next.js** frontend with a **FastAPI** (Python) backend, deployed on **Vercel**.

## Project Structure

```
first_website/
├── app/                  # Next.js App Router (frontend)
│   ├── layout.js         # Root layout with global metadata
│   ├── page.js           # Home page – fetches Python API data
│   └── globals.css       # Global styles
├── api/                  # Python serverless functions (backend)
│   └── index.py          # FastAPI app with Mangum ASGI handler
├── public/               # Static assets
├── package.json          # Node.js / Next.js dependencies
├── next.config.mjs       # Next.js configuration
├── requirements.txt      # Python dependencies
├── vercel.json           # Vercel deployment configuration
└── README.md
```

## Getting Started

### Prerequisites

- **Node.js** 18+ and **npm**
- **Python** 3.11+

---

### Frontend (Next.js)

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

The Next.js app will be available at [http://localhost:3000](http://localhost:3000).

---

### Backend (FastAPI)

Create a virtual environment and install Python dependencies:

```bash
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

Run the FastAPI server locally:

```bash
uvicorn api.index:app --reload --port 8000
```

The Python API will be available at [http://localhost:8000](http://localhost:8000).

> **Note:** When running locally, the Next.js page fetches `/api` which is handled by Vercel's routing in production. For local development you may need to proxy requests or test the API directly.

---

## Deploying to Vercel

1. Push this repository to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Vercel will auto-detect Next.js and deploy the frontend. Python files in the `api/` directory are deployed as serverless functions automatically.
4. Set any required environment variables in the Vercel dashboard.

---

## API Endpoints

| Method | Path          | Description               |
|--------|---------------|---------------------------|
| GET    | `/api`        | Returns a greeting        |
| GET    | `/api/health` | Returns `{"status":"ok"}` |

---

## Tech Stack

| Layer    | Technology                                                      |
|----------|-----------------------------------------------------------------|
| Frontend | [Next.js 14](https://nextjs.org)                               |
| Backend  | [FastAPI](https://fastapi.tiangolo.com) + [Mangum](https://mangum.io) |
| Hosting  | [Vercel](https://vercel.com)                                   |
