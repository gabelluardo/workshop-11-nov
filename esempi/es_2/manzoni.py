def main():
    renzo = 0
    lucia = 0

    with open("promessi_sposi.txt", "r") as f:
        for line in f.readlines():
            words = line.split(" ")
            for w in words:
                renzo += w.lower().count("renzo")
                lucia += w.lower().count("lucia")

    print(f"Renzo: {renzo}, Lucia: {lucia}")


if __name__ == "__main__":
    main()
