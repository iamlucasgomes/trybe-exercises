import React, { useState } from "react";

function Form() {

  const [formState, setFormState] = useState({
    name: '',
    age: 0,
    city: '',
    module: '',
  })

const handleChange = ({target}) => {
  const { name, value } = target
setFormState((prevState) => ({...prevState, [name]: value}))
}

  return (
    <form>
      <label>
        Nome Completo:
        <input type="text" name="name" onChange={handleChange}/>
      </label>
      <label>
        Idade:
        <input type="number" name="age" onChange={handleChange} />
      </label>
      <label>
        Cidade:
        <input type="text" name="city" onChange={handleChange} />
      </label>
      <fieldset onChange={handleChange}>
        <legend>Módulos</legend>
        <label>Fundamentos
        <input type="radio" name="module" value="Fundamentos" />
        </label>
        <label>
          Front-end
        <input type="radio" name="module" value="Front-end" />
        </label>
        <label>
          Back-end
        <input type="radio" name="module" value="Back-end" />
        </label>
        <label>
          Ciencia da Computação
        <input type="radio" name="module" value="Computer-Science" />
        </label>
      </fieldset>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default Form;