# 🧪 Antigravity IDE — Test Suite

## Cấu trúc thư mục

```
tests/
├── helpers/                     # Shared utilities (parser, constants)
│   └── frontmatter.js           # Frontmatter parser + DIR constants
│
├── cli/                         # Unit tests cho CLI functions
│   ├── auto-update.test.js      # checkAndApplyUpdates
│   ├── create.test.js           # generateGeminiMd
│   ├── create-functions.test.js # Edge cases cho create helpers
│   ├── manifest.test.js         # Manifest structure & validation
│   ├── parameterized.test.js    # Cross-product EN×VI × strictness × industry
│   └── prompts.test.js          # getSkillsForCategories
│
├── integrity/                   # Integrity tests — kiểm tra tài nguyên hệ thống
│   ├── agents.test.js           # 42 agents: frontmatter, existence
│   ├── skills.test.js           # 105 skills: SKILL.md existence, orphans
│   ├── rules.test.js            # 19 rules: frontmatter validity
│   ├── workflows.test.js        # 21 workflows: frontmatter validity
│   ├── shared-modules.test.js   # 17 shared: structure validation
│   ├── core.test.js             # Core files: format, parse
│   ├── scripts.test.js          # 8 scripts: syntax validation
│   ├── linkage.test.js          # Cross-resource linkage (agent→skill, manifest→disk)
│   └── resources-completeness.test.js  # Full resource audit
│
├── e2e/                         # End-to-end tests
│   └── stress.test.js           # Full project creation (10 scenarios)
│
├── setup.test.js                # setup.js validity
├── update.test.js               # syncRecursively logic
├── verify-setup-flow.test.js    # getProjectConfig scenarios
└── verify-install.js            # CLI install verification (manual)
```

## Cách chạy

```bash
# Toàn bộ test suite
npm test

# Chỉ integrity tests
npx jest tests/integrity/

# Chỉ CLI unit tests
npx jest tests/cli/

# Chỉ 1 file cụ thể
npx jest tests/integrity/rules.test.js

# Verbose mode
npx jest --verbose --no-coverage
```

## Quy ước mở rộng

1. **Thêm resource mới** (agent/skill/rule/workflow):
   - Không cần tạo test mới — integrity tests tự quét disk
   
2. **Thêm loại resource mới**:
   - Tạo file `tests/integrity/<resource-type>.test.js`
   - Import helper từ `../helpers/frontmatter`
   
3. **Thêm CLI function mới**:
   - Tạo file `tests/cli/<function-name>.test.js`

4. **Mỗi test file chỉ test 1 concern**:
   - Integrity tests: kiểm tra tài nguyên trên disk
   - CLI tests: kiểm tra logic functions
   - E2E tests: kiểm tra flow end-to-end
