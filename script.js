let items = [
    {
        name: 'Ironhack T',
        price: 10,
        image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*aVsUjp1zvlRb1799gDjbLA@2x.jpeg'
    },
    {
        name: 'Ironhack Hoodie',
        price: 15,
        image: 'https://th.bing.com/th/id/OIP.2VbLRPpObDTNU4TDYvzPNQHaIE?w=187&h=204&c=7&r=0&o=5&pid=1.7'
    },
    {
        name: 'Ironhack Sticker',
        price: 2,
        image: 'https://th.bing.com/th/id/OIP.vjIBRfZqB0Tf6cNhGeCS_wHaDZ?w=346&h=160&c=7&r=0&o=5&pid=1.7'
    },
    {
        name: 'Ironhack Mug',
        price: 8,
        image: 'https://th.bing.com/th/id/OIP.FhvvKdWeF4R8vr03kCjDwQHaHa?w=188&h=188&c=7&r=0&o=5&pid=1.7'
    }
]

let cart = []

let list = document.querySelector('#items')

items.forEach((item, i) => {
    list.innerHTML += `<li>
        <div>Name:${item.name}</div>
        <div>Price:${item.price}</div>
        <image src="${item.image}"/>
        <input type="number" placeholder="quantity" onchange='inputChange(${i}, "${item.name}", "${item.price}", "${item.image}")'/>
        <button>Buy Item</button>
        </li>`
});

function showCart () {
        let cartItems = document.querySelector('#cart')
        let grandTotal = 0;
        cartItems.innerHTML = ''
        cart.forEach((item, i) => {
            grandTotal += item.price * item.quantity
            cartItems.innerHTML += `<li>
                <div>Name:${item.name}</div>
                <div>Quantity: ${item.quantity}</div>
                <image src="${item.image}"/>
                </li>`
        })

        document.querySelector('#grandTotal').innerHTML = '$' +grandTotal
}

function inputChange (i, name, price, image) {
    console.log('I want to buy the ',i,' item named ' ,name, 'that costs $',price);
    let listItem = document.querySelectorAll('li')[i]
    let input = listItem.querySelector('input')
    let button = listItem.querySelector('button')

    button.onclick = function () {
        cart.push({
            quantity: input.value,
            name: name,
            price: price,
            image: image
        })
        console.log(cart)
        showCart()
    }
}






