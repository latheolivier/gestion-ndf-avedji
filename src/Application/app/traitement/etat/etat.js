$(document).ready(function () {

    finance_du_mois_actuelle(1)

    finance_sortir_du_mois_actuelle()


});




var BASE_DATE_MOIS_SI = []
var LISTE_POSITION = []
var LES_SOME = []
var LES_SOME_2 = []





function les_mois_a_afficher(la_date) {

    let recherche = LISTE_POSITION.filter(function (item) {
        return item == la_date
    })

    if (recherche.length == 0) {
        LISTE_POSITION.push(la_date)
    }
    else {
        // LISTE_POSITION = LISTE_POSITION.filter(function (item) {
        //     return item !== la_date
        // })
    }

}



function finance_sortir_du_mois_actuelle() {
    document.getElementById('sortie_de_ce_mois_si').click();
}




function finance_du_mois_actuelle() {
    document.getElementById('etat_de_ce_mois_si').click();
}




const mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]

function frenchTodayDate(donnee) {

    let today = new Date(donnee);
    let year = today.getFullYear()
    let dayNumber = today.getDate()
    let month = mois[today.getMonth()]
    let weekday = today.toLocaleDateString("fr-FR", { weekday: "long" });

    return { weekday, dayNumber, month, year }
}





document.getElementById('etat_de_ce_mois_si').addEventListener('click', async function (params) {



    let capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase();
    let { weekday, dayNumber, month, year } = frenchTodayDate(new Date())
    // let aujourdhui = `${capitalize(weekday)}, le ${dayNumber} ${month} ${year}`
    let aujourdhui = `  ${month} ${year}`
    console.log(aujourdhui)
    document.getElementById('le_mois_de_filtre').innerHTML = "Mois de " + aujourdhui
    document.getElementById('date_impession').innerHTML = "Mois de " + aujourdhui





    LISTE_POSITION = []
    BASE_DATE_MOIS_SI = []

    let le_mois = get_mois() - 1
    let le_annaa = get_annee()



    let recuperer_lesèjours = getDaysInMonth(le_mois, le_annaa)

    recuperer_lesèjours.forEach(element => {
        let date_formate = dateRell_1(element)
        BASE_DATE_MOIS_SI.push(date_formate)

        let les_mois = date_formate.substring(3, 5)
        les_mois_a_afficher(les_mois)

    });


    await tous_les_qute_dimanche()
    // quete_semaine()

    $('#modal_recherche').modal('hide')

})



function getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    // console.log(date)
    var days = [];
    while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    return days;
}



function get_mois() {
    // body...
    var date = new Date();

    var moi = date.getMonth() + 1;
    if (moi == 1 || moi == 2 || moi == 3 || moi == 4 || moi == 5 || moi == 6 || moi == 7 || moi == 8 || moi == 9) {
        // var mois = "0" + moi;
        var mois = moi;
    }
    else {
        var mois = moi;
    }

    return mois;
}


function get_annee() {
    // body...
    var date = new Date();
    var annee = date.getFullYear();
    return annee;
}


function dateRell_1(la_date) {
    // body...
    var date = new Date(la_date);

    var jour = date.getDate();
    if (jour == 1 || jour == 2 || jour == 3 || jour == 4 || jour == 5 || jour == 6 || jour == 7 || jour == 8 || jour == 9) {
        var jours = "0" + jour;
    } else {
        var jours = jour;
    }

    var moi = date.getMonth() + 1;
    if (moi == 1 || moi == 2 || moi == 3 || moi == 4 || moi == 5 || moi == 6 || moi == 7 || moi == 8 || moi == 9) {
        var mois = "0" + moi;
    }
    else {
        var mois = moi;
    }

    var annee = date.getFullYear();
    // var laDate = annee + "-" + mois + "-" + jours;
    var laDate = jours + "/" + mois + "/" + annee;
    return laDate;
}






























// ######################################################
// ######################################################
// ######################################################
// ######################################################
// ######################################################










document.getElementById('etat_autre_mois').addEventListener('click', function (params) {
    $('#modal_recherche').modal('show')
})








document.getElementById('btn_recherche_mois').addEventListener('click', async function (params) {

    BASE_DATE_MOIS_SI = []
    LISTE_POSITION = []



    let les_mois = document.getElementById('les_mois').value


    let capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase();
    let { weekday, dayNumber, month, year } = frenchTodayDate(new Date(les_mois))
    // let aujourdhui = `${capitalize(weekday)}, le ${dayNumber} ${month} ${year}`
    let aujourdhui = `  ${month} ${year}`
    console.log(aujourdhui)
    document.getElementById('le_mois_de_filtre').innerHTML = "Mois de " + aujourdhui
    document.getElementById('date_impession').innerHTML = "Mois de " + aujourdhui



    let resultat_mois = parseInt(get_mois_transform(les_mois)) - 1

    let resultat_annee = get_annee_transform(les_mois)



    let recuperer_lesèjours = getDaysInMonth(resultat_mois, resultat_annee)

    recuperer_lesèjours.forEach(element => {
        let date_formate = dateRell_1(element)
        BASE_DATE_MOIS_SI.push(date_formate)

        let les_mois = date_formate.substring(3, 5)
        les_mois_a_afficher(les_mois)
    });

    // console.log(BASE_DATE_MOIS_SI)

    await tous_les_qute_dimanche()
    // quete_semaine()


    $('#modal_recherche').modal('hide')

})



function get_annee_transform(element) {

    let table = []
    let taille = element.length
    for (let nbr = 0; nbr < taille; nbr++) {
        let valeur = element.substring(nbr, (nbr + 1));
        if (valeur == "-") {
            table.push(nbr)
        }
    }
    let valeur_1 = element.substring(0, (table[0]));

    return valeur_1
    // console.log(valeur_2+'/'+valeur_1)
}

function get_mois_transform(element) {

    let table = []
    let taille = element.length
    for (let nbr = 0; nbr < taille; nbr++) {
        let valeur = element.substring(nbr, (nbr + 1));
        if (valeur == "-") {
            table.push(nbr)
        }
    }
    let valeur_2 = element.substring((table[0] + 1), taille);

    return valeur_2
    // console.log(valeur_2+'/'+valeur_1)
}
































// ######################################################
// ######################################################
// ######################################################
// ######################################################
// ######################################################













document.getElementById('etat_periode').addEventListener('click', function (params) {
    $('#modal_recherche_2').modal('show')
})









document.getElementById('btn_recherche_periode').addEventListener('click', async function (params) {
    BASE_DATE_MOIS_SI = []
    LISTE_POSITION = []



    let date_debut = document.getElementById('date_debut').value
    let date_fin = document.getElementById('date_fin').value

    if (date_debut != "" && date_fin == "") {
        document.getElementById('le_mois_de_filtre').innerHTML = "Les entrées du  " + convertDigitIn(date_debut).split("-").join("/")
        document.getElementById('date_impession').innerHTML = "Les entrées du  " + convertDigitIn(date_debut).split("-").join("/")

    }
    if (date_debut != "" && date_fin != "") {
        document.getElementById('le_mois_de_filtre').innerHTML = "Les entrées du  " + convertDigitIn(date_debut).split("-").join("/") + " au " + convertDigitIn(date_fin).split("-").join("/")
        document.getElementById('date_impession').innerHTML = "Les entrées du  " + convertDigitIn(date_debut).split("-").join("/") + " au " + convertDigitIn(date_fin).split("-").join("/")
    }
    // console.log(date_debut);


    var listDate = [];
    // var startDate = '2017-02-01';
    // var endDate = '2017-02-10';
    var startDate = date_debut
    var endDate = date_fin
    var dateMove = new Date(startDate);
    var strDate = startDate;

    while (strDate < endDate) {
        var strDate = dateMove.toISOString().slice(0, 10);
        listDate.push(convertDigitIn(strDate).split("-").join("/"));
        BASE_DATE_MOIS_SI.push(convertDigitIn(strDate).split("-").join("/"));

        let les_mois = convertDigitIn(strDate).split("-").join("/").substring(3, 5)
        les_mois_a_afficher(les_mois)


        dateMove.setDate(dateMove.getDate() + 1);
    };
    // console.log(LISTE_POSITION);

    await tous_les_qute_dimanche()
    // quete_semaine()

    $('#modal_recherche_2').modal('hide')
})



function convertDigitIn(str) {
    return str.split('-').reverse().join('-');
}






































// ######################################################
// ######################################################
// ######################################################
// ######################################################
// ######################################################





async function tous_les_qute_dimanche() {

    LES_SOME = []
    LES_SOME_2 = []



    let data = await getData(Routes.quetes_du_dimanche_2)



    let calcul_somme = 0
    let calcul_somme_2 = 0
    let calcul_somme_3 = 0

    LISTE_POSITION.forEach(my_mouth => {
        BASE_DATE_MOIS_SI.forEach(mes_dates => {



            data.data.forEach(element => {
                if (mes_dates == element.dates) {
                    //  calcul dyigbezan

                    calcul_somme = calcul_somme + parseInt(element.total_dyigbezan)

                    // calcul ordinaire

                    calcul_somme_2 = calcul_somme_2 + parseInt(element.total_ordinaire)


                    // calcul impere

                    calcul_somme_3 = calcul_somme_3 + parseInt(element.totals_des_quete_impere)
                }

            });
        });
    });



    // ###################################################################

    document.getElementById('total__disp_djigbezan').innerHTML = calcul_somme + " Fcfa"
    document.getElementById('total__disp_djigbezan_2').innerHTML = calcul_somme + " Fcfa"
    document.getElementById('par_eveque_djigbezan').innerHTML = (parseInt(calcul_somme) * 50) / 100 + " Fcfa"
    document.getElementById('par_eveque_djigbezan_2').innerHTML = (parseInt(calcul_somme) * 50) / 100 + " Fcfa"


    let calcul_par_paroicial_djigbezan = parseInt(calcul_somme) - ((parseInt(calcul_somme) * 50) / 100)

    document.getElementById('par_paroissial_djigbezan').innerHTML = calcul_par_paroicial_djigbezan + " Fcfa"
    document.getElementById('par_paroissial_djigbezan_2').innerHTML = calcul_par_paroicial_djigbezan + " Fcfa"


    LES_SOME.push(parseInt(calcul_somme) * 50 / 100)
    LES_SOME_2.push(calcul_par_paroicial_djigbezan)


    // ###################################################################
















    // ###################################################################


    document.getElementById('total__disp_dimanche').innerHTML = calcul_somme_2 + " Fcfa"
    document.getElementById('total__disp_dimanche_2').innerHTML = calcul_somme_2 + " Fcfa"
    document.getElementById('par_eveque_dimanche').innerHTML = (parseInt(calcul_somme_2) * 10) / 100 + " Fcfa"
    document.getElementById('par_eveque_dimanche_2').innerHTML = (parseInt(calcul_somme_2) * 10) / 100 + " Fcfa"

    let calcul_par_paroicial_dimanche = parseInt(calcul_somme_2) - ((parseInt(calcul_somme_2) * 10) / 100)

    document.getElementById('par_paroissial_dimanche').innerHTML = calcul_par_paroicial_dimanche + " Fcfa"
    document.getElementById('par_paroissial_dimanche_2').innerHTML = calcul_par_paroicial_dimanche + " Fcfa"


    LES_SOME.push(parseInt(calcul_somme_2) * 10 / 100)

    LES_SOME_2.push(calcul_par_paroicial_dimanche)

    // ###################################################################















    // ###################################################################


    document.getElementById('total__disp_impere').innerHTML = calcul_somme_3 + " Fcfa"
    document.getElementById('total__disp_impere_2').innerHTML = calcul_somme_3 + " Fcfa"

    document.getElementById('par_eveque_impere').innerHTML = (parseInt(calcul_somme_3) * 50) / 100 + " Fcfa"
    document.getElementById('par_eveque_impere_2').innerHTML = (parseInt(calcul_somme_3) * 50) / 100 + " Fcfa"

    let calcul_par_paroicial_impere = parseInt(calcul_somme_3) - ((parseInt(calcul_somme_3) * 50) / 100)

    document.getElementById('par_paroissial_impere').innerHTML = calcul_par_paroicial_impere + " Fcfa"
    document.getElementById('par_paroissial_impere_2').innerHTML = calcul_par_paroicial_impere + " Fcfa"


    LES_SOME.push(parseInt(calcul_somme_3) * 50 / 100)
    LES_SOME_2.push(calcul_par_paroicial_impere)

    // ###################################################################

    quete_semaine()





}





async function quete_semaine() {



    let data = await getData(Routes.quete_semaine_2)




    let calcul_somme = 0

    LISTE_POSITION.forEach(my_mouth => {

        BASE_DATE_MOIS_SI.forEach(mes_dates => {

            data.data.forEach(element => {
                if (mes_dates == element.dates) {
                    // console.log(element.totals)
                    calcul_somme = calcul_somme + parseInt(element.totals)
                }
            });
        });
    });


    // ###################################################################

    document.getElementById('total__disp_semaine').innerHTML = calcul_somme + " Fcfa"
    document.getElementById('total__disp_semaine_2').innerHTML = calcul_somme + " Fcfa"
    document.getElementById('par_eveque_semaine').innerHTML = (parseInt(calcul_somme) * 10) / 100 + " Fcfa"
    document.getElementById('par_eveque_semaine_2').innerHTML = (parseInt(calcul_somme) * 10) / 100 + " Fcfa"

    let calcul_par_paroicial_semaine = parseInt(calcul_somme) - ((parseInt(calcul_somme) * 10) / 100)

    document.getElementById('par_paroissial_semaine').innerHTML = calcul_par_paroicial_semaine + " Fcfa"
    document.getElementById('par_paroissial_semaine_2').innerHTML = calcul_par_paroicial_semaine + " Fcfa"

    LES_SOME.push(parseInt(calcul_somme) * 10 / 100)

    LES_SOME_2.push(calcul_par_paroicial_semaine)
    // ###################################################################


    // ###################################################################

    calcul_somme_total()

    // ###################################################################



}




function calcul_somme_total() {
    let somme = 0
    if (LES_SOME.length > 0) {
        LES_SOME.forEach(element => {
            somme = somme + element
        });
        document.getElementById('somme_total').innerHTML = "<strong>" + somme + " Fcfa </strong>"
        document.getElementById('somme_total_3').innerHTML = "<strong>" + somme + " Fcfa </strong>"
    }

    // ################################


    let somme_2 = 0
    if (LES_SOME.length > 0) {
        LES_SOME_2.forEach(element => {
            somme_2 = somme_2 + element
        });
        document.getElementById('somme_total_2').innerHTML = "<strong>" + somme_2 + " Fcfa </strong>"
        document.getElementById('somme_total_4').innerHTML = "<strong>" + somme_2 + " Fcfa </strong>"
    }
}






























// ######################################################
// ######################################################
// ######################################################
// ######################################################
// ######################################################
// ######################################################
// ######################################################
// ######################################################
// ######################################################
// ######################################################


var LISTE_POSITION_SORTIE = []
var BASE_DATE_MOIS_SI_SORTIE = []




function les_mois_a_afficher_2(la_date) {

    let recherche = LISTE_POSITION_SORTIE.filter(function (item) {
        return item == la_date
    })

    if (recherche.length == 0) {
        LISTE_POSITION_SORTIE.push(la_date)
    }
    else {
        // LISTE_POSITION_SORTIE = LISTE_POSITION_SORTIE.filter(function (item) {
        //     return item !== la_date
        // })
    }



}



document.getElementById('sortie_de_ce_mois_si').addEventListener('click', function (params) {



    let capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase();
    let { weekday, dayNumber, month, year } = frenchTodayDate(new Date())
    // let aujourdhui = `${capitalize(weekday)}, le ${dayNumber} ${month} ${year}`
    let aujourdhui = `  ${month} ${year}`
    console.log(aujourdhui)
    document.getElementById('le_mois_de_filtre_2').innerHTML = "Mois de " + aujourdhui




    LISTE_POSITION_SORTIE = []
    BASE_DATE_MOIS_SI_SORTIE = []

    let le_mois = get_mois() - 1
    let le_annaa = get_annee()



    let recuperer_lesèjours = getDaysInMonth(le_mois, le_annaa)

    recuperer_lesèjours.forEach(element => {
        let date_formate = dateRell_1(element)
        BASE_DATE_MOIS_SI_SORTIE.push(date_formate)

        let les_mois = date_formate.substring(3, 5)
        les_mois_a_afficher_2(les_mois)

    });


    les_sortir()
    // tous_les_qute_dimanche()
    // quete_semaine()

})























document.getElementById('sortie_autre_mois').addEventListener('click', function (params) {
    $('#modal_recherche_sortie').modal('show')
})








document.getElementById('btn_recherche_mois_sortie').addEventListener('click', function (params) {

    BASE_DATE_MOIS_SI_SORTIE = []
    LISTE_POSITION_SORTIE = []



    let les_mois = document.getElementById('les_mois_sortie').value


    let capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase();
    let { weekday, dayNumber, month, year } = frenchTodayDate(new Date(les_mois))
    // let aujourdhui = `${capitalize(weekday)}, le ${dayNumber} ${month} ${year}`
    let aujourdhui = `  ${month} ${year}`
    console.log(aujourdhui)
    document.getElementById('le_mois_de_filtre_2').innerHTML = "Mois de " + aujourdhui





    let resultat_mois = parseInt(get_mois_transform(les_mois)) - 1

    let resultat_annee = get_annee_transform(les_mois)



    let recuperer_lesèjours = getDaysInMonth(resultat_mois, resultat_annee)

    recuperer_lesèjours.forEach(element => {
        let date_formate = dateRell_1(element)
        BASE_DATE_MOIS_SI_SORTIE.push(date_formate)

        let les_mois = date_formate.substring(3, 5)
        les_mois_a_afficher_2(les_mois)
    });


    les_sortir()
    // tous_les_qute_dimanche()
    // quete_semaine()

    $('#modal_recherche_sortie').modal('hide')

})

















document.getElementById('sortie_periode').addEventListener('click', function (params) {
    $('#modal_recherche_2_sortie').modal('show')
})







document.getElementById('btn_recherche_periode_sortie').addEventListener('click', function (params) {
    BASE_DATE_MOIS_SI_SORTIE = []
    LISTE_POSITION_SORTIE = []



    let date_debut = document.getElementById('date_debut_sortie').value
    let date_fin = document.getElementById('date_fin_sortie').value


    if (date_debut != "" && date_fin == "") {
        document.getElementById('le_mois_de_filtre_2').innerHTML = "Les entrées du  " + convertDigitIn(date_debut).split("-").join("/")
    }
    if (date_debut != "" && date_fin != "") {
        document.getElementById('le_mois_de_filtre_2').innerHTML = "Les entrées du  " + convertDigitIn(date_debut).split("-").join("/") + " au " + convertDigitIn(date_fin).split("-").join("/")
    }
    // console.log(date_debut);


    var listDate = [];
    // var startDate = '2017-02-01';
    // var endDate = '2017-02-10';
    var startDate = date_debut
    var endDate = date_fin
    var dateMove = new Date(startDate);
    var strDate = startDate;

    while (strDate < endDate) {
        var strDate = dateMove.toISOString().slice(0, 10);
        listDate.push(convertDigitIn(strDate).split("-").join("/"));
        BASE_DATE_MOIS_SI_SORTIE.push(convertDigitIn(strDate).split("-").join("/"));

        let les_mois = convertDigitIn(strDate).split("-").join("/").substring(3, 5)
        les_mois_a_afficher_2(les_mois)


        dateMove.setDate(dateMove.getDate() + 1);
    };


    les_sortir()
    // tous_les_qute_dimanche()
    // quete_semaine()

    $('#modal_recherche_2_sortie').modal('hide')
})
















async function les_sortir() {


    var divsToHide = document.getElementsByClassName("row_display"); //divsToHide is an array
    for (var i = 0; i < divsToHide.length; i++) {
        divsToHide[i].style.visibility = "hidden"; // or
        divsToHide[i].style.display = "none"; // depending on what you're doing
    }

    let data = await getData(Routes.get_all_sortir)




    document.getElementById('contenue_des_sortie').innerHTML = ""
    document.getElementById('contenue_des_sortie_2').innerHTML = ""
    let calcul_somme = 0

    if (data.all_sortir.length > 0) {

        let verifie = ""
        LISTE_POSITION_SORTIE.forEach(my_mouth => {

            BASE_DATE_MOIS_SI_SORTIE.forEach(mes_dates => {

                data.all_sortir.forEach(element => {
                    if (mes_dates == element.dates) {
                        verifie = 'cool'

                        calcul_somme = calcul_somme + parseInt(element.montant)

                        let row = `
                            <tr class="row_display">
                                           <td>${element.dates}</td>
                                            <td>${element.votre_motif}</td>
                                           <td>${element.montant} Fcfa</td>
                                         </tr>
                            `

                        document.getElementById('contenue_des_sortie').innerHTML += row
                        document.getElementById('contenue_des_sortie_2').innerHTML += row


                    }
                });




            });
        });


        if (verifie != "") {

            let row_2 = `
                            <tr class="row_display">
                            <td colspan="2"><strong>Totals</strong></td>
                            <td> <strong> ${calcul_somme} Fcfa</strong> </td>
                        </tr>
                            `

            document.getElementById('contenue_des_sortie').insertAdjacentHTML('afterend', row_2)
            document.getElementById('contenue_des_sortie_2').insertAdjacentHTML('afterend', row_2)

        }
    }
    else {

        var divsToHide = document.getElementsByClassName("row_display"); //divsToHide is an array
        for (var i = 0; i < divsToHide.length; i++) {
            divsToHide[i].style.visibility = "hidden"; // or
            divsToHide[i].style.display = "none"; // depending on what you're doing
        }
    }
    // document.getElementById('total__disp_semaine').innerHTML = calcul_somme + " Fcfa"


}















// ######################################################
// ######################################################
// ######################################################
// ######################################################
// ######################################################






document.getElementById('imprimer').addEventListener('click', function (params) {
    $('#resultat_modal_entre').modal('show')

})




document.getElementById('btn_imprimer_definitif').addEventListener('click', function (params) {

    // $('#ajouter_motif').modal('show')

    var mode = 'iframe'; //popup
    var close = mode == "popup";
    var options = {
        mode: mode,
        popClose: close,
        standard: "html5",
        extraCss: '../scss/etat_entre.css',
    };
    $("#table_resultat_2").printArea(options);
})





document.getElementById('imprimer_sortir').addEventListener('click', function (params) {


    var mode = 'iframe'; //popup
    var close = mode == "popup";
    var options = {
        mode: mode,
        popClose: close,
        standard: "html5",
        extraCss: '../scss/etat_entre.css',
    };
    $("#table_resultat_sortie").printArea(options);
})