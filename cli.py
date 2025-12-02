import sys
from solaros.apps import sysinfo, editor, clock, player, secrets

class SolarCLI:
    def __init__(self):
        self.running = True

    def start(self):
        while self.running:
            cmd = input("SOLAR-CMD> ").strip().split()
            if not cmd:
                continue

            command, *args = cmd

            if command == "help":
                self.help()
            elif command == "sysinfo":
                sysinfo.run()
            elif command == "edit":
                editor.run(args)
            elif command == "clock":
                clock.run()
            elif command == "player":
                player.run(args)
            elif command == "secret":
                secrets.run()
            elif command == "shutdown":
                print("Shutting down SolarOS...")
                self.running = False
            elif command == "about":
                print("SolarOS 3.0 X (2009) — Retro simulation OS")
            else:
                print(f"Unknown command: {command}")

    def help(self):
        print("""
Available commands:
  help        - Show this help screen
  sysinfo     - System information
  edit <file> - Edit a text file
  clock       - Live digital clock
  player <f>  - Fake media player
  secret      - ???
  shutdown    - Exit SolarOS

SolarOS (c) 2009 — Simulation Edition
""")
