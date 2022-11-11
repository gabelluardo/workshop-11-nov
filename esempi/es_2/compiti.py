import os

def main():
    os.makedirs("compiti", exist_ok=True)
    
    for i in range(20):
        with open(f"compiti/{i}.txt", "w") as f:
            f.write(f"ciao file {i}")

if __name__ == "__main__":
    main()
