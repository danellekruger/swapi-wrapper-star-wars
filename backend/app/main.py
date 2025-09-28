from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded

limiter = Limiter(key_func=get_remote_address, default_limits=["100/minute"])
app = FastAPI(title="SWAPI Wrapper", version="1.0.0")
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# apply to every route
@app.middleware("http")
async def add_rate_limit_header(request: Request, call_next):
    response = await call_next(request)
    response.headers["X-RateLimit-Limit"] = "100"
    response.headers["X-RateLimit-Remaining"] = str(
        max(0, 100 - int(request.client.port or 0))  # simple counter
    )
    return response