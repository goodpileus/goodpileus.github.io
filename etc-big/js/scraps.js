
// EXTRA GETCOORDS FUNCTIONS


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
