export default async function decorate(block) {
  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');  
  block.append(footer);
}
  