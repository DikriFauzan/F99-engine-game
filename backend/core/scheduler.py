import uuid
class Scheduler:
    def __init__(self, db):
        self.db = db
    
    async def schedule(self, agent, cmd, params):
        tid = str(uuid.uuid4())
        self.db.add_task(tid, agent, cmd)
        return tid
