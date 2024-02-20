<<<<<<< HEAD
import{baseUrl} from '/src/scripts/variables.js'
=======
import{baseUrl} from "../variables.js";
>>>>>>> 041dd0e8bb9f3882c5dc922db88b1e62ea640a30

async function getUser(userName){
    const response = await fetch(`${baseUrl}/${userName}`)
    return await response.json()
    
}

export {getUser}
