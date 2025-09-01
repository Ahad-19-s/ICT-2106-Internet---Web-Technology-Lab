function buttonClick1() {
  alert('Hello Dear');
}

function paraClick() {
  document.getElementById('paraID').innerHTML = 'This is second text of the paragraph';
}

function paraClick1() {
  document.querySelector('#paraID').innerHTML = 'Hi There! I like you';
}

function imageClick() {
  document.querySelector('#imageID').src = "images/photo-1611175522050-9e702da5b464.avif";
}

var images = ['images/nature.jpg', 'images/pic_trulli.jpg', 'images/village-4832378_640.jpg'];
var index = 0;

function showimage() {
  document.getElementById('slider').src = images[index];
}

function prev() {
  if (index > 0) {
    index--;
    showimage();
  } else {
    alert('This is the first image');
  }
}

function next() {
  if (index < images.length - 1) {
    index++;
    showimage();
  } else {
    alert('This is the last image');
  }
}

showimage();
