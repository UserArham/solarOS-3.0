import time
import os

def boot_sequence(version):
    os.system('cls' if os.name == 'nt' else 'clear')
    print("SolarOS 3.0 X — Booting...\n")
    steps = [
        "Initializing core modules...",
        "Loading kernel v2.7-r5...",
        "Mounting filesystem...",
        "Checking memory...",
        "Starting SolarX Interface...",
        f"Boot complete — SolarOS {version}"
    ]
    for s in steps:
        print(s)
        time.sleep(0.3)
    print("\nType 'help' to begin.\n")
