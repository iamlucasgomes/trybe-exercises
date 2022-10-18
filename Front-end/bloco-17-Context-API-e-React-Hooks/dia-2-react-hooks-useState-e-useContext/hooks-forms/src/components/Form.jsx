import React, { useState, useContext } from "react";
import Context from "../context/Context";

function Form() {

  const [formState, setFormState] = useState({
    name: '',
    age: 0,
    city: '',
    modulo: '',
  })

  const { addNewStudent, student } = useContext(Context);

  const handleClick = (event) => {
    event.preventDefault()
    addNewStudent({
      name: formState.name,
      age: formState.age,
      city: formState.city,
      modulo: formState.modulo,
    })
    setFormState({
      name: '',
      age: 0,
      city: '',
      modulo: '',
    })

  }

const handleChange = ({target}) => {
  const { name, value } = target
setFormState((prevState) => ({...prevState, [name]: value}))
}

  return (
    <div>
      <form>
      <label>
        Nome Completo:
        <input type="text" name="name" value={formState.name} onChange={handleChange}/>
      </label>
      <label>
        Idade:
        <input type="number" name="age" value={formState.age} onChange={handleChange} />
      </label>
      <label>
        Cidade:
        <input type="text" name="city" value={formState.city} onChange={handleChange} />
      </label>
      <fieldset value={formState.modulo} onChange={handleChange}>
        <legend>Módulos</legend>
        <label>Fundamentos
        <input type="radio" name="modulo" value="Fundamentos" />
        </label>
        <label>
          Front-end
        <input type="radio" name="modulo" value="Front-end" />
        </label>
        <label>
          Back-end
        <input type="radio" name="modulo" value="Back-end" />
        </label>
        <label>
          Ciencia da Computação
        <input type="radio" name="modulo" value="Ciencia da Computação" />
        </label>
      </fieldset>
      <input type="submit" value="Submit" onClick={handleClick} />
    </form>
    <ul>{student.map(({ name, age, city, modulo }, index) => <li key={index}><p>Nome: {name}</p>
    <p>Idade: {age}</p>
    <p>Cidade: {city}</p>
    <p>Módulo: {modulo}</p></li>)}</ul>
  </div>
  )
}

export default Form;