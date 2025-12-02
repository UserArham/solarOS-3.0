import time

def run():
    print("Press Ctrl+C to exit clock.\n")
    try:
        while True:
            print("TIME:", time.strftime("%H:%M:%S"), end="\r")
            time.sleep(1)
    except KeyboardInterrupt:
        print("\nClock closed.")
