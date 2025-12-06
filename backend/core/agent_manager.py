class AgentManager:
    def __init__(self, db):
        self.db = db
        self.agents = {}
    
    def load_agents(self):
        # Simulation of dynamic loading
        self.agents['RepoAgent'] = True
        self.agents['BuildAgent'] = True
        print("Agents Loaded.")
