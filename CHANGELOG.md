# Changelog

All notable changes to this project will be documented in this file.

## [4.0.8] - 2026-02-08
### Added
- **Marketing**: New "One Command" slogan and high-contrast NPM badges.
- **Documentation**: Synchronized all guides with 72 Master Skills and 600+ AI Patterns.
- **Stats**: Added project statistics bar to READMEs.
- **Reference**: Updated `GEMINI_GUIDE.md`, `SKILLS.md`, and `MASTER_GUIDE.md`.

### Changed
- Refined `README.md` and `README.vi.md` for maximum marketing impact.
- Standardized badge colors: Green (Version), Purple (Downloads), Orange (License).
- Clarified distinction between Master Skills (72) and AI Patterns (600+).

### Added
- **Feature**: Auto-Update Documentation System - Never forget to update docs again
- **Workflow**: New `/update-docs` workflow for systematic docs synchronization
- **Rule**: New `docs-update.md` rule with checklist for all doc types
- **Script**: `update-docs.js` for automatic statistics collection
- **Automation**: AI now auto-checks and updates docs when adding Skills/Workflows/Rules

### Changed
- Updated workflow count from 19 to 21 (added update-docs and plan-auto-update-chat)
- Updated all documentation with new feature descriptions
- Enhanced `RULES_GUIDE.vi.md` with docs-update rule
- Enhanced `WORKFLOW_GUIDE.vi.md` with /update-docs workflow

### Improved
- Documentation consistency across all files
- Automatic statistics tracking (27 Skills, 21 Workflows, 12 Rules)
- Reduced manual effort in maintaining docs

## [4.0.2] - 2026-02-02
### Added
- **Feature**: Automatic Error Logging System - AI tracks all errors to `ERRORS.md` for learning
- **Rule**: New `error-logging.md` rule that auto-captures errors during development
- **Workflow**: New `/log-error` workflow for systematic error tracking
- **File**: `ERRORS.md` central error repository with statistics and prevention tips
- **Test**: Error logging test suite to verify the tracking system

### Changed
- Updated `RULES_GUIDE.vi.md` with error-logging rule
- Updated `WORKFLOW_GUIDE.vi.md` with /log-error workflow
- Enhanced AI's ability to learn from mistakes and prevent recurring errors

## [4.0.1] - 2026-02-02
### Added
- **Security**: New `malware-analyst` skill for threat intelligence and malicious URL scanning.
- **Security**: New `malware-protection.md` rule to prevent malware infiltration and link safety.
- **Feature**: Auto-update functionality via chat - AI can check NPM version and offer to upgrade.
- **Workflow**: New `/update` workflow for checking and updating Antigravity IDE.
- **Rule**: New `system-update.md` rule that triggers on version-related queries.
- **Tool**: `link_checker.py` script for automated URL security scanning.

### Changed
- Updated all documentation to reflect new security and update features.
- Enhanced `README.vi.md` with security and auto-update capabilities.
- Updated skill and workflow counts (27 Skills, 18 Workflows).

## [3.5.54] - 2026-01-31
- **Optimization**: Significantly reduced NPM package size (excluded `docs/`, `tests/`).
- **Automation**: Implemented GitHub Actions for auto-publishing with Provenance.
- **Fixes**: Sync `package-lock.json` and `.npmignore` for stable CI builds.
- **Docs**: Updated internal guides and verified asset counts.

## [3.5.30] - 2026-01-30
- **Feature**: Added "Copy-Paste Prompts" for AI Delegation in Setup Wizard.
- **Feature**: Smart Python detection and installation guidance.
- **Docs**: Renamed `GEMINI.md` to `GEMINI_GUIDE.md` for clarity.

## [3.5.29] - 2026-01-29
### Added
- **Workflow**: `/audit` for comprehensive quality checks.
- **Workflow**: `/onboard` for team integration.
- **Workflow**: `/document` for automated documentation generation.
- **Workflow**: `/monitor` for system health tracking.
- **Workflow**: `/security` and `/seo` for domain-specific tasks.

### Changed
- **CLI**: Enhanced `prompts.js` with dynamic workflow mapping based on industry.
- **Setup**: Improved "Engine Mode" selection (Standard vs Advanced) with language support.
