export default async function decorate(block) {
    // load footer as fragment
   
    // decorate footer DOM
    block.textContent = '';
    const footer = document.createElement('div');
  
    block.append(footer);
  }
  