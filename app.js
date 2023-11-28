

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
}

const titulo = document.querySelector('p');
typeWriter(titulo);

/*typeWriter(document.querySelector( 'h1'));*/ /*no lugar do h1 po
de passar qualquer elemento para animar tambem*/ 

