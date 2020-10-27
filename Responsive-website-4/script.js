//funtion expression to select elements
function selectElement(s) {
  return document.querySelector(s);
}
//Open the Menu on click
selectElement('.open').addEventListener('click', () => {
  selectElement('.nav-list').classList.add('active');
});
//Close the Menu on click
selectElement('.close').addEventListener('click', () => {
  selectElement('.nav-list').classList.remove('active');
});
