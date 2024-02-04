let objects = [];
let objectIdCounter = 1;

function addObject(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const imageInput = document.getElementById('image');
    const imageFile = imageInput.files[0];

    if (name && imageFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const newObject = { id: objectIdCounter++, name, image: e.target.result };
            objects.push(newObject);
            updateObjectsList();
            closeForm('addForm');
        };
        reader.readAsDataURL(imageFile);
    }
}

function updateObjectsList() {
    const objectsList = document.getElementById('objectsList');
    objectsList.innerHTML = '';

    objects.forEach(object => {
        const objectElement = document.createElement('div');
        objectElement.classList.add('object');
        objectElement.innerHTML = `
            <img src="${object.image}" alt="${object.name}">
            <p>${object.name}</p>
        `;
        objectsList.appendChild(objectElement);
    });
}

function openForm(formId) {
    const form = document.getElementById(formId);
    form.style.display = 'block';
}

function closeForm(formId) {
    const form = document.getElementById(formId);
    form.style.display = 'none';
}
