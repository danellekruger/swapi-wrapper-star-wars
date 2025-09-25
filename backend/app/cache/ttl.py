import time
from typing import Any, Optional

_CACHE: dict[str, tuple[Any, float]] = {}
_TTL = 5 * 60  # 5 minutes

def get(key: str) -> Optional[Any]:
    if key in _CACHE:
        value, expiry = _CACHE[key]
        if time.time() < expiry:
            return value
        else:
            del _CACHE[key]
    return None

def set(key: str, value: Any) -> None:
    _CACHE[key] = (value, time.time() + _TTL)