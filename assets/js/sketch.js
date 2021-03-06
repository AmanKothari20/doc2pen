myData = `The quick brown fox jumps over the lazy dog`;
let img = [],
  myFont = [],
myFonts = 7,
imgNum = 8,
fontNum = 0,
pageNum = 0,
xaxis = 20,
yaxis = 20,
fontsize = 30,
w = 700,
linespacing = false;

function preload()
{
  fontLoad();
  loadPage();
}

function setup() {
  canvas = createCanvas(750, 1000);
  canvas.parent("contributing");
  rectMode(CORNER);
}

function draw()
 {
  image(img[pageNum], 0, 0, width, height);
  textFont(myFont[fontNum]);
  textSize(fontsize);
  fill("#264180");
  if (linespacing) {
    textLeading(linespacing);
  }
  data = "\n" + myData;
  text(data, xaxis, yaxis, w, 900);
}

function fontLoad()
{
  for (var i = 0; i < myFonts; i++)
   {
    myFont.push(loadFont("assets/fonts/font (" + str(i) + ").ttf"));
  }
}

function changeFont()
{
  fontNum += 1;
  fontNum %= myFonts;
}

function loadPage() 
{
  for (var i = 0; i < imgNum; i++)
  {
    img.push(loadImage("assets/images/pages/page (" + str(i) + ").jpg"));
  }
}

function changePage(){
  pageNum += 1;
  pageNum %= imgNum;
}