const marvel_heroes=["A","B","C"]
const Dc_heroes=["l","m",2]
marvel_heroes.push(Dc_heroes)
console.log(marvel_heroes)


console.log(marvel_heroes[3][1])
marvel_heroes.concat(Dc_heroes)


const all_heroes=marvel_heroes.concat(Dc_heroes)
console.log(all_heroes)

////from here the code is perfectly concatenated
//spread operator
const all_new_heroes=[...marvel_heroes,...Dc_heroes]
console.log(all_new_heroes)

const another_array=[1,3,4,[0,9,7],[3,5,7]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)

//

const a=[3,4,5]
const b=[8,9,0]
console.log(a.concat(b))

console.log(Array.isArray("jyoti"))
console.log(Array.from("jyoti"))
console.log(Array.from({name:"jyoti"}))

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))