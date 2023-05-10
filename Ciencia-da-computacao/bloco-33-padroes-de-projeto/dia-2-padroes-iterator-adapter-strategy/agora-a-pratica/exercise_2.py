class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return "<%s de %s>" % (self.valor, self.naipe)


class Baralho:
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self):
        self._cartas = [
            Carta(valor, naipe) for naipe in self.naipes for valor in self.valores
        ]

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        self._index = 0
        return self

    def __next__(self):
        if self._index >= len(self._cartas):
            raise StopIteration
        carta = self._cartas[self._index]
        self._index += 1
        return carta


class BaralhoInverso(Baralho):
    def __init__(self):
        super().__init__()

    def __iter__(self):
        self._index = len(self._cartas) - 1
        return self

    def __next__(self):
        if self._index < 0:
            raise StopIteration
        carta = self._cartas[self._index]
        self._index -= 1
        return carta


baralho = BaralhoInverso()
for carta in baralho:
    print(carta)
