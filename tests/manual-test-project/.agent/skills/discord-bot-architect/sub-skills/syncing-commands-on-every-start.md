# ❌ Syncing Commands on Every Start

**Why bad**: Command registration is rate limited. Global commands take up to 1 hour
to propagate. Syncing on every start wastes API calls and can hit limits.