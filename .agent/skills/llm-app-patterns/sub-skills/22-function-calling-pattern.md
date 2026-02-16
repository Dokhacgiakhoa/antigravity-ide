# 2.2 Function Calling Pattern

```python
# Define tools as functions with schemas
TOOLS = [
    {
        "name": "search_web",
        "description": "Search the web for current information",
        "parameters": {
            "type": "object",
            "properties": {
                "query": {
                    "type": "string",
                    "description": "Search query"
                }
            },
            "required": ["query"]
        }
    },
    {
        "name": "calculate",
        "description": "Perform mathematical calculations",
        "parameters": {
            "type": "object",
            "properties": {
                "expression": {
                    "type": "string",
                    "description": "Math expression to evaluate"
                }
            },
            "required": ["expression"]
        }
    }
]

class FunctionCallingAgent:
    def run(self, question: str) -> str:
        messages = [{"role": "user", "content": question}]

        while True:
            response = self.llm.chat(
                messages=messages,
                tools=TOOLS,
                tool_choice="auto"
            )

            if response.tool_calls:
                for tool_call in response.tool_calls:
                    result = self._execute_tool(
                        tool_call.name,
                        tool_call.arguments
                    )
                    messages.append({
                        "role": "tool",
                        "tool_call_id": tool_call.id,
                        "content": str(result)
                    })
            else:
                return response.content
```