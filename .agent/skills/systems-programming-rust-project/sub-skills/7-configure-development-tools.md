# 7. Configure Development Tools

**Makefile**:
```makefile
.PHONY: build test lint fmt run clean bench

build:
	cargo build

test:
	cargo test

lint:
	cargo clippy -- -D warnings

fmt:
	cargo fmt --check

run:
	cargo run

clean:
	cargo clean

bench:
	cargo bench
```

**rustfmt.toml**:
```toml
edition = "2021"
max_width = 100
tab_spaces = 4
use_small_heuristics = "Max"
```

**clippy.toml**:
```toml
cognitive-complexity-threshold = 30
```

## Output Format

1. **Project Structure**: Complete directory tree with idiomatic Rust organization
2. **Configuration**: Cargo.toml with dependencies and build settings
3. **Entry Point**: main.rs or lib.rs with proper documentation
4. **Tests**: Unit and integration test structure
5. **Documentation**: README and code documentation
6. **Development Tools**: Makefile, clippy/rustfmt configs

Focus on creating idiomatic Rust projects with strong type safety, proper error handling, and comprehensive testing setup.