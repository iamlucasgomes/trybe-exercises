from .figura_geometrica import FiguraGeometrica
from math import pi


class Circulo(FiguraGeometrica):
    def __init__(self, raio) -> None:
        self.raio = raio
        super().__init__()

    def area(self):
        return pi * self.raio**2

    def perimetro(self):
        return 2 * pi * self.raio
