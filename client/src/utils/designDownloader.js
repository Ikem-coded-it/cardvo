import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default async function downloadDesign(passedCardFront = null) {
  let cardsCloneContainer
  if (!passedCardFront) {
    cardsCloneContainer = cloneCards()
  } else {
    cardsCloneContainer = cloneCards(passedCardFront)
  }

  const cardDisplayModal = generateCardDisplayModal();
  document.body.appendChild(cardDisplayModal)
  const display = cardDisplayModal.childNodes[0];
  display.appendChild(cardsCloneContainer)

  const cardsCanvas = await html2canvas(cardsCloneContainer, {
    allowTaint: true,
    useCORS: true
  });

  display.removeChild(cardsCloneContainer)
  document.body.removeChild(cardDisplayModal);

  downloadPDF(cardsCanvas)
}

function cloneCards(passedCardFront) {
  let cardFront;
  let cardBack;
  if (!passedCardFront) {
    cardFront = document.getElementById("card-front");
    cardBack = document.getElementById("card-back");
  } else {
    cardFront = passedCardFront;
  }

  // create clones coz appending directly removes cards from original position
  let cardFrontClone;
  let cardBackClone
  if (!passedCardFront) {
    cardFrontClone = cardFront.cloneNode(true)
    cardBackClone = cardBack.cloneNode(true)
  } else {
    cardFrontClone = passedCardFront.cloneNode(true)
    cardBackClone = null
  }

  const cardsCloneContainer = document.createElement('div');
  cardsCloneContainer.style.display = "flex";
  cardsCloneContainer.style.flexDirection = "column";
  cardsCloneContainer.style.justifyContent = "center";
  cardsCloneContainer.style.alignItems = "flex-start";
  cardsCloneContainer.style.gap = "50px";
  cardsCloneContainer.style.width = "4200px"; //because i divide by 4 later
  cardsCloneContainer.appendChild(generateLogo())

  if (cardBackClone === null) {
    cardsCloneContainer.appendChild(cardFrontClone)
  } else {
    cardsCloneContainer.appendChild(cardFrontClone)
    cardsCloneContainer.appendChild(cardBackClone)
  }

  return cardsCloneContainer
}

function downloadPDF(cardsCanvas) {
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
    height = cardsCanvas.height / 2.7;
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

function generateCardDisplayModal() {
  const darkModalOverlay = document.createElement('div');
  darkModalOverlay.style.height = "100vh";
  darkModalOverlay.style.width = "100vw";
  darkModalOverlay.style.display = "flex";
  darkModalOverlay.style.justifyContent = "center";
  darkModalOverlay.style.alignItems = "center";
  darkModalOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  darkModalOverlay.style.position = "fixed";
  darkModalOverlay.style.top = "0";
  darkModalOverlay.style.left = "0";
  darkModalOverlay.style.zIndex = "20";

  const displayModal = document.createElement('div');
  displayModal.setAttribute('id', 'card-display-modal');
  displayModal.style.height = window.innerWidth > 900 ? "100vh" : "50vh";
  displayModal.style.width = window.innerWidth > 900 ? "70%" : "95%";
  displayModal.style.backgroundColor = "white";
  displayModal.style.zIndex = "20";
  displayModal.style.display = "flex";
  displayModal.style.gap = "50px";
  displayModal.style.justifyContent = "center";
  displayModal.style.alignItems = "center";
  displayModal.style.padding = "10px";
  displayModal.style.borderRadius = "0 10px";

  displayModal.innerHTML = '<h3>Downloading...</h3>'

  darkModalOverlay.appendChild(displayModal);

  return darkModalOverlay
}