var $favorites = $('.favorites');
var $selectedImage = $('.selected-img > img');
var $unfavorite = $('button');
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
  console.log(this.parentElement.parentElement.remove());
}
