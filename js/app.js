// const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');
// $pdfs.hide();

$secureLinks.attr('target', '_blank');
