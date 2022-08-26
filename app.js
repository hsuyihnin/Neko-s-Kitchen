if ( document.readyState == "loading" )
{
  document.addEventListener( "DOMContentLoaded", showreceipesToUI );
} else
{
  showreceipesToUI();
}


$( ".owl-carousel" ).owlCarousel( {
  loop: true,
  margin: 0,
  gap: 1,
  responsiveClass: true,
  responsive: {
    0: {
      items: 6,
    },

    1496: {
      items: 6,
    },
    640: {
      items: 3,
    },
  },
} );

function AddToReceipesListOne ( receipeone )
{
  const sectionContainer = document.querySelector( ".receipes-container" );
  const container = document.querySelector( ".receipes" );
  const receipeDiv = document.createElement( "div" );
  receipeDiv.classList = `bg-white receipe col-2 px-0`;
  receipeDiv.innerHTML = `
    <img src=${ receipeone.image } class="w-100 receipe-image" alt=""/>
   <div class="receipe-body p-2">
   <span hidden>${ receipeone.id }</span>
  <h3 class="receipe-title fs-5 fw-bold">${ receipeone.title }</h3>
  <p class="receipe-description">${ receipeone.description }</p>
  <div class="star-widget ">
  <input type="radio" name="rate" id="rate-5">
  <label for ="rate-5" class="fas fa-star"></label>
  <input type="radio" name="rate" id="rate-4">
  <label for ="rate-4" class="fas fa-star"></label>
  <input type="radio" name="rate" id="rate-3">
  <label for ="rate-3" class="fas fa-star"></label>
  <input type="radio" name="rate" id="rate-2">
  <label for ="rate-2" class="fas fa-star"></label>
  <input type="radio" name="rate" id="rate-1">
  <label for ="rate-1" class="fas fa-star"></label>
            </div>
  <span class="fs-6">By <a class="fw-bold text-black receipe-author" href="#">${ receipeone.author }</a></span>
  
                <a class="add-button px-2 py-2 mt-1" aria-label="save to bookmark" href="#">
           <i class="fa-solid fa-heart"></i>
                      </a>
                      </div>`;

  container.appendChild( receipeDiv );
  sectionContainer.appendChild( container );
}

function AddToReceipesListTwo ( receipetwo )
{
  const containerSection = document.querySelector( ".receipes-container-two" );
  const receipeContainer = document.querySelector( ".receipes-two" );
  const receipeDiv = document.createElement( "div" );
  receipeDiv.classList = `col-2 receipe bg-white px-0`;
  receipeDiv.innerHTML = `
 <img src=${ receipetwo.image } class="w-100 receipe-image" alt=""/>
  <div class="receipe-body p-2">
  <span hidden>${ receipetwo.id }</span>
  <h3 class="receipe-title fs-5 fw-bold">${ receipetwo.title }</h3>
  <p class="receipe-description">${ receipetwo.description }</p>

    <div class="star-widget ">
  <input type="radio" name="rate" id="rate-5">
  <label for ="rate-5" class="fas fa-star"></label>
  <input type="radio" name="rate" id="rate-4">
  <label for ="rate-4" class="fas fa-star"></label>
  <input type="radio" name="rate" id="rate-3">
  <label for ="rate-3" class="fas fa-star"></label>
  <input type="radio" name="rate" id="rate-2">
  <label for ="rate-2" class="fas fa-star"></label>
  <input type="radio" name="rate" id="rate-1">
  <label for ="rate-1" class="fas fa-star"></label>
            </div>

  <span class="fs-6">By <a class="fw-bold text-black receipe-author" href="#">${ receipetwo.author }</a></span>
  <a class="add-button py-2 px-2 mt-1"  aria-label="save to bookmark" href="#">
              <i class="fa-solid fa-heart"></i>
                      </a>
 </div>`;

  receipeContainer.appendChild( receipeDiv );
  containerSection.appendChild( receipeContainer );
}

function AddToReceipesListThree ( receipethree )
{
  const section = document.querySelector( ".receipes-container-three" );
  const container = document.querySelector( ".receipes-three" );
  const receipeDiv = document.createElement( "div" );
  receipeDiv.classList = `col-2 receipe bg-white px-0`;
  receipeDiv.innerHTML = `<img src=${ receipethree.image } class="w-100 receipe-image" alt=""/>
 <div class="receipe-body p-2">
 <span hidden>${ receipethree.id }</span>
   <h3 class="receipe-title fw-bold fs-5">${ receipethree.title }</h3>
   <p class="receipe-description">${ receipethree.description }</p>

     <div class="star-widget ">
   <input type="radio" name="rate" id="rate-5">
   <label for ="rate-5" class="fas fa-star"></label>
   <input type="radio" name="rate" id="rate-4">
   <label for ="rate-4" class="fas fa-star"></label>
   <input type="radio" name="rate" id="rate-3">
   <label for ="rate-3" class="fas fa-star"></label>
   <input type="radio" name="rate" id="rate-2">
   <label for ="rate-2" class="fas fa-star"></label>
   <input type="radio" name="rate" id="rate-1">
   <label for ="rate-1" class="fas fa-star"></label>
             </div>

  <span class="fs-6">By <a class="fw-bold text-black receipe-author" href="#">${ receipethree.author }</a></span>
  
              <a class="add-button px-2 py-2 " aria-label="save to bookmark" href="#">
             <i class="fa-solid fa-heart"></i>
                       </a>     </div>`;

  container.appendChild( receipeDiv );
  section.appendChild( container );
}

function showreceipesToUI ()
{
  let receipesArrOne = [];
  fetch( "receipes.json" )
    .then( ( res ) => res.json() )
    .then( ( receipes ) =>
    {
      receipesArrOne = receipes;

      collectionOne = receipesArrOne.slice( 0, 5 );
      collectionOne.forEach( ( receipe ) =>
      {
        AddToReceipesListOne( receipe );
      } )
      var saveToCartButtons = document.querySelectorAll( ".add-button" );
      saveToCartButtons.forEach( ( button ) =>
      {
        button.addEventListener( "click", saveToCart );
      } )
    } ).catch( ( error ) => console.log( error ) );


  let receipesArrTwo = [];
  fetch( "receipes.json" )
    .then( ( res ) => res.json() )
    .then( ( receipes ) =>
    {
      receipesArrTwo = receipes;

      collectionTwo = receipesArrTwo.slice( 5, 15 );
      collectionTwo.forEach( ( receipe ) =>
      {
        AddToReceipesListTwo( receipe );
      } )
      var saveToCartButtons = document.querySelectorAll( ".add-button" );
      saveToCartButtons.forEach( ( button ) =>
      {
        button.addEventListener( "click", saveToCart );
      } )
    } ).catch( ( error ) => console.log( error ) );

  let receipesArrThree = [];
  fetch( "receipes.json" )
    .then( ( res ) => res.json() )
    .then( ( receipes ) =>
    {
      receipesArrThree = receipes;
      collectionThree = receipesArrThree.slice( 15, 25 );
      collectionThree.forEach( ( receipe ) =>
      {
        AddToReceipesListThree( receipe );
      } );
      var saveToCartButtons = document.querySelectorAll( ".add-button" );
      saveToCartButtons.forEach( ( button ) =>
      {
        button.addEventListener( "click", saveToCart );
      } )
    } ).catch( ( error ) => console.log( error ) );
}


function saveToCart ( event )
{
  const receipeRow = event.target.closest( ".receipe" );
  const image = receipeRow.querySelector( ".receipe-image" ).src;
  const title = receipeRow.querySelector( ".receipe-title" ).textContent;
  const description = receipeRow.querySelector( ".receipe-description" ).textContent;
  const author = receipeRow.querySelector( ".receipe-author" ).textContent;
  const id = receipeRow.querySelector( "span" ).textContent;

  let receipe = {
    image: image,
    title: title,
    description: description,
    author: author,
    id: Number( id ),
  }

  console.log( receipe );
  let allReceipes = JSON.parse( localStorage.getItem( "favorites" ) ) || [];

 for ( let i = 0; i < allReceipes.length; i++ )
 {
   if ( allReceipes[ i ].id !== receipe.id )
   {
     allReceipes.push(receipe);
   }
   
 }
  
  localStorage.setItem( 'favorites', JSON.stringify( allReceipes ) );
}

