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
    return res.json({game: store.getState().find(game => game.id===id)})
})
app.post('/', async (req, res) => {
    const name = req.body.name
    const action = actionsGames.gameAdd(name)
    await store.dispatch(action)
    return res.json({game: action.payload})
})

const PORT = 5000
app.listen(PORT, () => console.log(`Listening on ${PORT}`))