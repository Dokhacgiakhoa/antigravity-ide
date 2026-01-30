# Using Antigravity IDE with Google Gemini

**All 550+ skills are fully compatible with Google Gemini AI!**

## Why Antigravity IDE + Gemini?

### 🎯 **Perfect Synergy**

| Feature | Benefit for Gemini |
|---------|-------------------|
| **550+ Skills** | Instant expertise in 8 domains |
| **Universal Format** | No vendor lock-in, works with any Gemini model |
| **Large Context** | Gemini 1.5 Pro (2M tokens) loads multiple skills easily |
| **Multimodal Support** | Skills cover text, vision, audio - all Gemini capabilities |
| **Production-Tested** | Battle-tested with Claude/GPT, validated for Gemini |

---

## 🚀 Quick Start

### 1. Create Project

```bash
npx antigravity-ide my-gemini-agent
```

### 2. Configure for Gemini

```javascript
// .agent/config.js
export default {
  model: {
    provider: "google",
    name: "gemini-2.0-flash-exp",
    apiKey: process.env.GEMINI_API_KEY
  },
  skills: {
    loadFrom: ".agent/skills",
    categories: ["ai", "development", "data"]
  }
}
```

### 3. Use Skills in Code

```javascript
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Load skills
const skills = fs.readdirSync(".agent/skills")
  .map(dir => fs.readFileSync(`.agent/skills/${dir}/SKILL.md`, "utf-8"))
  .join("\n\n---\n\n");

const model = genAI.getGenerativeModel({ 
  model: "gemini-2.0-flash-exp",
  systemInstruction: `You are an AI agent with these skills:\n\n${skills}`
});

// Chat with skills!
const chat = model.startChat();
const result = await chat.sendMessage("Build a RAG system with TypeScript");
```

---

## 📁 Resource Inheritance (NEW)

This workspace is **Global-Powered**. Do not repeat standard rules/skills in local files.
1.  **Primary Source**: `~/.antigravity/` (Global Master Skills & Rules)
2.  **Secondary Source**: `.agent/` (Project-specific Overrides only)

If a workflow/skill is found in Global, use it as the default.

## 🧠 Recommended Skills for Gemini

### Core AI Skills

| Skill | Best For | Why for Gemini? |
|-------|----------|----------------|
| `ai-engineer` | LLM apps, RAG systems | Gemini-specific patterns |
| `prompt-engineer` | Prompt optimization | Leverage Gemini's reasoning |
| `rag-engineer` | Vector search, embeddings | Use Gemini's large context |
| `langchain-architecture` | Agent frameworks | LangChain supports Gemini |
| `agent-orchestration` | Multi-agent systems | Gemini Experimental 1206 |

### Development Skills

| Skill | Use Case |
|-------|----------|
| `nextjs-react-expert` | Frontend with structured outputs |
| `typescript-pro` | Type-safe Gemini SDK usage |
| `fastapi-pro` | Backend API for Gemini |
| `python-pro` | Gemini Python SDK |

### Data & Analytics

| Skill | Use Case |
|-------|----------|
| `data-engineer` | Process data for Gemini |
| `database-architect` | Design data stores |
| `vector-database-engineer` | Embeddings + Gemini |

---

## 📊 Skill Categories Breakdown

```
Total: 550+ skills across 8 categories

Development (180+ skills)
├── Frontend (React, Next.js, Vue, Svelte)
├── Backend (Node.js, Python, Go, Rust)
├── Mobile (React Native, Flutter, iOS, Android)
└── Full-Stack

Infrastructure (90+ skills)
├── Cloud (AWS, Azure, GCP)
├── Kubernetes & Containers
├── CI/CD & GitOps
└── IaC (Terraform, CDK)

Database (60+ skills)
├── SQL (PostgreSQL, MySQL)
├── NoSQL (MongoDB, Redis)
├── Vector DBs (Pinecone, Qdrant)
└── Data Engineering

AI & ML (70+ skills) ⭐ Perfect for Gemini!
├── LLM Applications
├── RAG Engineering
├── Prompt Engineering
├── Agent Orchestration
└── ML Pipeline

Security (80+ skills)
├── Penetration Testing
├── Security Auditing
├── Vulnerability Scanning
└── Compliance

Design (40+ skills)
├── UI/UX Patterns
├── Mobile Design
├── Accessibility
└── Design Systems

Business (20+ skills)
├── SEO & Marketing
├── Product Management
├── Startup Analysis
└── Content Strategy

Tools (10+ skills)
├── Automation
├── CLI Development
└── DevOps Tools
```

---

## 🎓 Learning Path: Gemini + Skills

### Beginner (Week 1)
1. Load `clean-code` skill
2. Load `ai-engineer` skill
3. Build simple chatbot with Gemini

### Intermediate (Week 2-3)
1. Add `rag-engineer` skill
2. Build knowledge base with Gemini + vector DB
3. Use `prompt-engineer` to optimize

### Advanced (Week 4+)
1. Load `agent-orchestration` + `langgraph`
2. Build multi-agent system
3. Deploy with `deployment-engineer` skill

---

## 💡 Best Practices

### Skill Loading Strategy

**Option 1: Load All (Gemini Pro)**
```javascript
// Gemini 1.5 Pro has 2M token context
// Can load ALL 550 skills!
const allSkills = loadAllSkills(".agent/skills");
```

**Option 2: Selective (Gemini Flash)**
```javascript
// Gemini 2.0 Flash - load specific categories
const skills = loadSkills(".agent/skills", {
  categories: ["ai", "development", "data"]
});
```

**Option 3: Dynamic (Best)**
```javascript
// Load skills based on task
function loadRelevantSkills(task) {
  if (task.includes("RAG")) return ["rag-engineer", "database-architect"];
  if (task.includes("frontend")) return ["nextjs-react-expert", "typescript-pro"];
  // ...
}
```

### Performance Tips

1. **Cache Loaded Skills** - Don't reload on every request
2. **Use Gemini Flash** - For most tasks, Flash is enough
3. **Selective Loading** - Load only needed skill categories
4. **Structured Outputs** - Use Gemini's JSON mode with skills

---

## 🔧 Troubleshooting

### Issue: "Gemini doesn't follow skill instructions"

**Solution:** Use structured prompts
```javascript
const prompt = `
Task: ${userTask}
Available Skills: ${skillNames.join(", ")}
Instructions: Use the [skill-name] skill to complete this task.

Apply best practices from the loaded skills.
`;
```

### Issue: "Context too long"

**Solution:** Use skill categorization
```javascript
// Load only relevant categories
const categories = detectCategories(userTask);
const skills = loadSkillsByCategory(categories);
```

### Issue: "Skills conflict"

**Solution:** Prioritize skills
```javascript
// Load skills in priority order
const skills = [
  "clean-code",        // Base principles
  "ai-engineer",       // Core AI skill
  "specific-skill"     // Task-specific
];
```

---

## 📚 Resources

- **All Skills**: See [SKILLS.md](./SKILLS.md)
- **Skill Source**: [antigravity-awesome-skills](https://github.com/Dokhacgiakhoa/google-antigravity)
- **Gemini Docs**: [Google AI Studio](https://ai.google.dev/)
- **Examples**: Check `/lab` directory

---

## 🎯 Example: RAG with Gemini + Skills

```javascript
import { GoogleGenerativeAI } from "@google/generative-ai";
import { loadSkill } from "./utils/skillLoader.js";

// Load relevant skills
const ragSkill = loadSkill("rag-engineer");
const dbSkill = loadSkill("database-architect");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ 
  model: "gemini-1.5-pro",
  systemInstruction: `${ragSkill}\n\n${dbSkill}\n\nYou are a RAG expert.`
});

// Now Gemini can build production RAG systems!
const result = await model.generateContent(
  "Design a RAG system for 100M documents with hybrid search"
);

console.log(result.response.text());
```

---

**Ready to build with Gemini + 550 skills? Let's go! 🚀**
