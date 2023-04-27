def students_reproved():
    with open("students.txt", mode="r") as file:
        students = [tuple(line.strip().split(" ")) for line in file]
    with open("reproved.txt", mode="w") as reproved:
        for stundent, nota in students:
            if int(nota) < 6:
                reproved.write(f"{stundent}\n")


students_reproved()
