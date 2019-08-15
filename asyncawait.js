const fetch = require('node-fetch')
const url = `https://api.github.com/users/`

async function getNameGithub(username){
    
    const req = await fetch(url+username)
    const data = await req.json()
    
    if (req.status !== 200) {
        throw Error(req.status+req.statusText)
    }
    return data
    
}
function getNameGithubPromises(username){
    fetch("http://especializacionsena.appspot.com/sitios")
    .then((res)=>{
        return res.json()
    })
    .then((data)=> {
        console.log(data);
    })
    .catch((e)=>{console.log(e)})
}

( ()=>{
    getNameGithubPromises('joercamu');
    // try {
    //     const datagithub = await getNameGithub('joercamu')
    //     console.log(datagithub)
    // } catch (e) {
    //     console.log('Error'+e);
    // }
    
})();