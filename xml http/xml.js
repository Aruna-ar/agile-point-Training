let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://syntaxdb.com/api/v1/languages/javascript/categories');
xhr.send();
xhr.onload = function () {
    addItemsToDOM(JSON.parse(xhr.response));
    addItemsToDOM2(JSON.parse(xhr.response));
    addItemsToDOM3(JSON.parse(xhr.response));
    addItemsToDOM4(JSON.parse(xhr.response));
    addItemsToDOM5(JSON.parse(xhr.response));
};
function addItemsToDOM(categories) {
  var container = document.querySelector('.categories');
  let values = Object.values(categories[0])
  values.forEach((category) => {
    if( isNaN(category)) {
      var elem = document.createElement('div');
      elem.setAttribute('class', 'test');
      elem.textContent = category;
      container.appendChild(elem);
    }
   
    
  });  
}

function addItemsToDOM2(categories2) {
    var container2 = document.querySelector('.categories2');
    let values = Object.values(categories2[1])
    values.forEach((category2) => {
      if( isNaN(category2)) {
      var elem2 = document.createElement('div');
      elem2.setAttribute('class', 'test');
      elem2.textContent = category2;
      container2.appendChild(elem2);
      }
    });
}

function addItemsToDOM3(categories3) {
    var container3 = document.querySelector('.categories3');
    let values = Object.values(categories3[2])
    
    values.forEach((category3) => {
      if( isNaN(category3)) {
      var elem3 = document.createElement('div');
      elem3.setAttribute('class', 'test');
      elem3.textContent = category3;
      container3.appendChild(elem3);
      
    }
    });
  }
  function addItemsToDOM4(categories4) {
    var container4 = document.querySelector('.categories4');
    let values = Object.values(categories4[3])
    values.forEach((category4) => {
      if( isNaN(category4)) {
      var elem4 = document.createElement('div');
      elem4.setAttribute('class', 'test');
      elem4.textContent = category4;
      container4.appendChild(elem4);
    }
    });
  }
  function addItemsToDOM5(categories5) {
    var container5 = document.querySelector('.categories5');
    let values = Object.values(categories5[4])
    values.forEach((category5) => {
      if( isNaN(category5)) {
      var elem5 = document.createElement('div');
      elem5.setAttribute('class', 'test');
      elem5.textContent = category5;
      container5.appendChild(elem5);
      }
    });
}


