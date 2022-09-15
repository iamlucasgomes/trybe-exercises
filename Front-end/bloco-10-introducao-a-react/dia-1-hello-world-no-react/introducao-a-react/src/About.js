import React from "react";

class About extends React.Component {
  render() {
    const skills = ['HTML', 'React', 'Jest', 'CSS3', 'JavaScript'] // adicione mais habilidades aqui
    const jsxSkills = skills.map((skill) => <li>{skill}</li>) // cria um array de tags <li>
    return (<div><h1>Lucas Gomes Martins</h1><p>Codando 24/7</p>
    <h2>Minhas Habilidades</h2><ul>{jsxSkills}</ul></div>);
  }
}

export default About;