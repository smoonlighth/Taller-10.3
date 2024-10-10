const item = document.getElementById("item");
const add = document.getElementById("agregar");
const remove = document.getElementById("limpiar");
const contenedor = document.getElementById('contenedor');

// Cargar los ítems desde localStorage y mostrarlos en la lista
function cargarItems() {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    contenedor.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.classList.add('list-group-item');
        contenedor.appendChild(li);
    });
}

// Agregar un nuevo ítem
add.addEventListener("click", function agregarItem() {
    const nuevoItem = item.value.trim();
    if (nuevoItem !== '') {
        let items = JSON.parse(localStorage.getItem('items')) || [];
        items.push(nuevoItem);
        localStorage.setItem('items', JSON.stringify(items));
        cargarItems();  // Actualizar la lista visual
        item.value = '';
    }
})

// Limpiar la lista y el localStorage
remove.addEventListener('click', function limpiarLista() {
    localStorage.removeItem('items');
    cargarItems(); 
})

