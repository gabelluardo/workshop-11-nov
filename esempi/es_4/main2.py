import csv


def main():
    names = [
        "Stefano Ricevuto",
        "Stefano Strano",
        "Pietro Parcheggiatore",
        "Tonio Rigido",
        "Bruce Striscione",
    ]
    quality = [
        ("bello", 6),
        ("intelligente", 7),
        ("giovane", 5),
        ("ricco", 4),
        ("muscoloso", 8),
    ]
    value = [8, 7, 7.5, 8, 9]

    fields = ["Name", "Quality", "Friendship"]

    with open("bff.csv", "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fields, dialect="excel")

        # scrive l'header dei campi nel file excel
        writer.writeheader()

        for i, name in enumerate(names):
            writer.writerow(
                {
                    fields[0]: name,
                    fields[1]: quality[i][0],
                    fields[2]: quality[i][1] * value[i],
                }
            )


if __name__ == "__main__":
    main()
