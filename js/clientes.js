document.addEventListener("DOMContentLoaded", () => {

    // Obtenemos una lista de todos los elementos de comentario
  const comentarios = document.querySelectorAll('.comentario');

  // Obtenemos los botones de "Anterior" y "Siguiente"
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  // Inicializamos el índice del comentario actual en 0
  let currentComentarioIndex = 0;

  // Ocultamos todos los comentarios excepto el primero
  comentarios.forEach((comentario, index) => {
    if (index !== currentComentarioIndex) {
      comentario.style.display = 'none';
    }
  });

  // Función para mostrar el comentario anterior
  const showPrevComentario = () => {
    comentarios[currentComentarioIndex].style.display = 'none';
    currentComentarioIndex--;
    if (currentComentarioIndex < 0) {
      currentComentarioIndex = comentarios.length - 1;
    }
    comentarios[currentComentarioIndex].style.display = 'block';
  };

  // Función para mostrar el comentario siguiente
  const showNextComentario = () => {
    comentarios[currentComentarioIndex].style.display = 'none';
    currentComentarioIndex++;
    if (currentComentarioIndex >= comentarios.length) {
      currentComentarioIndex = 0;
    }
    comentarios[currentComentarioIndex].style.display = 'block';
};

// Añadimos los listeners de evento para los botones de "Anterior" y "Siguiente"
prevBtn.addEventListener('click', showPrevComentario);
nextBtn.addEventListener('click', showNextComentario);



});
