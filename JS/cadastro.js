var uf2 = document.getElementById("uf")
function mask(o, f) {
  setTimeout(function() {
    var v = mphone(o.value);
    if (v != o.value) {
      o.value = v;
    }
  }, 1);
}

function mphone(v) {
  var r = v.replace(/\D/g, "");
  r = r.replace(/^0/, "");
  if (r.length > 10) {
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (r.length > 5) {
    r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (r.length > 2) {
    r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else {
    r = r.replace(/^(\d*)/, "($1");
  }
  return r;
}

function dropFunction(p) {

    uf2.style.outline = "none !important"
    uf2.style.border = "1px solid rgb(89, 1, 109)"
    uf2.style.boxShadow = "0 0 4px rgb(138, 29, 160)"

    var input = document.getElementById("select")
    var apliCss = ['block','none']

    input.style.display = apliCss[p]

    var translate = ['0px','0px, -10px']

    setTimeout(function () {

        input.style.transform = 'translate('+translate[p]+')'
        
    }, 25)
    
}

function insertCategory(p) {

    var item = document.getElementById("item" + p).innerHTML

    document.getElementById("uf").value = item
}

var contarData = 0
var data = document.getElementById("data")

function contData() {

    if (data.value == "") {

        contarData = 0
    }

    contarData ++

    if (contarData == 3) {

        var valor = data.value

        data.value =  valor + " / "
    }

    if (contarData == 5) {

        var valor = data.value
        data.value = valor + " / "
    }
}

var contarCel = 0
var celular = document.getElementById("celular")

function contCel() {

    if (celular.value == "") {
        
        contarCel = 0
    }

    contarCel ++

    if (contarCel == 6) {

        var valor1 = celular.value
        celular.value = valor1 + " - "
    }    
}

var nome1 = document.getElementById("nome")
var email1 = document.getElementById("email")
var uf1 = document.getElementById("uf")
var data1 = document.getElementById("data")
var celular1 = document.getElementById("celular")
var senha1 = document.getElementById("senha")
var rpSenha1 = document.getElementById("rpSenha")
var button1 = document.getElementById("button-form")

var alert = document.getElementById("alert")
var mensagemAlert = document.getElementById("mensagemAlert")

function submit() {

    if (nome1.value == "" || email1.value == "" || uf1.value == "" || data1.value ==  "" || celular1.value == "" || senha1.value == "" || rpSenha1.value == "") {
        
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
    
    if (nome1.value == "") {

        nome1.style.outline = "none !important"
        nome1.style.border = "1px solid #FF0E0E"
        nome1.style.boxShadow = "0 0 7px red"

        if (email1.value == "") {

            email1.style.outline = "none !important"
            email1.style.border = "1px solid #FF0E0E"
            email1.style.boxShadow = "0 0 7px red"

            if (uf1.value == "") {

                uf1.style.outline = "none !important"
                uf1.style.border = "1px solid #FF0E0E"
                uf1.style.boxShadow = "0 0 7px red"

                if (data1.value == "") {

                    data1.style.outline = "none !important"
                    data1.style.border = "1px solid #FF0E0E"
                    data1.style.boxShadow = "0 0 7px red"

                    if (celular1.value == "") {

                        celular1.style.outline = "none !important"
                        celular1.style.border = "1px solid #FF0E0E"
                        celular1.style.boxShadow = "0 0 7px red"

                        if (senha1.value == "") {

                            senha1.style.outline = "none !important"
                            senha1.style.border = "1px solid #FF0E0E"
                            senha1.style.boxShadow = "0 0 7px red"

                            if (rpSenha1.value == "") {

                                rpSenha1.style.outline = "none !important"
                                rpSenha1.style.border = "1px solid #FF0E0E"
                                rpSenha1.style.boxShadow = "0 0 7px red"
                            }

                        } else if (rpSenha1.value == "") {

                            rpSenha1.style.outline = "none !important"
                            rpSenha1.style.border = "1px solid #FF0E0E"
                            rpSenha1.style.boxShadow = "0 0 7px red"
                        }

                    } else if (senha1.value == "") {

                        senha1.style.outline = "none !important"
                        senha1.style.border = "1px solid #FF0E0E"
                        senha1.style.boxShadow = "0 0 7px red"

                        if (rpSenha1.value == "") {

                            rpSenha1.style.outline = "none !important"
                            rpSenha1.style.border = "1px solid #FF0E0E"
                            rpSenha1.style.boxShadow = "0 0 7px red"
                        }
                    } else if (rpSenha1.value == "") {

                        rpSenha1.style.outline = "none !important"
                        rpSenha1.style.border = "1px solid #FF0E0E"
                        rpSenha1.style.boxShadow = "0 0 7px red"
                    }
                    
                } else if (celular1.value == "") {

                    celular1.style.outline = "none !important"
                    celular1.style.border = "1px solid #FF0E0E"
                    celular1.style.boxShadow = "0 0 7px red"

                    
                    if (senha1.value == "") {

                        senha1.style.outline = "none !important"
                        senha1.style.border = "1px solid #FF0E0E"
                        senha1.style.boxShadow = "0 0 7px red"

                        if (rpSenha1.value == "") {

                            rpSenha1.style.outline = "none !important"
                            rpSenha1.style.border = "1px solid #FF0E0E"
                            rpSenha1.style.boxShadow = "0 0 7px red"
                        }

                    } else if (rpSenha1.value == "") {

                        rpSenha1.style.outline = "none !important"
                        rpSenha1.style.border = "1px solid #FF0E0E"
                        rpSenha1.style.boxShadow = "0 0 7px red"
                    }
                
                } else if (senha1.value == "") {

                    senha1.style.outline = "none !important"
                    senha1.style.border = "1px solid #FF0E0E"
                    senha1.style.boxShadow = "0 0 7px red"

                    if (rpSenha1.value == "") {

                        rpSenha1.style.outline = "none !important"
                        rpSenha1.style.border = "1px solid #FF0E0E"
                        rpSenha1.style.boxShadow = "0 0 7px red"
                    }
                
                }else if (rpSenha1.value == "") {

                    rpSenha1.style.outline = "none !important"
                    rpSenha1.style.border = "1px solid #FF0E0E"
                    rpSenha1.style.boxShadow = "0 0 7px red"
                }

            } else if (data.value == "") {

                data1.style.outline = "none !important"
                data1.style.border = "1px solid #FF0E0E"
                data1.style.boxShadow = "0 0 7px red"

                if (celular.value == "") {

                    celular1.style.outline = "none !important"
                    celular1.style.border = "1px solid #FF0E0E"
                    celular1.style.boxShadow = "0 0 7px red"

                    if (senha1.value == "") {

                        senha1.style.outline = "none !important"
                        senha1.style.border = "1px solid #FF0E0E"
                        senha1.style.boxShadow = "0 0 7px red"

                        if (rpSenha1.value == "") {

                            rpSenha1.style.outline = "none !important"
                            rpSenha1.style.border = "1px solid #FF0E0E"
                            rpSenha1.style.boxShadow = "0 0 7px red"
                        }
                        
                    } else if (rpSenha1.value == "") {

                        rpSenha1.style.outline = "none !important"
                        rpSenha1.style.border = "1px solid #FF0E0E"
                        rpSenha1.style.boxShadow = "0 0 7px red"
                    }

                } else if (senha1.value == "") {

                    senha1.style.outline = "none !important"
                    senha1.style.border = "1px solid #FF0E0E"
                    senha1.style.boxShadow = "0 0 7px red"

                    if (rpSenha1.value == "") {

                        rpSenha1.style.outline = "none !important"
                        rpSenha1.style.border = "1px solid #FF0E0E"
                        rpSenha1.style.boxShadow = "0 0 7px red"
                    }
                    
                } else if (rpSenha1.value == "") {

                    rpSenha1.style.outline = "none !important"
                    rpSenha1.style.border = "1px solid #FF0E0E"
                    rpSenha1.style.boxShadow = "0 0 7px red"
                }

            } else if (celular.value == "") {

                celular1.style.outline = "none !important"
                celular1.style.border = "1px solid #FF0E0E"
                celular1.style.boxShadow = "0 0 7px red"

                if (senha1.value == "") {

                    senha1.style.outline = "none !important"
                    senha1.style.border = "1px solid #FF0E0E"
                    senha1.style.boxShadow = "0 0 7px red"

                    if (rpSenha1.value == "") {

                        rpSenha1.style.outline = "none !important"
                        rpSenha1.style.border = "1px solid #FF0E0E"
                        rpSenha1.style.boxShadow = "0 0 7px red"
                    }
                    
                } else if (rpSenha1.value == "") {

                    rpSenha1.style.outline = "none !important"
                    rpSenha1.style.border = "1px solid #FF0E0E"
                    rpSenha1.style.boxShadow = "0 0 7px red"
                }

            } else if (senha1.value == "") {

                senha1.style.outline = "none !important"
                senha1.style.border = "1px solid #FF0E0E"
                senha1.style.boxShadow = "0 0 7px red"

                if (rpSenha1.value == "") {

                    rpSenha1.style.outline = "none !important"
                    rpSenha1.style.border = "1px solid #FF0E0E"
                    rpSenha1.style.boxShadow = "0 0 7px red"
                }
                
            } else if (rpSenha1.value == "") {

                rpSenha1.style.outline = "none !important"
                rpSenha1.style.border = "1px solid #FF0E0E"
                rpSenha1.style.boxShadow = "0 0 7px red"
            }

        } else if (uf1.value == "") {

            uf1.style.outline = "none !important"
            uf1.style.border = "1px solid #FF0E0E"
            uf1.style.boxShadow = "0 0 7px red"

            if (data1.value == "") {

                data1.style.outline = "none !important"
                data1.style.border = "1px solid #FF0E0E"
                data1.style.boxShadow = "0 0 7px red"

                if (celular1.value == "") {

                    celular1.style.outline = "none !important"
                    celular1.style.border = "1px solid #FF0E0E"
                    celular1.style.boxShadow = "0 0 7px red"

                    if (senha1.value == "") {

                        senha1.style.outline = "none !important"
                        senha1.style.border = "1px solid #FF0E0E"
                        senha1.style.boxShadow = "0 0 7px red"

                        if (rpSenha1.value == "") {

                            rpSenha1.style.outline = "none !important"
                            rpSenha1.style.border = "1px solid #FF0E0E"
                            rpSenha1.style.boxShadow = "0 0 7px red"
                        }

                    } else if (rpSenha1.value == "") {

                        rpSenha1.style.outline = "none !important"
                        rpSenha1.style.border = "1px solid #FF0E0E"
                        rpSenha1.style.boxShadow = "0 0 7px red"
                    }

                } else if (senha1.value == "") {

                    senha1.style.outline = "none !important"
                    senha1.style.border = "1px solid #FF0E0E"
                    senha1.style.boxShadow = "0 0 7px red"

                    if (rpSenha1.value == "") {

                        rpSenha1.style.outline = "none !important"
                        rpSenha1.style.border = "1px solid #FF0E0E"
                        rpSenha1.style.boxShadow = "0 0 7px red"
                    }
                } else if (rpSenha1.value == "") {

                    rpSenha1.style.outline = "none !important"
                    rpSenha1.style.border = "1px solid #FF0E0E"
                    rpSenha1.style.boxShadow = "0 0 7px red"
                }
                
            } else if (celular1.value == "") {

                celular1.style.outline = "none !important"
                celular1.style.border = "1px solid #FF0E0E"
                celular1.style.boxShadow = "0 0 7px red"

                
                if (senha1.value == "") {

                    senha1.style.outline = "none !important"
                    senha1.style.border = "1px solid #FF0E0E"
                    senha1.style.boxShadow = "0 0 7px red"

                    if (rpSenha1.value == "") {

                        rpSenha1.style.outline = "none !important"
                        rpSenha1.style.border = "1px solid #FF0E0E"
                        rpSenha1.style.boxShadow = "0 0 7px red"
                    }

                } else if (rpSenha1.value == "") {

                    rpSenha1.style.outline = "none !important"
                    rpSenha1.style.border = "1px solid #FF0E0E"
                    rpSenha1.style.boxShadow = "0 0 7px red"
                }
            
            } else if (senha1.value == "") {

                senha1.style.outline = "none !important"
                senha1.style.border = "1px solid #FF0E0E"
                senha1.style.boxShadow = "0 0 7px red"

                if (rpSenha1.value == "") {

                    rpSenha1.style.outline = "none !important"
                    rpSenha1.style.border = "1px solid #FF0E0E"
                    rpSenha1.style.boxShadow = "0 0 7px red"
                }
            
            }else if (rpSenha1.value == "") {

                rpSenha1.style.outline = "none !important"
                rpSenha1.style.border = "1px solid #FF0E0E"
                rpSenha1.style.boxShadow = "0 0 7px red"
            }

        } else if (data.value == "") {

            data1.style.outline = "none !important"
            data1.style.border = "1px solid #FF0E0E"
            data1.style.boxShadow = "0 0 7px red"

            if (celular.value == "") {

                celular1.style.outline = "none !important"
                celular1.style.border = "1px solid #FF0E0E"
                celular1.style.boxShadow = "0 0 7px red"

                if (senha1.value == "") {

                    senha1.style.outline = "none !important"
                    senha1.style.border = "1px solid #FF0E0E"
                    senha1.style.boxShadow = "0 0 7px red"

                    if (rpSenha1.value == "") {

                        rpSenha1.style.outline = "none !important"
                        rpSenha1.style.border = "1px solid #FF0E0E"
                        rpSenha1.style.boxShadow = "0 0 7px red"
                    }
                    
                } else if (rpSenha1.value == "") {

                    rpSenha1.style.outline = "none !important"
                    rpSenha1.style.border = "1px solid #FF0E0E"
                    rpSenha1.style.boxShadow = "0 0 7px red"
                }

            } else if (senha1.value == "") {

                senha1.style.outline = "none !important"
                senha1.style.border = "1px solid #FF0E0E"
                senha1.style.boxShadow = "0 0 7px red"

                if (rpSenha1.value == "") {

                    rpSenha1.style.outline = "none !important"
                    rpSenha1.style.border = "1px solid #FF0E0E"
                    rpSenha1.style.boxShadow = "0 0 7px red"
                }
                
            } else if (rpSenha1.value == "") {

                rpSenha1.style.outline = "none !important"
                rpSenha1.style.border = "1px solid #FF0E0E"
                rpSenha1.style.boxShadow = "0 0 7px red"
            }

        } else if (celular.value == "") {

            celular1.style.outline = "none !important"
            celular1.style.border = "1px solid #FF0E0E"
            celular1.style.boxShadow = "0 0 7px red"

            if (senha1.value == "") {

                senha1.style.outline = "none !important"
                senha1.style.border = "1px solid #FF0E0E"
                senha1.style.boxShadow = "0 0 7px red"

                if (rpSenha1.value == "") {

                    rpSenha1.style.outline = "none !important"
                    rpSenha1.style.border = "1px solid #FF0E0E"
                    rpSenha1.style.boxShadow = "0 0 7px red"
                }
                
            } else if (rpSenha1.value == "") {

                rpSenha1.style.outline = "none !important"
                rpSenha1.style.border = "1px solid #FF0E0E"
                rpSenha1.style.boxShadow = "0 0 7px red"
            }

        } else if (senha1.value == "") {

            senha1.style.outline = "none !important"
            senha1.style.border = "1px solid #FF0E0E"
            senha1.style.boxShadow = "0 0 7px red"

            if (rpSenha1.value == "") {

                rpSenha1.style.outline = "none !important"
                rpSenha1.style.border = "1px solid #FF0E0E"
                rpSenha1.style.boxShadow = "0 0 7px red"
            }
            
        } else if (rpSenha1.value == "") {

            rpSenha1.style.outline = "none !important"
            rpSenha1.style.border = "1px solid #FF0E0E"
            rpSenha1.style.boxShadow = "0 0 7px red"
        }
    
    } else if (email1.value == "") {

        email1.style.outline = "none !important"
        email1.style.border = "1px solid #FF0E0E"
        email1.style.boxShadow = "0 0 7px red"

        if (uf1.value == "") {

            uf1.style.outline = "none !important"
            uf1.style.border = "1px solid #FF0E0E"
            uf1.style.boxShadow = "0 0 7px red"

            if (data1.value == "") {

                data1.style.outline = "none !important"
                data1.style.border = "1px solid #FF0E0E"
                data1.style.boxShadow = "0 0 7px red"

                if (celular1.value == "") {

                    celular1.style.outline = "none !important"
                    celular1.style.border = "1px solid #FF0E0E"
                    celular1.style.boxShadow = "0 0 7px red"

                    if (senha1.value == "") {

                        senha1.style.outline = "none !important"
                        senha1.style.border = "1px solid #FF0E0E"
                        senha1.style.boxShadow = "0 0 7px red"

                        if (rpSenha1.value == "") {

                            rpSenha1.style.outline = "none !important"
                            rpSenha1.style.border = "1px solid #FF0E0E"
                            rpSenha1.style.boxShadow = "0 0 7px red"
                        }

                    } else if (rpSenha1.value == "") {

                        rpSenha1.style.outline = "none !important"
                        rpSenha1.style.border = "1px solid #FF0E0E"
                        rpSenha1.style.boxShadow = "0 0 7px red"
                    }

                } else if (senha1.value == "") {

                    senha1.style.outline = "none !important"
                    senha1.style.border = "1px solid #FF0E0E"
                    senha1.style.boxShadow = "0 0 7px red"

                    if (rpSenha1.value == "") {

                        rpSenha1.style.outline = "none !important"
                        rpSenha1.style.border = "1px solid #FF0E0E"
                        rpSenha1.style.boxShadow = "0 0 7px red"
                    }
                } else if (rpSenha1.value == "") {

                    rpSenha1.style.outline = "none !important"
                    rpSenha1.style.border = "1px solid #FF0E0E"
                    rpSenha1.style.boxShadow = "0 0 7px red"
                }
                
            } else if (celular1.value == "") {

                celular1.style.outline = "none !important"
                celular1.style.border = "1px solid #FF0E0E"
                celular1.style.boxShadow = "0 0 7px red"

                
                if (senha1.value == "") {

                    senha1.style.outline = "none !important"
                    senha1.style.border = "1px solid #FF0E0E"
                    senha1.style.boxShadow = "0 0 7px red"

                    if (rpSenha1.value == "") {

                        rpSenha1.style.outline = "none !important"
                        rpSenha1.style.border = "1px solid #FF0E0E"
                        rpSenha1.style.boxShadow = "0 0 7px red"
                    }

                } else if (rpSenha1.value == "") {

                    rpSenha1.style.outline = "none !important"
                    rpSenha1.style.border = "1px solid #FF0E0E"
                    rpSenha1.style.boxShadow = "0 0 7px red"
                }
            
            } else if (senha1.value == "") {

                senha1.style.outline = "none !important"
                senha1.style.border = "1px solid #FF0E0E"
                senha1.style.boxShadow = "0 0 7px red"

                if (rpSenha1.value == "") {

                    rpSenha1.style.outline = "none !important"
                    rpSenha1.style.border = "1px solid #FF0E0E"
                    rpSenha1.style.boxShadow = "0 0 7px red"
                }
            
            }else if (rpSenha1.value == "") {

                rpSenha1.style.outline = "none !important"
                rpSenha1.style.border = "1px solid #FF0E0E"
                rpSenha1.style.boxShadow = "0 0 7px red"
            }

        } else if (data.value == "") {

            data1.style.outline = "none !important"
            data1.style.border = "1px solid #FF0E0E"
            data1.style.boxShadow = "0 0 7px red"

            if (celular.value == "") {

                celular1.style.outline = "none !important"
                celular1.style.border = "1px solid #FF0E0E"
                celular1.style.boxShadow = "0 0 7px red"

                if (senha1.value == "") {

                    senha1.style.outline = "none !important"
                    senha1.style.border = "1px solid #FF0E0E"
                    senha1.style.boxShadow = "0 0 7px red"

                    if (rpSenha1.value == "") {

                        rpSenha1.style.outline = "none !important"
                        rpSenha1.style.border = "1px solid #FF0E0E"
                        rpSenha1.style.boxShadow = "0 0 7px red"
                    }
                    
                } else if (rpSenha1.value == "") {

                    rpSenha1.style.outline = "none !important"
                    rpSenha1.style.border = "1px solid #FF0E0E"
                    rpSenha1.style.boxShadow = "0 0 7px red"
                }

            } else if (senha1.value == "") {

                senha1.style.outline = "none !important"
                senha1.style.border = "1px solid #FF0E0E"
                senha1.style.boxShadow = "0 0 7px red"

                if (rpSenha1.value == "") {

                    rpSenha1.style.outline = "none !important"
                    rpSenha1.style.border = "1px solid #FF0E0E"
                    rpSenha1.style.boxShadow = "0 0 7px red"
                }
                
            } else if (rpSenha1.value == "") {

                rpSenha1.style.outline = "none !important"
                rpSenha1.style.border = "1px solid #FF0E0E"
                rpSenha1.style.boxShadow = "0 0 7px red"
            }

        } else if (celular.value == "") {

            celular1.style.outline = "none !important"
            celular1.style.border = "1px solid #FF0E0E"
            celular1.style.boxShadow = "0 0 7px red"

            if (senha1.value == "") {

                senha1.style.outline = "none !important"
                senha1.style.border = "1px solid #FF0E0E"
                senha1.style.boxShadow = "0 0 7px red"

                if (rpSenha1.value == "") {

                    rpSenha1.style.outline = "none !important"
                    rpSenha1.style.border = "1px solid #FF0E0E"
                    rpSenha1.style.boxShadow = "0 0 7px red"
                }
                
            } else if (rpSenha1.value == "") {

                rpSenha1.style.outline = "none !important"
                rpSenha1.style.border = "1px solid #FF0E0E"
                rpSenha1.style.boxShadow = "0 0 7px red"
            }

        } else if (senha1.value == "") {

            senha1.style.outline = "none !important"
            senha1.style.border = "1px solid #FF0E0E"
            senha1.style.boxShadow = "0 0 7px red"

            if (rpSenha1.value == "") {

                rpSenha1.style.outline = "none !important"
                rpSenha1.style.border = "1px solid #FF0E0E"
                rpSenha1.style.boxShadow = "0 0 7px red"
            }
            
        } else if (rpSenha1.value == "") {

            rpSenha1.style.outline = "none !important"
            rpSenha1.style.border = "1px solid #FF0E0E"
            rpSenha1.style.boxShadow = "0 0 7px red"
        }

    } else if (uf1.value == "") {

        uf1.style.outline = "none !important"
        uf1.style.border = "1px solid #FF0E0E"
        uf1.style.boxShadow = "0 0 7px red"

        if (data1.value == "") {

            data1.style.outline = "none !important"
            data1.style.border = "1px solid #FF0E0E"
            data1.style.boxShadow = "0 0 7px red"

            if (celular1.value == "") {

                celular1.style.outline = "none !important"
                celular1.style.border = "1px solid #FF0E0E"
                celular1.style.boxShadow = "0 0 7px red"

                if (senha1.value == "") {

                    senha1.style.outline = "none !important"
                    senha1.style.border = "1px solid #FF0E0E"
                    senha1.style.boxShadow = "0 0 7px red"

                    if (rpSenha1.value == "") {

                        rpSenha1.style.outline = "none !important"
                        rpSenha1.style.border = "1px solid #FF0E0E"
                        rpSenha1.style.boxShadow = "0 0 7px red"
                    }

                } else if (rpSenha1.value == "") {

                    rpSenha1.style.outline = "none !important"
                    rpSenha1.style.border = "1px solid #FF0E0E"
                    rpSenha1.style.boxShadow = "0 0 7px red"
                }

            } else if (senha1.value == "") {

                senha1.style.outline = "none !important"
                senha1.style.border = "1px solid #FF0E0E"
                senha1.style.boxShadow = "0 0 7px red"

                if (rpSenha1.value == "") {

                    rpSenha1.style.outline = "none !important"
                    rpSenha1.style.border = "1px solid #FF0E0E"
                    rpSenha1.style.boxShadow = "0 0 7px red"
                }
            } else if (rpSenha1.value == "") {

                rpSenha1.style.outline = "none !important"
                rpSenha1.style.border = "1px solid #FF0E0E"
                rpSenha1.style.boxShadow = "0 0 7px red"
            }
            
        } else if (celular1.value == "") {

            celular1.style.outline = "none !important"
            celular1.style.border = "1px solid #FF0E0E"
            celular1.style.boxShadow = "0 0 7px red"

            
            if (senha1.value == "") {

                senha1.style.outline = "none !important"
                senha1.style.border = "1px solid #FF0E0E"
                senha1.style.boxShadow = "0 0 7px red"

                if (rpSenha1.value == "") {

                    rpSenha1.style.outline = "none !important"
                    rpSenha1.style.border = "1px solid #FF0E0E"
                    rpSenha1.style.boxShadow = "0 0 7px red"
                }

            } else if (rpSenha1.value == "") {

                rpSenha1.style.outline = "none !important"
                rpSenha1.style.border = "1px solid #FF0E0E"
                rpSenha1.style.boxShadow = "0 0 7px red"
            }
        
        } else if (senha1.value == "") {

            senha1.style.outline = "none !important"
            senha1.style.border = "1px solid #FF0E0E"
            senha1.style.boxShadow = "0 0 7px red"

            if (rpSenha1.value == "") {

                rpSenha1.style.outline = "none !important"
                rpSenha1.style.border = "1px solid #FF0E0E"
                rpSenha1.style.boxShadow = "0 0 7px red"
            }
        
        }else if (rpSenha1.value == "") {

            rpSenha1.style.outline = "none !important"
            rpSenha1.style.border = "1px solid #FF0E0E"
            rpSenha1.style.boxShadow = "0 0 7px red"
        }

    } else if (data.value == "") {

        data1.style.outline = "none !important"
        data1.style.border = "1px solid #FF0E0E"
        data1.style.boxShadow = "0 0 7px red"

        if (celular.value == "") {

            celular1.style.outline = "none !important"
            celular1.style.border = "1px solid #FF0E0E"
            celular1.style.boxShadow = "0 0 7px red"

            if (senha1.value == "") {

                senha1.style.outline = "none !important"
                senha1.style.border = "1px solid #FF0E0E"
                senha1.style.boxShadow = "0 0 7px red"

                if (rpSenha1.value == "") {

                    rpSenha1.style.outline = "none !important"
                    rpSenha1.style.border = "1px solid #FF0E0E"
                    rpSenha1.style.boxShadow = "0 0 7px red"
                }
                
            } else if (rpSenha1.value == "") {

                rpSenha1.style.outline = "none !important"
                rpSenha1.style.border = "1px solid #FF0E0E"
                rpSenha1.style.boxShadow = "0 0 7px red"
            }

        } else if (senha1.value == "") {

            senha1.style.outline = "none !important"
            senha1.style.border = "1px solid #FF0E0E"
            senha1.style.boxShadow = "0 0 7px red"

            if (rpSenha1.value == "") {

                rpSenha1.style.outline = "none !important"
                rpSenha1.style.border = "1px solid #FF0E0E"
                rpSenha1.style.boxShadow = "0 0 7px red"
            }
            
        } else if (rpSenha1.value == "") {

            rpSenha1.style.outline = "none !important"
            rpSenha1.style.border = "1px solid #FF0E0E"
            rpSenha1.style.boxShadow = "0 0 7px red"
        }

    } else if (celular.value == "") {

        celular1.style.outline = "none !important"
        celular1.style.border = "1px solid #FF0E0E"
        celular1.style.boxShadow = "0 0 7px red"

        if (senha1.value == "") {

            senha1.style.outline = "none !important"
            senha1.style.border = "1px solid #FF0E0E"
            senha1.style.boxShadow = "0 0 7px red"

            if (rpSenha1.value == "") {

                rpSenha1.style.outline = "none !important"
                rpSenha1.style.border = "1px solid #FF0E0E"
                rpSenha1.style.boxShadow = "0 0 7px red"
            }
            
        } else if (rpSenha1.value == "") {

            rpSenha1.style.outline = "none !important"
            rpSenha1.style.border = "1px solid #FF0E0E"
            rpSenha1.style.boxShadow = "0 0 7px red"
        }

    } else if (senha1.value == "") {

        senha1.style.outline = "none !important"
        senha1.style.border = "1px solid #FF0E0E"
        senha1.style.boxShadow = "0 0 7px red"

        if (rpSenha1.value == "") {

            rpSenha1.style.outline = "none !important"
            rpSenha1.style.border = "1px solid #FF0E0E"
            rpSenha1.style.boxShadow = "0 0 7px red"
        }
        
    } else if (rpSenha1.value == "") {

        rpSenha1.style.outline = "none !important"
        rpSenha1.style.border = "1px solid #FF0E0E"
        rpSenha1.style.boxShadow = "0 0 7px red"
    
    } else if (senha1.value != rpSenha1.value) {

        mensagemAlert.innerHTML = "As senhas devem ser iguais!"
        mensagemAlert.style.opacity = "1"

        alert.style.backgroundColor = "rgba(0, 132, 255, 0.363)"
        alert.style.outline = "none !important"
        alert.style.border = "1px solid rgb(55, 144, 247)"
        alert.style.boxShadow = "0 0 6px rgb(12, 126, 255)"
        alert.style.color = "rgb(63, 90, 243)"

        rpSenha.style.outline = "none !important"
        rpSenha.style.border = "1px solid rgb(55, 144, 247)"
        rpSenha.style.boxShadow = "0 0 8px rgb(12, 126, 255)"

        alert.style.opacity = "1"

        setTimeout(function () {

            alert.style.opacity = "0"
            mensagemAlert.style.opacity = "0"
        }, 4000) 
    
    } else {
        
       button1.click()
    } 

}

function focou(p) {

    if (p == 1) {

        nome1.style.outline = "none !important"
        nome1.style.border = "1px solid rgb(89, 1, 109)"
        nome1.style.boxShadow = "0 0 4px rgb(138, 29, 160)"
    }

    if (p == 2) {

        email1.style.outline = "none !important"
        email1.style.border = "1px solid rgb(89, 1, 109)"
        email1.style.boxShadow = "0 0 4px rgb(138, 29, 160)"
    }

    if (p == 4) {

        data1.style.outline = "none !important"
        data1.style.border = "1px solid rgb(89, 1, 109)"
        data1.style.boxShadow = "0 0 4px rgb(138, 29, 160)"
    }

    if (p == 5) {

        celular1.style.outline = "none !important"
        celular1.style.border = "1px solid rgb(89, 1, 109)"
        celular1.style.boxShadow = "0 0 4px rgb(138, 29, 160)"
    }

    if (p == 6) {

        senha1.style.outline = "none !important"
        senha1.style.border = "1px solid rgb(89, 1, 109)"
        senha1.style.boxShadow = "0 0 4px rgb(138, 29, 160)"
    }

    if (p == 7) {

        rpSenha1.style.outline = "none !important"
        rpSenha1.style.border = "1px solid rgb(89, 1, 109)"
        rpSenha1.style.boxShadow = "0 0 4px rgb(138, 29, 160)"
    }
}

function desfocou(p) {

    if (p == 1) {

        nome1.style.border = "2px solid rgb(48, 1, 58)"
        nome1.style.boxShadow = "0 0 0px"
    }

    if (p == 2) {

        email1.style.border = "2px solid rgb(48, 1, 58)"
        email1.style.boxShadow = "0 0 0px"
    }

    if (p == 4) {

        data1.style.border = "2px solid rgb(48, 1, 58)"
        data1.style.boxShadow = "0 0 0px"
    }

    if (p == 5) {

        celular1.style.border = "2px solid rgb(48, 1, 58)"
        celular1.style.boxShadow = "0 0 0px"
    }

    if (p == 6) {

        senha1.style.border = "2px solid rgb(48, 1, 58)"
        senha1.style.boxShadow = "0 0 0px"
    }

    if (p == 7) {

        rpSenha1.style.border = "2px solid rgb(48, 1, 58)"
        rpSenha1.style.boxShadow = "0 0 0px"
    }
}

var contador = 1
var icone1 = document.getElementById("icon1")
var icone2 = document.getElementById("icon2")

function visibleOrNot(p) {

    contador ++

    if (p == 1 & contador % 2 == 0) {

        senha1.type = "text"
        icone1.innerHTML = "visibility_off"
    
    } else if (p == 1 & contador % 2 != 0) {

        senha1.type = "password"
        icone1.innerHTML = "visibility"
    }

    if (p == 2 & contador % 2 == 0) {

        rpSenha1.type = "text"
        icone2.innerHTML = "visibility_off"
    
    } else if (p == 2 & contador % 2 != 0) {

        rpSenha1.type = "password"
        icone2.innerHTML = "visibility"
    }
}


















