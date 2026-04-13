from fastapi import FastAPI
from mangum import Mangum

app = FastAPI()


@app.get("/api")
def root():
    return {"message": "Hello from Python FastAPI! 🐍"}


@app.get("/api/health")
def health():
    return {"status": "ok"}


# Vercel serverless handler
handler = Mangum(app)
