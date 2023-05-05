from .figura_geometrica import FiguraGeometrica


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura) -> None:
        self.base = base
        self.altura = altura
        super().__init__()

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return 2 * (self.base + self.altura)
