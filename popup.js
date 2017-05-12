document.addEventListener('DOMContentLoaded', function() {
  var cryptos = ["BTC", "ETH", "LTC"];

  for (var i=0; i<cryptos.length; i++) {
    var el = document.getElementById(cryptos[i] + "-price");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.coinbase.com/v2/prices/"+cryptos[i]+"-USD/buy", false);
    xhr.send();
    var result = JSON.parse(xhr.responseText);
    el.innerHTML = "$" + result["data"]["amount"];
  }
}, false);
