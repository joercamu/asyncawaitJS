const fetch = require('node-fetch')

async function getNameGithub(username){
    const url = `https://api.github.com/users/${username}`
    const req = await fetch(url)
    const data = await req.json()
    
    if (req.status !== 200) {
        throw Error(req.status+req.statusText)
    }
    return data
    
}

(async ()=>{
    try {
        const datagithub = await getNameGithub('joercamuxxxx')
        console.log(datagithub)
    } catch (e) {
        console.log('Error'+e);
    }
    
})();