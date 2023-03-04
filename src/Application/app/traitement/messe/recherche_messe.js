var LISTE_POSITION = []

var RECHERCHE_ACTIVE = []



// document.getElementById('filtrer_autre_messe').addEventListener('click', function (params) {
//     document.getElementById('btn_les_filtres').click()

// })




document.getElementById('btn_les_filtres').addEventListener('click', function (params) {

    document.getElementById('pagination_link').innerHTML = ""

    // $('#modal_recherche').modal('show')
    if (RECHERCHE_ACTIVE.length == 0) {





        RECHERCHE_ACTIVE.push("1")



        let row = `
    <tr >
    <td> <input type="text" class="form-control" onkeyup="type_de_messe_re()" id="type_de_messe_re" > </td> 
    <td> <input type="text" class="form-control" onkeyup="heure_messe_re()" id="heure_messe_re"> </td> 
    <td> <input type="text" disabled class="form-control" onkeyup="periodes_messe()" id="periodes_messe"> </td> 
    <td> <input type="text" class="form-control" onkeyup="nom_paroissien_messe()" id="nom_paroissien_messe"> </td> 
    <td> <input type="text" disabled class="form-control"  id="intenssion_de_la_messe_re"> </td> 
    <td> <input type="text" disabled class="form-control"  id="mot_cle_bapteme"> </td> 
     </tr>
    `

        document.getElementById('content_les_messes').insertAdjacentHTML('afterbegin', row)
    }

})






function type_de_messe_re() {
    let type_de_messe_re = document.getElementById('type_de_messe_re').value.trim()

    if (type_de_messe_re == "") {
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






function heure_messe_re() {
    let heure_messe_re = document.getElementById('heure_messe_re').value.trim()

    if (heure_messe_re == "") {
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







function periodes_messe() {
    let periodes_messe = document.getElementById('periodes_messe').value.trim()

    if (periodes_messe == "") {
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










function nom_paroissien_messe() {
    let nom_paroissien_messe = document.getElementById('nom_paroissien_messe').value.trim()

    if (nom_paroissien_messe == "") {
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











// ######################   recherche nom  #######################

var BASE_RESULTAT = Array()






function flltrage() {

    var SAUVEGARDE = Array()


    // SAUVEGARDE = []



    console.log(SAUVEGARDE)






    let type_de_messe_re = document.getElementById('type_de_messe_re').value.trim()
    let heure_messe_re = document.getElementById('heure_messe_re').value.trim()

    let periodes_messe = document.getElementById('periodes_messe').value.trim()
    let nom_paroissien_messe = document.getElementById('nom_paroissien_messe').value.trim()








    if (LISTE_POSITION.length > 0) {


        LISTE_POSITION.forEach(element => {


            if (element == 1) {
                let exprex_reg_nom = '\\b(.*)(' + type_de_messe_re + ')(.*)\\b'

                if (SAUVEGARDE.length > 0) {
                    console.log('superrier')
                    let donnee = SAUVEGARDE.filter((element) => {
                        return element.type_de_messe.match(new RegExp(exprex_reg_nom, 'i'))
                    }
                    );
                    if (donnee.length > 0) {
                        SAUVEGARDE = donnee
                    } else {
                        SAUVEGARDE = []
                    }
                }
                else {
                    let donnee = BASE_RESULTAT.filter((element) => {
                        return element.type_de_messe.match(new RegExp(exprex_reg_nom, 'i'))
                    }
                    );
                    if (donnee.length > 0) {
                        SAUVEGARDE = donnee
                    }
                    else {
                        SAUVEGARDE = []
                    }
                }
            }


            if (element == 2) {
                let exprex_reg_nom = '\\b(.*)(' + heure_messe_re + ')(.*)\\b'

                if (SAUVEGARDE.length > 0) {
                    console.log('superrier')
                    let donnee = SAUVEGARDE.filter((element) => {
                        return element.heure_messe.match(new RegExp(exprex_reg_nom, 'i'))
                    }
                    );
                    if (donnee.length > 0) {
                        SAUVEGARDE = donnee
                    } else {
                        SAUVEGARDE = []
                    }
                }
                else {
                    let donnee = BASE_RESULTAT.filter((element) => {
                        return element.heure_messe.match(new RegExp(exprex_reg_nom, 'i'))
                    }
                    );
                    if (donnee.length > 0) {
                        SAUVEGARDE = donnee
                    }
                    else {
                        SAUVEGARDE = []
                    }
                }
            }



            //  ici
            if (element == 3) {



                let exprex_reg_nom = '\\b(.*)(' + periodes_messe + ')(.*)\\b'


                let total_word = periodes_messe.length


                let date_1 = periodes_messe.substring(0, 10)
                let date_2 = periodes_messe.substring(11, 21)



                if (date_1.length == 10 && date_2.length == 10) {

                    let la_valeur = date_1
                    let la_valeur_2 = date_2


                    if (SAUVEGARDE.length > 0) {

                        let donnee = SAUVEGARDE.filter((element) => {

                            let x = la_valeur.split('/').reverse().join('-');
                            let x_2 = la_valeur_2.split('/').reverse().join('-');
                            let dat_1 = element.periode_1.split('/').reverse().join('-');

                            if (element.periode_2 != "") {
                                let dat_2 = element.periode_2.split('/').reverse().join('-');

                                return new Date(x) >= new Date(dat_1) && new Date(x_2) <= new Date(dat_2)

                            } else {
                                return new Date(x) >= new Date(dat_1) && new Date(x_2) <= new Date(dat_1)
                            }
                        }
                        );
                        if (donnee.length > 0) {
                            SAUVEGARDE = donnee
                        } else {
                            SAUVEGARDE = []
                        }
                    }
                    else {
                        let donnee = BDD_MESSE[0].filter((element) => {

                            let x = la_valeur.split('/').reverse().join('-');
                            let x_2 = la_valeur_2.split('/').reverse().join('-');
                            let dat_1 = element.periode_1.split('/').reverse().join('-');

                            if (element.periode_2 != "") {
                                let dat_2 = element.periode_2.split('/').reverse().join('-');

                                return new Date(x) >= new Date(dat_1) && new Date(x_2) <= new Date(dat_2)

                            } else {
                                return new Date(x) >= new Date(dat_1) && new Date(x_2) <= new Date(dat_1)
                            }

                        }
                        );



                        if (donnee.length > 0) {
                            SAUVEGARDE = donnee
                        }
                        else {
                            SAUVEGARDE = []
                        }
                    }

                }





                else if (date_1.length == 10 && date_2.length != 10) {

                    let la_valeur = date_1

                    if (SAUVEGARDE.length > 0) {

                        let donnee = SAUVEGARDE.filter((element) => {

                            if (element.periode_2 != "") {

                                let x = la_valeur.split('/').reverse().join('-');

                                let y = element.periode_2.split('/').reverse().join('-');
                                let z = element.periode_1.split('/').reverse().join('-');

                                return new Date(x) >= new Date(z) && new Date(x) <= new Date(y)

                            } else {
                                return element.periode_1 == la_valeur
                            }
                        }
                        );
                        if (donnee.length > 0) {
                            SAUVEGARDE = donnee
                        } else {
                            SAUVEGARDE = []
                        }
                    }
                    else {
                        let donnee = BDD_MESSE[0].filter((element) => {

                            if (element.periode_2 != "") {

                                let x = la_valeur.split('/').reverse().join('-');

                                let y = element.periode_2.split('/').reverse().join('-');
                                let z = element.periode_1.split('/').reverse().join('-');

                                return new Date(x) >= new Date(z) && new Date(x) <= new Date(y)
                                // return element.periode_1 == la_valeur

                            } else {
                                return element.periode_1 == la_valeur
                            }

                        }
                        );



                        if (donnee.length > 0) {
                            SAUVEGARDE = donnee
                        }
                        else {
                            SAUVEGARDE = []
                        }
                    }
                }







                // condition inferier
                // if (first_caracter == "<") {
                //     if (periodes_messe.substring(1, total_word).length > 0) {

                //         let la_valeur = periodes_messe.substring(1, total_word)

                //         if (SAUVEGARDE.length > 0) {

                //             let donnee = SAUVEGARDE.filter((element) => {
                //                 return parseInt(element.age_paroissien) < parseInt(la_valeur)
                //             }
                //             );
                //             if (donnee.length > 0) {
                //                 SAUVEGARDE = donnee
                //             } else {
                //                 SAUVEGARDE = []
                //             }
                //         }
                //         else {
                //             let donnee = BDD_MESSE[0].filter((element) => {
                //                 return parseInt(element.age_paroissien) < parseInt(la_valeur)
                //             }
                //             );
                //             if (donnee.length > 0) {
                //                 SAUVEGARDE = donnee
                //             }
                //             else {
                //                 SAUVEGARDE = []
                //             }
                //         }


                //     }
                // }
                // condition superieur
                // else if (first_caracter == ">") {
                //     if (periodes_messe.substring(1, total_word).length > 0) {

                //         let la_valeur = periodes_messe.substring(1, total_word)

                //         if (SAUVEGARDE.length > 0) {

                //             let donnee = SAUVEGARDE.filter((element) => {
                //                 return parseInt(element.age_paroissien) > parseInt(la_valeur)
                //             }
                //             );
                //             if (donnee.length > 0) {
                //                 SAUVEGARDE = donnee
                //             } else {
                //                 SAUVEGARDE = []
                //             }
                //         }
                //         else {
                //             let donnee = BDD_MESSE[0].filter((element) => {
                //                 return parseInt(element.age_paroissien) > parseInt(la_valeur)
                //             }
                //             );
                //             if (donnee.length > 0) {
                //                 SAUVEGARDE = donnee
                //             }
                //             else {
                //                 SAUVEGARDE = []
                //             }
                //         }


                //     }
                // }

                // condition égal
                // else if (first_caracter == "=") {
                //     if (periodes_messe.substring(1, total_word).length > 0) {

                //         let la_valeur = periodes_messe.substring(1, total_word)

                //         if (SAUVEGARDE.length > 0) {

                //             let donnee = SAUVEGARDE.filter((element) => {
                //                 return parseInt(element.age_paroissien) == parseInt(la_valeur)
                //             }
                //             );
                //             if (donnee.length > 0) {
                //                 SAUVEGARDE = donnee
                //             } else {
                //                 SAUVEGARDE = []
                //             }
                //         }
                //         else {
                //             let donnee = BDD_MESSE[0].filter((element) => {
                //                 return parseInt(element.age_paroissien) == parseInt(la_valeur)
                //             }
                //             );
                //             if (donnee.length > 0) {
                //                 SAUVEGARDE = donnee
                //             }
                //             else {
                //                 SAUVEGARDE = []
                //             }
                //         }


                //     }
                // }

                // else {

                //     if (SAUVEGARDE.length > 0) {

                //         let donnee = SAUVEGARDE.filter((element) => {
                //             return element.age_paroissien.match(new RegExp(exprex_reg_nom, 'i'))
                //         }
                //         );
                //         if (donnee.length > 0) {
                //             SAUVEGARDE = donnee
                //         } else {
                //             SAUVEGARDE = []
                //         }
                //     }
                //     else {
                //         let donnee = BDD_MESSE[0].filter((element) => {
                //             return element.age_paroissien.match(new RegExp(exprex_reg_nom, 'i'))
                //         }
                //         );
                //         if (donnee.length > 0) {
                //             SAUVEGARDE = donnee
                //         }
                //         else {
                //             SAUVEGARDE = []
                //         }
                //     }
                // }




            }




            if (element == 4) {
                let exprex_reg_nom = '\\b(.*)(' + nom_paroissien_messe + ')(.*)\\b'

                if (SAUVEGARDE.length > 0) {
                    console.log('superrier')
                    let donnee = SAUVEGARDE.filter((element) => {
                        return element.nom_paroissien.match(new RegExp(exprex_reg_nom, 'i'))
                    }
                    );
                    if (donnee.length > 0) {
                        SAUVEGARDE = donnee
                    } else {
                        SAUVEGARDE = []
                    }
                }
                else {
                    let donnee = BASE_RESULTAT.filter((element) => {
                        return element.nom_paroissien.match(new RegExp(exprex_reg_nom, 'i'))
                    }
                    );
                    if (donnee.length > 0) {
                        SAUVEGARDE = donnee
                    }
                    else {
                        SAUVEGARDE = []
                    }
                }
            }







        });

        afficher(SAUVEGARDE, 'rien_faire')
    }



    else {
        console.log('vide')
        console.log(BASE_RESULTAT)
        SAUVEGARDE = []
        afficher(BASE_RESULTAT, 'rien_faire')
    }





}






// document.getElementById('messe_demain').addEventListener('click', function (e) {


//     let la_valeur = dtate_demain()

//     if (BASE_RESULTAT.length > 0) {

//         let donnee = BASE_RESULTAT.filter((element) => {

//             if (element.periode_2 != "") {

//                 let x = la_valeur.split('/').reverse().join('-');

//                 let y = element.periode_2.split('/').reverse().join('-');
//                 let z = element.periode_1.split('/').reverse().join('-');

//                 return new Date(x) >= new Date(z) && new Date(x) <= new Date(y)

//             } else {
//                 return element.periode_1 == la_valeur
//             }
//         }
//         );
//         if (donnee.length > 0) {
//             BASE_RESULTAT = donnee
//         } else {
//             BASE_RESULTAT = []
//         }
//     }
//     else {
//         let donnee = BDD_MESSE[0].filter((element) => {

//             if (element.periode_2 != "") {

//                 let x = la_valeur.split('/').reverse().join('-');

//                 let y = element.periode_2.split('/').reverse().join('-');
//                 let z = element.periode_1.split('/').reverse().join('-');

//                 return new Date(x) >= new Date(z) && new Date(x) <= new Date(y)

//             } else {
//                 return element.periode_1 == la_valeur
//             }

//         }
//         );



//         if (donnee.length > 0) {
//             BASE_RESULTAT = donnee
//         }
//         else {
//             BASE_RESULTAT = []
//         }
//     }
//     afficher(BASE_RESULTAT)
// })

















function filter_initial() {

    let la_valeur = dateRell_1_0()


    let donnee = BDD_MESSE[0].filter((element) => {

        if (element.periode_2 != "") {

            let x = la_valeur.split('/').reverse().join('-');

            let y = element.periode_2.split('/').reverse().join('-');
            let z = element.periode_1.split('/').reverse().join('-');

            return new Date(x) >= new Date(z) && new Date(x) <= new Date(y)

        } else {
            return element.periode_1 == la_valeur
        }

    }
    );


    // BASE_RESULTAT = []
    BASE_RESULTAT = donnee

    // console.log(donnee)
    afficher(donnee, "")
}






function afficher(data, ma_date) {


    les_donnee_print(data, ma_date)


    // if (RECHERCHE_ACTIVE.length > 0) {



    // console.log(data)
    // document.querySelector('.row_display').style.display = "none"

    var divsToHide = document.getElementsByClassName("row_display"); //divsToHide is an array
    for (var i = 0; i < divsToHide.length; i++) {
        divsToHide[i].style.visibility = "hidden"; // or
        divsToHide[i].style.display = "none"; // depending on what you're doing
    }

    if (data.length > 0) {

        SAUVEGARDE = data

        if (RECHERCHE_ACTIVE.length == 0) {
            loading()
            document.getElementById('content_les_messes').innerHTML = ""
            document.getElementById('content_etat_de_demande').innerHTML = ""
        }


        // #################   1111111111111111   ###########################


        data.forEach(element => {

            let my_row = "ligne_" + element.id

            let la_periode
            if (element.periode_2 != "") {
                la_periode = element.periode_1 + " <br> au <br> " + element.periode_2
            } else {
                la_periode = element.periode_1
            }


            let row = `
            <tr id="${my_row}" data-type-menu="${element.id}" style="cursor: pointer;" onclick="detail(${element.id})" class="context-menu-one row_display">
            <td>
            <i class="fab fa-angular fa-lg text-danger me-3"></i>
            ${element.dates}
            </td>

            <td>${la_periode}</td>
            <td>${element.type_de_messe}</td>
            <td>${element.heure_messe}</td>

             <td>${element.nom_paroissien}</td>
             <td>${element.montant} Fcfa </td>

                </tr>
            `


            document.getElementById('content_les_messes').insertAdjacentHTML('afterend', row)

            // document.getElementById('content_les_messes').innerHTML += row
        });


        // #################   22222222222222   ###########################


        data.forEach(element => {

            let my_row = "ligne_" + element.id

            let la_periode
            if (element.periode_2 != "") {
                la_periode = element.periode_1 + " <br> au <br> " + element.periode_2
            } else {
                la_periode = element.periode_1
            }


            let row = `
            <tr id="${my_row}" data-type-menu="${element.id}" style="cursor: pointer;" onclick="detail(${element.id})" class="context-menu-one row_display">
            <td>
            <i class="fab fa-angular fa-lg text-danger me-3"></i>
            ${element.dates}
            </td>

            <td>${la_periode}</td>
            <td>${element.type_de_messe}</td>
            <td>${element.heure_messe}</td>

             <td>${element.nom_paroissien}</td>
             <td>${element.montant} Fcfa </td>

                </tr>
            `


            document.getElementById('content_etat_de_demande').insertAdjacentHTML('afterend', row)

            // document.getElementById('content_les_messes').innerHTML += row
        });



    }


    else {
        // document.getElementById('content_les_messes').innerHTML = ""
        document.getElementById('content_etat_de_demande').innerHTML = ""
    }
    // }
}







// ##############################


















const mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]

function frenchTodayDate(donnee) {

    let today = new Date(donnee);
    let year = today.getFullYear()
    let dayNumber = today.getDate()
    let month = mois[today.getMonth()]
    let weekday = today.toLocaleDateString("fr-FR", { weekday: "long" });

    return { weekday, dayNumber, month, year }
}










function les_donnee_print(data, ma_date) {

    // if (RECHERCHE_ACTIVE.length == 0) {
    //     BASE_RESULTAT = []
    // }


    // ###########################



    if (ma_date != "" && ma_date != "periode" && ma_date != "rien_faire") {

        let capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase();
        let { weekday, dayNumber, month, year } = frenchTodayDate(ma_date.split('/').reverse().join('-'))
        let aujourdhui = `${capitalize(weekday)}, le ${dayNumber} ${month} ${year}`
        console.log(aujourdhui)

        document.getElementById('la_date_filtre').innerHTML = aujourdhui
        document.getElementById('title_date_2').innerHTML = "Messe du " + aujourdhui

        document.getElementById('id_titre_situation_demande').innerHTML = "Situation de messe du " + aujourdhui



    }
    else if (ma_date == "periode" && ma_date != "rien_faire") {

        let date_choisie_2 = document.getElementById('date_choisie_2').value

        let date_choisie_3 = document.getElementById('date_choisie_3').value

        document.getElementById('la_date_filtre').innerHTML = "Messe du " + dateRell_1(date_choisie_2) + " au " + dateRell_1(date_choisie_3)
        document.getElementById('title_date_2').innerHTML = "Messe du " + dateRell_1(date_choisie_2) + " au " + dateRell_1(date_choisie_3)
        document.getElementById('id_titre_situation_demande').innerHTML = "Situation de messe du " + dateRell_1(date_choisie_2) + " au " + dateRell_1(date_choisie_3)


    }
    else if (ma_date == "rien_faire") {
    }


    else {
        let capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase();
        let { weekday, dayNumber, month, year } = frenchTodayDate(new Date())
        let aujourdhui = `${capitalize(weekday)}, le ${dayNumber} ${month} ${year}`
        console.log(aujourdhui)
        document.getElementById('la_date_filtre').innerHTML = aujourdhui
        document.getElementById('title_date_2').innerHTML = "Messe du " + aujourdhui
    }




    document.getElementById('contenue_les_messed_print').innerHTML = ""

    if (data.length > 0) {
        let compte = 0
        data.forEach(element => {
            compte++
            // 7 ème jour --

            let span_1 = ""

            let span_2 = ""

            let span_3 = "Demandée par " + element.nom_paroissien + " --" + element.heure_messe

            if (element.type_de_messe == "Messe de la semaine" || element.type_de_messe == "Messe du dimanche" || element.type_de_messe == "Messe spéciale") {

                span_1 = ""
            }




            else if (element.type_de_messe == "Tridumm de messe" || element.type_de_messe == "Neuvaine de messe"
                || element.type_de_messe == "Trentaine de messe" || element.type_de_messe == "Messe de requiem") {

                span_2 = element.type_de_messe + " --"

                let calcul = calcul_jour(element.periode_1, element.periode_2, element.type_de_messe)

                span_1 = calcul + " ème jour --"
            }


            let row = `
            <div>
                            <p style="font-size: 15px;">
                                ${compte} -
                                ${element.intenssion_de_la_messe}
                                <br>

                                <span> 
                                    ${span_1} 
                                </span>
                                <span>
                                ${span_2} 
                                </span>
                                <span>
                                    ${span_3}
                                </span>

                            </p>
                        </div>
                    `

            document.getElementById('contenue_les_messed_print').innerHTML += row




        });
    }
    else {
        // contenue_les_messed_print

    }
}







function difference_date(d_1, d_2) {
    let date1 = new Date(d_1);
    let date2 = new Date(d_2);
    let diffTime = Math.abs(date2 - date1);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    //  console.log(diffDays + " days");
    return diffDays
}



function calcul_jour(date_debut, date_fin, type_de_messe) {



    let date_1_tranforme = date_debut.split('/').reverse().join('-')
    let date_2_tranforme = date_fin.split('/').reverse().join('-')



    // if (RECHERCHE_ACTIVE.length > 0) {

    //     let periodes_messe = document.getElementById('periodes_messe').value.trim()

    //     if (periodes_messe.length > 0) {
    //         if (new Date(periodes_messe.split('/').reverse().join('-')) >= new Date(date_1_tranforme) && new Date(periodes_messe.split('/').reverse().join('-')) <= new Date(date_2_tranforme)) {

    //             let jours_total_messe = difference_date(date_1_tranforme, date_2_tranforme)

    //             let evolution = difference_date(periodes_messe.split('/').reverse().join('-'), date_2_tranforme)

    //             let jour_ecoule = jours_total_messe - evolution

    //             return jour_ecoule
    //         }
    //     }
    //     else {


    //         if (new Date() >= new Date(date_1_tranforme) && new Date() <= new Date(date_2_tranforme)) {

    //             let jours_total_messe = difference_date(date_1_tranforme, date_2_tranforme) + 1

    //             let evolution = difference_date(new Date(), date_2_tranforme)

    //             console.log('jour total')
    //             console.log(jours_total_messe)
    //             console.log('evolution')
    //             console.log(evolution)

    //             let jour_ecoule = jours_total_messe - evolution

    //             return jour_ecoule
    //         }

    //     }



    // }


    // else {


    if (new Date() >= new Date(date_1_tranforme) && new Date() <= new Date(date_2_tranforme)) {

        let jours_total_messe = difference_date(date_1_tranforme, date_2_tranforme) + 1

        let evolution = difference_date(new Date(), date_2_tranforme)

        let jour_ecoule = jours_total_messe - evolution

        return jour_ecoule
    }

    // }








}





// ##############################// ##############################
// ##############################
// ##############################
// ##############################
// ##############################
// ##############################
// ##############################

//  les fonction de traitement des recherche de l'application

document.getElementById('recherche_messe_aujourdhui').addEventListener('click', function (e) {
    RECHERCHE_ACTIVE = []
    BASE_RESULTAT = []
    filter_initial()
    // $('#model_print').modal('show')

})

document.getElementById('recherche_messe_demain').addEventListener('click', function (e) {

    BASE_RESULTAT = []
    RECHERCHE_ACTIVE = []

    let la_valeur = dtate_demain()

    // if (BASE_RESULTAT.length > 0) {

    //     let donnee = BASE_RESULTAT.filter((element) => {

    //         if (element.periode_2 != "") {

    //             let x = la_valeur.split('/').reverse().join('-');

    //             let y = element.periode_2.split('/').reverse().join('-');
    //             let z = element.periode_1.split('/').reverse().join('-');

    //             return new Date(x) >= new Date(z) && new Date(x) <= new Date(y)

    //         } else {
    //             return element.periode_1 == la_valeur
    //         }
    //     }
    //     );
    //     if (donnee.length > 0) {
    //         BASE_RESULTAT = donnee
    //     } else {
    //         BASE_RESULTAT = []
    //     }
    // }
    // else {
    let donnee = BDD_MESSE[0].filter((element) => {

        if (element.periode_2 != "") {

            let x = la_valeur.split('/').reverse().join('-');

            let y = element.periode_2.split('/').reverse().join('-');
            let z = element.periode_1.split('/').reverse().join('-');

            return new Date(x) >= new Date(z) && new Date(x) <= new Date(y)

        } else {
            return element.periode_1 == la_valeur
        }

    }
    );



    BASE_RESULTAT = donnee

    afficher(donnee, la_valeur)
    // $('#modal_recherche').modal('show')
})















// document.getElementById('btn_lancer_filtre').addEventListener('click', function (params) {

//     BASE_RESULTAT = []
//     RECHERCHE_ACTIVE = []

//     let chercher_une_date = document.getElementById('defaultCheck3').checked
//     let filter_heure = document.getElementById('defaultCheck2').checked

//     if (chercher_une_date == false && filter_heure == false) {
//         swal({
//             title: "Erreur",
//             text: "Sélectionner une option",
//             icon: "error",
//             button: "Ok",
//         });
//     }
//     else {

//         if (chercher_une_date == true) {

//             let date_choisie_1 = document.getElementById('date_choisie_1').value

//             if (date_choisie_1 == "") {
//                 swal({
//                     title: "Erreur",
//                     text: "La date est obligatoire",
//                     icon: "error",
//                     button: "Ok",
//                 });
//             }
//             else {

//                 // let la_valeur = dateRell_1(date_choisie_1)
//                 let la_valeur = date_choisie_1



//                 let donnee = BDD_MESSE[0].filter((element) => {
//                     console.log(element)
//                     if (element.periode_2 != "") {

//                         // let x = la_valeur.split('-').reverse().join('/');
//                         let x = la_valeur

//                         let y = element.periode_2.split('/').reverse().join('-');
//                         let z = element.periode_1.split('/').reverse().join('-');



//                         return new Date(x) >= new Date(z) && new Date(x) <= new Date(y)
//                         // return element.periode_1 == la_valeur

//                     } else {
//                         console.log(la_valeur.split('-').reverse().join('/'))
//                         return element.periode_1 == la_valeur.split('-').reverse().join('/')
//                     }

//                 }
//                 );



//                 BASE_RESULTAT = donnee



//                 afficher(donnee, date_choisie_1)
//                 $('#modal_recherche').modal('hide')
//             }
//         }



//         // ########################################
//         if (filter_heure == true) {

//             let date_choisie_2 = document.getElementById('date_choisie_2').value

//             let date_choisie_3 = document.getElementById('date_choisie_3').value

//             if (date_choisie_2 == "" || date_choisie_3 == "") {
//                 swal({
//                     title: "Erreur",
//                     text: "Les deux champs sont obligatoires",
//                     icon: "error",
//                     button: "Ok",
//                 });
//             }
//             else {

//                 let donnee = BDD_MESSE[0].filter((element) => {

//                     let x = date_choisie_2
//                     let x_2 = date_choisie_3
//                     let dat_1 = element.periode_1.split('/').reverse().join('-');

//                     if (element.periode_2 != "") {
//                         let dat_2 = element.periode_2.split('/').reverse().join('-');

//                         return new Date(x) >= new Date(dat_1) && new Date(x_2) <= new Date(dat_2)

//                     } else {
//                         console.log(x)
//                         console.log(x_2)
//                         console.log(dat_1)
//                         return new Date(dat_1) >= new Date(x) && new Date(dat_1) <= new Date(x_2)
//                     }

//                 }
//                 );



//                 BASE_RESULTAT = donnee


//                 afficher(donnee, "periode")

//                 $('#modal_recherche').modal('hide')

//             }

//         }

//     }


//     // let date_1 = ''
//     // let date_2 = ""
//     // if (document.getElementById('date_debut_search').value != "") {
//     //     date_1 = dateRell_1(document.getElementById('date_debut_search').value).replace(/-/g, '/')

//     // }
//     // if (document.getElementById('date_fin_search').value != "") {
//     //     date_2 = dateRell_1(document.getElementById('date_fin_search').value).replace(/-/g, '/')

//     // }

//     // let formdata = new FormData()


//     // if (tous_les_messe_day == true || filter_periode == true || filter_heure == true) {


//     //     if (tous_les_messe_day == true) {
//     //         formdata.append('tous_les_messe_day', true)
//     //         formdata.append('mot_cle', dateRell_1_0())
//     //     }
//     //     else {
//     //         formdata.append('tous_les_messe_day', false)
//     //     }
//     //     if (filter_periode == true && document.getElementById('date_debut_search').value.trim() != "" &&
//     //         document.getElementById('date_debut_search').value.trim() != "") {

//     //         formdata.append('filter_periode', true)
//     //         formdata.append('donnee_1', date_1)
//     //         formdata.append('donnee_2', date_2)
//     //     }
//     //     else {
//     //         formdata.append('filter_periode', false)
//     //     }
//     //     if (filter_heure == true) {
//     //         formdata.append('filter_heure', true)
//     //         formdata.append('donnee_3', document.getElementById('heure_messe_search').value)
//     //     }
//     //     else {
//     //         formdata.append('filter_heure', false)
//     //     }

//     //     // for (let value of formdata) {
//     //     //     console.log(value)
//     //     // }





//     //     fetch(URL + "rechercher_messe", {
//     //         method: "post",
//     //         body: formdata,
//     //     })
//     //         .then((response) => response.json())
//     //         .then((response) => {

//     //             $('#modal_recherche').modal('hide')

//     //             document.getElementById('content_les_messes').innerHTML = `
//     //                 <tr> <td colspan="6" style="text-align:center" > 
//     //                 <div class="spinner-grow text-primary mt-3" role="status">
//     //                       <span class="visually-hidden">Loading...</span>
//     //                     </div>
//     //                   </td> </tr>    `

//     //             document.getElementById('total_paroissien').innerHTML = "Résultat de la recherche : " + response.data.length

//     //             if (response.data.length > 0) {



//     //                 document.getElementById('content_les_messes').innerHTML = ""





//     //                 response.data.forEach(element => {
//     //                     let row = `
//     //                     <tr>
//     //                     <td>
//     //                     <i class="fab fa-angular fa-lg text-danger me-3"></i>
//     //                     ${element.type_de_messe}
//     //                     </td>
//     //                     <td>${element.heure_messe}</td>

//     //                     <td>${element.periode_de_la_messe}</td>
//     //                     <td>${element.nom_paroissien}</td>
//     //                     <td>${element.intenssion_de_la_messe}</td>
//     //                     <td>${element.montant} Fcfa </td>
//     //                     <td>
//     //                     <div class="dropdown">
//     //                         <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
//     //                         <i class="bx bx-dots-vertical-rounded"></i>
//     //                         </button>
//     //                         <div class="dropdown-menu">
//     //                         <a onclick="show_detail(${element.id})" class="dropdown-item" href="javascript:void(0);"><i class='bx bx-detail'></i>
//     //                             Détail</a>
//     //                             <a onclick="modifier_paroissien(${element.id})" class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-1"></i>
//     //                             Editer</a>
//     //                         <a class="dropdown-item" href="javascript:void(0);" style="color:red"><i class="bx bx-trash me-1"></i>
//     //                             Supprimer</a>
//     //                         </div>
//     //                     </div>
//     //                     </td>
//     //                 </tr>
//     //                     `

//     //                     document.getElementById('content_les_messes').innerHTML += row
//     //                 });

//     //                 // $('#resultat_recherche').modal('show')

//     //             }
//     //             else {
//     //                 document.getElementById('content_les_messes').innerHTML = `
//     //                 <tr> <td colspan="6" style="text-align:center" > 
//     //                     Pas de résultat
//     //                   </td> </tr>    `
//     //             }

//     //         })
//     //         .catch((error) => {
//     //             console.log(error)
//     //         });
//     // }








// })








document.getElementById('recherche_autre_date').addEventListener('click', function (params) {
    $('#modal_recherche').modal('show')

})









/*@
fermer le modale
@*/


document.getElementById('mese_a_celebre').addEventListener('click', function (params) {

    document.getElementById('type_de_recherche').value = 'mese_a_celebre'

    document.getElementById('label_1').innerHTML = "Lister les messes à célébrer d'une date donnée"
    document.getElementById('label_2').innerHTML = "Lister les messes à célébrer d'une date à une date"

    $('#modal_recherche_2').modal('show')

})




document.getElementById('situation_de_demande').addEventListener('click', function (params) {

    document.getElementById('type_de_recherche').value = 'situation_de_demande'

    document.getElementById('label_1').innerHTML = "Lister les demandes d'une date donnée"
    document.getElementById('label_2').innerHTML = "Lister les demandes d'une date à une date"

    $('#modal_recherche_2').modal('show')

})

/*@
fermer le modale
@*/





/*@
lancer le filtrage
@*/

document.getElementById('btn_lancer_filtre_2').addEventListener('click', function (params) {



    let type_de_recherche = document.getElementById('type_de_recherche').value


    if (type_de_recherche == "mese_a_celebre") {
        BASE_RESULTAT = []
        RECHERCHE_ACTIVE = []

        let chercher_une_date = document.getElementById('defaultCheck3').checked
        let filter_heure = document.getElementById('defaultCheck2').checked

        if (chercher_une_date == false && filter_heure == false) {
            swal({
                title: "Erreur",
                text: "Sélectionner une option",
                icon: "error",
                button: "Ok",
            });
        }
        else {

            if (chercher_une_date == true) {

                let date_choisie_1 = document.getElementById('date_choisie_1').value

                if (date_choisie_1 == "") {
                    swal({
                        title: "Erreur",
                        text: "La date est obligatoire",
                        icon: "error",
                        button: "Ok",
                    });
                }
                else {

                    // let la_valeur = dateRell_1(date_choisie_1)
                    let la_valeur = date_choisie_1



                    let donnee = BDD_MESSE[0].filter((element) => {
                        console.log(element)
                        if (element.periode_2 != "") {

                            // let x = la_valeur.split('-').reverse().join('/');
                            let x = la_valeur

                            let y = element.periode_2.split('/').reverse().join('-');
                            let z = element.periode_1.split('/').reverse().join('-');



                            return new Date(x) >= new Date(z) && new Date(x) <= new Date(y)
                            // return element.periode_1 == la_valeur

                        } else {
                            console.log(la_valeur.split('-').reverse().join('/'))
                            return element.periode_1 == la_valeur.split('-').reverse().join('/')
                        }

                    }
                    );



                    BASE_RESULTAT = donnee



                    afficher(donnee, date_choisie_1)
                    $('#modal_recherche_2').modal('hide')

                    document.getElementById('defaultCheck2').checked = true
                    document.getElementById('defaultCheck2').click()
                    document.getElementById('defaultCheck3').checked = true
                    document.getElementById('defaultCheck3').click()

                }
            }



            // ########################################
            if (filter_heure == true) {

                let date_choisie_2 = document.getElementById('date_choisie_2').value

                let date_choisie_3 = document.getElementById('date_choisie_3').value

                if (date_choisie_2 == "" || date_choisie_3 == "") {
                    swal({
                        title: "Erreur",
                        text: "Les deux champs sont obligatoires",
                        icon: "error",
                        button: "Ok",
                    });
                }
                else {

                    let donnee = BDD_MESSE[0].filter((element) => {

                        let x = date_choisie_2
                        let x_2 = date_choisie_3
                        let dat_1 = element.periode_1.split('/').reverse().join('-');

                        if (element.periode_2 != "") {
                            let dat_2 = element.periode_2.split('/').reverse().join('-');

                            return new Date(x) >= new Date(dat_1) && new Date(x_2) <= new Date(dat_2)

                        } else {
                            console.log(x)
                            console.log(x_2)
                            console.log(dat_1)
                            return new Date(dat_1) >= new Date(x) && new Date(dat_1) <= new Date(x_2)
                        }

                    }
                    );



                    BASE_RESULTAT = donnee


                    afficher(donnee, "periode")

                    $('#modal_recherche_2').modal('hide')

                    document.getElementById('defaultCheck2').checked = true
                    document.getElementById('defaultCheck2').click()
                    document.getElementById('defaultCheck3').checked = true
                    document.getElementById('defaultCheck3').click()
                }

            }
        }
    }

    // ############################################################

    if (type_de_recherche == "situation_de_demande") {
        BASE_RESULTAT = []
        RECHERCHE_ACTIVE = []

        let chercher_une_date = document.getElementById('defaultCheck3').checked
        let filter_heure = document.getElementById('defaultCheck2').checked

        if (chercher_une_date == false && filter_heure == false) {
            swal({
                title: "Erreur",
                text: "Sélectionner une option",
                icon: "error",
                button: "Ok",
            });
        }
        else {

            if (chercher_une_date == true) {

                let date_choisie_1 = document.getElementById('date_choisie_1').value

                if (date_choisie_1 == "") {
                    swal({
                        title: "Erreur",
                        text: "La date est obligatoire",
                        icon: "error",
                        button: "Ok",
                    });
                }
                else {

                    // let la_valeur = dateRell_1(date_choisie_1)
                    let la_valeur = date_choisie_1



                    let donnee = BDD_MESSE[0].filter((element) => {

                        return element.dates == la_valeur.split('-').reverse().join('/')
                    }
                    );



                    BASE_RESULTAT = donnee



                    afficher(donnee, date_choisie_1)
                    $('#modal_recherche_2').modal('hide')

                    document.getElementById('defaultCheck2').checked = true
                    document.getElementById('defaultCheck2').click()
                    document.getElementById('defaultCheck3').checked = true
                    document.getElementById('defaultCheck3').click()
                }
            }



            // ########################################
            if (filter_heure == true) {

                let date_choisie_2 = document.getElementById('date_choisie_2').value

                let date_choisie_3 = document.getElementById('date_choisie_3').value

                if (date_choisie_2 == "" || date_choisie_3 == "") {
                    swal({
                        title: "Erreur",
                        text: "Les deux champs sont obligatoires",
                        icon: "error",
                        button: "Ok",
                    });
                }
                else {

                    let donnee = BDD_MESSE[0].filter((element) => {

                        let x = date_choisie_2
                        let x_2 = date_choisie_3
                        let dat_1 = element.dates.split('/').reverse().join('-');

                        // if (element.periode_2 != "") {
                        //     let dat_2 = element.periode_2.split('/').reverse().join('-');

                        //     return new Date(x) >= new Date(dat_1) && new Date(x_2) <= new Date(dat_2)

                        // } else {

                        return new Date(dat_1) >= new Date(x) && new Date(dat_1) <= new Date(x_2)
                        // }

                    }
                    );



                    BASE_RESULTAT = donnee


                    afficher(donnee, "periode")

                    $('#modal_recherche_2').modal('hide')

                    document.getElementById('defaultCheck2').checked = true
                    document.getElementById('defaultCheck2').click()
                    document.getElementById('defaultCheck3').checked = true
                    document.getElementById('defaultCheck3').click()

                }

            }
        }
    }






})
/*@
lancer le filtrage
@*/