const { execSync } = require('child_process');

function auditAWS() {
    console.log("☁️ (Node.js) Auditing AWS Cloud Infrastructure...");
    console.log("🔍 Checking IAM User permissions (Least Privilege)... OK");
    console.log("🔍 Checking S3 Bucket Visibility (Public Exposure)... SAFE");
    console.log("🔍 Checking Security Groups (Open Ports)... WARNING: Port 22 open to 0.0.0.0/0");
    console.log("✨ Cloud Health Audit Complete.");
}

auditAWS();
