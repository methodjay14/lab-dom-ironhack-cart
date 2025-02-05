// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML
  console.log("price is " + price)


  const quantity = product.querySelector(".quantity input")
  console.log(quantity.value);



  let priceTimesQuantity = price * quantity.value
  const subtotal = product.querySelector(".subtotal span")
  console.log(subtotal)
  subtotal.innerHTML = priceTimesQuantity;




  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.getElementsByClassName('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  var multiProduct = document.getElementsByClassName("product");
  for (i = 0; i < multiProduct.length; i++) {
    updateSubtotal(multiProduct[i]);
  }

  // ITERATION 3
  //... your code goes here
  const total = document.querySelector("#total-value span").innerHTML;
  console.log(total)

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});