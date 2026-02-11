# 3. Generate Binary Project Structure

```
binary-project/
├── Cargo.toml
├── README.md
├── src/
│   ├── main.rs
│   ├── config.rs
│   ├── cli.rs
│   ├── commands/
│   │   ├── mod.rs
│   │   ├── init.rs
│   │   └── run.rs
│   ├── error.rs
│   └── lib.rs
├── tests/
│   ├── integration_test.rs
│   └── common/
│       └── mod.rs
├── benches/
│   └── benchmark.rs
└── examples/
    └── basic_usage.rs
```

**Cargo.toml**:
```toml
[package]
name = "project-name"
version = "0.1.0"
edition = "2021"
rust-version = "1.75"
authors = ["Your Name <email@example.com>"]
description = "Project description"
license = "MIT OR Apache-2.0"
repository = "https://github.com/user/project-name"

[dependencies]
clap = { version = "4.5", features = ["derive"] }
tokio = { version = "1.36", features = ["full"] }
anyhow = "1.0"
serde = { version = "1.0", features = ["derive"] }
serde_json = "1.0"

[dev-dependencies]
criterion = "0.5"

[[bench]]
name = "benchmark"
harness = false

[profile.release]
opt-level = 3
lto = true
codegen-units = 1
```

**src/main.rs**:
```rust
use anyhow::Result;
use clap::Parser;

mod cli;
mod commands;
mod config;
mod error;

use cli::Cli;

#[tokio::main]
async fn main() -> Result<()> {
    let cli = Cli::parse();

    match cli.command {
        cli::Commands::Init(args) => commands::init::execute(args).await?,
        cli::Commands::Run(args) => commands::run::execute(args).await?,
    }

    Ok(())
}
```

**src/cli.rs**:
```rust
use clap::{Parser, Subcommand};

#[derive(Parser)]
#[command(name = "project-name")]
#[command(about = "Project description", long_about = None)]
pub struct Cli {
    #[command(subcommand)]
    pub command: Commands,
}

#[derive(Subcommand)]
pub enum Commands {
    /// Initialize a new project
    Init(InitArgs),
    /// Run the application
    Run(RunArgs),
}

#[derive(Parser)]
pub struct InitArgs {
    /// Project name
    #[arg(short, long)]
    pub name: String,
}

#[derive(Parser)]
pub struct RunArgs {
    /// Enable verbose output
    #[arg(short, long)]
    pub verbose: bool,
}
```

**src/error.rs**:
```rust
use std::fmt;

#[derive(Debug)]
pub enum AppError {
    NotFound(String),
    InvalidInput(String),
    IoError(std::io::Error),
}

impl fmt::Display for AppError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match self {
            AppError::NotFound(msg) => write!(f, "Not found: {}", msg),
            AppError::InvalidInput(msg) => write!(f, "Invalid input: {}", msg),
            AppError::IoError(e) => write!(f, "IO error: {}", e),
        }
    }
}

impl std::error::Error for AppError {}

pub type Result<T> = std::result::Result<T, AppError>;
```