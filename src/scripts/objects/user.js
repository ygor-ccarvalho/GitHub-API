const user = {
    avatarUrl: '',
    name: '', 
    bio:'',
    userName:'',
    repositories: [],
    repositorieForks: '',
    repositorieStars: '',
    repositorieWatchers: '',
    repositorieLanguage: '',
    followers: '',
    following: '',
    events: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login 
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories){
        this.repositories = repositories
        this.repositorieForks = repositories.fork
        this.repositorieStars = repositories.stargazers_count
        this.repositorieWatchers = repositories.watchers
        this.repositorieLanguage = repositories.language
    },
    setEvents(events){
        this.events = events
    }
}

export {user}