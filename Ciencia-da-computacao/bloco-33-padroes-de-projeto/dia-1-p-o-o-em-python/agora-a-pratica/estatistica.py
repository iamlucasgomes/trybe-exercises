from statistics import median, mode, mean


class Estatistica:
    def __init__(self, numbers: list[int]) -> None:
        self.numbers = numbers

    def media(self):
        return mean(self.numbers)

    def mediana(self):
        return median(self.numbers)

    def moda(self):
        return mode(self.numbers)
