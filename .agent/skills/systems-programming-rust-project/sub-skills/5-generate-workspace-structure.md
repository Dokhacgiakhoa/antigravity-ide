# 5. Generate Workspace Structure

```
workspace/
├── Cargo.toml
├── .gitignore
├── crates/
│   ├── api/
│   │   ├── Cargo.toml
│   │   └── src/
│   │       └── lib.rs
│   ├── core/
│   │   ├── Cargo.toml
│   │   └── src/
│   │       └── lib.rs
│   └── cli/
│       ├── Cargo.toml
│       └── src/
│           └── main.rs
└── tests/
    └── integration_test.rs
```

**Cargo.toml (workspace root)**:
```toml
[workspace]
members = [
    "crates/api",
    "crates/core",
    "crates/cli",
]
resolver = "2"

[workspace.package]
version = "0.1.0"
edition = "2021"
rust-version = "1.75"
authors = ["Your Name <email@example.com>"]
license = "MIT OR Apache-2.0"

[workspace.dependencies]
tokio = { version = "1.36", features = ["full"] }
serde = { version = "1.0", features = ["derive"] }

[profile.release]
opt-level = 3
lto = true
```