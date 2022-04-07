let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://syntaxdb.com/api/v1/languages/javascript/categories');
xhr.send();
xhr.onload = function () {
  addItemsToDOM(JSON.parse(xhr.response));
};
xhr.onerror = function () {
 
};

function addItemsToDOM(categories) {
  var container = document.querySelector('.categories');
  categories.forEach((category) => {
    var elem = document.createElement('div');
    elem.setAttribute('class', 'test');
    elem.textContent = category['category_name'];
    
    container.appendChild(elem);
  });
}
function addItemsToDOM(categories) {
  var container = document.querySelector('.categories');
  categories.forEach((category) => {
    var elem = document.createElement('div');
    elem.setAttribute('class', 'test');
    elem.textContent = category['category_search'];
    
    container.appendChild(elem);
  });
}
