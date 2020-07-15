const express = require('express');
const router = express.Router();
const postControlador = require('../controladores/postControlador');
const postController = require('../controladores/postControlador');

router.get('/posts', postControlador.obtenerPosts);
router.post('/createPost', postControlador.crearPost);
router.delete('/deletePost/:id', postControlador.eliminarPost);
router.post('/searchPost', postController.buscarPost);
router.put('/actualizarPost/:id', postController.actualizarPost);
module.exports = router;