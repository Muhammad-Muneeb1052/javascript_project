var groceries = document.getElementsByClassName('groceries')[0];
var pencil = document.getElementById('pencil');
var alltext = document.getElementById('allitems');
var user_input = document.getElementById('input_field');
pencil.addEventListener('click', function(){
    alltext.innerHTML = '';
})
user_input.addEventListener("keydown",function(event){
    if(event.key == 'Enter'){
        addItem();
    }
})
function addItem(){
    var h2 = document.createElement('h2')
    h2.innerHTML = "-"  + user_input.value;
    user_input.value = '';

    h2.addEventListener('click', function(){
        h2.style.textDecoration = 'line-through'
    })
    alltext.insertAdjacentElement('beforeend', h2);
}