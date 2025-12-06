import uvicorn
from fastapi import FastAPI
from core import settings, agent_manager, engine
from bridge import websocket_server
import socketio

sio = socketio.AsyncServer(async_mode='asgi', cors_allowed_origins='*')
app = FastAPI()
socket_app = socketio.ASGIApp(sio, app)

neo_engine = engine.NeoEngine()

@app.get("/")
def root(): return {"status": "NeoEngine Core Online"}

websocket_server.register(sio, neo_engine)

if __name__ == "__main__":
    settings.setup_dirs()
    uvicorn.run(socket_app, host="0.0.0.0", port=8080)
