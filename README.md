# SWAPI-Wrapper-Star-Wars  
&gt; A lightweight RESTful proxy for [swapi.dev](https://swapi.dev) with **5-minute in-memory TTL caching**, built with **FastAPI** (Python) and **Angular 20** (standalone).

---

## 🎬 Endpoints available in this API:
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET`  | `/api/films` | List all Star-Wars films |
| `GET`  | `/api/films/{id}/characters` | Characters for a given film |
| `GET`  | `/api/films/{id}/starships` | Starships for a given film |

Live Swagger docs: [http://localhost:8000/docs](http://localhost:8000/docs) (when running backend)

---

## ⚙️ Tech Stack
| Layer | Tech |
|-------|------|
| Backend | **FastAPI** – async Python 3.11 |
| Frontend | **Angular 20** – standalone, SCSS |
| HTTP Client | `httpx` (async) |
| Caching | In-memory TTL (5 min) |
| Rate-Limiting | `slowapi` (100 req/min per IP) |
| Container | **Docker** (official image provided) |

---

## 🏁 Quick Start

### 1. Clone
```bash
git clone https://github.com/danellekruger/swapi-wrapper-star-wars.git
cd swapi-wrapper-star-wars

---

### 2. Run the interface (Native Run)
```bash
# Backend
cd backend
python -m venv venv
venv\Scripts\activate     # Different command on Linux/Mac
pip install -r requirements.txt
uvicorn app.main:app --reload

# Frontend (new terminal)
cd frontend
npm install
ng serve -o

# Docker run (Bonus feature):
cd backend
docker build -t swapi-backend .
docker run -p 8000:8000 swapi-backend

Visit:
API → http://localhost:8000/docs
UI  → http://localhost:4200

🛡️ Rate-Limiting (Bonus)
100 requests / minute / IP (default)
Headers returned:
X-RateLimit-Limit, X-RateLimit-Remaining
Exceeding the limit yields 429 Too Many Requests

---

### 📁 Project Layout
swapi-wrapper-star-wars/
├── backend/               # FastAPI (backend code)
│   ├── app/
│   │   ├── main.py
│   │   ├── routers/films.py
│   │   ├── services/swapi.py
│   │   ├── cache/ttl.py
│   │   └── models/schemas.py
│   ├── Dockerfile
│   └── requirements.txt
├── frontend/              # Angular standalone (frontend code)
│   ├── src/app/components/
│   ├── src/app/services/swapi.service.ts
│   └── proxy.conf.json   # dev proxy → localhost:8000
└── README.md

### 🧠 Architecture Notes
Caching: simple in-memory dict with 5-minute expiry; shared across requests.
Async: all SWAPI calls are concurrent (httpx.AsyncClient).
Error handling: 404 returned for unknown film IDs or SWAPI outages.
CORS: enabled for any origin (dev-friendly).
Proxy: Angular dev-server forwards /api/* to FastAPI automatically.

---

## ⚡ Performance
* **5-second timeout** per external call—fail-fast behaviour.  
* **Reactive skeleton** shown while data loads (Angular async pipe).  
* **Connection-pooling** via shared `httpx.AsyncClient`.

---

## 🖊️ Layout of Project
(Screenshots from web browser)