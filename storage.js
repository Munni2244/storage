const input =document.getElementById('inputId');
const container= document.getElementById('container');

/// show items url
const loadProducts=()=>{
const showProduct= JSON.parse(localStorage.getItem('cart'));
for(const items in showProduct){
    displayProduct(items);
}

}

//get input value
const inputValue= ()=>{
    const inputText= input.value; // if input is null
    if(!inputText){
        return;
    }
    input.value='';
    displayProduct(inputText);
    addProductToCart(inputText);
}

//create product
const  displayProduct=(values)=>{
    const li= document.createElement('li');
    li.innerText=`${values}`;
    container.appendChild(li);
}

//get object cart
const getCart =()=>{
const addCart= localStorage.getItem('cart');
// console.log(addCart);
let cartObj;
if(addCart){
    cartObj =JSON.parse(addCart);
}
else{
    cartObj= {};
}
return cartObj;
}


//set  object products
const addProductToCart =(name)=>{
    const cart = getCart();
    if(cart[name]){
        cart[name]=cart[name] +1;
    }
    else{
        cart[name]=1;
    }
    console.log(cart);
    const stringify=JSON.stringify(cart);
    localStorage.setItem('cart', stringify)
}


//remove item
const deleteProduct=()=>{
    document.getElementById('container').textContent='';
    localStorage.removeItem('cart');
}
//load url
 loadProducts();