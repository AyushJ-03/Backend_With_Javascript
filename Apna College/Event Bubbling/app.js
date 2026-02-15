let div = document.querySelector('div')
let ul = document.querySelector('ul')
let lis = document.querySelectorAll('li')

div.addEventListener('click', function() {
    console.log('DIV CLICKED');
})

ul.addEventListener('click', function() {
    event.stopPropagation();
    console.log('UL CLICKED');
})

for (li of lis)  {
    li.addEventListener('click', function(event) {
        event.stopPropagation();
        console.log('LI CLICKED');
    })
}