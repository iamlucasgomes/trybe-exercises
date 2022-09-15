import './App.css';

const arrComp = ['Correr', 'limpar a casa', 'assistir aula', 'fazer o projeto', 'dormir']

const Task = (value) => {
  return value.map(element => <li>{element}</li>
  );
}

function App() {
  return Task(arrComp)
}

export default App;
