const express = require('express');
const crud_gags = require('../crud/gags');
const router = express.Router();

router.get('/', async function(req, res, next){
    let num = await crud_gags.read_num_of_gags();
    let index = 1 + Math.floor(Math.random() * num);
    let gag = await crud_gags.read_gag(index);
    if(gag === -1){
        res.sendStatus(500);
    }else{
        res.status(200).send(gag);
    }
});

router.post('/', async function(req, res, next){
    let content = req.body.content;
    let status = await crud_gags.create_gag(content);
    if(status === -1){
        res.sendStatus(500);
    }else{
        res.sendStatus(200);
    }
});

router.get('/ranking', async function(req, res, next){
    let gags = await crud_gags.read_ranking();
    if(gags === -1){
        res.sendStatus(500);
    }else{
        res.status(200).send(gags);
    }
});

router.put('/good/:id', async function(req, res, next){
    let status = await crud_gags.update_good(req.params.id);
    if(status === -1){
        res.sendStatus(500);
    }else{
        res.sendStatus(200);
    }
});

router.put('/warning/:id', async function(req, res, next){
    let status = await crud_gags.update_warning(req.params.id);
    if(status === -1){
        res.sendStatus(500);
    }else{
        res.sendStatus(200);
    }
});

module.exports = router;