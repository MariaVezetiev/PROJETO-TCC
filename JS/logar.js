var senha1 = document.getElementById("senha")
var email1 = document.getElementById("email")
var contador = 1
var icone1 = document.getElementById("icon1")

var botao = document.getElementById("button-form")

function visibleOrNot() {

    contador ++

    if (contador % 2 == 0) {

        senha1.type = "text"
        icone1.innerHTML = "visibility_off"
    
    } else if (contador % 2 != 0) {

        senha1.type = "password"
        icone1.innerHTML = "visibility"
    }
}

var mensagemAlert = document.getElementById("mensagemAlert")
var alert = document.getElementById("alert")

function activate() {

    if (email1.value == "" || senha1.value == "") {

        mensagemAlert.innerHTML = "Preencha todos os campos!"
        mensagemAlert.style.opacity = "1"

        alert.style.backgroundColor = "rgba(255, 0, 0, 0.2)"
        alert.style.outline = "none !important"
        alert.style.border = "1px solid rgb(235, 46, 46)"
        alert.style.boxShadow = "0 0 6px rgb(255, 0, 0)"
        alert.style.color = "rgb(235, 83, 83)"

        alert.style.opacity = "1"

        setTimeout(function () {

            alert.style.opacity = "0"
            mensagemAlert.style.opacity = "0"
        }, 4000)
    }

    if (email1.value == "") {

        email1.style.outline = "none !important"
        email1.style.border = "1px solid #FF0E0E"
        email1.style.boxShadow = "0 0 7px red"

        if (senha1.value == "") {

            senha1.style.outline = "none !important"
            senha1.style.border = "1px solid #FF0E0E"
            senha1.style.boxShadow = "0 0 7px red"
        }
    
    } else if (senha1.value == "") {

        senha1.style.outline = "none !important"
        senha1.style.border = "1px solid #FF0E0E"
        senha1.style.boxShadow = "0 0 7px red"
    
    } else {
        
        botao.click();
    }
}

function focou(p) {

    if (p == 1) {

        email1.style.outline = "none !important"
        email1.style.border = "1px solid rgb(89, 1, 109)"
        email1.style.boxShadow = "0 0 4px rgb(138, 29, 160)"
    }

    if (p == 2) {

        senha1.style.outline = "none !important"
        senha1.style.border = "1px solid rgb(89, 1, 109)"
        senha1.style.boxShadow = "0 0 4px rgb(138, 29, 160)"
    }
}

function desfocou(p) {

    if (p == 1) {

        email1.style.border = "2px solid rgb(48, 1, 58)"
        email1.style.boxShadow = "0 0 0px"
    }

    if (p == 2) {

        senha1.style.border = "2px solid rgb(48, 1, 58)"
        senha1.style.boxShadow = "0 0 0px"
    }
}



