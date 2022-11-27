function nokia1110 (isIncreasing){
    let nokia1110_input = document.getElementById('nokia-1110_input');
    let nokia1110_inputValue = nokia1110_input.value;

    if(isIncreasing){
        nokia1110_inputValue = parseInt(nokia1110_inputValue) + 1;
    }
    else if(nokia1110_inputValue > 0){
        nokia1110_inputValue = parseInt(nokia1110_inputValue) - 1;
    }


    nokia1110_input.value = nokia1110_inputValue;

    let nokia1110_Price = document.getElementById('nokia-1110_price');
    nokia1110_Price.innerText = parseFloat(nokia1110_inputValue * 49);
}
// nokia1110 end


// nokia3210 start

function nokia3210 (isIncreasing){
    let nokia3210_input = document.getElementById('nokia-3210_input');
    let nokia3210_inputValue = nokia3210_input.value;

    if(isIncreasing){
        nokia3210_inputValue = parseInt(nokia3210_inputValue) + 1;
    }
    else if(nokia3210_inputValue > 0){
        nokia3210_inputValue = parseInt(nokia3210_inputValue) - 1;
    }


    nokia3210_input.value = nokia3210_inputValue;

    let nokia3210_Price = document.getElementById('nokia-3210_price');
    nokia3210_Price.innerText = parseFloat(nokia3210_inputValue * 39);
}

//  total calculation

function calculation(){
    let subTotal = document.getElementById('sub-total');
    parseFloat(subTotal.innerText);

    let vat = document.getElementById('vat');

    let grandTotal = document.getElementById('grand-total');

    let nokia1110_Price = document.getElementById('nokia-1110_price');
    nokia1110_Price.innerText;

    let nokia3210_Price = document.getElementById('nokia-3210_price');
    nokia3210_Price.innerText;

    let subTotalPrice = (parseFloat(nokia1110_Price.innerText ) + parseFloat(nokia3210_Price.innerText));
    subTotal.innerText = subTotalPrice;

    let vatPrice = subTotalPrice * 5 / 100;
    vat.innerText = vatPrice.toFixed(2);

    grandTotal.innerText = (subTotalPrice + vatPrice).toFixed(2);
    console.log((vatPrice));

}



document.getElementById('nokia-1110_minus').addEventListener('click', function(){
    nokia1110(false);
    calculation();
     
})
document.getElementById('nokia-1110_plus').addEventListener('click', function(){
    nokia1110(true);
    calculation();
    
})





document.getElementById('nokia-3210_minus').addEventListener('click', function(){
    nokia3210(false);
    calculation();
})

document.getElementById('nokia-3210_plus').addEventListener('click', function(){
    nokia3210(true);
    calculation();
})

