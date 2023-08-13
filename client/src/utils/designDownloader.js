import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default async function downloadDesign() {
  const cardFront = document.getElementById("card-front");
  const cardBack = document.getElementById("card-back");

  // create clones coz appending directly removes cards from original position
  const cardFrontClone = cardFront.cloneNode(true)
  const cardBackClone = cardBack.cloneNode(true)

  const cardsCloneContainer = document.createElement('div');
  cardsCloneContainer.style.display = "flex";
  cardsCloneContainer.style.flexDirection = "column";
  cardsCloneContainer.style.justifyContent = "center";
  cardsCloneContainer.style.alignItems = "flex-start";
  cardsCloneContainer.style.gap = "50px";
  cardsCloneContainer.style.width = "4200px"; //because i divide by 4 later
  cardsCloneContainer.appendChild(generateLogo())
  cardsCloneContainer.appendChild(cardFrontClone)
  cardsCloneContainer.appendChild(cardBackClone)

  document.body.appendChild(cardsCloneContainer) // needs to be in document for html2canvas to screenshot it

  const cardsCanvas = await html2canvas(cardsCloneContainer, {
    allowTaint: true,
    useCORS: true
  });

  document.body.removeChild(cardsCloneContainer);
  console.log(cardsCanvas.width)

  let width;
  let height;
  let X;
  let Y;

  if (cardsCanvas.width > 5000) {
    width = cardsCanvas.width / 8;
    height = cardsCanvas.height / 8;
    X = 10;
    Y = 10;
  } else {
    width = cardsCanvas.width / 4;
    height = cardsCanvas.height / 4;
    X = 40;
    Y = 40
  }

  const imageData = cardsCanvas.toDataURL("image/png")
  const pdf = new jsPDF('p', 'mm' ,'a4')
  pdf.addImage(imageData, 'PNG', X, Y, width, height, 'card', 'FAST');
  pdf.save("cardvodesign.pdf");
}

function generateLogo() {
  const logoContainer = document.createElement('div');
  logoContainer.style.display = "flex"
  logoContainer.style.gap = "2px"
  logoContainer.style.justifyContent = "center"
  logoContainer.style.alignItems = "flex-end"
  logoContainer.style.width = "fit-content"

  logoContainer.innerHTML = '<i class="fa-solid fa-c"></i><div>Card</div><span>vo</span>';

  logoContainer.childNodes[0].style.fontSize = "45px";
  logoContainer.childNodes[0].style.transform = "rotate(40deg) translateY(-10%)";
  logoContainer.childNodes[0].style.color = "#6280bf";
  logoContainer.childNodes[0].style.marginRight = "5px";
  logoContainer.childNodes[1].style.fontSize = "30px";
  logoContainer.childNodes[2].style.fontSize = "30px";
  logoContainer.childNodes[2].style.fontWeight = "bold";
  logoContainer.childNodes[2].style.color = "#6280bf";

  return logoContainer;
}