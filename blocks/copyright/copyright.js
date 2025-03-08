export default async function decorate(block) {
    // load footer as fragment

    [...block.children].forEach((row) => {

        [...row.children].forEach((col) => {

                console.log(col);
        }

    });
   
    // decorate footer DOM
    block.textContent = '';
    const footer = document.createElement('div');
  
    block.append(footer);
  }
  