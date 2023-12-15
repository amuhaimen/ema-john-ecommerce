import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
  const loadedProducts = await fetch("products.json");
  const products = await loadedProducts.json();

  //if cart data is in databasse ,you have to use async await
  const storedCart = getShoppingCart();
  const saveCart = [];

  //=== object er upor loop korte hole for in use korte hoy ;

  for (const id in storedCart) {
    const addedProduct = products.find((pd) => pd.id === id);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      saveCart.push(addedProduct);
    }
  }

  //if you need to send two things
  //return [products,saveCart]
  //another option  {products,saveCart}

  // console.log(storedCart);

  // console.log(products);
  return saveCart;
};

export default cartProductsLoader;
