// ITERATION 1


function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;


  const subtotal = price * quantity;


  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotal;


  return subtotal;
}


// ITERATION 2


function calculateAll() {
 
  const allProducts =document.getElementsByClassName('product');
  let totalPrice = 0;
 
// ITERATION 3


  for (let singleProduct of allProducts) {
    totalPrice += updateSubtotal(singleProduct);
  }
  document.querySelector('#total-value span').innerHTML = `$${totalPrice}`;
}


// ITERATION 4


function removeProduct(event) {
  const target = event.currentTarget;
  let currentProduct = target.parentNode.parentNode;
  currentProduct.remove();
  calculateAll();
}


// ITERATION 5


function createProduct() {
  let newProductName = document.querySelector('.newName').value;
  let newProductPrice = document.querySelector('.newPrice').value;


  if (newProductName === '' || newProductPrice === '') {
    return;
  }


  let newRow = document.createElement('tr');
  newRow.classList.add('product');


  newRow.innerHTML = `
    <td class="name">
      <span>${newProductName}</span>
    </td>
    <td class="price">$<span>${newProductPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>${0}</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;


  let productList = document.querySelector('#cart tbody');
  productList.appendChild(newRow);


  let removeButtons = document.querySelectorAll('.btn-remove');
  for (let removeButton of removeButtons) {
    removeButton.addEventListener('click', removeProduct);
  }


  document.querySelector('#new-product-name').value = '';
  document.querySelector('#new-product-price').value = '';
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);


  const removeButtons = document.querySelectorAll('.btn-remove');
  for (let removeButton of removeButtons) {
    removeButton.addEventListener('click', removeProduct);
  }
 
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
  });

