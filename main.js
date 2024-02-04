
let button = document.querySelector(".btn");
button.addEventListener("click", function() {
    fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=6726061095de45d7932e6c88457ac7e5")
    .then((result) => {
        // console.log(result);
        let myData = result.json();
        // console.log(myData);
        return myData;
    })
    .then((currency) => {
        let amount = document.querySelector(".amount");
        let egpPrice = document.querySelector(".egp2");
        let sarPrice = document.querySelector(".sar2");
        let aedPrice = document.querySelector(".aed2");
        let eurPrice = document.querySelector(".eur2");
        let omrPrice = document.querySelector(".omr2");

        egpPrice.innerHTML = (amount.value * currency.rates["EGP"]).toFixed(2);
        sarPrice.innerHTML = (amount.value * currency.rates["SAR"]).toFixed(2);
        aedPrice.innerHTML = (amount.value * currency.rates["AED"]).toFixed(2);
        eurPrice.innerHTML = (amount.value * currency.rates["EUR"]).toFixed(2);
        omrPrice.innerHTML = (amount.value * currency.rates["OMR"]).toFixed(2);

    });
})
