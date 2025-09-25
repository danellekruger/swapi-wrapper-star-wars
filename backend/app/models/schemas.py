from pydantic import BaseModel
from typing import List

class Film(BaseModel):
    id: int
    title: str
    episode_id: int
    director: str
    release_date: str

class Person(BaseModel):
    name: str
    height: str
    mass: str
    gender: str

class Starship(BaseModel):
    name: str
    model: str
    manufacturer: str
    cost_in_credits: str