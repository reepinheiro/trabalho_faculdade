// Seleciona todos os links do menu
const links = document.querySelectorAll('nav ul li a');

// Seleciona todas as seções do site
const sections = document.querySelectorAll('main section');

// Adiciona evento de clique em cada link
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

// Remove a classe ativa de todos os links
    links.forEach(l => l.classList.remove('active'));

 // Adiciona a classe ativa no link clicado
    link.classList.add('active');

// Pega o id da seção vinculada ao link
    const sectionId = link.getAttribute('data-section');

// Esconde todas as seções e mostra só a certa
    sections.forEach(sec => {
      if (sec.id === sectionId) {
        sec.classList.add('ativa');
      } else {
        sec.classList.remove('ativa');
      }
    });
  });
});
