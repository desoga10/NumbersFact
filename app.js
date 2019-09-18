let fact = document.querySelector('#fact');
let factdisplay = document.querySelector('#factdisplay');
let dateInput = document.querySelector('#dateInput');
dateInput.addEventListener('input', getFactAjax);

function getFactAjax() {
  let year = dateInput.value.to;

  let xhr = new XMLHttpRequest();
  xhr.open('GET', `http://numbersapi.com/${year}/date`);

  xhr.onload = function() {
    if (this.status == 200) {
      console.log(this.responseText);
    }
  };

  xhr.send();
}
