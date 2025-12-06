def register(sio, engine):
    @sio.event
    async def connect(sid, environ):
        print(f"Client {sid} connected")
        await engine.start()
    
    @sio.event
    async def execute_command(sid, data):
        print(f"Cmd: {data}")
        tid = await engine.execute(data.get('agent'), data.get('command'), data.get('params'))
        await sio.emit('log', {'message': f"Task {tid} started"})
