let task = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');

btn.addEventListener('click', function() {
    let li = document.createElement('li');
    li.textContent = task.value + " ";
    ul.appendChild(li);
    let delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.classList.add('del');
    li.appendChild(delBtn);
    task.value = '';
})

ul.addEventListener('click', function(e) {
    if(e.target.classList.contains('del')) {
        e.target.parentElement.remove();
    }
});



// let del = document.querySelectorAll('.del');
// del.forEach(function(button) {
//     button.addEventListener('click', function(e) {
//         e.target.parentElement.remove();
//     });
// });