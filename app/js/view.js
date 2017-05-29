import Icons from '../icons'
import Header from './header.js'

/////////////////////////////////////////////////
// Create view
/////////////////////////////////////////////////

let view = document.createElement('div')
view.setAttribute('id', 'view')
document.body.appendChild(view)

/////////////////////////////////////////////////
// Header
/////////////////////////////////////////////////
// import header from './html/header.html'

let maHeader = new Header









// /////////////////////////////////////////////////
// // Site Icons
// /////////////////////////////////////////////////
//
// let maIcons = new Icons
// let testDecode = decodeURI(maIcons.triangle)
//
// function template() {
//   let itemTemplate =  `<div class="site">
//                   <section>
//                   <h2>Lorem</h2>
//                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ex fugit architecto mollitia illo expedita cumque, inventore, perferendis natus maxime voluptas praesentium dicta illum! Itaque odit tenetur sapiente animi dolore.</p>
//                   <img src="./columbus.jpg" width="50">
//                   </section>
//                 </div>`
//   return itemTemplate
// }
//
// view.innerHTML = template()
// document.body.appendChild(view)





var myImage = document.querySelector('img');

fetch('./offers.jpg').then(function(response) {
  return response.blob();
}).then(function(myBlob) {
  var objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
});
