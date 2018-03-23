const ASKS_URL = 'http://localhost:5000/api/sendasks';

$(() => {

    // var timer = setInterval(function() {
    //   alert("working")
    // }, 5000);

    // const $quantities = $('#quantities');
    // const $rates = $('#rate');
    // const $exchange = $('#exchange');
    // const $allThree = $('#allThree')

    $.get(ASKS_URL).then(data => {
        // console.log(data);
        poloAsks = data[0]
        bittrexAsks = data[1]
        gdaxAsks = data[2]


        for (let i = 0; i < poloAsks.length; i++) {
            var div = document.createElement('DIV');
            var rate = document.createTextNode(poloAsks[i].rate)
            div.appendChild(rate);
            document.getElementById('a_rate').appendChild(div);

        }
        for (let i = 0; i < poloAsks.length; i++) {
            var div = document.createElement('DIV');
            var quantity = document.createTextNode(poloAsks[i].quantity)
            div.appendChild(quantity);
            document.getElementById('a_quantity').appendChild(div);
        }

        for (let i = 0; i < poloAsks.length; i++) {
            var div = document.createElement('DIV');
            var exchange = document.createTextNode(poloAsks[i].exchange)
            div.appendChild(exchange);
            document.getElementById('a_exchange').appendChild(div);
        }

        //////BITTREX

        for (let i = 0; i < bittrexAsks.length; i++) {
            var div = document.createElement('DIV');
            var rate = document.createTextNode(bittrexAsks[i].rate)
            div.appendChild(rate);
            document.getElementById('a_rate').appendChild(div);

        }
        for (let i = 0; i < bittrexAsks.length; i++) {
            var div = document.createElement('DIV');
            var quantity = document.createTextNode(bittrexAsks[i].quantity)
            div.appendChild(quantity);
            document.getElementById('a_quantity').appendChild(div);
        }

        for (let i = 0; i < bittrexAsks.length; i++) {
            var div = document.createElement('DIV');
            var exchange = document.createTextNode(bittrexAsks[i].exchange)
            div.appendChild(exchange);
            document.getElementById('a_exchange').appendChild(div);
        }

        // GDAXXX

        for (let i = 0; i < gdaxAsks.length; i++) {
            var div = document.createElement('DIV');
            var rate = document.createTextNode(gdaxAsks[i].rate)
            div.appendChild(rate);
            document.getElementById('a_rate').appendChild(div);

        }
        for (let i = 0; i < gdaxAsks.length; i++) {
            var div = document.createElement('DIV');
            var quantity = document.createTextNode(gdaxAsks[i].quantity)
            div.appendChild(quantity);
            document.getElementById('a_quantity').appendChild(div);
        }

        for (let i = 0; i < gdaxAsks.length; i++) {
            var div = document.createElement('DIV');
            var exchange = document.createTextNode(gdaxAsks[i].exchange)
            div.appendChild(exchange);
            document.getElementById('a_exchange').appendChild(div);
        }

    })

})
