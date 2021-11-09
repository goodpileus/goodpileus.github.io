var random = document.querySelector('.random');
for (var i = random.children.length; i >= 0; i--) {
  random.appendChild(random.children[Math.random() * i | 0]);
}

var random2 = document.querySelector('.random2');
for (var i = random2.children.length; i >= 0; i--) {
  random2.appendChild(random2.children[Math.random() * i | 0]);
}

var random3 = document.querySelector('.random3');
for (var i = random3.children.length; i >= 0; i--) {
  random3.appendChild(random3.children[Math.random() * i | 0]);
}

var random4 = document.querySelector('.random4');
for (var i = random4.children.length; i >= 0; i--) {
  random4.appendChild(random4.children[Math.random() * i | 0]);
}

var random5 = document.querySelector('.random5');
for (var i = random5.children.length; i >= 0; i--) {
  random5.appendChild(random5.children[Math.random() * i | 0]);
}
