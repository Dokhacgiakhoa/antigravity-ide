# Step 1: Install Docker

**macOS:**
\`\`\`bash
brew install --cask docker
# Or download Docker Desktop from docker.com
\`\`\`

**Linux:**
\`\`\`bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Add user to docker group
sudo usermod -aG docker $USER
newgrp docker
\`\`\`

**Windows:**
Download Docker Desktop from docker.com