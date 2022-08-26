// if ( document.readyState == "loading" )
// {
//     document.addEventListener( "DOMContentLoaded", saveToBookmark );
// } else
// {
//     saveToBookmark();
// }

 const receipes = JSON.parse( localStorage.getItem( "favorites" ) );
 for ( let i = 0; i < receipes.length; i++ )
 {
   saveToBookmark( receipes[ i ] );
     console.log( receipes[ i ] );
 }

 function saveToBookmark ( data )
 {

     const receipelistContainer = document.querySelector( '.receipelist-container' );
     const receipesRow = document.querySelector( '.receipes' );
     const receipeEl = document.createElement( 'div' );
     receipeEl.classList = `receipe col-2 p-0`;
     receipeEl.innerHTML = `<img  src=${ data.image } class="w-100" alt="" />
             <div class="receipe-body">
               <h3 class="fs-5 fw-bold">${ data.title }</h3>
               <p class="fs-6">
               ${ data.description }
               </p>
               <span>By <a href="">${ data.author }</a></span>
             </div>`;
     receipesRow.appendChild( receipeEl );
     receipelistContainer.appendChild( receipesRow );
 }
