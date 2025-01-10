// TODO: Set item in localStorage
localStorage.setItem("key", "value")
// TODO: Get item from localStorage
let value = localStorage.getItem("key")
console.log(value)
// TODO: Remove item from localStorage
localStorage.removeItem("key")
// TODO: Clear all items from localStorage
localStorage.clear()
// TODO: Add an object to localStorage
let user = {name: "Ji", age: "30"}
localStorage.setItem("user", JSON.stringify(user))
// TODO: Get an object from localStorage
let storedUser = JSON.parse(localStorage.getItem("user"))
console.log(storedUser.name)
console.log(storedUser.age)

// TODO: Set item in sessionStorage
sessionStorage.setItem("key", "value")
// TODO: Get item from sessionStorage
const value = sessionStorage.getItem("key")
console.log(value)
// TODO: Remove item from sessionStorage
sessionStorage.removeItem("key")
// TODO: Clear all items from sessionStorage
sessionStorage.clear()
// TODO: Add an object to sessionStorage
const user = {name: "ji", age: 30}
sessionStorage.setItem("user", JSON.stringify(user))
// TODO: Get an object from sessionStorage
let storedUser = JSON.parse(sessionStorage.getItem("user"))
console.log(storedUser.name)
console.log(storedUser.age)
