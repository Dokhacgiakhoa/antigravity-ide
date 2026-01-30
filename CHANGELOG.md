# Changelog

All notable changes to this project will be documented in this file.

## [3.5.29] - 2026-01-29

### Documentation
- **License**: Updated `LICENSE` to properly reflect project ownership and compliance.

## [3.5.28] - 2026-01-29

### Documentation
- **License**: Standardized the `LICENSE` file to a single clean MIT License under "Dokhacgiakhoa", removing legacy third-party attribution blocks to streamline the project identity.

## [3.5.27] - 2026-01-29

### Improved
- **Verification**: Enforced the "13 Shared Modules" by explicitly listing them in the `GEMINI.md` auto-active rules. The AI is now strictly instructed to respect these standards (API, DB, Security, etc.) upon activation.

## [3.5.26] - 2026-01-29

### Improved
- **Stats Accuracy**: Updated statistics to show "13 Shared Modules" (referencing the `.agent/.shared` directory) instead of broad ecosystem estimates, strictly adhering to physical file counts.

## [3.5.25] - 2026-01-29

### Improved
- **Accuracy**: Refined statistics to "100+ Technologies" (from 150+ Libraries) to provide a more conservative and verifiable count of the supported tech stack ecosystem.

## [3.5.24] - 2026-01-29

### Improved
- **Terminology**: Changed "Tech Stacks" to "Libraries" (Thư viện) in statistics to be more precise and aligned with user expectations.

## [3.5.23] - 2026-01-29

### Improved
- **Stats Transparency**: Added "150+ Tech Stacks" (covering FE/DB/DevOps libraries) to README and CLI stats, giving users a complete picture of the supported ecosystem.

## [3.5.22] - 2026-01-29

### Improved
- **CLI Experience**: The success message now displays the project's vital statistics (20+ Master Skills, 15+ Agents, 11 Workflows) to give users immediate feedback on what was installed.

## [3.5.21] - 2026-01-29

### Documentation
- **Accuracy**: Updated README statistics to reflect the actual physical count of modules (20+ Master Skills, 15+ Agents, 11 Workflows) instead of the total capability count, ensuring transparency.

## [3.5.20] - 2026-01-29

### Documentation
- **Showcase**: Added a "Vital Statistics" table to the README header to immediately highlight the scale of the library (550+ Skills, 30+ Rules, 12+ Workflows).

## [3.5.19] - 2026-01-29

### Improved
- **User Flow**: Optimized the CLI setup by removing the 'Custom' industry option. The 'Other' option now serves as the universal choice for general projects, streamlining the experience.

## [3.5.18] - 2026-01-29

### Documentation
- **Strategic Cleanup**: Removed low-level API implementation details from README to maintain "Agent-First" high-level overview. Implementation guides moved to `GEMINI.md`.

## [3.5.17] - 2026-01-29

### Documentation
- **Clarification**: Updated Gemini integration section to explicit tutorial format (Install SDK -> Create Script), removing potential confusion about pre-installed dependencies.
- **Cleanup**: Fixed code block formatting issues.

## [3.5.16] - 2026-01-29

### Documentation
- **Clarification**: Updated Gemini integration section to explicitly show it requires `npm install @google/generative-ai`. (Addressed user feedback).

## [3.5.15] - 2026-01-29

### Documentation
- **Accuracy Fix**: Removed "Project Name" step from READMEs (CLI automates this).
- **Polish**: Fixed duplicate footers and inconsistency in project structure diagrams.

## [3.5.14] - 2026-01-29

### Documentation
- **Full Root Polish**: Updated all root markdown files (`AGENT_FLOW`, `DEPLOYMENT`, `GEMINI`) to match the v3.5 standard.
- **Branding**: Unified project name as "Google Antigravity" across all docs.

## [3.5.13] - 2026-01-29

### Fixed
- **Broken Links**: Removed specific MIT License references from `README` files to prevent broken links in generated projects (where `LICENSE` file is not included).

## [3.5.12] - 2026-01-29

### Documentation
- **Accuracy Update**: Refined READMEs (En/Vi) to accurately reflect the new CLI workflow (Smart Install & Industry Prioritization).
- **Cleanup**: Removed obsolete headers and scripts.

## [3.5.11] - 2026-01-29

### Improved
- **Industry First**: When selecting an Industry Domain (Finance, Education, etc.), the CLI now installs **all available skills** ("tải đầy đủ") but automatically configures the Agent's `GEMINI.md` to prioritizing that specific domain as its primary focus.
- **Engine Optimization**: refined Standard vs Advanced filtering logic.

## [3.5.10] - 2026-01-29

### Improved
- **Smart Filtering**: Added intelligent file filtering based on "Agent Engine" selection.
  - **Standard Mode (Node.js)**: Automatically excludes Python files (`.py`, `requirements.txt`) to keep the project lightweight.
  - **Advanced Mode**: Included everything for full AI/Data Science capabilities.

## [3.5.9] - 2026-01-29

### Fixed
- **Missing Files**: Fixed an issue where the `.agent` directory was incompletely copied to new projects. Now ensures all subdirectories (core, rules, scripts, etc.) are transferred correctly.

## [3.5.8] - 2026-01-29

### Improved
- **Smart Installation**: Running `npx antigravity-ide` without arguments now automatically detects the current directory context.
  - If you provide a name (`npx antigravity-ide my-app`), it creates a new folder.
  - If you don't (`npx antigravity-ide`), it installs directly into the current folder without asking for a name.

## [3.5.7] - 2026-01-29

### Changed
- **CLI Architecture**: Removed the `create` subcommand entirely. The root command `npx antigravity-ide` now handles project creation directly.
- **Simplification**: Arguments (like project name) and options (like `--skip-prompts`) are now passed directly to the main command.

## [3.5.6] - 2026-01-29

### Documentation
- **Consistency**: Updated `PUBLISHING.md` and `MASTER_GUIDE.md` to reflect the new `npx antigravity-ide` command usage.
- **Accuracy**: Removed outdated references to `google-antigravity` and `antigravity-setup` commands.

## [3.5.5] - 2026-01-29

### Changed
- **CLI**: Executing `npx antigravity-ide` without arguments now defaults to the interactive Project Setup Wizard, simplifying the onboarding process.

## [3.5.4] - 2026-01-29

### Fixed
- **Visuals**: Updated CLI banner to dynamically display the installed package version instead of hardcoded v1.0.0.

## [3.5.3] - 2026-01-29

### Added
- **Industry Domains**: New Project Setup Wizard element allowing users to select their industry (Finance, Education, F&B, etc.) to automatically configure the most relevant skills.
- **Agent Engine Selection**: Users can now choose between **Standard (Node.js)** and **Advanced (Python)** modes during setup.
- **Skill Mapping**: Updated CLI to use production-ready skill names (`modern-web-architect`, `cro-expert-kit`, etc.) instead of placeholders.

### Changed
- **UX**: Simplified the setup flow. Technical details (template, rules, workflows) are now hidden behind the "Custom" option, making the tool much friendlier for non-technical users.

## [3.5.2] - 2026-01-29

### Fixed
- **Critical**: Fixed issue where `.agent` folder was excluded from npm package, causing `create` command to generate projects with empty agent configuration.
- **CLI**: Added validation warning when source skills directory is missing.
- **Cleanup**: Excluded `LICENSE` and `COPYRIGHT.md` from being copied to new projects (they remain in the package for compliance but are not injected into user code).

## [3.5.1] - 2026-01-29

### Added
- **New Interactive CLI**: Completely revamped project creation experience (`antigravity create`).
- **Bilingual Support**: Full support for English (`en`) and Vietnamese (`vi`) interfaces.
- **Dynamic Prompts**: Smart context-aware prompts based on selected language.
- **Skills Selection**: Granular selection of skill categories (Web, Mobile, DevOps, AI, etc.).
- **Workflows Integration**: Interactive selection of workflows (Git, Testing, CI/CD).
- **Beautiful UI**: Gradient banners, spinners, and clear success messages.
- **Robust Error Handling**: Safe cancellation and error reporting.

### Changed
- **Banner**: Updated to 'AntiGravity' Slant ASCII art for better readability.
- **Core Structure**: Improved project scaffolding logic.

## [1.0.0] - Initial Release
- Basic setup and update scripts.
- Core Agent Rules and Skills structure.
