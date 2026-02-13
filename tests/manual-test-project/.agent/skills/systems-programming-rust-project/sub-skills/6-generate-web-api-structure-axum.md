# 6. Generate Web API Structure (Axum)

```
web-api/
├── Cargo.toml
├── src/
│   ├── main.rs
│   ├── routes/
│   │   ├── mod.rs
│   │   ├── users.rs
│   │   └── health.rs
│   ├── handlers/
│   │   ├── mod.rs
│   │   └── user_handler.rs
│   ├── models/
│   │   ├── mod.rs
│   │   └── user.rs
│   ├── services/
│   │   ├── mod.rs
│   │   └── user_service.rs
│   ├── middleware/
│   │   ├── mod.rs
│   │   └── auth.rs
│   └── error.rs
└── tests/
    └── api_tests.rs
```

**Cargo.toml for Web API**:
```toml
[package]
name = "web-api"
version = "0.1.0"
edition = "2021"

[dependencies]
axum = "0.7"
tokio = { version = "1.36", features = ["full"] }
tower = "0.4"
tower-http = { version = "0.5", features = ["trace", "cors"] }
serde = { version = "1.0", features = ["derive"] }
serde_json = "1.0"
sqlx = { version = "0.7", features = ["runtime-tokio-native-tls", "postgres"] }
tracing = "0.1"
tracing-subscriber = "0.3"
```

**src/main.rs (Axum)**:
```rust
use axum::{Router, routing::get};
use tower_http::cors::CorsLayer;
use std::net::SocketAddr;

mod routes;
mod handlers;
mod models;
mod services;
mod error;

#[tokio::main]
async fn main() {
    tracing_subscriber::fmt::init();

    let app = Router::new()
        .route("/health", get(routes::health::health_check))
        .nest("/api/users", routes::users::router())
        .layer(CorsLayer::permissive());

    let addr = SocketAddr::from(([0, 0, 0, 0], 3000));
    tracing::info!("Listening on {}", addr);

    let listener = tokio::net::TcpListener::bind(addr).await.unwrap();
    axum::serve(listener, app).await.unwrap();
}
```