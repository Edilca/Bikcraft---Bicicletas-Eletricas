const links = document.querySelectorAll('.header-menu a');

function ativarLink(links) {
  const url = location.href;
  const href = links.href;
  if (url === href) {
    console.log(links);
  }
}
links.forEach(ativarLink);
