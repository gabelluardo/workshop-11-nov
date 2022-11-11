class Pen:
    def __init__(self, ink, color, style, trademark="Mattel"):
        self._ink = ink
        self._color = color
        self._style = style
        self._trademark = trademark
        self._top = True

    def __str__(self):
        return f"{self._color} {self.style} - {self.trademark}\n\tlivello inchiosto: {self.ink}"

    @property
    def ink(self):
        return self._ink

    @property
    def style(self):
        return self._style

    @property
    def trademark(self):
        return self._trademark

    def write(self, text):
        if self._color == "red":
            head = "\033[91m"
        elif self._color == "blue":
            head = "\033[96m"
        else:
            head = "\033[98m"

        tail = "\033[00m"

        if not self._top and self._ink > len(text):
            print(f"{head}{text}{tail}")

            self._ink -= len(text)

    def tap(self):
        print("Tip tap tip tap")

    def plug(self):
        self._top = True

    def unplug(self):
        self._top = False


def main():
    p = Pen(100, "red", "biro")

    p.write("ciao")
    p.unplug()
    p.write("ciao")

    print(p)

    pp = Pen(50, "blue", "stylo")

    pp.unplug()
    pp.write("ciao, ma in blu")
    print(pp)


if __name__ == "__main__":
    main()
