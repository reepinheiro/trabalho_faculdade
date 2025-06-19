const links = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('main section');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    // Remove ativo de todos os links e adiciona no clicado
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

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
