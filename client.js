const API_URL = 'http://localhost:5000/api/knexqueries';


$(() => {
    $.get(API_URL).then(quantity => {
        const $quantities = $('#quantities');
        quantity.forEach(quantity =>{
                $quantities.append(`<div>${quantity}</div>`)
        })
    })
    $.get(API_URL).then(rates => {
        const $rates = $('#rates');
        rates.forEach(rate =>{
                $rates.append(`<div>${rate}</div>`)
        })
    })
    // console.log(knexqueries);
})
