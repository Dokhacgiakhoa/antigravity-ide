# Template 3: EventStoreDB Usage

```python
from esdbclient import EventStoreDBClient, NewEvent, StreamState
import json

# Connect
client = EventStoreDBClient(uri="esdb://localhost:2113?tls=false")

# Append events
def append_events(stream_name: str, events: list, expected_revision=None):
    new_events = [
        NewEvent(
            type=event['type'],
            data=json.dumps(event['data']).encode(),
            metadata=json.dumps(event.get('metadata', {})).encode()
        )
        for event in events
    ]

    if expected_revision is None:
        state = StreamState.ANY
    elif expected_revision == -1:
        state = StreamState.NO_STREAM
    else:
        state = expected_revision

    return client.append_to_stream(
        stream_name=stream_name,
        events=new_events,
        current_version=state
    )

# Read stream
def read_stream(stream_name: str, from_revision: int = 0):
    events = client.get_stream(
        stream_name=stream_name,
        stream_position=from_revision
    )
    return [
        {
            'type': event.type,
            'data': json.loads(event.data),
            'metadata': json.loads(event.metadata) if event.metadata else {},
            'stream_position': event.stream_position,
            'commit_position': event.commit_position
        }
        for event in events
    ]

# Subscribe to all
async def subscribe_to_all(handler, from_position: int = 0):
    subscription = client.subscribe_to_all(commit_position=from_position)
    async for event in subscription:
        await handler({
            'type': event.type,
            'data': json.loads(event.data),
            'stream_id': event.stream_name,
            'position': event.commit_position
        })

# Category projection ($ce-Category)
def read_category(category: str):
    """Read all events for a category using system projection."""
    return read_stream(f"$ce-{category}")
```