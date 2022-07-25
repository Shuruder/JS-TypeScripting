// tag input

// const input: HTMLInputElement = document.getElementById('input'); // não vai funcionar pois o elemento ainda não está definido
const input = document.getElementById('input') as HTMLInputElement; // se fosse uma div era DivElement etc

input.addEventListener('input', (event) => {
    console.log('Digitei');
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
});