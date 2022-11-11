import csv


class Friend:
    def __init__(self, name, quality, value):
        self._name = name
        self._quality = quality
        self._value = value

    @property
    def name(self):
        return self._name

    @property
    def value(self):
        return self._value * self.evaluate_quality(self._quality)

    @property
    def quality(self):
        return self._quality

    @staticmethod
    def evaluate_quality(quality):
        if quality == "bello":
            return 6
        elif quality == "intelligente":
            return 7
        elif quality == "giovane":
            return 5
        elif quality == "ricco":
            return 4
        elif quality == "muscoloso":
            return 8
        else:
            return 0


def main():
    friends = [
        Friend("Stefano Ricevuto", "bello", 8),
        Friend("Stefano Strano", "intelligente", 7),
        Friend("Pietro Parcheggiatore", "giovane", 5),
        Friend("Tonio Rigido", "ricco", 4),
        Friend("Bruce Striscione", "muscoloso", 8),
    ]

    fields = ["Name", "Quality", "Friendship"]

    with open("bff.csv", "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fields, dialect="excel")
        writer.writeheader()

        for f in friends:
            writer.writerow(
                {
                    fields[0]: f.name,
                    fields[1]: f.quality,
                    fields[2]: f.value,
                }
            )


if __name__ == "__main__":
    main()
