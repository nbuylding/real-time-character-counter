const textArea = document.getElementById('textbox');
const totalCounter = document.getElementById('total-counter');
const remainingCounter = document.getElementById('remaining-counter');

textArea.addEventListener('keyup', () => {
    updateCounter();
})

function updateCounter() {
    totalCounter.innerText = textArea.value.length;
    remainingCounter.innerText = textArea.getAttribute('maxLength') - textArea.value.length;
}