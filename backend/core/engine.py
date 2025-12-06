from .agent_manager import AgentManager
from .scheduler import Scheduler
from .database import Database

class NeoEngine:
    def __init__(self):
        self.db = Database()
        self.scheduler = Scheduler(self.db)
        self.agent_manager = AgentManager(self.db)

    async def start(self):
        self.agent_manager.load_agents()
        print("Engine Started.")

    async def execute(self, agent, cmd, params):
        return await self.scheduler.schedule(agent, cmd, params)
