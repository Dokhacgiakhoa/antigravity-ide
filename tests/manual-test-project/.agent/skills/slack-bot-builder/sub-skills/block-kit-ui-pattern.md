# Block Kit UI Pattern

Block Kit is Slack's UI framework for building rich, interactive messages.
Compose messages using blocks (sections, actions, inputs) and elements
(buttons, menus, text inputs).

Limits:
- Up to 50 blocks per message
- Up to 100 blocks in modals/Home tabs
- Block text limited to 3000 characters

Use Block Kit Builder to prototype: https://app.slack.com/block-kit-builder


**When to use**: ['Building rich message layouts', 'Adding interactive components to messages', 'Creating forms in modals', 'Building Home tab experiences']

```python
from slack_bolt import App
import os

app = App(token=os.environ["SLACK_BOT_TOKEN"])

def build_notification_blocks(incident: dict) -> list:
    """Build Block Kit blocks for incident notification."""
    severity_emoji = {
        "critical": ":red_circle:",
        "high": ":large_orange_circle:",
        "medium": ":large_yellow_circle:",
        "low": ":white_circle:"
    }

    return [
        # Header
        {
            "type": "header",
            "text": {
                "type": "plain_text",
                "text": f"{severity_emoji.get(incident['severity'], '')} Incident Alert"
            }
        },
        # Details section
        {
            "type": "section",
            "fields": [
                {
                    "type": "mrkdwn",
                    "text": f"*Incident:*\n{incident['title']}"
                },
                {
                    "type": "mrkdwn",
                    "text": f"*Severity:*\n{incident['severity'].upper()}"
                },
                {
                    "type": "mrkdwn",
                    "text": f"*Service:*\n{incident['service']}"
                },
                {
                    "type": "mrkdwn",
                    "text": f"*Reported:*\n<!date^{incident['timestamp']}^{date_short} {time}|{incident['timestamp']}>"
                }
            ]
        },
        # Description
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": f"*Description:*\n{incident['description'][:2000]}"
            }
        },
        # Divider
        {"type": "divider"},
        # Action buttons
        {
            "type": "actions",
            "block_id": f"incident_actions_{incident['id']}",
            "elements": [
                {
                    "type": "button",
                    "text": {"type": "plain_text", "text": "Acknowledge"},
                    "style": "primary",
                    "action_id": "acknowle
```