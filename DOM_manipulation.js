console.log(
    document.getElementById("page-heading")
)

console.log(
    document.getElementsByClassName("red")
)
console.log(
    document.getElementsByTagName("p")
)

console.log(
    document.querySelector('p')
)

console.log(
    document.querySelector('.container p.red')
)

console.log(
    document.querySelector('#page-heading')
)

console.log(
    document.querySelector('.red ~ .red')
)

console.log(
    document.querySelector('[href]')
)

console.log(
    document.querySelectorAll('[href]')
)

console.log(
    document.querySelectorAll('.red')
)

console.log(
    document.querySelector('div.red').innerHTML
)

console.log(
    document.querySelector('div.red').innerText
)

console.log(
    document.createElement('div')
)

const divElem1 = document.createElement('div')
divElem1.innerHTML = "<strong>this is a para -----------------</strong>"

console.log(
    divElem1
)
//---------------------------

const divElem2 = document.createElement('div')
divElem2.setAttribute('title', 'Karthi')
divElem2.setAttribute('id', 'apple')
divElem2.innerHTML = "Hi how are you"

console.log(divElem2)

document.getElementById('parent-wrapper').append(divElem2)

document.querySelector('p').prepend(divElem1)


// EVENT LISTENER SYNTAX
// addEventListener('eventName', callbackFunction)


