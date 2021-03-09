const typesGames = require('../types/typesGames')
const { v4: uuid } = require('uuid');

module.exports={
    gameAdd: name => ({
        type: typesGames.ADD,
        payload: {
            name,
            id: uuid()
        }
    }),
    gameModify: (id, name) => ({
        type: typesGames.MODIFY,
        payload: {name, id}
    }),
    gameRemove: id => ({
        type: typesGames.REMOVE,
        payload: {id}
    })
}