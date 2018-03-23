const BIDS_URL = 'https://combined-order-book.herokuapp.com/api/knexqueries';

$(() => {
    // const $quantities = $('#quantities');
    // const $rates = $('#rate');
    // const $exchange = $('#exchange');
    // const $allThree = $('#allThree')

    $.get(BIDS_URL).then(data => {
        poloBids = data[0]
        bittrexBids = data[1]
        gdaxbids = data[2]


        for (let i = 0; i < poloBids.length; i++) {
            var div = document.createElement('DIV');
            var rate = document.createTextNode(poloBids[i].rate)
            div.appendChild(rate);
            document.getElementById('rate').appendChild(div);

        }
        for (let i = 0; i < poloBids.length; i++) {
            var div = document.createElement('DIV');
            var quantity = document.createTextNode(poloBids[i].quantity)
            div.appendChild(quantity);
            document.getElementById('quantity').appendChild(div);
        }

        for (let i = 0; i < poloBids.length; i++) {
            var div = document.createElement('DIV');
            var exchange = document.createTextNode(poloBids[i].exchange)
            div.appendChild(exchange);
            document.getElementById('exchange').appendChild(div);
        }

        //////BITTREX

        for (let i = 0; i < bittrexBids.length; i++) {
            var div = document.createElement('DIV');
            var rate = document.createTextNode(bittrexBids[i].rate)
            div.appendChild(rate);
            document.getElementById('rate').appendChild(div);

        }
        for (let i = 0; i < bittrexBids.length; i++) {
            var div = document.createElement('DIV');
            var quantity = document.createTextNode(bittrexBids[i].quantity)
            div.appendChild(quantity);
            document.getElementById('quantity').appendChild(div);
        }

        for (let i = 0; i < bittrexBids.length; i++) {
            var div = document.createElement('DIV');
            var exchange = document.createTextNode(bittrexBids[i].exchange)
            div.appendChild(exchange);
            document.getElementById('exchange').appendChild(div);
        }

        // GDAXXX

        for (let i = 0; i < gdaxbids.length; i++) {
            var div = document.createElement('DIV');
            var rate = document.createTextNode(gdaxbids[i].rate)
            div.appendChild(rate);
            document.getElementById('rate').appendChild(div);

        }
        for (let i = 0; i < gdaxbids.length; i++) {
            var div = document.createElement('DIV');
            var quantity = document.createTextNode(gdaxbids[i].quantity)
            div.appendChild(quantity);
            document.getElementById('quantity').appendChild(div);
        }

        for (let i = 0; i < gdaxbids.length; i++) {
            var div = document.createElement('DIV');
            var exchange = document.createTextNode(gdaxbids[i].exchange)
            div.appendChild(exchange);
            document.getElementById('exchange').appendChild(div);
        }

    })

})


// let bidLength = poloBids.length + bittrexBids.length + gdaxbids.length
//
// let poloIndex = poloBids.length-1
// console.log(poloIndex);
// let bittrexIndex = bittrexBids.length-1
// console.log(bittrexIndex);
// let gdaxIndex = gdaxbids.length-1
// console.log(gdaxIndex);
// // console.log(bidLength);
//
// for (let i = 0; i < bidLength; i++) {
//     // console.log(bidLength);
//     // console.log(poloBids[poloIndex].rate);
//     // console.log("polo" + poloBids[poloIndex].rate);
//     // console.log("bittrex" + bittrexBids[bittrexIndex].rate);
//     // console.log("gdax" + gdaxbids[gdaxIndex].rate);
//
//
//
//     if (poloBids[poloIndex].rate > bittrexBids[bittrexIndex].rate
//         && poloBids[poloIndex].rate > gdaxbids[gdaxIndex].rate
//         && poloIndex >= 0) {
//                 poloIndex--
//
//             // console.log("poloNumber" + poloBids[poloIndex].rate);
//             // poloIndex--
//          //append polobids && increment poloIndex
//          appendBid(
//              poloBids[poloIndex].rate,
//              poloBids[poloIndex].quantity,
//              poloBids[poloIndex].exchange
//             )
//
//     } else if (bittrexBids[bittrexIndex].rate > poloBids[poloIndex].rate
//         && bittrexBids[bittrexIndex].rate > gdaxbids[gdaxIndex].rate
//         && bittrexIndex >= 0) {
//
//                 bittrexIndex--
//
//             // console.log("bittrexNumber" + bittrexBids[bittrexIndex].rate);
//             // bittrexIndex--
//           // append bittrexbids && increment bitrexIndex
//
//     } else {
//         if(gdaxIndex >= 0){
//             gdaxIndex--
//         }
//         // console.log("gdaxNumber" + gdaxbids[gdaxIndex].rate);
//         // console.log(gdaxIndex + "gdax index value");
//
//         // append gdaxbids && increment gdaxIndex
//     }
// }
//
// function appendBid(rateIn, quantityIn, exchangeIn) {
//     var div = document.createElement('DIV');
//         var rate = document.createTextNode(rateIn)
//         // console.log(rate);
//         div.appendChild(rate);
//         document.getElementById('rate').appendChild(div);
// }
