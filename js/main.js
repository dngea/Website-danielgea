function openNav() {
    document.getElementById("overlay_nav").style.height = "100vh";
    document.getElementById("overlay_nav").style.visibility = "visible";
  }
  
  function closeNav() {
    document.getElementById("overlay_nav").style.height = "0vh";
    document.getElementById("overlay_nav").style.visibility = "hidden";
  }

const light = document.querySelector('.light');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  light.style.left = `${x}px`;
  light.style.top = `${y}px`;
});


// Función para cargar el header
function loadHeader() {
  console.log("loadHeader function called"); // Verificar si se llama la función
  fetch("../components/header.html")
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.text();
      })
      .then(data => {
          console.log("Header data loaded"); // Verificar si se recibe la respuesta
          document.getElementById('header').innerHTML = data;
          highlightCurrentPage(); // Llamar a la función para resaltar la página actual después de cargar el header

          // Inicializar eventos de navegación aquí
          initNavEvents(); 
      })
      .catch(error => console.error('Error al cargar el header:', error));
}

// Función para cargar el footer
function loadFooter() {
  console.log("loadFooter function called"); // Verificar si se llama la función
  fetch("../components/footer.html")
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.text();
      })
      .then(data => {
          console.log("Footer data loaded"); // Verificar si se recibe la respuesta
          document.getElementById('footer').innerHTML = data;
          highlightCurrentPage(); // Llamar a la función para resaltar la página actual después de cargar el footer
      })
      .catch(error => console.error('Error al cargar el footer:', error));
}

// Función para resaltar el menú de acuerdo a la página actual
function highlightCurrentPage() {
  const currentPage = window.location.pathname.split("/").pop();
  const pageMap = {
      'multimedia': 'multimedia-art',
      'ux_ui': 'ux-ui',
      'frontend': 'frontend',
      'about': 'about'
  };
  
  for (const key in pageMap) {
      if (currentPage.startsWith(key)) {
          const menuItem = document.getElementById(pageMap[key]);
          if (menuItem && menuItem.parentElement) {
              menuItem.parentElement.classList.add('current-page');
          }
          break;
      }
  }
}

// Manejador para el botón de contacto
function setupContactButton() {
  const contactButton = document.getElementById('contactButton');
  if (contactButton) {
    contactButton.addEventListener('click', function() {
      var email = 'dngeap@gmail.com';
      var subject = encodeURIComponent('Hi Daniel, nice to meet you');
      var body = encodeURIComponent('Hello,\n\nI am reaching out to connect with you.\n\nThank you,\n[Your Name]');
      var mailtoLink = 'mailto:' + email + '?subject=' + subject + '&body=' + body;
      
      console.log('Mailto link:', mailtoLink);
      
      // Abre el cliente de correo
      window.location.href = mailtoLink;
    });
  } else {
    console.error('Contact button not found');
  }
}

// Función que inicializa los eventos de navegación
function initNavEvents() {
  const navItems = document.querySelectorAll('.nav__li');

  navItems.forEach(item => {
      item.addEventListener('click', () => {
          const link = item.querySelector('a');
          window.location.href = link.href; // Redirigir a la URL del enlace
      });
  });
}

// Función para copiar el correo electrónico y mostrar el mensaje "Copied to clipboard!"
function copyEmail(email) {
  // Copiar el texto al portapapeles
  navigator.clipboard.writeText(email).then(function() {
      const tooltip = document.getElementById("tooltipMessage");

      // Cambiar el texto del tooltip a "email copied"
      tooltip.innerText = "email copied";
      tooltip.classList.add("show");

      // Ocultar el mensaje después de 2 segundos
      setTimeout(function() {
          tooltip.classList.remove("show");

          // Restablecer el mensaje del tooltip a "copy email"
          tooltip.innerText = "copy email";
      }, 2000);
  }).catch(function(error) {
      console.error("Error copying email to clipboard: ", error);
  });
}

// Función para mostrar el tooltip al pasar el mouse
function showTooltip() {
  const tooltip = document.getElementById("tooltipMessage");
  tooltip.innerText = "copy email"; // Mostrar el mensaje "copy email"
  tooltip.classList.add("show");
}

// Función para ocultar el tooltip al quitar el mouse
function hideTooltip() {
  const tooltip = document.getElementById("tooltipMessage");
  tooltip.classList.remove("show");
}



// Llamar a la función para cargar el header y footer cuando la página cargue
document.addEventListener('DOMContentLoaded', function() {
  loadHeader();
  loadFooter();
  setupContactButton(); 
});