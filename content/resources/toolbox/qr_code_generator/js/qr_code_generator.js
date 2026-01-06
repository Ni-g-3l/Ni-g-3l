let QR_CODE;

window.onload = function () {
  create();
};

function create() {
  qr_code.innerHTML = "";

  if (url.value === "") return;

  QR_CODE = new QRCode(document.getElementById("qr_code"), {
    text: url.value,
    width: width.value,
    height: height.value,
    colorDark: foreground_color.value,
    colorLight: background_color.value,
    correctLevel: QRCode.CorrectLevel.H,
  });
}

function download() {
  let qr_code_dom = document.getElementById("qr_code");
  let qr_code_img = qr_code_dom.getElementsByTagName("img")[0];

  var a = document.createElement("a");
  a.href = qr_code_img.src;
  a.target = "_blank";
  a.download = "qr_code.png";
  a.click();
}

function reset() {
  window.location.reload(true);
}
