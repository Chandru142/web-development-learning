let products = [];

function addProduct() {
  let name = document.getElementById("productName").value;

  let price = Number(document.getElementById("price").value);

  let stock = Number(document.getElementById("stock").value);

  let product = {
    name: name,
    price: price,
    stock: stock,
  };

  products.push(product);

  let output = "";

  for (let product of products) {
    output =
      output +
      product.name +
      " - ₹" +
      product.price +
      " - Stock: " +
      product.stock +
      "<br>";
  }

  document.getElementById("products").innerHTML = output;
}
