const input = document.querySelector('#texto');
const lista = document.querySelector('ul');
const button = document.querySelector('#btn');

// function handleKeyUp(e) {
//     if (e.key === 'Enter') {
//        const newLi = document.createElement('li');
//        newLi.innerText = input.value;
//        lista.appendChild(newLi);

//        input.value = '';
//     }    
// }
// input.addEventListener('keyup', handleKeyUp);

// button.addEventListener('click', () => {
//     const newLi = document.createElement('li');
//     newLi.innerText = input.value;
//     lista.appendChild(newLi);

//     input.value = '';
// });

// button1.addEventListener('click', () => {
//     const newLi = document.querySelector('li');
//     newLi.innerHTML = input.value;
//     lista.removeChild(newLi);

//     input.value = '';
//     const button1 =+ (lista + button1);
// });

function handleKeyUp(e) {
    if (e.key === 'Enter') {
        addItem();
    }    
}
input.addEventListener('keyup', handleKeyUp);

button.addEventListener('click', addItem);

function addItem() {
    const newLi = document.createElement('li');
    newLi.innerText = input.value;

    const remove = document.createElement('button');
    remove.innerText = '';
    remove.className = 'remove-button';
    remove.addEventListener('click', () => {
        lista.removeChild(newLi); 
    });

    newLi.appendChild(remove); 
    lista.appendChild(newLi); 

    input.value = ''; 

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'check';
    newLi.appendChild(checkbox); 
}
