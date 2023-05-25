let am_price=[{price:100,total_price:500},
    {price:10,total_price:50},
    {price:120,total_price:600},
    {price:120,total_price:1500}]

    for (const key in am_price) {
        console.log(am_price[key].total_price);        
    }