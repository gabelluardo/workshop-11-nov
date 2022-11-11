def main():
    cnt = 0

    with open("dante.txt", "r") as f:
        for line in f.readlines():
            words = line.split(" ")
            for w in words:
                cnt += w.lower().count("c")

    print(cnt)


if __name__ == "__main__":
    main()
