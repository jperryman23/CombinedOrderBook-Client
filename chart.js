$(() => {
    let bRates = [ ]

    $.get('http://localhost:5000/api/knexqueries').then(data => {
        bittrexBids = data[1]
            // let bRates = [ ]

        for (let i = 0; i < bittrexBids.length; i++) {
        bRates.push(bittrexBids[i].rate)
        }
    })
console.log(bRates);



var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar', //stepped

    // The data for our dataset
    data: {
        labels: ["<.06",".06-.061", ".061-.062", ".062-.063", ".063-.064", ".065-.066", ".066-.067", ".067-.068",".069-.070", ".070-.071", ".071-.072", ".072-.073", ".073-.074", ".074-.075", ".075-.076", " >.76"],
        datasets: [
            {
                label: "Bittrex",
                backgroundColor: 'rgb(57, 57, 57)',
                // borderColor: 'rgb(255, 99, 132)',
                data: [-45,23, -10, -5, 20, 20, 30, 45,-45,23, -10, -5, 20, -27, -40, 45],
            },
            {
                label: "Poloniex",
                backgroundColor: 'rgb(46, 140, 226)',
                // borderColor: 'rgb(255, 99, 132)',
                data: [-45,23, -10, -5, 20, 20, 30, 45,-45,23, -10, -5, 20, 20, -30, 45,-44],
            },
            {
                label: "GDAX",
                backgroundColor: 'rgb(105, 5, 113)',
                // borderColor: 'rgb(255, 99, 132)',
                data: [-50,30, -10, 10, 15, 20, -25, 55,-45,23, -10, -5, 20, 22, -39, 45,-44],
            },
            {
                label: "Combined Orderbook Volume",
                backgroundColor: 'rgb(42, 193, 39)',
                // borderColor: 'rgb(255, 99, 132)',
                data: [-50,30, -10, 10, 15, 20, -25, 55,-45,23, -10, -5, 20, 20, -31, -25],
            }


    ]
    },

    // Configuration options go here
    options: {
        title: {
            display: true,
            text: 'BTC-ETH Volume-Price',
            fontSize: 17,
            fontStyle: 'bold'
        }
    }
});


})
