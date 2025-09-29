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
| Container | **Docker** (official image provided) |
| Authentication | Endpoint authentication before user can use API |

---

## 🏁 Quick Start

### 1. Clone (In terminal/command prompt)
git clone https://github.com/danellekruger/swapi-wrapper-star-wars.git
cd swapi-wrapper-star-wars

---

### 2. Run the interface - Native Run (In terminal, backend and frontend in seperate terminals)
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

### Visit:
API → http://localhost:8000/docs
UI  → http://localhost:4200

# Docker run (Bonus feature - run in terminal):
cd backend
docker build -t swapi-backend .
docker run -p 8000:8000 swapi-backend

# Endpoint authentication (Bonus feature - )
In order to use endpoints the user now had to enter username `danelle` / password `kruger`.  
  - Test (in terminal while backend in active): `cmd /c "curl -u danelle:kruger http://localhost:8000/api/films"`  
Results if you test the autentication:
<img width="1351" height="223" alt="Screenshot 2025-09-29 005219" src="https://github.com/user-attachments/assets/df43b092-6186-406b-9820-39080e302fd3" />

Results if you run both the backend and frontend:
<img width="1896" height="680" alt="Screenshot 2025-09-29 005617" src="https://github.com/user-attachments/assets/0be12cd8-1b82-4796-bdf5-807db4d51c8b" />

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

## 🖊️ Layout of Project (Examples of the web page when it is successfully running)
<img width="1919" height="1018" alt="Screenshot 2025-09-29 085719" src="https://github.com/user-attachments/assets/2a3380c5-abca-41a8-ba30-7efa6645ebb3" />
<img width="1919" height="1012" alt="Screenshot 2025-09-29 085740" src="https://github.com/user-attachments/assets/f05fe1cf-f03a-46cc-b80a-8c021dc0c9e5" />
<img width="1914" height="1026" alt="Screenshot 2025-09-29 085759" src="https://github.com/user-attachments/assets/fb7ddb4f-6450-402d-9140-ca2660bff041" />


