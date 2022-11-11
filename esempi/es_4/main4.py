import csv


class Friend:
    def __init__(self, name, quality, value):
        self._name = name
        self._quality = quality
        self._value = value

    def __str__(self) -> str:
        return f"{self._name}, {self._quality}, {self._value}"

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
    friends = []
    fields = ["Name", "Quality", "Friendship"]

    with open("bff.csv", "r", newline="") as f:
        # skip header line
        f.readline()

        reader = csv.DictReader(f, fieldnames=fields, dialect="excel")

        for f in reader:
            friends.append(
                Friend(
                    f["Name"],
                    f["Quality"],
                    float(f["Friendship"]) / Friend.evaluate_quality(f["Quality"]),
                )
            )

    for f in friends:
        print(f)


if __name__ == "__main__":
    main()
