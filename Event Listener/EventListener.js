const button1 = document.getElementById('clickEvent1')

// SYNTAX
// addEventListener(type, listener)

button1.addEventListener('click', function () {
    
    const h2 = document.createElement('h2')
    h2.innerHTML = "Hi How are today";

    document.getElementById('containerDiv').append( h2 )

});