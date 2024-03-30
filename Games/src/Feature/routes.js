const router = require('express').Router();
const { handleRequest } = require('../../providers/handle-http-request');

router.post('/games', handleRequest('CreateGamePostController'));

module.exports = router;