let arr:string ="Hello How are you"

//chartAt() and IndexOf()
console.log(arr.charAt(6))

console.log(arr.indexOf("How"))

//substring()

console.log(arr.substring(2,4))

//includes()

console.log(arr.includes("How"))


//startWith() and endsWith() -> returns boolean

console.log(arr.startsWith("H"))
console.log(arr.endsWith("u"))

//replace()

console.log(arr.replace("Hello","Vyankatesh"))


//split()

let str:string[] = arr.split("are")

console.log(str[0])