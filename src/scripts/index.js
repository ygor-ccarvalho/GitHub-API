import { getUser } from "./services/user.js"
import { getRepositories } from "./services/repositories.js"
import { getEvents } from "./services/events.js"

import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"


document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if (validateEmptyInput(userName)) return
    getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.wich || e.keyCode
    const isEnterKeyPressed = key === 13


    if (isEnterKeyPressed) {
        if (validateEmptyInput(userName)) return
        getUserData(userName)
    }
})

function validateEmptyInput(userName) {

    if (userName.length === 0) {
        alert('Preencha o campo com o nome de usuário do GitHub!')
        return true
    }
}
async function getUserData(userName) {

    const userResponse = await getUser(userName)

    if (userResponse.message === "Not Found") {
        screen.renderNotFound()
        return
    }
    const repositoriesResponse = await getRepositories(userName)
    const eventsResponse = await getEvents(userName)
    const events = eventsResponse.filter(event => event.type === "PushEvent" || event.type === "CreateEvent" );
    const eventsWithMessage = events.map(event => ({ ...event, payload: event.type === "CreateEvent" ? { commits: [{ message: "Create Event" }] } : event.payload }))


    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setEvents(eventsWithMessage)


    screen.renderUser(user)
    //   console.log(await userResponse)
    // var filtrado = response.filter(eventsResponse(eventsResponse) { return .marcar == 1; });

    console.log(eventsWithMessage)
    //   console.log(await repositoriesResponse)
}
// "PushEvent""CreateEvent"