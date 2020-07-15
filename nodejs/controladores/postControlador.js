var postController = {};
const pool = require('../dbpostgres');

postController.obtenerPosts = async(req, res) => {
    const posts = await pool.query('select * from posts');
    res.json(posts.rows);
}

postController.crearPost = async(req, res) => {
    let { name, description } = req.body;
    if (!name || !description) {
        return res.status(200).json({
            status: 'Propiedades incorrectas'
        });
    }
    let verify = await pool.query(`select * from posts where name='${name}'`);

    if (verify.rows.length === 0) {
        await pool.query(`insert into posts(name,description) values('${name}', '${description}')`);
        res.status(200).json({ status: 'Creado con exito' });
    } else {
        res.status(200).json({ status: 'error nombre del post existente' })
    }

}
postController.eliminarPost = async(req, res) => {
    let { id } = req.params;
    //console.log("id es: " + id);
    let post = await pool.query(`select * from posts where ID=${id}`);
    if (post.rows.length > 0) {
        await pool.query(`DELETE from posts where ID=${id}`);
        return res.status(200).json({ status: 'Post eliminado correctamente' })
    } else {
        res.status(404).json({ status: 'Post no registrado en la bd' })
    }
}

postController.buscarPost = async(req, res) => {
    const { name } = req.body;
    const post = await pool.query(`select * from posts where name LIKE '%${name}%'`);
    if (post.rows.length === 0) {
        return res.status(404).json({ status: 'No se encontro nada con ese nombre' });
    }
    res.status(200).json(post.rows);
}
postController.actualizarPost = async(req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    if (name === '' || description === '') {
        res.status(401).json({ status: 'error campos vacios' });
    }
    await pool.query(`update posts set post=${name}, description=${description} where ID=${id}`)
    res.status(200).json({ status: 'actualizado con exito' })
}

module.exports = postController;