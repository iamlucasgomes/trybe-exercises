class Tv:
    def __init__(self, tamanho) -> None:
        self.volume: int = 50
        self.canal: int = 1
        self.tamanho: int = tamanho
        self.ligada: bool = False

    def aumentar_volume(self):
        if self.volume > 99:
            raise ValueError
        self.volume += 1

    def diminuir_volume(self):
        if self.volume < 0:
            raise ValueError
        self.volume -= 1

    def modificar_canal(self, canal):
        if not (1 <= self.canal <= 99):
            raise ValueError
        self.canal = canal

    def ligar_desligar(self):
        return not self.ligada
