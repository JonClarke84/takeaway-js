const menuItems = document.getElementById('menu-items')

const menuList = [
  {item: 'Curry', price: 8.99},
  {item: 'Chicken', price: 9.99},
  {item: 'Beef', price: 19.99},
  {item: 'Fish', price: 10.99},
  {item: 'Pork', price: 10.99},
  {item: 'Vegetarian Curry', price: 8.99},
  {item: 'Vegan Pizza', price: 11.99}
]

function displayMenu (menuList) {
  menuList.forEach(item => {
    menuItems.innerHTML += `<tr>
                        <td>${item.item}</td>
                        <td>£${item.price}</td>
                      </tr>`
  })
  menuItems.innerHTML += `</table>`
}

displayMenu(menuList)
console.log(menuList)