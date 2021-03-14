const express = require('express')
const {createStore} = require('redux')
const app = express()
const reducerGames = require('./reducers/reducerGames')
const actionsGames = require('./actions/actionsGames')

app.use(express.json())

const store = createStore(reducerGames)

app.get('/', async (req, res) => {
    return res.json({games: store.getState()})
})
app.get('/:id', async (req, res) => {
    const id = req.params.id
    const game = store.getState().find(game => game.id===id)
    if(game === undefined) {
        return res.status(404).json({message: "No game with this id"})
    }
    return res.json({game})
})
app.post('/', async (req, res) => {
    const name = req.body.name
    const action = actionsGames.gameAdd(name)
    await store.dispatch(action)
    return res.status(201).json({game: action.payload})
})
app.put('/:id', async (req, res) => {
    const id = req.params.id
    const name = req.body.name
    const action = actionsGames.gameModify(id, name)
    await store.dispatch(action)
    return res.json({game: action.payload})
})
app.delete('/:id', async (req, res) => {
    const id = req.params.id
    const action = actionsGames.gameRemove(id)
    await store.dispatch(action)
    return res.json({game: action.payload})
})

const PORT = 5000
app.listen(PORT, () => console.log(`Listening on ${PORT}`))

module.exports=app