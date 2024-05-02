document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registroForm");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Evita que el formulario se envíe automáticamente
      
      // Validación de contraseñas
      const password = form.querySelector("#password").value;
      const confirmPassword = form.querySelector("#confirmPassword").value;

      if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
      }

      // Si pasa todas las validaciones, el formulario se envía
      alert("¡Registro exitoso!");
      window.location.href = "login.html"; // Redirige a la página de ingreso
    });
  });
  
  