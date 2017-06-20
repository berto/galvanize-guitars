var $favorites = $('.favorites');
var $selectedImage = $('.selected-img > img');
var $unfavorite = $('button');
var $specialImage = $('.special-img > img');
var $specialInfo = $('.weekly-special');
$favorites.click(changeImage);
$unfavorite.click(unfavorite);

function changeImage(event) {
  switch (this.children[0].innerText) {
    case 'Jackson - Electric':
      $selectedImage.attr('src', 'assets/guitar1.jpg');
      break;
    case "Ibanoz - Electric":
      $selectedImage.attr('src', 'assets/guitar2.jpg');
      break;
    case "Jackson - Orange Electric":
      $selectedImage.attr('src', 'assets/guitar3.png');
      break;
    case "Grand Concert - Acoustic":
      $selectedImage.attr('src', 'assets/guitar4.png');
      break;
    default:

  }
}

function unfavorite(event) {
  this.parentElement.parentElement.remove();
}

$.get('guitars.json')
  .then(function(data) {
    $specialImage.attr('src', data['weekly-special'].image);
    $specialInfo.children('#name').text('name: ' + data['weekly-special'].name)
    $specialInfo.children('#price').text('price: $' + data['weekly-special'].price)
  })
