function openNav() {
    document.getElementById("overlay_nav").style.height = "100vh";
    document.getElementById("overlay_nav").style.visibility = "visible";
  }
  
  function closeNav() {
    document.getElementById("overlay_nav").style.height = "0vh";
    document.getElementById("overlay_nav").style.visibility = "hidden";
  }

  const light = document.querySelector('.light');

  // Current mouse position
  let mouseX = 0;
  let mouseY = 0;
  
  // Current light position
  let lightX = 0;
  let lightY = 0;
  
  // Smoothness factor (smaller values mean slower movement)
  const smoothness = 0.08;
  
  // Update mouse position on movement
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  // Smoothly animate the light to follow the mouse
  function animateLight() {
    // Gradually move the light position towards the mouse position
    lightX += (mouseX - lightX) * smoothness;
    lightY += (mouseY - lightY) * smoothness;
  
    // Update the light's position
    light.style.left = `${lightX}px`;
    light.style.top = `${lightY}px`;
  
    // Continue the animation loop
    requestAnimationFrame(animateLight);
  }

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
  console.log("loadFooter function called"); 
  fetch("../components/footer.html")
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.text();
      })
      .then(data => {
          console.log("Footer data loaded");
          document.getElementById('footer').innerHTML = data;
          // highlightCurrentPage(); // Llamar a la función para resaltar la página actual después de cargar el footer
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
function copyEmail(element, email) {
  // Copiar al portapapeles
  navigator.clipboard.writeText(email).then(function () {
      const tooltip = element.nextElementSibling; // Obtener el tooltip asociado al elemento

      // Mostrar mensaje "email copied"
      tooltip.innerText = "email copied";
      tooltip.classList.add("show");

      // Ocultar el tooltip después de 2 segundos
      setTimeout(function () {
          tooltip.classList.remove("show");
          tooltip.innerText = "copy email"; // Restaurar el texto original
      }, 2000);
  }).catch(function (error) {
      console.error("Error copying email to clipboard: ", error);
  });
}

// Mostrar tooltip en hover
function showTooltip(element) {
  const tooltip = element.nextElementSibling;
  tooltip.innerText = "copy email"; // Asegurar mensaje correcto
  tooltip.classList.add("show");
}

// Ocultar tooltip al salir del hover
function hideTooltip(element) {
  const tooltip = element.nextElementSibling;
  tooltip.classList.remove("show");
}

// resume onClick
document.addEventListener('DOMContentLoaded', function() {
  const downloadResume = document.getElementById('downloadBtn')
  if (downloadResume) {
    downloadResume.addEventListener('click', (e) => {
      e.preventDefault();

      const link = document.createElement('a');
      link.href = '../img/home/Daniel_Gea_Resume.pdf';
      link.download = 'Daniel_Gea_Resume.pdf';
      link.click();
      })
    } else {
      console.error('Resume no se ha encontrado')
    }
});

// contact open mail
function setupContactButton() {
  const contactButton2 = document.getElementById('contactButton2');

  if (contactButton2) {
    contactButton2.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('enviando...');
      
      let email2 = 'dngeap@gmail.com';
      let subject2 = encodeURIComponent('Hi Daniel');
      let body2 = encodeURIComponent('Hello,\n\nI am reaching out to connect with you.\n\nThank you,\n[Your Name]');
      let mailtoLink2 = `mailto:${email2}?subject=${subject2}&body=${body2}`;

      console.log('Mailto link:', mailtoLink2);
      window.location.href = mailtoLink2;
    });
  } else {
    console.error('Error: contactButton2 no encontrado en el DOM.');
  }
}


// Llamar a la función cuando la página cargue
document.addEventListener('DOMContentLoaded', function() {
  loadHeader();
  loadFooter();
  setTimeout(setupContactButton, 500);
  animateLight();
});