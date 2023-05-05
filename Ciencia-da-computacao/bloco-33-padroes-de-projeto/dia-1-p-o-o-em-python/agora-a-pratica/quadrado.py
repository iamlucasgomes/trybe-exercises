from .figura_geometrica import FiguraGeometrica


class Quadrado(FiguraGeometrica):
    def __init__(self, lado) -> None:
        self.lado = lado
        super().__init__()

    def area(self):
        return self.lado**2

    def perimetro(self):
        return 4 * self.lado
