const fs = require('fs')
const path = require('path')

async function bruteForceAttack(pathName){
    try {
        const response = await fetch('http://greenhat.microclub.info:5626/'+pathName)
        const data = await response.text()
        if(response.ok) {
            console.log('pathName success','http://greenhat.microclub.info:5626/'+pathName);
            console.log(data);
            fs.writeFileSync(path.resolve('result.txt'),'http://greenhat.microclub.info:5626/'+pathName,'utf-8')
            return true   
        }
        return false
    } catch (error) {
        // console.log(error.message);
        return false
    }
}

async function main(){
    try {
        const paths = fs.readFileSync('path.txt','utf-8').split('\n').map(path => path.trim())
        for(let pathName of paths){
            if(await bruteForceAttack(pathName)) break;
        }
    } catch (error) {
        console.log(error.message);
    }
}

main()