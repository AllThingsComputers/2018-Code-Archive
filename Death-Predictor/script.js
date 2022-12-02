var days = {
  totalDays: 10000,
  generate: function() {
    var randomNumber = Math.floor(Math.random() * this.totalDays) + 1;
    return randomNumber;
  }
}

//Reveals how many days till you die

function showNumber(number) {
  var placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = number;
}

var button = document.getElementById('button');

button.onclick = function() {
  var result = days.generate();
  showNumber(result);
};
