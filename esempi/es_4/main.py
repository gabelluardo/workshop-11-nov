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

    for i, name in enumerate(names):
        print(f"{name},\t{quality[i][0]},\t{quality[i][1]*value[i]}")


if __name__ == "__main__":
    main()
