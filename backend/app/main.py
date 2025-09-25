from fastapi import FastAPI
from app.routers import films

app = FastAPI(
    title="SWAPI Wrapper",
    description="Simple RESTful proxy for swapi.dev with 5-min TTL cache.",
    version="1.0.0"
)

app.include_router(films.router)

@app.get("/")
def root():
    return {"message": "May the Force be with you!"}