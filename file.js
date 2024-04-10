const { readFile, writeFile } = require('fs') 
console.log("start")

readFile('./first.txt','utf8',(err,result)=> {
    if(err){
        console.log(err)
        return
    }
    const first=result
    readFile('./second.txt','utf8',(err,result) => {
        if(err)
        {
            console.log(err)
            return
        }
        const second= result
        console.log("muduchiten")
        writeFile('./file.txt',`Written something new, poi paaru!`,(err,result) => {
            if(err){
                console.log(err)
                return
            }
            console.log("ezhuthi aachu ezhuthi aachu")

        })
    })
})
console.log('shopaaaaa')

