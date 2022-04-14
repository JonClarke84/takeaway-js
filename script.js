const menuItems = document.getElementById('menu-items')
const section = document.querySelector('section')
const totalPrice = document.getElementById('total-price').form[0]
const placeOrderButton = document.getElementById('place-order-button')

// the menuList ought to come in from a database. This is just a placeholder
const menuList = [
  {name: 'Curry', price: 9, quantity: 0},
  {name: 'Chicken', price: 10, quantity: 0},
  {name: 'Beef', price: 20, quantity: 0},
  {name: 'Fish', price: 11, quantity: 0},
  {name: 'Pork', price: 12, quantity: 0},
  {name: 'Vegetarian Curry', price: 9, quantity: 0},
  {name: 'Vegan Pizza', price: 12, quantity: 0},
]

document.addEventListener("DOMContentLoaded", () => {
  displayMenu(menuList)
  createAddItemButtons()
})

function createAddItemButtons() {
  const addItemButtonsNodeList = document.querySelectorAll(".add-item-button")
  const addItemButtons = Array.from(addItemButtonsNodeList)
  addItemButtons.forEach( (button) => {
    button.addEventListener('click', () => {
      menuList.forEach(item => {
        if (item.name === button.name) {
          item.quantity += 1
          button.parentElement.parentElement.children[3].firstChild.value = item.quantity
          totalPrice.value = calculateTotal()
        }
      })
    })
  })
}

totalPrice.addEventListener('click', () => {
  calculateTotal()
  placeOrder()
})

placeOrderButton.addEventListener('click', () => {
  placeOrder()
})

function displayMenu (menuList) {
  menuList.forEach(item => {
    menuItems.innerHTML += `<tr>
                        <td class="item-name">${item.name}</td>
                        <td class="price">£${item.price}</td>
                        <form name="${item.name}-button">
                        <td><input type="number" name="total-item-value" value="${item.quantity}" min="0" readonly /></td>
                        <td><button class="add-item-button" id="${item.name}" name="${item.name}">Add Item</button></td>
                        </form>
                      </tr>`
  })
}

function calculateTotal() {
  let orderTotal = 0
  menuList.forEach(item => {
    orderTotal += item.price * item.quantity
    })
  return orderTotal
}

function printOrderToScreen() {
  section.innerHTML += `<h2>Your order:</h2>`
  menuList.forEach(item => {
    if (item.quantity > 0) {
      section.innerHTML += `<li>${item.name} x ${item.quantity}</li>`
    }
  })
}

function placeOrder () {
  const order = document.getElementById('total-price').value
  section.innerHTML = `<h2>Thank you for your order!</h2>`
  printOrderToScreen()
  section.innerHTML += `<p>Your order total is: £${order}</p>`
  //send text message would go here if I could work out how to do it
  //I can get a node file to send, but not fire off this function
}