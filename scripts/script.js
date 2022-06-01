var txtList;
window.onload = () => {
    txtList = document.querySelectorAll("input");
    validar();
    console.log(txtList);

    const form = document.getElementsByTagName("form");
    form[0].addEventListener("submit", function (e) {
      e.preventDefault();
    });
}

function validar(){
    txtList[0].addEventListener("blur",function() {
        if (txtList[0].value.length <= 3) {
            const hideLbl = document.getElementById("lblName");
            hideLbl.classList.toggle("hidden",false);
        }
    });
    txtList[0].addEventListener("focus",function() {
        const hideLbl = document.getElementById("lblName");
        hideLbl.classList.toggle("hidden",true);
    });
    txtList[1].addEventListener("blur",function() {
        if (txtList[1].value.length <= 3) {
            const hideLbl = document.getElementById("lblSurname");
            hideLbl.classList.toggle("hidden");
        }
    });
    txtList[1].addEventListener("focus",function() {
        const hideLbl = document.getElementById("lblSurname");
        hideLbl.classList.toggle("hidden",true);
    });
    txtList[2].addEventListener("blur",function() {
        if (!txtList[2].value.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)) {
            const hideLbl = document.getElementById("lblEmail");
            hideLbl.classList.toggle("hidden");
        }
    });
    txtList[2].addEventListener("focus",function() {
        const hideLbl = document.getElementById("lblEmail");
        hideLbl.classList.toggle("hidden",true);
    });
    txtList[3].addEventListener("blur",function() {
        if (txtList[3].value.length < 8 || txtList[3].value.match("\w") || !txtList[3].value.match(/[0-9]/)) {
            const hideLbl = document.getElementById("lblPw");
            hideLbl.classList.toggle("hidden");
        }
    });
    txtList[3].addEventListener("focus",function() {
        const hideLbl = document.getElementById("lblPw");
        hideLbl.classList.toggle("hidden",true);
    });
    txtList[4].addEventListener("blur",function() {
        if (txtList[4].value.length < 7 || !txtList[4].value.match(/^[0-9]+$/)) {
            const hideLbl = document.getElementById("lblTel");
            hideLbl.classList.toggle("hidden");
        }
    });
    txtList[4].addEventListener("focus",function() {
        const hideLbl = document.getElementById("lblTel");
        hideLbl.classList.toggle("hidden",true);
    });
    txtList[5].addEventListener("blur",function() {
        if (txtList[5].value.length < 5 || !txtList[5].value.match(/^(.*\s+.*)+$/) || !txtList[5].value.match(/[0-9]/)) {
            const hideLbl = document.getElementById("lblDir");
            hideLbl.classList.toggle("hidden");
        }
    });
    txtList[5].addEventListener("focus",function() {
        const hideLbl = document.getElementById("lblDir");
        hideLbl.classList.toggle("hidden",true);
    });
}