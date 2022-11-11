def main():
    total_words = dict()

    with open("promessi_sposi.txt", "r") as f:
        for line in f.readlines():
            words = line.split(" ")
            for w in words:
                filtered = list(filter(lambda x: x.isalpha(), w.lower()))

                if len(filtered) > 0:
                    word = "".join(filtered)

                if word in total_words:
                    total_words[word] += 1
                else:
                    total_words.update({word: 1})

    print(dict(sorted(total_words.items(), key=lambda item: item[1])))


if __name__ == "__main__":
    main()
