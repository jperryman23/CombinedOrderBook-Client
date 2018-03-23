var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Bittrex",
                backgroundColor: 'rgb(57, 57, 57)',
                // borderColor: 'rgb(255, 99, 132)',
                data: [1, 10, 5, 7, 11, 50, 45],
            },
            {
                label: "Poloniex",
                backgroundColor: 'rgb(46, 140, 226)',
                // borderColor: 'rgb(255, 99, 132)',
                data: [3, 10, 5, 2, 20, 30, 45],
            },
            {
                label: "GDAX",
                backgroundColor: 'rgb(105, 5, 113)',
                // borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 25, 30, 55],
            }

    ]
    },

    // Configuration options go here
    options: {
        title: {
            display: true,
            text: 'BTC-ETH Volume-Price'
        }
    }
});
