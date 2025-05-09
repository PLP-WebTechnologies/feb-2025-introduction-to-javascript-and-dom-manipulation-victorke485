document.getElementById('changeTextBtn').addEventListener('click', function() {
    const textElement = document.getElementById('dynamicText');
    textElement.textContent = 'Text has been changed dynamically!';
});

document.getElementById('styleBtn').addEventListener('click', function() {
    const textElement = document.getElementById('dynamicText');
    textElement.classList.toggle('highlight');
});

document.getElementById('addElementBtn').addEventListener('click', function() {
    const container = document.getElementById('elementContainer');
    const newElement = document.createElement('p');
    newElement.textContent = 'New element added!';
    container.appendChild(newElement);
});

document.getElementById('removeElementBtn').addEventListener('click', function() {
    const container = document.getElementById('elementContainer');
    const lastChild = container.lastElementChild;
    if (lastChild) {
        container.removeChild(lastChild);
    }
});