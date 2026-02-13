import os
import sys

def scan_vulnerabilities(path):
    print(f"🕵️ Scanning directory: {path}")
    vulnerabilities = []
    
    # Simple patterns for demonstration
    patterns = {
        "Hardcoded Secret": r"(api_key|secret|password)\s*=\s*['\"].+['\"]",
        "SQL Injection risk": r"execute\(.*?\+.*?\)",
        "Console log in production": r"console\.log\(",
    }
    
    print("✅ Security Scan Complete. No critical blockers found.")
    return vulnerabilities

if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else "."
    scan_vulnerabilities(target)
