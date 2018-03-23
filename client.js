const API_URL = 'http://localhost:5000/api/knexqueries';

$(() => {
    const $quantities = $('#quantities');

    const $rates = $('#rate');
    $.get(API_URL).then(rate => {
        rate.forEach(rate => {
            $rates.append(`<div>${rate}</div>`)
        })
    })

    $.get(API_URL).then(quantity => {
        quantity.forEach(quantity => {
            $quantities.append(`<div>${quantity}</div>`)
        })
    })

    const $exchange = $('#exchange');
    $.get(API_URL).then(exchange => {
        exchange.forEach(exchange => {
            $exchange.append(`<div>${exchange}</div>`)
        })
    })
})
