const names=require("./names")
const ages=require("./age")
const Try = (name,age) => {console.log(`Hello world, from ${name}.\nMy age is ${age}`)
}
Try(names.name1,ages.name1)
Try(names.name1,ages.name2)
console.log(names)
