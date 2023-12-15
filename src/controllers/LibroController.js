import Libro from "../models/Libro.js";

class LibroController {
  
  async crearLibro(req, res) {
    try {
      const nuevoLibro = await Libro.create(req.body);
      res.status(201).json(nuevoLibro);
    } catch (error) {
      res.status(400).json({ errorMsg: error.message });
    }
  }

  async listarLibros(req, res) {
    try {
      const libros = await Libro.findAll();

      if(libros.length === 0){
          return res.status(404).json({ errorMsg: "No posee ningun libro en el sistema" });
      }
      else
      {
          res.status(200).json(libros);
      }
    } catch (error) {
      res.status(500).json({ errorMsg: error.message });
    }
  }

  async darDeBajaLibro(req, res) {
    try {
      const codigoLibro = req.params.codigo;
      const libro = await Libro.findByPk(codigoLibro);

      if (!libro) {
        return res.status(404).json({ errorMsg: "Libro no encontrado" });
      }

      await libro.destroy();

      return res.status(200).json({ message: "Libro eliminado"});
    } catch (error) {
      res.status(500).json({ errorMsg: error.message });
    }
  }

  async listarLibroPorCodigo(req, res) {
    try {
      const codigoLibro = req.params.codigo;
      const libro = await Libro.findByPk(codigoLibro);

      if (!libro) {
        return res.status(404).json({ errorMsg: "Libro no encontrado" });
      }

      res.status(200).json(libro);
    } catch (error) {
      res.status(500).json({ errorMsg: error.message });
    }
  }
}

export default new LibroController();