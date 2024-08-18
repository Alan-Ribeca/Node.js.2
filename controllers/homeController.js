exports.mostrarTrabajos = (req, res) => {
  res.render("home", {
    nombrePagina: "devJobs",
    tagline: "Encuentra y publica Trabajos para desarrolladores web",
    barra: true,
    boton: true,
  });
};
