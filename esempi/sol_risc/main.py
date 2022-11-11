def main():
    primes = []
    i = 2

    while len(primes) < 150:
        if len(primes) == 0 or is_prime(i, primes):
            primes.append(i)
        i += 1

    print(sum(primes))

def is_prime(test, primes):
    for p in primes:
        if (test % p == 0):
            return False

    return True

if __name__ == "__main__":
    main()
