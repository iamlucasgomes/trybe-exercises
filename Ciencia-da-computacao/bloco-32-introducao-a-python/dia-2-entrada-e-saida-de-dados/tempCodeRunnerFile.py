def students_reproved():
    with open("students.txt", mode="r") as file:
        students = tuple(file.readlines())
        print(students)


students_reproved()
