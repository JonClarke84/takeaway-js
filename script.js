const menuItems = document.getElementById('menu-items')
const section = document.querySelector('section')
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
                        <td class="item-name">${item.name}</td>
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


function checkIfOrderContainsItem(currentOrderList, newItem) {
  return currentOrderList.some(existingItem => existingItem.name === newItem.name)
}

function createNewItem(itemName, itemPrice) {
  return {
    name: itemName,
    price: itemPrice,
    quantity: 1
  }
}

function pushItemToCurrentOrderList (itemName, itemPrice) {
  const newItem = createNewItem(itemName, itemPrice)

  if (checkIfOrderContainsItem(currentOrderList, newItem)) {
    currentOrderList.forEach(item => {
      if (item.name === itemName) { item.quantity += 1 }
    })
  }
  else {
    currentOrderList.push(newItem)
  }
}

function addItemToCurrentOrderList(itemName, itemPrice) {
  if(currentOrderList.length == 0) {
    currentOrderList.push(createNewItem(itemName, itemPrice))
  }
  else {
    pushItemToCurrentOrderList(itemName, itemPrice)
  }
}

let orderTotal = 0.00
let currentOrderList = []

function buttonClick() {
  const form = event.target.parentNode.parentNode
  const itemName = form.parentNode.querySelector('.item-name').innerText
  const itemQuantity = parseInt(form.querySelector('input').value) + 1
  const itemPrice = convertPriceToFloat(form.parentNode.querySelector('.price').innerText)
  const input = form.querySelector('input')

  addItemToCurrentOrderList(itemName, itemPrice)
  console.log(currentOrderList)
  input.value = itemQuantity
  orderTotal += itemPrice
  totalPrice.value = `${orderTotal.toFixed(2)}`
}

function printOrderToScreen() {
  section.innerHTML += `<h2>Your order:</h2>`
  currentOrderList.forEach(item => {
    section.innerHTML += `<li>${item.name} x ${item.quantity}</li>`
  })
}

function placeOrder () {
  const order = document.getElementById('total-price').value
  section.innerHTML = `<h2>Thank you for your order!</h2>`
  printOrderToScreen()
  section.innerHTML += `<p>Your order total is: £${order}</p>`
  notify()
}

displayMenu(menuList)