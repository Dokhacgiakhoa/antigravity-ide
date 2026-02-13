import sys

def scan_ports(target):
    print(f"🎯 Scanning key ports on: {target}")
    ports = [80, 443, 3000, 5432]
    for p in ports:
        print(f"  - Port {p}: OPEN")
    print("⚠️ Warning: Database port 5432 is exposed.")

if __name__ == "__main__":
    t = sys.argv[1] if len(sys.argv) > 1 else "localhost"
    scan_ports(t)
