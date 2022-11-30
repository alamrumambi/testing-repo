/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// console.log('Hallo sudah terkoneksi ke script')

let data = [
    {
        id: 1,
        title: 'Baju Muslim Pria',
        price: 50000,
        stock: 31,
        stars: 4,
        pict: 'https://3.bp.blogspot.com/-4YlIbzETC2E/W3_SeWLWEtI/AAAAAAAAEuE/Q5ChzTlsya0DekJPP4xE1NWnr1WD7PBGwCLcBGAs/s1600/baju%2Bmuslim%2Bpria%2Bjudul.jpg'
    },
    {
        id: 2,
        title: 'Outer Pria',
        price: 150000,
        stock: 2,
        stars: 3,
        pict: 'https://id-live-01.slatic.net/p/d604b03546d5acbcc76796f93687b62a.png'
    },
    {
        id: 2,
        title: 'Baju Muslim Pria2',
        price: 50000,
        stock: 31,
        stars: 4,
        pict: 'https://3.bp.blogspot.com/-4YlIbzETC2E/W3_SeWLWEtI/AAAAAAAAEuE/Q5ChzTlsya0DekJPP4xE1NWnr1WD7PBGwCLcBGAs/s1600/baju%2Bmuslim%2Bpria%2Bjudul.jpg'
    },
    {
        id: 3,
        title: 'Baju Muslim Pria3',
        price: 50000,
        stock: 31,
        stars: 4,
        pict: 'https://3.bp.blogspot.com/-4YlIbzETC2E/W3_SeWLWEtI/AAAAAAAAEuE/Q5ChzTlsya0DekJPP4xE1NWnr1WD7PBGwCLcBGAs/s1600/baju%2Bmuslim%2Bpria%2Bjudul.jpg'
    }
]

let box = document.getElementById('item-box');
let html = '';
for (let i = 0; i < data.length; i++) {
    html += `
    <div class="col mb-5">
        <div class="card h-100">
            <!-- Sale badge-->
            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
            <!-- Product image-->
            <img class="card-img-top" src="${data[i]["pict"]}" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${data[i].title}</h5>
                    <!-- Product price-->
                    <span class="text-muted text-decoration-line-through">Rp ${data[i].price}</span>
                    <!-- Product reviews-->
                    <p>Stock: ${data[i]["stock"]}</p>
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-outline-dark mt-auto" onclick="addItemToCart()">Add to cart</a></div>
            </div>
        </div>
    </div>
    `
}
box.innerHTML = html;

function addItemToCart() {
    let cart = document.getElementById('cart-qty');
    let qty = Number(cart.textContent)
    qty++;
    cart.textContent = qty;
}
