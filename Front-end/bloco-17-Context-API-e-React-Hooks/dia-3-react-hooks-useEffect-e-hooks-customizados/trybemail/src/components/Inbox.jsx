import { useState } from "react";

function Inbox() {

  const [email, setEmail] = useState([{
    id: 1,
    title: "GitHub processado / Metaverso “vazio e triste” / Nubank lança moeda digital",
    status: 0
  },
  {
    id: 2,
    title: "Esse monitor Samsung pode ser seu",
    status: 0
  },
  {
    id: 3,
    title: "Confirme sua presença.",
    status: 0
  }])

  return(
   <ul>
  {email.map()}
   </ul> 
    )
}

export default Inbox;