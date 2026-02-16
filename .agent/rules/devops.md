---
trigger: glob
glob: "**/dockerfile,**/docker-compose.yml,**/.github/workflows/*.yml,**/jenkinsfile,**/terraform/**/*,**/k8s/**/*"
---

# DEVOPS.MD - Deployment & Infrastructure Mastery

> **Mục tiêu**: Tự động hóa tối đa, triển khai an toàn và hạ tầng có khả năng mở rộng (Scalability).

## 🚀 1. CONTAINERIZATION (DOCKER)
1. **Multi-stage Builds**: Giảm thiểu kích thước Image bằng cách chỉ giữ lại Artifact cuối cùng.
2. **Non-root User**: Chạy ứng dụng dưới quyền user thường để đảm bảo bảo mật.
3. **Environment**: Dùng `.env` và không bao giờ hardcode cấu hình vào Image.

## 🛠️ 2. CI/CD PIPELINE
1. **Automated Testing**: Pipeline phải chạy Unit Test, Integration Test trước khi Build.
2. **Security Scan**: Tích hợp các công cụ quét mã độc (Snyk, Trivy) vào pipeline.
3. **Zero-downtime**: Triển khai theo chiến lược Canary hoặc Blue/Green.

## 🏗️ 3. INFRASTRUCTURE AS CODE (IaC)
1. **Declarative**: Ưu tiên Terraform hoặc CloudFormation.
2. **State Management**: Quản lý State tập trung (Remote State) và có khóa (Locking).
3. **Modularity**: Chia nhỏ hạ tầng thành các Module tái sử dụng.
