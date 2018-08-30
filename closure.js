// A closure is created when the inner function is somehow made available to any scope outside the outer function.
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Closures

// The outer function defines a variable called "name"
// The inner function has access to the "name" variable of the outer function
// The inner function is returned, thereby exposing it to outer scopes
// Returns "Kyle"

const person = function(name) {
    const getName = function() {
        return name
    }
    return getName
}

// const person = ((name) => getName = (() => name)) // Fancy syntax, but does the same thing

me = person('Kyle')

console.log(me())