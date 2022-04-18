function serviceClient(URL, callFunction) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", URL);
  xhr.send();
  xhr.onload = function () {
    callFunction(JSON.parse(xhr.response));
  };
}
let bool=true;
function displayCategories(categories) {
  var container = document.querySelector(".categories");
  categories.forEach((category) => {
    var elem = document.createElement("div");
    elem.setAttribute("class", "test");
    elem.textContent = category["category_name"];
    elem.setAttribute("id", category["id"]);
    elem.setAttribute("onclick", "_onclick(id)");
    container.appendChild(elem);
  });
}

function getCategories() {
  let categoriesurl ="https://syntaxdb.com/api/v1/languages/javascript/categories";
  serviceClient(categoriesurl, displayCategories);
}

function _onclick(concept_id) {
  concept_url = `https://syntaxdb.com/api/v1/languages/javascript/categories/${concept_id}/concepts`;
  serviceClient(concept_url, displayConcepts);
  
}

function displayConcepts(concepts) {
  var container = document.querySelector(".concepts");
  
  if(bool)
  {
    concepts.forEach((concept) => {
      
      var elem = document.createElement("li");
      elem.setAttribute("class", "conceptDisplay");
      elem.textContent = concept["concept_name"];
      container.appendChild(elem);
    });
    bool=false;
  }else{

    container.innerHTML="";
    bool=true;
  }
    
}

getCategories();




