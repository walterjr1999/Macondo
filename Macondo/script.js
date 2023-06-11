
var images = document.querySelectorAll("#gallery img");
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
    alert("Haz clic en la imagen: " + this.alt);
  });
}

// Obtener los elementos de los iconos de las redes sociales
var socialIcons = document.querySelectorAll('.social-media img');

// Agregar evento de escucha para cada icono
socialIcons.forEach(function(icon) {
  icon.addEventListener('mouseover', function() {
    icon.style.transform = 'scale(1.2)'; // Aplicar escala al icono al pasar el cursor sobre él
  });

  icon.addEventListener('mouseout', function() {
    icon.style.transform = 'scale(1)'; // Restaurar escala original del icono al quitar el cursor
  });
});
