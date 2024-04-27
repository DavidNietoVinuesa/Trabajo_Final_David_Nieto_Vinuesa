
// Cambiar el fondo de la pagina al tocar el anillo único

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('ring').addEventListener('click', function() {

        console.log('Clic en el Anillo Único');
        document.body.classList.toggle('corrupted');
    });

// Mostrar detalles de un personaje al pasar el ratón sobre su nombre

    const characters = document.querySelectorAll('#characters .character');
    const descriptionElement = document.getElementById('character-description');

    characters.forEach(character => {
        character.addEventListener('mouseover', function() {

            const description = this.getAttribute('data-description');

            if (descriptionElement) {
                descriptionElement.textContent = description;
            }
        });

        character.addEventListener('mouseout', function() {

            if (descriptionElement) {
                descriptionElement.textContent = '';
            }
        });
    });

// Reproducción del tráiler al cargar la página

    const trailer = document.getElementById('trailer');
    if (trailer) {
        const video = trailer.querySelector('video');
        if (video) {
            video.play();
        }
    }
});

// Función para generar un nombre élfico a partir de un nombre humano

function generateElfName(humanName) {

    const vocales = ['a', 'e', 'i', 'o', 'u'];
    const consonantes = ['l', 'r', 'nd', 'lph', 'th', 'rth', 'ld', 'n', 'rion', 'm', 'rion'];
    const sufijos = ['iel', 'ion', 'wen', 'an', 'riel', 'ion', 'or', 'il', 'iel'];

    let nombreElfico = '';

    // Convertir el nombre humano a minúsculas y eliminar espacios

    const cleanName = humanName.toLowerCase().replace(/\s/g, '');

    // Generar el nombre élfico alternando entre consonantes y vocales

    for (let i = 0; i < cleanName.length; i++) {
        if (i % 2 === 0) {
            // Si es una posición par, agregar una vocal
            nombreElfico += vocales[Math.floor(Math.random() * vocales.length)];
        } else {
            // Si es una posición impar, agregar una consonante
            nombreElfico += consonantes[Math.floor(Math.random() * consonantes.length)];
        }
    }

    // Agregar un sufijo aleatorio

    nombreElfico += sufijos[Math.floor(Math.random() * sufijos.length)];

    return nombreElfico;
}

// Obtener elementos del DOM

const humanNameInput = document.getElementById('human-name');
const generateButton = document.getElementById('generate-button');
const elfNameOutput = document.getElementById('elf-name');

// Evento de clic para generar el nombre élfico

generateButton.addEventListener('click', function() {
    const humanName = humanNameInput.value.trim();

    if (humanName !== '') {
        const elfName = generateElfName(humanName);
        elfNameOutput.textContent = `Tu nombre élfico es: ${elfName}`;
    } else {
        elfNameOutput.textContent = 'Por favor, ingresa tu nombre humano.';
    }
});