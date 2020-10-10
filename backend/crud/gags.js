const models = require('../models');
const { Op } = require('sequelize');

const create_gag = async function(content){
    try{
        await models.Gag.create({
            content: content,
            good: 0,
            warning: 0
        });
    }catch(err){
        console.log(err);
        return -1;
    }
    return 1;
}

const read_num_of_gags = async function(){
    try{
        let num = await models.Gag.count();
        return num;
    }catch(err){
        console.log(err);
        return -1;
    }
}

const read_gag = async function(id){
    try{
        let res = await models.Gag.findOne({
            where: {
                id: id
            }
        });
        return res;
    }catch(err){
        console.log(err);
        return -1;
    }
}

const read_ranking = async function(){
    try{
        let res = await models.Gag.findAll({
            order: [ ['good', 'DESC'] ]
        });
        return JSON.parse(JSON.stringify(res));
    }catch(err){
        console.log(err);
        return -1;
    }
}

const update_good = async function(id){
    try{
        await models.Gag.increment('good', {
            where: {
                id: id
            }
        });
        return 1;
    }catch(err){
        console.log(err);
        return -1;
    }
}

const update_warning = async function(id){
    try{
        await models.Gag.increment('warning', {
            where: {
                id: id
            }
        });
        return 1;
    }catch(err){
        console.log(err);
        return -1;
    }
}

const delete_warned_gags = async function(){
    await models.Gag.destroy({
        where: {
            warning: {
                [Op.gt]: 100
            }
        }
    });
}

module.exports = {
    create_gag,
    read_num_of_gags,
    read_gag,
    read_ranking,
    update_good,
    update_warning,
    delete_warned_gags
}