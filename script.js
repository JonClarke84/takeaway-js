const menuItems = document.getElementById('menu-items')
const body = document.querySelector('body')
let totalPrice = document.getElementById('total-price')

const menuList = [
  {name: 'Curry', price: 9, quantity: 0},
  {name: 'Chicken', price: 10, quantity: 0},
  {name: 'Beef', price: 20, quantity: 0},
  {name: 'Fish', price: 11, quantity: 0},
  {name: 'Pork', price: 12, quantity: 0},
  {name: 'Vegetarian Curry', price: 9, quantity: 0},
  {name: 'Vegan Pizza', price: 12, quantity: 0},
]

function displayMenu (menuList) {
  menuList.forEach(item => {
    menuItems.innerHTML += `<tr>
                        <td>${item.name}</td>
                        <td class="price">£${item.price}</td>
                        <form name="${item.name}-button">
                        <td><input type="number" name="total-item-value" value="${item.quantity}" min="0" /></td>
                        <td><button class="add-item" id="${item.name}-button" onclick="buttonClick()">Add Item</button></td>
                        </form>
                      </tr>`
  })
}

function convertPriceToFloat (price) {
  return parseFloat(price.replace('£', ''))
}

let orderTotal = 0.00

function buttonClick() {
  const form = event.target.parentNode.parentNode
  const quantity = parseInt(form.querySelector('input').value) + 1
  const price = convertPriceToFloat(form.parentNode.querySelector('.price').innerText)
  const input = form.querySelector('input')
  input.value = quantity
  orderTotal += parseFloat(price.toFixed(2))
  totalPrice.value = `${orderTotal.toFixed(2)}`
}

function placeOrder () {
  const order = document.getElementById('total-price').value
  body.innerHTML = `<h1>Thank you for your order!</h1>`
  body.innerHTML += `<p>Your order total is: £${order}</p>`
}

displayMenu(menuList)