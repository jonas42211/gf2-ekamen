const btnopen = document.getElementById("btnopen")
const btnclose = document.getElementById("btnclose")
const modal = document.getElementById("modal")

function openModal() {
  modal.classList.toggle("hidden")
  modal.classList.toggle("modal-overlay")
}

function closeModal() {
  modal.classList.toggle("hidden")
  modal.classList.toggle("modal-overlay")
}

btnopen.addEventListener("click", openModal);
btnclose.addEventListener("click", closeModal);

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});






const nameInput = document.getElementById("fornavn");
const teleInput = document.getElementById("tlf")
const mailInput = document.getElementById("mailinputer");
const button = document.getElementById("buttoner");
 
button.addEventListener("click", (event) => {
    event.preventDefault();
    let nameValue = nameInput.value;
    let teleValue = teleInput.value;
    let mailValue = mailInput.value;
    console.log(nameValue, teleValue, mailValue);
if (nameValue.length >= 3 && teleValue.length >= 8 && mailValue.includes("@")) {
    alert("tak for dine oplysninger");
    window.location.href = "index.html";
}
else {
    alert ("Du opfylder ikke kravene");
}
});







let mainImage = document.getElementById("mainImage");
let imgOne = document.getElementById("imgOne");
let imgTwo = document.getElementById("imgTwo");
let imgThree = document.getElementById("imgThree");
let imgFour = document.getElementById("imgFour");
 
imgOne.addEventListener("click", function() {
    mainImage.src = imgOne.src;
});
 
imgTwo.addEventListener("click", function() {
    mainImage.src = imgTwo.src;
});
 
imgThree.addEventListener("click", function() {
    mainImage.src = imgThree.src;
});
 
imgFour.addEventListener("click", function() {
    mainImage.src = imgFour.src;
});