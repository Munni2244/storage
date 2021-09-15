const loadProduct = ()=> {
const  cart = getCart();
for(const name in cart){
    displayProduct(name);
}
}

const addItem= ()=>{
    const InputField= document.getElementById('addInput');
    const Inputvalue= InputField.value;
 if(!Inputvalue){
     return;
 }

    displayProduct(Inputvalue);
    addProductToCart(Inputvalue)
    InputField.value='';
}

const displayProduct = values =>{
   const container =document.getElementById('products');
   const li = document.createElement('li');
   li.innerText=values;
   container.appendChild(li);
}

const getCart =()=> {
    const cart =localStorage.getItem('cart');
    console.log(cart);
    let cartObj;
     if(cart){
         cartObj= JSON.parse(cart);
     }
     else{
         cartObj= {};
     }
     return cartObj;
}

const addProductToCart = name => {
    const cart = getCart();
    if(cart[name]){
        cart[name] =cart[name]+1;
    }
    else{
        cart[name] =1;
    }
    // console.log(cart);

    const cartStingify= JSON.stringify(cart);
    localStorage.setItem('cart', cartStingify);
}

const placeOrder =()=> {
    document.getElementById('products').textContent= '';
    localStorage.removeItem('cart');
}

loadProduct();