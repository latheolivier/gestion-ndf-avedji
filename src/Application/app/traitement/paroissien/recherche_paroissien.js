
var LISTE_POSITION = []
var RECHERCHE_ACTIVE = []

document.getElementById('btn_reacherche').addEventListener('click', function (params) {

    document.getElementById('pagination_link').innerHTML = ""
    // $('#modal_recherche').modal('show')
    if (RECHERCHE_ACTIVE.length == 0) {

        // <td> <input type="text" class="form-control" onkeyup="mot_cle_age()" id="mot_cle_age"> </td> 

        RECHERCHE_ACTIVE.push(1)
        let row = `
    <tr >
    <td> <input type="text" class="form-control" onkeyup="mot_cle_nom()" id="mot_cle_nom" > </td> 
    <td> <input type="text" class="form-control" onkeyup="mot_cle_prenom()" id="mot_cle_prenom"> </td> 
    <td> <input type="text" class="form-control" onkeyup="mot_cle_sexe()" id="mot_cle_sexe"> </td> 
    <td> <input type="text" class="form-control" onkeyup="mot_cle_date_naissance()" id="mot_cle_date_naissance"> </td> 
    <td> <input type="text" class="form-control" onkeyup="mot_cle_bapteme()" id="mot_cle_bapteme"> </td> 
    <td> <input type="text" class="form-control" onkeyup="mot_cle_communion()" id="mot_cle_communion"> </td> 
    <td> <input type="text" class="form-control" onkeyup="mot_cle_confirmation()" id="mot_cle_confirmation"> </td> 
    </tr>
    `

        document.getElementById('content_les_paroissuen').insertAdjacentHTML('afterbegin', row)
    }

})







// ###############  verification des champs #############



function mot_cle_nom() {

    let mot_cle_nom = document.getElementById('mot_cle_nom').value.trim()

    if (mot_cle_nom == "") {
        LISTE_POSITION = LISTE_POSITION.filter(function (item) {
            return item !== 1
        })
    }
    else {
        let recherche = LISTE_POSITION.filter(function (item) {
            return item == 1
        })

        if (recherche.length == 0) {
            LISTE_POSITION.push(1)

        }
    }

    flltrage()

}



function mot_cle_prenom() {

    let mot_cle_prenom = document.getElementById('mot_cle_prenom').value.trim()

    if (mot_cle_prenom == "") {
        LISTE_POSITION = LISTE_POSITION.filter(function (item) {
            return item !== 2
        })
    }
    else {
        let recherche = LISTE_POSITION.filter(function (item) {
            return item == 2
        })

        if (recherche.length == 0) {
            LISTE_POSITION.push(2)
        }
    }

    flltrage()

}





function mot_cle_sexe() {

    let mot_cle_sexe = document.getElementById('mot_cle_sexe').value.trim()

    if (mot_cle_sexe == "") {
        LISTE_POSITION = LISTE_POSITION.filter(function (item) {
            return item !== 3
        })
    }
    else {
        let recherche = LISTE_POSITION.filter(function (item) {
            return item == 3
        })

        if (recherche.length == 0) {
            LISTE_POSITION.push(3)
        }
    }

    flltrage()

}




function mot_cle_date_naissance() {

    let mot_cle_date_naissance = document.getElementById('mot_cle_date_naissance').value.trim()

    if (mot_cle_date_naissance == "") {
        LISTE_POSITION = LISTE_POSITION.filter(function (item) {
            return item !== 4
        })
    }
    else {
        let recherche = LISTE_POSITION.filter(function (item) {
            return item == 4
        })

        if (recherche.length == 0) {
            LISTE_POSITION.push(4)
        }
    }

    flltrage()

}



function mot_cle_age() {

    let mot_cle_age = document.getElementById('mot_cle_age').value.trim()

    if (mot_cle_age == "") {
        LISTE_POSITION = LISTE_POSITION.filter(function (item) {
            return item !== 5
        })
    }
    else {
        let recherche = LISTE_POSITION.filter(function (item) {
            return item == 5
        })

        if (recherche.length == 0) {
            LISTE_POSITION.push(5)
        }
    }

    flltrage()

}



function mot_cle_bapteme() {
    let mot_cle_bapteme = document.getElementById('mot_cle_bapteme').value.trim()

    if (mot_cle_bapteme == "") {
        LISTE_POSITION = LISTE_POSITION.filter(function (item) {
            return item !== 6
        })
    }
    else {
        let recherche = LISTE_POSITION.filter(function (item) {
            return item == 6
        })

        if (recherche.length == 0) {
            LISTE_POSITION.push(6)
        }
    }

    flltrage()
}


function mot_cle_communion() {
    let mot_cle_communion = document.getElementById('mot_cle_communion').value.trim()

    if (mot_cle_communion == "") {
        LISTE_POSITION = LISTE_POSITION.filter(function (item) {
            return item !== 7
        })
    }
    else {
        let recherche = LISTE_POSITION.filter(function (item) {
            return item == 7
        })

        if (recherche.length == 0) {
            LISTE_POSITION.push(7)
        }
    }

    flltrage()
}




function mot_cle_confirmation() {
    let mot_cle_confirmation = document.getElementById('mot_cle_confirmation').value.trim()

    if (mot_cle_confirmation == "") {
        LISTE_POSITION = LISTE_POSITION.filter(function (item) {
            return item !== 8
        })
    }
    else {
        let recherche = LISTE_POSITION.filter(function (item) {
            return item == 8
        })

        if (recherche.length == 0) {
            LISTE_POSITION.push(8)
        }
    }

    flltrage()
}



















// ######################   recherche nom  #######################

var BASE_RESULTAT = []





function flltrage() {


    BASE_RESULTAT = []
    let VERIFICATEUR = ""


    let mot_cle_nom = document.getElementById('mot_cle_nom').value.trim()
    let mot_cle_prenom = document.getElementById('mot_cle_prenom').value.trim()

    let mot_cle_sexe = document.getElementById('mot_cle_sexe').value.trim()
    let mot_cle_date_naissance = document.getElementById('mot_cle_date_naissance').value.trim()
    // let mot_cle_age = document.getElementById('mot_cle_age').value.trim()
    let mot_cle_bapteme = document.getElementById('mot_cle_bapteme').value.trim()
    let mot_cle_communion = document.getElementById('mot_cle_communion').value.trim()
    let mot_cle_confirmation = document.getElementById('mot_cle_confirmation').value.trim()







    if (LISTE_POSITION.length > 0) {


        LISTE_POSITION.forEach(element => {


            if (element == 1) {
                let exprex_reg_nom = '\\b(.*)(' + mot_cle_nom + ')(.*)\\b'

                if (BASE_RESULTAT.length > 0) {
                    console.log('superrier')
                    let donnee = BASE_RESULTAT.filter((element) => {
                        return element.nom_paroissien.match(new RegExp(exprex_reg_nom, 'i'))
                    }
                    );
                    if (donnee.length > 0) {
                        BASE_RESULTAT = donnee
                    } else {
                        BASE_RESULTAT = []
                    }
                }
                else {
                    let donnee = BDD_PAROISSIEN[0].filter((element) => {
                        return element.nom_paroissien.match(new RegExp(exprex_reg_nom, 'i'))
                    }
                    );
                    if (donnee.length > 0) {
                        BASE_RESULTAT = donnee
                    }
                    else {
                        BASE_RESULTAT = []
                    }
                }
            }


            if (element == 2) {
                let exprex_reg_nom = '\\b(.*)(' + mot_cle_prenom + ')(.*)\\b'

                if (BASE_RESULTAT.length > 0) {
                    console.log('superrier')
                    let donnee = BASE_RESULTAT.filter((element) => {
                        return element.prenom_paroissien.match(new RegExp(exprex_reg_nom, 'i'))
                    }
                    );
                    if (donnee.length > 0) {
                        BASE_RESULTAT = donnee
                    } else {
                        BASE_RESULTAT = []
                    }
                }
                else {
                    let donnee = BDD_PAROISSIEN[0].filter((element) => {
                        return element.prenom_paroissien.match(new RegExp(exprex_reg_nom, 'i'))
                    }
                    );
                    if (donnee.length > 0) {
                        BASE_RESULTAT = donnee
                    }
                    else {
                        BASE_RESULTAT = []
                    }
                }
            }



            if (element == 3) {
                let exprex_reg_nom = '\\b(.*)(' + mot_cle_sexe + ')(.*)\\b'

                if (BASE_RESULTAT.length > 0) {
                    console.log('superrier')
                    let donnee = BASE_RESULTAT.filter((element) => {
                        return element.sexe_paroissien.match(new RegExp(exprex_reg_nom, 'i'))
                    }
                    );
                    if (donnee.length > 0) {
                        BASE_RESULTAT = donnee
                    } else {
                        BASE_RESULTAT = []
                    }
                }
                else {
                    let donnee = BDD_PAROISSIEN[0].filter((element) => {
                        return element.sexe_paroissien.match(new RegExp(exprex_reg_nom, 'i'))
                    }
                    );
                    if (donnee.length > 0) {
                        BASE_RESULTAT = donnee
                    }
                    else {
                        BASE_RESULTAT = []
                    }
                }
            }


            if (element == 4) {
                let exprex_reg_nom = '\\b(.*)(' + mot_cle_date_naissance + ')(.*)\\b'

                if (BASE_RESULTAT.length > 0) {
                    console.log('superrier')
                    let donnee = BASE_RESULTAT.filter((element) => {
                        return element.date_naissance.match(new RegExp(exprex_reg_nom, 'i'))
                    }
                    );
                    if (donnee.length > 0) {
                        BASE_RESULTAT = donnee
                    } else {
                        BASE_RESULTAT = []
                    }
                }
                else {
                    let donnee = BDD_PAROISSIEN[0].filter((element) => {
                        return element.date_naissance.match(new RegExp(exprex_reg_nom, 'i'))
                    }
                    );
                    if (donnee.length > 0) {
                        BASE_RESULTAT = donnee
                    }
                    else {
                        BASE_RESULTAT = []
                    }
                }
            }



            if (element == 5) {

                let exprex_reg_nom = '\\b(.*)(' + mot_cle_age + ')(.*)\\b'


                let total_word = mot_cle_age.length

                let first_caracter = mot_cle_age.substring(0, 1)

                // condition inferier
                if (first_caracter == "<") {
                    if (mot_cle_age.substring(1, total_word).length > 0) {

                        let la_valeur = mot_cle_age.substring(1, total_word)

                        if (BASE_RESULTAT.length > 0) {

                            let donnee = BASE_RESULTAT.filter((element) => {
                                return parseInt(element.age_paroissien) < parseInt(la_valeur)
                            }
                            );
                            if (donnee.length > 0) {
                                BASE_RESULTAT = donnee
                            } else {
                                BASE_RESULTAT = []
                            }
                        }
                        else {
                            let donnee = BDD_PAROISSIEN[0].filter((element) => {
                                return parseInt(element.age_paroissien) < parseInt(la_valeur)
                            }
                            );
                            if (donnee.length > 0) {
                                BASE_RESULTAT = donnee
                            }
                            else {
                                BASE_RESULTAT = []
                            }
                        }


                    }
                }
                // condition superieur
                else if (first_caracter == ">") {
                    if (mot_cle_age.substring(1, total_word).length > 0) {

                        let la_valeur = mot_cle_age.substring(1, total_word)

                        if (BASE_RESULTAT.length > 0) {

                            let donnee = BASE_RESULTAT.filter((element) => {
                                return parseInt(element.age_paroissien) > parseInt(la_valeur)
                            }
                            );
                            if (donnee.length > 0) {
                                BASE_RESULTAT = donnee
                            } else {
                                BASE_RESULTAT = []
                            }
                        }
                        else {
                            let donnee = BDD_PAROISSIEN[0].filter((element) => {
                                return parseInt(element.age_paroissien) > parseInt(la_valeur)
                            }
                            );
                            if (donnee.length > 0) {
                                BASE_RESULTAT = donnee
                            }
                            else {
                                BASE_RESULTAT = []
                            }
                        }


                    }
                }

                // condition égal
                else if (first_caracter == "=") {
                    if (mot_cle_age.substring(1, total_word).length > 0) {

                        let la_valeur = mot_cle_age.substring(1, total_word)

                        if (BASE_RESULTAT.length > 0) {

                            let donnee = BASE_RESULTAT.filter((element) => {
                                return parseInt(element.age_paroissien) == parseInt(la_valeur)
                            }
                            );
                            if (donnee.length > 0) {
                                BASE_RESULTAT = donnee
                            } else {
                                BASE_RESULTAT = []
                            }
                        }
                        else {
                            let donnee = BDD_PAROISSIEN[0].filter((element) => {
                                return parseInt(element.age_paroissien) == parseInt(la_valeur)
                            }
                            );
                            if (donnee.length > 0) {
                                BASE_RESULTAT = donnee
                            }
                            else {
                                BASE_RESULTAT = []
                            }
                        }


                    }
                }

                else {

                    if (BASE_RESULTAT.length > 0) {

                        let donnee = BASE_RESULTAT.filter((element) => {
                            return element.age_paroissien.match(new RegExp(exprex_reg_nom, 'i'))
                        }
                        );
                        if (donnee.length > 0) {
                            BASE_RESULTAT = donnee
                        } else {
                            BASE_RESULTAT = []
                        }
                    }
                    else {
                        let donnee = BDD_PAROISSIEN[0].filter((element) => {
                            return element.age_paroissien.match(new RegExp(exprex_reg_nom, 'i'))
                        }
                        );
                        if (donnee.length > 0) {
                            BASE_RESULTAT = donnee
                        }
                        else {
                            BASE_RESULTAT = []
                        }
                    }
                }
            }



            if (element == 6) {
                let exprex_reg_nom = '\\b(.*)(' + mot_cle_bapteme + ')(.*)\\b'

                if (BASE_RESULTAT.length > 0) {
                    console.log('superrier')
                    let donnee = BASE_RESULTAT.filter((element) => {
                        return element.date_bapteme.match(new RegExp(exprex_reg_nom, 'i'))
                    }
                    );
                    if (donnee.length > 0) {
                        BASE_RESULTAT = donnee
                    } else {
                        BASE_RESULTAT = []
                    }
                }
                else {
                    let donnee = BDD_PAROISSIEN[0].filter((element) => {
                        return element.date_bapteme.match(new RegExp(exprex_reg_nom, 'i'))
                    }
                    );
                    if (donnee.length > 0) {
                        BASE_RESULTAT = donnee
                    }
                    else {
                        BASE_RESULTAT = []
                    }
                }
            }


            if (element == 7) {
                let exprex_reg_nom = '\\b(.*)(' + mot_cle_communion + ')(.*)\\b'

                if (BASE_RESULTAT.length > 0) {
                    console.log('superrier')
                    let donnee = BASE_RESULTAT.filter((element) => {
                        return element.Date_de_la_premiere_communion.match(new RegExp(exprex_reg_nom, 'i'))
                    }
                    );
                    if (donnee.length > 0) {
                        BASE_RESULTAT = donnee
                    } else {
                        BASE_RESULTAT = []
                    }
                }
                else {
                    let donnee = BDD_PAROISSIEN[0].filter((element) => {
                        return element.Date_de_la_premiere_communion.match(new RegExp(exprex_reg_nom, 'i'))
                    }
                    );
                    if (donnee.length > 0) {
                        BASE_RESULTAT = donnee
                    }
                    else {
                        BASE_RESULTAT = []
                    }
                }
            }

            if (element == 8) {
                let exprex_reg_nom = '\\b(.*)(' + mot_cle_confirmation + ')(.*)\\b'

                if (BASE_RESULTAT.length > 0) {
                    console.log('superrier')
                    let donnee = BASE_RESULTAT.filter((element) => {
                        return element.Date_de_la_confirmation.match(new RegExp(exprex_reg_nom, 'i'))
                    }
                    );
                    if (donnee.length > 0) {
                        BASE_RESULTAT = donnee
                    } else {
                        BASE_RESULTAT = []
                    }
                }
                else {
                    let donnee = BDD_PAROISSIEN[0].filter((element) => {
                        return element.Date_de_la_confirmation.match(new RegExp(exprex_reg_nom, 'i'))
                    }
                    );
                    if (donnee.length > 0) {
                        BASE_RESULTAT = donnee
                    }
                    else {
                        BASE_RESULTAT = []
                    }
                }
            }



        });

        afficher(BASE_RESULTAT)
    }
    else {
        BASE_RESULTAT = []
        afficher(BDD_PAROISSIEN[0])
    }
}








function afficher(data) {

    console.log(data)
    // document.querySelector('.row_display').style.display = "none"

    var divsToHide = document.getElementsByClassName("row_display"); //divsToHide is an array
    for (var i = 0; i < divsToHide.length; i++) {
        divsToHide[i].style.visibility = "hidden"; // or
        divsToHide[i].style.display = "none"; // depending on what you're doing
    }

    if (data.length > 0) {


        document.getElementById('content_recherche_les_paroissuen').innerHTML = ""
        data.forEach(element => {

            let table_tr = "ligne_paroissien_" + element.id

            let row = `
                        <tr id="${table_tr}" data-type-menu="${element.id}" class="context-menu-one row_display" style="cursor: pointer;" class="row_display">
                        <td onclick="show_detail(${element.id})">
                           ${element.nom_paroissien}
                        </td>
                        <td onclick="show_detail(${element.id})">${element.prenom_paroissien}</td>
                        <td onclick="show_detail(${element.id})">${element.sexe_paroissien}</td>
                        <td onclick="show_detail(${element.id})">${dateRell_1_4(element.date_naissance)}</td>
 
                        <td onclick="show_detail(${element.id})">${element.date_bapteme == "" ? "..." : dateRell_1_4(element.date_bapteme)}</td>
                        <td onclick="show_detail(${element.id})">${element.Date_de_la_premiere_communion == "" ? "..." : dateRell_1_4(element.Date_de_la_premiere_communion)}</td>
                        <td onclick="show_detail(${element.id})">${element.Date_de_la_confirmation == "" ? "..." : dateRell_1_4(element.Date_de_la_confirmation)}</td>





                    </tr>
                        `

            document.getElementById('content_les_paroissuen').insertAdjacentHTML('afterend', row)



            let row_2 = `
                        <tr   class="context-menu-one row_display" style="cursor: pointer;" class="row_display">
                        <td >
                         ${element.nom_paroissien.toUpperCase()}
                        </td>
                        <td >${element.prenom_paroissien.charAt(0).toUpperCase() + element.prenom_paroissien.slice(1)}</td>
                        <td >${element.sexe_paroissien}</td>
                        <td >${dateRell_1_4(element.date_naissance)}</td>
 
                        <td >${element.date_bapteme == "" ? "..." : dateRell_1_4(element.date_bapteme)}</td>
                        <td >${element.Date_de_la_premiere_communion == "" ? "..." : dateRell_1_4(element.Date_de_la_premiere_communion)}</td>
                        <td >${element.Date_de_la_confirmation == "" ? "..." : dateRell_1_4(element.Date_de_la_confirmation)}</td>





                    </tr>
                        `


            document.getElementById('content_recherche_les_paroissuen').innerHTML += row_2
        });
    }


    else {
        // document.getElementById('content_les_paroissuen').innerHTML = ""

    }
}