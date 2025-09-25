import httpx
from typing import List, Dict, Any
from app.cache.ttl import get, set

BASE = "https://swapi.dev/api"

async def _get(url: str) -> Dict[str, Any]:
    cached = get(url)
    if cached:
        return cached
    async with httpx.AsyncClient() as client:
        resp = await client.get(url)
        resp.raise_for_status()
    data = resp.json()
    set(url, data)
    return data

async def list_films() -> List[Dict[str, Any]]:
    data = await _get(f"{BASE}/films")
    return data["results"]

async def film_characters(film_id: int) -> List[Dict[str, Any]]:
    film = await _get(f"{BASE}/films/{film_id}")
    return [await _get(url) for url in film["characters"]]

async def film_starships(film_id: int) -> List[Dict[str, Any]]:
    film = await _get(f"{BASE}/films/{film_id}")
    return [await _get(url) for url in film["starships"]]