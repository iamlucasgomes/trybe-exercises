import sys

numbers_input = input("Insira os números separados por espaço: ")
numbers = []
for number in numbers_input.split():
    if number.isdigit():
        numbers.append(int(number))
    else:
        print(
            f"Erro ao somar valores, {number} é um valor inválido",
            file=sys.stderr,
        )

print(f" A Soma dos números válidos é: {sum(numbers)}")
