import client from "./client";

export default {
    async login(credentials) {
       return  await client.parseResponse(await client.post('/login', credentials))
    },
    async register(payload) {
        return await client.parseResponse(await client.post('/register', payload))
    },
    async signOut(){
        return await client.parseResponse(await client.post('/sign-out'))
    },
    async getTodos(filters) {
       return  await client.parseResponse(await client.get('/todo', filters))
    },
    async createTodo(payload) {
        return await client.parseResponse(await client.post('/todo', payload))
    },
    async updateTodo(payload) {
       return  await client.parseResponse(await client.put('/todo/' + payload.id, payload))
    },
    async deleteTodo(id) {
        await client.parseResponse(await client.delete('/todo/' + id))
    }
}
