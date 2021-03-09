const typesGames = require('../types/typesGames')

const reducerGames = (state=[], action) => {
    switch (action.type) {
        case typesGames.ADD:
            return [...state, action.payload]

        case typesGames.MODIFY:
            const payload = action.payload
            return state.map(game => game.id===payload.id ? {...game, name: payload.name} : game)
            
        case typesGames.REMOVE:
            return state.filter(game => game.id!==action.payload.id)
            
        default:
            return state
    }
}
module.exports=reducerGames