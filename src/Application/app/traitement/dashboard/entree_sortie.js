


$(document).ready(async function () {


    await tous_les_messe_historique()
    await tous_les_qute_dimanche_historique()
    await quete_semaine_historique()
    await quete_ordinaire_historique()
    await quete_extraordinaire_historique()
    await dernier_de_cu_historiquelte()
    await les_dimes_historique()

    await les_dons_historique()
    await recette_secretaria_historique()
    await autre_recette_historique()

    await les_sortir_2()

});




var BASE_PRET = Array()
var BASE_SORTIESSS = []



async function verifier_si_calcu_pret() {


    spinner_content("total_total_recette")
    spinner_content("total_total_sortie")
    spinner_content("total_total_total")


    if (BASE_PRET.length == 10) {


        console.log(BASE_PRET)

        // 


        let calcul = 0

        BASE_PRET.forEach(element => {
            calcul = calcul + parseFloat(element)
        });

        //  total de recette du mois

        // inserssion de la recette

        await les_sortir()

        document.getElementById('total_total_recette').innerHTML = calcul

        document.getElementById('total_total_sortie').innerHTML = BASE_SORTIESSS[0]


        // calcul total_total_total

        let operation = calcul - parseFloat(BASE_SORTIESSS[0])

        document.getElementById('total_total_total').innerHTML = operation

    }
    else {

    }
}

















async function tous_les_messe_historique() {


    spinner_content("total_messe_commande")

    let calcul_somme = 0

    let data = await getData(Routes.all_messe_2 + "/" + 1)

    BASE_DATE_MOIS_SI.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseFloat(element.montant)
            }
        });

    })

    BASE_PRET.push(calcul_somme)
    verifier_si_calcu_pret()

    document.getElementById('total_messe_commande').innerHTML = calcul_somme


    // console.log("tous_les_messe_historique")
    // console.log(calcul_somme)

}





async function tous_les_qute_dimanche_historique() {

    spinner_content("total_quette_dimanche")


    let calcul_somme = 0

    let data = await getData(Routes.quetes_du_dimanche + "/" + 1)

    BASE_DATE_MOIS_SI.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    BASE_PRET.push(calcul_somme)
    verifier_si_calcu_pret()

    document.getElementById('total_quette_dimanche').innerHTML = calcul_somme




    // console.log("tous_les_qute_dimanche_historique")
    // console.log(calcul_somme)

}
















async function quete_semaine_historique() {

    spinner_content("total_qutte_semaine")

    let calcul_somme = 0

    let data = await getData(Routes.quete_semaine + "/" + 1)

    BASE_DATE_MOIS_SI.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    BASE_PRET.push(calcul_somme)
    verifier_si_calcu_pret()

    document.getElementById('total_qutte_semaine').innerHTML = calcul_somme




    // console.log("quete_semaine_historique")
    // console.log(calcul_somme)





}












async function quete_ordinaire_historique() {

    spinner_content("total_qutte_ordinaire_fete")

    let calcul_somme = 0

    let data = await getData(Routes.quetes_ordinaires + "/" + 1)

    BASE_DATE_MOIS_SI.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    BASE_PRET.push(calcul_somme)
    verifier_si_calcu_pret()

    document.getElementById('total_qutte_ordinaire_fete').innerHTML = calcul_somme



    // console.log("quete_ordinaire_historique")
    // console.log(calcul_somme)


}












async function quete_extraordinaire_historique() {

    spinner_content("total_quette_extraordinaire")


    let calcul_somme = 0


    let data = await getData(Routes.quetes_extraordinaires + "/" + 1)
    BASE_DATE_MOIS_SI.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    BASE_PRET.push(calcul_somme)
    verifier_si_calcu_pret()

    document.getElementById('total_quette_extraordinaire').innerHTML = calcul_somme



    // console.log("quete_extraordinaire_historique")
    // console.log(calcul_somme)

}












async function dernier_de_cu_historiquelte() {
    spinner_content("total_dernier_culte")


    let calcul_somme = 0

    let data = await getData(Routes.les_deniers_de_culte + "/" + 1)

    BASE_DATE_MOIS_SI.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dernier_cult)
            }
        });

    })


    BASE_PRET.push(calcul_somme)
    verifier_si_calcu_pret()

    document.getElementById('total_dernier_culte').innerHTML = calcul_somme


    // console.log("dernier_de_cu_historiquelte")
    // console.log(calcul_somme)





}












async function les_dimes_historique() {
    spinner_content("total_quette_dime")

    let calcul_somme = 0

    let data = await getData(Routes.les_dimes + "/" + 1)




    BASE_DATE_MOIS_SI.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dime)
            }
        });

    })

    BASE_PRET.push(calcul_somme)
    verifier_si_calcu_pret()

    document.getElementById('total_quette_dime').innerHTML = calcul_somme




    // console.log("les_dimes_historique")
    // console.log(calcul_somme)



}












async function les_dons_historique() {

    spinner_content("total_quette_dons")


    let calcul_somme = 0

    let data = await getData(Routes.les_don + "/" + 1)


    BASE_DATE_MOIS_SI.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dons)
            }
        });

    })

    BASE_PRET.push(calcul_somme)
    verifier_si_calcu_pret()

    document.getElementById('total_quette_dons').innerHTML = calcul_somme




    // console.log("les_dons_historique")
    // console.log(calcul_somme)



}












async function recette_secretaria_historique() {

    spinner_content("total_qutte_secretaire")


    let calcul_somme = 0

    let data = await getData(Routes.recette_secretaria + "/" + 1)


    BASE_DATE_MOIS_SI.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_secretaria)
            }
        });

    })


    BASE_PRET.push(calcul_somme)
    verifier_si_calcu_pret()

    document.getElementById('total_qutte_secretaire').innerHTML = calcul_somme


    // console.log("recette_secretaria_historique")
    // console.log(calcul_somme)




}












async function autre_recette_historique() {

    spinner_content("total_autre_recette")


    let calcul_somme = 0

    let data = await getData(Routes.autres_recettes + "/" + 1)


    BASE_DATE_MOIS_SI.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_autre)
            }
        });

    })


    BASE_PRET.push(calcul_somme)
    verifier_si_calcu_pret()

    document.getElementById('total_autre_recette').innerHTML = calcul_somme


    // console.log("autre_recette_historique")
    // console.log(calcul_somme)






}






// ###############################sortie##################################################
// #################################################################################


async function les_sortir() {


    BASE_SORTIESSS = []

    let calcul_somme = 0
    let data = await getData(Routes.get_all_sortir)

    BASE_DATE_MOIS_SI.forEach(mes_dates => {
        data.all_sortir.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant)
            }
        });

    })

    console.log(calcul_somme)

    // BASE_SORTIESSS.push(calcul_somme)
    BASE_SORTIESSS[0] = calcul_somme

    console.log("les sortie")
    console.log(calcul_somme)


}







async function les_sortir_2() {

    spinner_content("row_sortie")

    let data = await getData(Routes.get_all_sortir)

    if (data.all_sortir.length > 0) {


        document.getElementById('row_sortie').innerHTML = ''

        data.all_sortir.forEach(element => {

            let row = `
        <li class="d-flex mb-4 pb-1">
                                                <div class="avatar flex-shrink-0 me-3">
                                                    <img src="../assets/img/icons/unicons/cc-primary.png" alt="User"
                                                        class="rounded" />
                                                </div>
                                                <div
                                                    class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                    <div class="me-2">
                                                        <!-- <small class="text-muted d-block mb-1">Paypal</small> -->
                                                        <h6 class="mb-0">${element.votre_motif}</h6>
                                                    </div>
                                                    <div class="user-progress d-flex align-items-center gap-1">
                                                        <h6 class="mb-0" id=""> ${element.montant}</h6>
                                                        <span class="text-muted">Fcfa</span>
                                                    </div>
                                                </div>
                                            </li>
        `

            document.getElementById('row_sortie').innerHTML += row
        });

    } else {
        document.getElementById('row_sortie').innerHTML = ""
    }

}

























// document.getElementById('btn_recherche_mois').addEventListener('click', async function (params) {

//     BASE_DATE_MOIS_SI = []
//     LISTE_POSITION = []



//     let les_mois = document.getElementById('les_mois').value


//     let capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase();
//     let { weekday, dayNumber, month, year } = frenchTodayDate(new Date(les_mois))
//     // let aujourdhui = `${capitalize(weekday)}, le ${dayNumber} ${month} ${year}`
//     let aujourdhui = `  ${month} ${year}`
//     console.log(aujourdhui)
//     document.getElementById('le_mois_de_filtre').innerHTML = "Mois de " + aujourdhui
//     document.getElementById('date_impession').innerHTML = "Mois de " + aujourdhui



//     let resultat_mois = parseInt(get_mois_transform(les_mois)) - 1

//     let resultat_annee = get_annee_transform(les_mois)



//     let recuperer_lesèjours = getDaysInMonth(resultat_mois, resultat_annee)

//     recuperer_lesèjours.forEach(element => {
//         let date_formate = dateRell_1(element)
//         BASE_DATE_MOIS_SI.push(date_formate)

//         let les_mois = date_formate.substring(3, 5)
//         les_mois_a_afficher(les_mois)
//     });

//     // console.log(BASE_DATE_MOIS_SI)

//     await tous_les_qute_dimanche()
//     // quete_semaine()


//     $('#modal_recherche').modal('hide')

// })



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


