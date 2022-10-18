import React, { useState } from "react";
import Context from "./Context";

function Provider({children}) {

  const [student, setStudent] = useState([])

  const addNewStudent = (student) => {
    setStudent((prevState) => ([...prevState, student]));
  };

const contextValue = {
  student,
  addNewStudent
}

  return(
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  )
  
}

export default Provider;
