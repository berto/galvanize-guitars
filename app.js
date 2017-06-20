var $favorites = $('.favorites');
var $selectedImage = $('.selected-img > img');
$favorites.click(changeImage);

function changeImage(event) {
  console.log(this.children[0]);
  switch (this.children[0]) {
    case '<td>Jackson - Electric</td>':
      console.log("jackson Electric");
      break;
    case "<td>Ibanoz - Electric</td>":
      console.log("ibanoz");
      break;
    case "<td>Jackson - Orange Electric</td>":
      console.log("jackson orange");
      break;
    case "<td>Grand Concert - Acoustic</td>":
      console.log("grand Concert");
      break;
    default:

  }
}
