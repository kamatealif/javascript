let marvel_heros = ["spiderman", "thor", "ironMan","Ant-man"]
let dc_heros=['superman','flash','batman','wonder woman','green lantern','joker']

// marvel_heros.push(dc_heros);
// console.log(marvel_heros)
// console.log(marvel_heros[4][2])

// concat()

// let all_heros = marvel_heros.concat(dc_heros);
// console.log('concat(): ', all_heros)

// another method of doing this 

let all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

let another_array = [1,2,3,4,[5,6,7],[8,[9,10,[11,12]]]]

let real_usable_array = another_array.flat(Infinity)
console.log(real_usable_array)

console.log(Array.isArray("rajesh"))
console.log(Array.from("rajesh"))
console.log(Array.from({name:"rajeshri"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))