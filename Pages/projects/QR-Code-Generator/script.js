const sizes = document.querySelector("#sizes");
const qrText = document.querySelector("#qr-text");
const generateBtn = document.querySelector("#generateBtn");
const downlaodBtn = document.querySelector("#downloadBtn");

const qrContainer = document.querySelector(".qr-body");

let size = sizes.value;

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  emptyInput();
});

sizes.addEventListener("change", (e) => {
  size = e.target.value;
  emptyInput();
});

function generateQRCode() {
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    // text: "http://jindo.dev.naver.com/collie",
    text: "qrText.value",
    width: size,
    height: size,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
}

const emptyInput = () => {
  qrText.value.length > 0
    ? generateQRCode()
    : alert("Enter the text or URL to generate QR Code");
};



downlaodBtn.addEventListener("click", () => {
    let img = document.querySelector(".qr-body img");

    if(img !== null) {
        let imgAttr = img.getAttribute("src");
      downlaodBtn.setAttribute("href", imgAttr);
    }else{
        downlaodBtn.setAttribute("href", `${document.querySelector(canvas).toDataURL()}`);
    }
})