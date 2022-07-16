const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addObject = (object, key, value) => { object[key] = value
return lesson2;      
}

addObject(lesson2, 'turno', 'noite');

const listKeys = (object) => Object.keys(object);

listKeys(lesson3);

const sizeObject = (object) => Object.keys(object).length;

sizeObject(lesson2);

const valuesObject = (object) => Object.values(object);

valuesObject(lesson2);

const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});

function allTheStudent(object){
let totalStudents = 0;
const classes = Object.keys(object)
for(const students in classes){
  totalStudents += object[classes[students]].numeroEstudantes;
}
return totalStudents
}
allTheStudent(allLessons)

const getValue = (object, index) => {
  return Object.values(object)[index]
}
console.log(getValue(lesson1, 0));

const checkPair = (object, key, value) => {
const array = Object.entries(object);
let exists = false;
  
  for (const index in array) {
  if (array[index][0].includes(key) && array[index][1].includes(value)) {
    exists = true; 
  }  
}
  return exists
}
checkPair(lesson3, 'turno', 'noite')