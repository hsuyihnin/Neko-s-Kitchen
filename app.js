if ( document.readyState == "loading" )
{
  document.addEventListener( "DOMContentLoaded", showreceipesToUI );
} else
{
  showreceipesToUI();
}

$( '.owl-carousel' ).owlCarousel( {
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
   
 1536: {
      items: 6
    },
  }
} )


let receipes = [];


function AddToReceipesListOne ( receipeone, index = 1 )
{
  const sectionContainer = document.querySelector( ".receipes-container" );
  const container = document.querySelector( ".receipes" );
  const receipeDiv = document.createElement( "div" );
  receipeDiv.classList = ` receipe col-2 px-0`;
  receipeDiv.setAttribute( "data-aos", "fade-right" );
  receipeDiv.setAttribute( "data-aos-delay", index * 100 );
  receipeDiv.innerHTML = `
    <img src=${ receipeone.image } class="w-100 receipe-image" alt=""/>
   <div class="receipe-body p-2">
   <span hidden>${ receipeone.id }</span>
  <h3 class="receipe-title fs-5 fw-bold">${ receipeone.title }</h3>
  <p class="receipe-description">${ receipeone.description }</p>
  <div class="star-widget ">
 <i class="fa-solid fa-star"></i>
 <i class="fa-solid fa-star"></i>
 <i class="fa-solid fa-star"></i>
 <i class="fa-solid fa-star"></i>
 <i class="fa-solid fa-star"></i>
            </div>
  <span class="fs-6">By <a class="fw-bold text-black receipe-author" href="#">${ receipeone.author }</a></span>
  
               
                      </div> <button class="add-button px-2 py-2 mt-1" aria-label="save to bookmark" >
           <i class="fa-solid fa-heart"></i>
                      </button>`;

  container.appendChild( receipeDiv );
  sectionContainer.appendChild( container );
}

function AddToReceipesListTwo ( receipetwo, index = 1 )
{
  const containerSection = document.querySelector( ".receipes-container-two" );
  const receipeContainer = document.querySelector( ".receipes-two" );
  const receipeDiv = document.createElement( "div" );

  receipeDiv.classList = `col-2 receipe px-0`;
  receipeDiv.setAttribute( "data-aos", "fade-up" );
  receipeDiv.setAttribute( "data-aos-delay", index * 100 );
  receipeDiv.innerHTML = `
 <img src=${ receipetwo.image } class="w-100 receipe-image" alt=""/>
  <div class="receipe-body p-2">
  <span hidden>${ receipetwo.id }</span>
  <h3 class="receipe-title fs-5 fw-bold">${ receipetwo.title }</h3>
  <p class="receipe-description">${ receipetwo.description }</p>
  <div class="star-widget ">
 <i class="fa-solid fa-star"></i>
 <i class="fa-solid fa-star"></i>
 <i class="fa-solid fa-star"></i>
 <i class="fa-solid fa-star"></i>
 <i class="fa-solid fa-star"></i>
            </div>
<span class="fs-6">By <a class="fw-bold text-black receipe-author" href="#">${ receipetwo.author }</a></span>
 </div> <button class="add-button py-2 px-2 mt-1"  aria-label="save to bookmark" >
              <i class="fa-solid fa-heart"></i>
                      </button>`;

  receipeContainer.appendChild( receipeDiv );
  containerSection.appendChild( receipeContainer );
}

function AddToReceipesListThree ( receipethree, index = 1 )
{
  const section = document.querySelector( ".receipes-container-three" );
  const container = document.querySelector( ".receipes-three" );
  const receipeDiv = document.createElement( "div" );
  receipeDiv.classList = `col-2 receipe px-0`;
  receipeDiv.setAttribute( "data-aos", "zoom-in" );
  receipeDiv.setAttribute( "data-aos-delay", index * 100 );
  receipeDiv.innerHTML = `<img src=${ receipethree.image } class="w-100 receipe-image" alt=""/>
 <div class="receipe-body p-2">
 <span hidden>${ receipethree.id }</span>
   <h3 class="receipe-title fw-bold fs-5">${ receipethree.title }</h3>
   <p class="receipe-description">${ receipethree.description }</p>

     <div class="star-widget ">
   <i class="fa-solid fa-star"></i>
   <i class="fa-solid fa-star"></i>
   <i class="fa-solid fa-star"></i>
   <i class="fa-solid fa-star"></i>
   <i class="fa-solid fa-star"></i>
             </div>

  <span class="fs-6 ">By <a class="fw-bold text-black receipe-author" href="#">${ receipethree.author }</a></span>
  
                  </div><button class="add-button px-2 py-2 " aria-label="save to bookmark">
             <i class="fa-solid fa-heart"></i>
                       </button> `;

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

      collectionOne = receipesArrOne.slice( 0, 15 );
      collectionOne.forEach( ( receipe, index ) =>
      {
        AddToReceipesListOne( receipe, index );
      } )
      const search = document.querySelector( '#search' );
      const receipeList = document.querySelector( '.receipes' );


      search.addEventListener( 'keyup', () =>
      {

        const searchTerm = search.value.toLowerCase();

        filterReceipes = collectionOne.filter( receipe =>
        {
          return [ receipe.image, receipe.title, receipe.author, receipe.description ].join( '' ).toLocaleLowerCase().includes( searchTerm )
        } );

        receipeList.innerHTML = '';


        filterReceipes.forEach( ( item ) =>
        {
          AddToReceipesListOne( item )
        } )
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

      collectionTwo = receipesArrTwo.slice( 15, 30 );
      collectionTwo.forEach( ( receipe, index ) =>
      {
        AddToReceipesListTwo( receipe, index );
      } )

      const search = document.querySelector( '#search' );
      const receipeList = document.querySelector( '.receipes-two' );
      const shopContainer = document.querySelector( '.shop-container' );
      search.addEventListener( 'keyup', () =>
      {

        const searchTerm = search.value.toLowerCase();

        filterReceipes = collectionTwo.filter( receipe =>
        {
          return [ receipe.image, receipe.title, receipe.author, receipe.description ].join( '' ).toLocaleLowerCase().includes( searchTerm )
        } );

        receipeList.innerHTML = '';
        shopContainer.style.display = 'none';

        filterReceipes.forEach( ( item ) =>
        {
          AddToReceipesListTwo( item )
        } )
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
      collectionThree = receipesArrThree.slice( 30, 50 );
      collectionThree.forEach( ( receipe, index ) =>
      {
        AddToReceipesListThree( receipe, index );
      } );


      const search = document.querySelector( '#search' );
      const receipeList = document.querySelector( '.receipes-three' );
      const containerFive = document.querySelector( '.container-five' );
      const containerThree = document.querySelector( '.container-three' );
      const lateSummer = document.querySelector( '.latesummer-container' );
      const mohinga = document.querySelector( '.mohinga-container' );


      search.addEventListener( 'keyup', () =>
      {

        const searchTerm = search.value.toLowerCase();

        filterReceipes = collectionThree.filter( receipe =>
        {
          return [ receipe.image, receipe.title, receipe.author, receipe.description ].join( '' ).toLocaleLowerCase().includes( searchTerm )
        } );

        receipeList.innerHTML = '';
        containerFive.style.display = 'none';
        containerThree.style.display = 'none';
        lateSummer.style.display = 'none';
        mohinga.style.display = 'none';

        filterReceipes.forEach( ( item ) =>
        {
          AddToReceipesListThree( item )
        } )
      } )


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
  receipes.push( receipe );



  let allReceipes = JSON.parse( localStorage.getItem( "favorites" ) ) || [];
  allReceipes.push( receipe );


  //  for ( let i = 0; i < allReceipes.length; i++ )

  //   if(allReceipes[i].id !==receipe.id) {
  //      console.log( 'saving' );
  //     allReceipes.push(receipe)

  //  }


  localStorage.setItem( 'favorites', JSON.stringify( allReceipes ) )
}

