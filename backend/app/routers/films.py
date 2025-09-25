from fastapi import APIRouter, HTTPException
from typing import List
from app.models.schemas import Film, Person, Starship
from app.services import swapi

router = APIRouter(prefix="/api/films", tags=["films"])

@router.get("", response_model=List[Film])
async def get_films():
    results = await swapi.list_films()
    return [
        Film(
            id=int(f["url"].rstrip("/").split("/")[-1]),
            title=f["title"],
            episode_id=f["episode_id"],
            director=f["director"],
            release_date=f["release_date"]
        )
        for f in results
    ]

@router.get("/{film_id}/characters", response_model=List[Person])
async def get_characters(film_id: int):
    try:
        people = await swapi.film_characters(film_id)
    except Exception:
        raise HTTPException(404, "Film or characters not found")
    return [Person(**{k: p.get(k, "n/a") for k in Person.model_fields}) for p in people]

@router.get("/{film_id}/starships", response_model=List[Starship])
async def get_starships(film_id: int):
    try:
        ships = await swapi.film_starships(film_id)
    except Exception:
        raise HTTPException(404, "Film or starships not found")
    return [Starship(**{k: s.get(k, "n/a") for k in Starship.model_fields}) for s in ships]