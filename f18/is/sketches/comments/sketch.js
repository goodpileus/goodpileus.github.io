var imgs = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
var imgLoad;

var words = [
  'where can i buy anesthesia', 
  'Feels like you are the program codes in the digital world.', 
  'My uncle did all the Gunshot sounds for this film!', 
  'U smort, u loyal, u grateful, I appreciate that',
  'It honestly reminds me of my dad.',
  'where can i buy anesthesia',
  'Ive seen footage',
  'I want to know of the ones who left those 14 dislikes... I want to know their thoughts, their stories... that which compelled them to act as they did...',
  'Nobody does real like Michael Cera but as an audience do we want real?',
  'North America suck.',
  'Reminds me of Grand Turismo 4, in the white hall, looking at a clean car just moving around in cirkels :P',
  'Xylophones are dangerously underused in music today.',
  'when i was in parker, colorado 1992 my good frend showed me thes recordings and i did i admit to smoken a sweet reef then partake in relaxation techniques in the park it was a nice time good memorys.',
  'my 8 yr old daughter loves this',
  'This movie should be free its old',
  'What do you mean Not available for purchase on iOS????\nThis is 2017, not 2013.',
  'and you find yourself crying in the middle of the club, the weight of the crowd\non top of you, making you lonelier than ever before',
  'When the beat comes in: This is what it felt like staying up late as a kid and\nwatching Adult Swim when Samurai Jack was on.',
  'It did not work when it arrived',
  'I remember first listening to this while sitting in the bed of my pickup truck many summers ago, just looking up at the stars and zoning out... a sublime experience...',
  'Nice! Glad that youre doing something fun that you love',
  'Thanks ^_^',
  'A dope reminder of days gone by. Mad simpler times.',
  'boring, baroque, void, pointless.....\nElevators deserve better music lol',
  'I disagree. Peoples pain will always matter'
  ];


function preload(){
  var img = random(imgs);
  console.log(img);
  imgLoad = loadImage("assets/" + img + ".jpg");
}

function setup() {
  createCanvas(1000, 620);
  noLoop();
  
}

function draw() {
  image (imgLoad, 0, 0, 1000,620);
  console.log(imgLoad.width + " " +imgLoad.height);
  
  var word = random(words);
  
  textSize(26);
  textAlign(CENTER, CENTER);
  fill(255, 255, 255);
  strokeWeight(3);
  stroke(0);
  text(word, 20, height/2.5, width-20, height-10);
}

function mousePressed() {
  location.reload(); 
}
