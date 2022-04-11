const menuItems = document.getElementById('menu-items')

const menuList = [
  {name: 'Curry', price: 8.99, quantity: 0},
  {name: 'Chicken', price: 9.99, quantity: 0},
  {name: 'Beef', price: 19.99, quantity: 0},
  {name: 'Fish', price: 10.99, quantity: 0},
  {name: 'Pork', price: 10.99, quantity: 0},
  {name: 'Vegetarian Curry', price: 8.99, quantity: 0},
  {name: 'Vegan Pizza', price: 11.99, quantity: 0},
]

function displayMenu (menuList) {
  menuList.forEach(item => {
    menuItems.innerHTML += `<tr>
                        <td>${item.name}</td>
                        <td>£${item.price}</td>
                        <form name="${item.name}-button">
                        <td><input type="number" value="${item.quantity}" min="0" /></td>
                        <td><button class="add-item" id="${item.name}-button" onclick="buttonClick()">Add Item</button></td>
                        </form>
                      </tr>`
  })
  menuItems.innerHTML += `</table>`
}


function buttonClick() {
  const form = event.target.parentNode.parentNode
  const quantity = parseInt(form.querySelector('input').value)
  const input = form.querySelector('input')
  input.value = quantity + 1
}
displayMenu(menuList)