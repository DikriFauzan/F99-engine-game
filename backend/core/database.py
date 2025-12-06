import sqlite3
import os
from .settings import DATA_DIR

class Database:
    def __init__(self):
        self.path = os.path.join(DATA_DIR, "neo.db")
        self.conn = sqlite3.connect(self.path)
        self.conn.execute("CREATE TABLE IF NOT EXISTS tasks (id TEXT, agent TEXT, cmd TEXT, status TEXT)")
    
    def add_task(self, id, agent, cmd):
        self.conn.execute("INSERT INTO tasks VALUES (?, ?, ?, ?)", (id, agent, cmd, "PENDING"))
        self.conn.commit()
