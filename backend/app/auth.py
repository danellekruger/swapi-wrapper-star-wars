from fastapi import HTTPException, Depends
from fastapi.security import HTTPBasic, HTTPBasicCredentials
import secrets

security = HTTPBasic()

USERNAME = "danelle"
PASSWORD = "kruger"

def auth(creds: HTTPBasicCredentials = Depends(security)):
    is_user = secrets.compare_digest(creds.username, USERNAME)
    is_pass = secrets.compare_digest(creds.password, PASSWORD)
    if not (is_user and is_pass):
        raise HTTPException(401, "Invalid credentials")
    return creds.username