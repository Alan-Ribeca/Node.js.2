module.exports = {
  seleccionarSkill: (seleccionadas = [], opciones) => {
    const skills = [
      "HTML",
      "CSS",
      "CCSGrid",
      "Flexbox",
      "JavaScript",
      "jQuery",
      "Node",
      "Angular",
      "VueJS",
      "ReactJS",
      "React Hoos",
      "Redux",
      "Apollo",
      "GraphQl",
      "TypeScript",
      "PHP",
      "Laravel",
      "Symfony",
      "Python",
      "Django",
      "ORM",
      "Sequelize",
      "Mongoose",
      "SQL",
      "MVC",
      "SASS",
      "WordPress",
    ];
    let html = "";
    skills.forEach((skill) => {
      html += `
            <li> ${skill} </li>
        `;
    });
    return (opciones.fn().html = html);
  },
};
