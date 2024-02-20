<<<<<<< HEAD
import {baseUrl, repositoriesQuantity} from '/src/scripts/variables.js'
=======
import {baseUrl, repositoriesQuantity} from "../variables.js";
>>>>>>> 041dd0e8bb9f3882c5dc922db88b1e62ea640a30

async function getRepositories(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    return await response.json()
}

export {getRepositories}
