export const allAccess = (req, res) => {
    res.status(200).send("Conteniod publico.");
  };
  
  export const menuUsuario = (req, res) => {
    res.status(200).send("Contenido usuario.");
  };
  
  export const menuAdmin = (req, res) => {
    res.status(200).send("Contenido admin.");
  };
  
  export const menuModerador = (req, res) => {
    res.status(200).send("Contenido moderador.");
  };
  