# 4. Generate Library Project Structure

```
library-name/
├── Cargo.toml
├── README.md
├── src/
│   ├── lib.rs
│   ├── core.rs
│   ├── utils.rs
│   └── error.rs
├── tests/
│   └── integration_test.rs
└── examples/
    └── basic.rs
```

**Cargo.toml for Library**:
```toml
[package]
name = "library-name"
version = "0.1.0"
edition = "2021"
rust-version = "1.75"

[dependencies]
# Keep minimal for libraries

[dev-dependencies]
tokio-test = "0.4"

[lib]
name = "library_name"
path = "src/lib.rs"
```

**src/lib.rs**:
```rust
//! Library documentation
//!
//! # Examples
//!
//! ```
//! use library_name::core::CoreType;
//!
//! let instance = CoreType::new();
//! ```

pub mod core;
pub mod error;
pub mod utils;

pub use core::CoreType;
pub use error::{Error, Result};

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
```