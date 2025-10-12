from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI()

class DesignInput(BaseModel):
    tank_size_gal: float
    livestock: List[str] = []
    budget_usd: Optional[float] = None
    style: Optional[str] = None

@app.get("/mcp")
def list_tools():
    return {
        "tools": [{
            "name": "design_build_setup",
            "inputSchema": {
                "type": "object",
                "properties": {
                    "tank_size_gal": {"type": "number"},
                    "livestock": {"type": "array", "items": {"type": "string"}},
                    "budget_usd": {"type": "number"},
                    "style": {"type": "string"}
                },
                "required": ["tank_size_gal"]
            }
        }]
    }

@app.post("/mcp/tools/design_build_setup")
def design_tool(input: DesignInput):
    return {
        "structuredContent": {
            "plan": {
                "summary": "Draft Aquaria plan",
                "inputs": input.dict()
            }
        }
    }
