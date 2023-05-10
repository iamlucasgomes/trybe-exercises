class Soldier:
    def __init__(self, level):
        self.level = level

    def attack(self):
        return self.level * 1


class Jedi:
    def __init__(self, level):
        self.level = level

    def attack_with_saber(self):
        return self.level * 100


class StarWarsGame:
    def __init__(self, character):
        self.character = character

    def fight_enemy(self):
        if isinstance(self.character, Soldier):
            dmg = self.character.attack()
            print(f"You caused {dmg} of damage to the enemy")
        elif isinstance(self.character, Jedi):
            dmg = self.character.attack_with_saber()
            print(f"You caused {dmg} of damage to the enemy")
        else:
            print("Unknown character class")


StarWarsGame(Soldier(5)).fight_enemy()
StarWarsGame(Jedi(20)).fight_enemy()
