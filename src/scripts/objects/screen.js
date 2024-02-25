const screen = {
    userProfile: document.querySelector('.profile-data'),

    renderUser(user){
        this.userProfile.innerHTML =

        `<div class = "info"><img src ="${user.avatarUrl}" alt="Foto do Perfil do usuário"/>
                <div class="data">
                    <h1>${user.name ?? 'Não possui nome cadastrado 😥'}</h1>
                    <p>${user.bio ?? 'Não possui bio cadastrada 😥'}</p>
                    <div class="follows">
                        <div class="followers">
                            <p><strong>Followers</strong></p>
                            <p>${user.followers}</p>
                        </div>
                    

                        <div class="following">
                            <p><strong>Following</strong></p>
                            <p>${user.following}</p>
                        </div>
                    </div>
                            
                </div>
        </div>`
    
        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li> <a href = "${repo.html_url}" target="_blank">${repo.name}
        <div class="info"><div class="forks">${repo.forks}</div>  <div class="stars">${repo.stargazers_count}</div> <div class="watchers">${repo.watchers}</div> <div class="language">${repo.language}</div></div></a> </li>`)

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositórios</h2>
                                            <ul>${repositoriesItens}</ul>
                                            </div>`
        }
        let eventsItens = ''
         user.events.forEach(event => eventsItens += `<li><a href = "${event.repo.url}" target="_blank"><strong>${event.repo.name}</strong> - ${event.payload.commits[0].message}</a> </li>`)

        if(user.events.length > 0){
            this.userProfile.innerHTML += `<div class="events section">
                                            <h2>Eventos</h2>
                                            <ul>${eventsItens}</ul>
                                            </div>`
        }
    
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado<h3>"
    }
}
export {screen}
