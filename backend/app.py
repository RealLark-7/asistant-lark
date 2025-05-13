from fastapi import FastAPI, Query
from fastapi.responses import JSONResponse

app = FastAPI()

@app.get("/api")
async def process_command(command: str = Query(...)):
    if command.lower() == "merhaba":
        return {"result": "Merhaba! Sana nasıl yardımcı olabilirim?"}
    elif command.lower() == "tarih":
        from datetime import datetime
        return {"result": f"Bugünün tarihi: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}"}
    else:
        return {"result": f"'{command}' komutu tanınmadı."}

@app.get("/")
async def root():
    return JSONResponse(content={"message": "Terminal Asistan API"})