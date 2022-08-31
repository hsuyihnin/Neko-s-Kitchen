if ( document.readyState == "loading" )
{
    document.addEventListener( "DOMContentLoaded", showProductsToUI );
} else
{
    showProductsToUI();
}



function showProductsToUI ()
{
    fetch( "machines.json" )
        .then( ( res ) => res.json() )
        .then( ( products ) =>
        {
            products.forEach( ( product ) => showProductToList( product ) )

            const buttons = document.querySelectorAll( ".btn" );
            buttons.forEach( ( button ) =>
            {
                button.addEventListener( "click", addToCart )
            } );
        } )
}

function addToCart ( event )
{
    const product = event.target.closest( ".product" );
    const image = product.querySelector( ".image" ).src;
    const title = product.querySelector( ".title" ).textContent;
    const price = product.querySelector( ".price" ).textContent;
    addToCartUI( image, title, price );
updateCart();
}


function addToCartUI ( image, title, price )
{
    const cartProducts = document.querySelector( '.cart-products' );
    const div = document.createElement( 'div' );

    const cartTitle = document.querySelectorAll( '.cart-title' );
    for ( let i = 0; i < cartTitle.length; i++ )
    {
        if ( cartTitle[ i ].textContent === title )
        {
            alert( 'Products are already added to yout cart.' );
            return;
        }
    }
    div.classList = `cart-product row justify-content-around align-items-center border py-3 px-1 fs-6`;
    div.innerHTML = ` <div class="cart-image col-2 p-0">
                       <img class=" w-100" src=${ image } alt="" /></div>
                               <div class="col-8 p-0">

                                    <h3 class="cart-title fs-6">${ title }</h3>
                                    <div class="d-flex justify-content-between">
                                        <input class='cart-quantity-input' type='number' min='1' value='1' />
                                        <span>$</span>
                                        <p class="cart-price">${ price }</p>


                                    </div>

                                    <button class="cart-remove btn btn-danger btn-sm text-center rounded-full mt-2">
                                        <i class="fa-solid fa-trash fa-sm"></i>
                                    </button>
                                </div>`;

    cartProducts.appendChild( div );
    div.querySelector( '.cart-remove' ).addEventListener( 'click', removeProduct );
   
const cardSideBar = document.querySelector( '#card-sidebar' );
const totalItems = cardSideBar.querySelector( 'h5' );
const items = document.querySelectorAll( '.cart-product' );
    totalItems.innerHTML = `<span>My Cart (${ items.length })</span>`;
    div.querySelector( '.cart-quantity-input' ).addEventListener( 'change', quantityChange );
}
function removeProduct (event)
{
    const removeConfirm = confirm( "Are you sure to remove?" );
    if ( removeConfirm )
    {

        event.target.closest('.cart-product').remove();
    }
    updateCart();
}

function quantityChange (event)
{
    const input = event.target;
    if ( input.value < 1 )
    {
        input.value=1
    };
    updateCart();
}

function showProductToList ( item )
{
    const productSection = document.querySelector( ".machineone-container" );
    const productContainer = document.querySelector( ".products" );
    const div = document.createElement( "div" );
    div.classList = `product d-flex`;
    div.innerHTML = `<img class="image w-100 p-0" src=${ item.image } alt=""/>
<div class="text py-2 px-3">
    <h2 class="fw-bold mb-2 title">${ item.title }</h2>
    <span>$</span>
    <small class="fs-4 fw-bold price"> ${ item.price }</small>
    <div class="d-flex option my-3">
        <div class="border border-3 border-dark rounded-3">
<p class="m-0 fw-bold ">Subscribe</p>

<small class="fw-bold ">$${ item.price }</small>
        </div>

        <div class="border border-3 rounded-3">
<p class="m-0 ">One-Time</p>
<small>$${ item.pricetwo }</small>
        </div>
    </div>

    <p>Choose your Delivery Frequency : <i class="fa-solid fa-circle-exclamation"></i></p>

<div class="d-flex option-two mb-2">

<div class="border border-3 border-dark rounded-3">
<p class="m-0">Every 2 months</p>
<small>high use</small>
</div>
<div class="border border-3 rounded-3">
    <p class="m-0">Every 4 months</p>
    <small>medium use</small>
</div>
<div  class="border border-3 rounded-3">
    <p class="m-0">Every 6 months</p>
<small>low use</small></div>

</div>
<button class="btn">Add To Cart</button>

<div class="d-flex flex-column descripe mt-2">
    <div class="name">Description</div>
    <div class="detail">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quae adipisci, rem voluptatibus corporis alias maiores consectetur quod velit voluptatum.</p>
        <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vitae, id consectetur sit deserunt laborum.</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi et maiores eos corrupti vitae dolorem!</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quibusdam suscipit et nesciunt veniam quidem!</li>
        </ul>
        <p>View our <span>shipping & returns</span> policy.</p>
    </div>
</div>

</div>
`;
    productContainer.appendChild( div );
    productSection.appendChild( productContainer );

}
function updateCart ()
{
    const container = document.querySelector( '.cart-products' );
    const products = container.querySelectorAll( '.cart-product' );
    let total = 0;
    products.forEach( ( product ) =>
    {
        const priceEl = product.querySelector( '.cart-price' );
        const quantityinput = product.querySelector( '.cart-quantity-input' );
    
        const price =  Number(priceEl.textContent);
        const quantity = quantityinput.value;
        console.log(quantity)
        total += price * quantity;
        console.log( total );

    } )
    document.querySelector( '.total-price' ).textContent = total;
}

