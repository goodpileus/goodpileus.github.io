function gridShow() {
  $( ".grid-overlay" ).toggleClass( "active" );
}

function tenP() {
  $( "img" ).css({
    'height': '10%'
  });
  $( ".hor" ).css({
    'height': '10%'
  });
  console.log("10%");
}

function twentyP() {
  $( "img" ).css({
    'height': '20%'
  });
  $( ".hor" ).css({
    'height': '20%'
  });
  console.log("20%");
}

function thirtyP() {
  $( "img" ).css({
    'height': '33.3333%'
  });
  $( ".hor" ).css({
    'height': '33.3333%'
  });
  console.log("33.3333%");
}

function fiftyP() {
  $( "img" ).css({
    'height': '50%'
  });
  $( ".hor" ).css({
    'height': '50%'
  });
  console.log("50%");
}

function hundredP() {
  $( "img" ).css({
    'height': '100%'
  });
  $( ".hor" ).css({
    'height': '100%'
  });
  console.log("100%");
}

function nu() {
  var random = document.querySelector('.random');
  for (var i = random.children.length; i >= 0; i--) {
    random.appendChild(random.children[Math.random() * i | 0]);
  }
}

// $( "img" ).click(function() {
//   $( 'img' ).removeClass( "zoom" );
//   $( this ).addClass( "zoom" );
// });

// window.onload = function() {
//     baseliner = new Baseliner(20);
// }


// function getCoords(elem) { // crossbrowser version
//   var box = elem.getBoundingClientRect();
//
//   var body = document.body;
//   var docEl = document.documentElement;
//
//   var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
//   var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
//
//   var clientTop = docEl.clientTop || body.clientTop || 0;
//   var clientLeft = docEl.clientLeft || body.clientLeft || 0;
//
//   var top  = box.top +  scrollTop - clientTop;
//   var left = box.left + scrollLeft - clientLeft;
//
//   return { top: Math.round(top), left: Math.round(left) };
// }

// const getCoords = (element, position) => {
//   const { top, left, width, height } = element.getBoundingClientRect();
//   let point;
//   switch (position) {
//     case "top left":
//       point = {
//         x: left + window.pageXOffset,
//         y: top + window.pageYOffset
//       };
//       break;
//     case "top center":
//       point = {
//         x: left + width / 2 + window.pageXOffset,
//         y: top + window.pageYOffset
//       };
//       break;
//     case "top right":
//       point = {
//         x: left + width + window.pageXOffset,
//         y: top + window.pageYOffset
//       };
//       break;
//     case "center left":
//       point = {
//         x: left + window.pageXOffset,
//         y: top + height / 2 + window.pageYOffset
//       };
//       break;
//     case "center":
//       point = {
//         x: left + width / 2 + window.pageXOffset,
//         y: top + height / 2 + window.pageYOffset
//       };
//       break;
//     case "center right":
//       point = {
//         x: left + width + window.pageXOffset,
//         y: top + height / 2 + window.pageYOffset
//       };
//       break;
//     case "bottom left":
//       point = {
//         x: left + window.pageXOffset,
//         y: top + height + window.pageYOffset
//       };
//       break;
//     case "bottom center":
//       point = {
//         x: left + width / 2 + window.pageXOffset,
//         y: top + height + window.pageYOffset
//       };
//       break;
//     case "bottom right":
//       point = {
//         x: left + width + window.pageXOffset,
//         y: top + height + window.pageYOffset
//       };
//       break;
//   }
//   return point;
// };

// jQuery.fn.getCoord = function()
// {
//   var elem = $(this);
//   var x = elem.offset().left;
//   var y = elem.offset().top;
//   console.log('x: ' + x + ' y: ' + y);
//   //output: x: 70 y: 40
//
//   return {
//       "x" : x,
//       "y" : y
//   };
//
//   //note that it is not efficient as it breaks the jQuery chain
//   //return elem;
// };

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

// example use
// var div = document.querySelector('div');
// var divOffset = offset(div);
// console.log(divOffset.left, divOffset.top);

$('img').click(function(){
	var pos = offset(this);
  console.log(pos);
  if((pos.left) <= window.screen.width/4){
    $( 'img' ).removeClass( "zoom" );
    $( this ).toggleClass( "zoom" );
  	$(this).css({
    	'transform-origin': 'left'
    });
  }
  else if((pos.left) >= window.screen.width - window.screen.width/4){
    $( 'img' ).removeClass( "zoom" );
    $( this ).addClass( "zoom" );
  	$(this).css({
    	'transform-origin': 'right'
    });
  }
  else if((pos.left) >= window.screen.width/4){
    $( 'img' ).removeClass( "zoom" );
    $( this ).addClass( "zoom" );
  	$(this).css({
    	'transform-origin': 'center'
    });
  }
});


$( document ).ready(function() {
  var random = document.querySelector('.random');
  for (var i = random.children.length; i >= 0; i--) {
    random.appendChild(random.children[Math.random() * i | 0]);
  }
});
