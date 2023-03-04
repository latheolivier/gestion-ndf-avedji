$(document).ready(function () {

    // tous_les_messe(1)





    document.getElementById('titre_menu').innerHTML = `
                <i class="bx bx-menu"></i>  Historiques `

    document.getElementById('titre_side').innerHTML = `Messe commandées `
    document.getElementById('type_entree').value = 'commandées'

});




















var MA_BASE = []






document.getElementById('btn_actualiser').addEventListener('click', function (params) {

    let type_entree = document.getElementById('type_entree').value

    if (type_entree == 'qute_dimanche') {
        tous_les_qute_dimanche(1)
    }
    if (type_entree == 'quete_semaine') {
        quete_semaine(1)
    }
    if (type_entree == 'quete_ordinaire') {
        quete_ordinaire(1)
    }



    if (type_entree == 'quete_extraordinaire') {
        quete_extraordinaire(1)
    }
    if (type_entree == 'dernier_de_culte') {
        dernier_de_culte(1)
    }
    if (type_entree == 'les_dimes') {
        les_dimes(1)
    }
    if (type_entree == 'les_dons') {
        les_dons(1)
    }
    if (type_entree == 'recette_secretaria') {
        recette_secretaria(1)
    }
    if (type_entree == 'autre_recette') {
        autre_recette(1)
    }










})













document.getElementById('btn_deconnexion').addEventListener('click', function (params) {

    document.location.href = 'login.html'

})







async function tous_les_messe(page) {

    MA_BASE = []

    document.getElementById('my_thead').innerHTML = `
            <tr>
                <th border: none !important;">Type de la messe</th>
                <th border: none !important;">Heure de la messe</th>
                <th border: none !important;">Période de la messe</th>
                <th border: none !important;">Demandé par</th>
                <th border: none !important;">Montant</th>
            </tr>
    `

    let data = await getData(Routes.all_messe_2 + "/" + page)



    MA_BASE.push(data.data)


    $('#pagination_link').html(data.pagination_link);


    document.getElementById('content_les_messes').innerHTML = `
                <tr> <td colspan="4" style="text-align:center" > 
                <div class="spinner-grow text-primary mt-3" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </td> </tr>    `


    if (data.data.length > 0) {
        // document.getElementById('total_paroissien').innerHTML = "Total (s) messe (s) : " + data.data.length

        document.getElementById('content_les_messes').innerHTML = ""



        data.data.forEach(element => {

            let my_row = "ligne_" + element.id

            let la_periode
            if (element.periode_2 != "") {
                la_periode = element.periode_1 + " <br> au <br> " + element.periode_2
            } else {
                la_periode = element.periode_1
            }





            let row = `
            <tr >
            <td>   ${element.dates}     </td>
            <td>   ${element.type_de_messe}     </td>
             <td>${element.nom_paroissien}</td>
             <td>${element.montant} Fcfa</td>
             
        </tr>
                        `

            document.getElementById('content_les_messes').innerHTML += row
        });
    }
    else {

        document.getElementById('content_les_messes').innerHTML = ""

        let row = `  <tr style="text-align:center" > <td colspan="5">Pas de donnée </td> </tr>  `

        document.getElementById('content_les_messes').innerHTML = row
    }










}





























//   les messe commandées  

document.getElementById('messe_commande').addEventListener('click', function (params) {
    document.getElementById('titre_menu').innerHTML = `
                <i class="bx bx-menu"></i>   Messe
                commandées
                `
    document.getElementById('titre_side').innerHTML = `Messe
    commander `

    document.getElementById('mes_boutons').style.display = 'none'

    document.getElementById('type_entree').value = 'messe_commande'

    document.getElementById('contenneir_1').style.display = "none"
    document.getElementById('contenneir_2').style.display = "block"


    tous_les_messe(1)
})










//   Les quêtes dudimanche  
document.getElementById('qute_dimanche').addEventListener('click', function (params) {
    document.getElementById('titre_menu').innerHTML = `
                <i class="bx bx-menu"></i>   Les quêtes du
                dimanche
                `
    document.getElementById('titre_side').innerHTML = `Les quêtes du
    dimanche `

    document.getElementById('mes_boutons').style.display = 'block'

    document.getElementById('type_entree').value = 'qute_dimanche'



    document.getElementById('contenneir_1').style.display = "none"
    document.getElementById('contenneir_2').style.display = "block"

    tous_les_qute_dimanche(1)

})





//   Les quêtes dudimanche  
document.getElementById('quete_semaine').addEventListener('click', function (params) {
    document.getElementById('titre_menu').innerHTML = `
                <i class="bx bx-menu"></i>   Les quêtes de
                la semaine
                `
    document.getElementById('titre_side').innerHTML = `Les quêtes de
    la semaine `

    document.getElementById('mes_boutons').style.display = 'block'
    document.getElementById('type_entree').value = 'quete_semaine'

    document.getElementById('contenneir_1').style.display = "none"
    document.getElementById('contenneir_2').style.display = "block"

    quete_semaine(1)
})



//   Les quêtes dudimanche  
document.getElementById('quete_ordinaire').addEventListener('click', function (params) {
    document.getElementById('titre_menu').innerHTML = `
                <i class="bx bx-menu"></i>   Quêtes
                ordinaires des fêtes
                `
    document.getElementById('titre_side').innerHTML = `Quêtes
    ordinaires des fêtes `

    document.getElementById('mes_boutons').style.display = 'block'
    document.getElementById('type_entree').value = 'quete_ordinaire'

    document.getElementById('contenneir_1').style.display = "none"
    document.getElementById('contenneir_2').style.display = "block"

    quete_ordinaire(1)

})



//   Les quêtes dudimanche  
document.getElementById('quete_extraordinaire').addEventListener('click', function (params) {
    document.getElementById('titre_menu').innerHTML = `
                <i class="bx bx-menu"></i>   Quêtes
                extraordinaires
                `
    document.getElementById('titre_side').innerHTML = `Quêtes
    extraordinaires `
    document.getElementById('mes_boutons').style.display = 'block'
    document.getElementById('type_entree').value = 'quete_extraordinaire'

    document.getElementById('contenneir_1').style.display = "none"
    document.getElementById('contenneir_2').style.display = "block"

    quete_extraordinaire(1)
})



//   Les quêtes dudimanche  
document.getElementById('dernier_de_culte').addEventListener('click', function (params) {
    document.getElementById('titre_menu').innerHTML = `
                <i class="bx bx-menu"></i>   Les deniers de
                culte
                `
    document.getElementById('titre_side').innerHTML = `Les deniers de
    culte `
    document.getElementById('mes_boutons').style.display = 'block'
    document.getElementById('type_entree').value = 'dernier_de_culte'

    document.getElementById('contenneir_1').style.display = "none"
    document.getElementById('contenneir_2').style.display = "block"

    dernier_de_culte(1)

})



//   Les quêtes dudimanche  
document.getElementById('les_dimes').addEventListener('click', function (params) {
    document.getElementById('titre_menu').innerHTML = `
                <i class="bx bx-menu"></i>   Les dimes
                `
    document.getElementById('titre_side').innerHTML = `Les dimes `
    document.getElementById('mes_boutons').style.display = 'block'
    document.getElementById('type_entree').value = 'les_dimes'

    document.getElementById('contenneir_1').style.display = "none"
    document.getElementById('contenneir_2').style.display = "block"

    les_dimes(1)
})



//   Les quêtes dudimanche  
document.getElementById('les_dons').addEventListener('click', function (params) {
    document.getElementById('titre_menu').innerHTML = `
                <i class="bx bx-menu"></i>   Les dons
                `
    document.getElementById('titre_side').innerHTML = `Les dons `
    document.getElementById('mes_boutons').style.display = 'block'
    document.getElementById('type_entree').value = 'les_dons'

    document.getElementById('contenneir_1').style.display = "none"
    document.getElementById('contenneir_2').style.display = "block"

    les_dons(1)
})



//   Les quêtes dudimanche  
document.getElementById('recette_secretaria').addEventListener('click', function (params) {
    document.getElementById('titre_menu').innerHTML = `
                <i class="bx bx-menu"></i>   Les recettes
                reçues au secrétariat
                `
    document.getElementById('titre_side').innerHTML = `Les recettes
    reçues au secrétariat `
    document.getElementById('mes_boutons').style.display = 'block'
    document.getElementById('type_entree').value = 'recette_secretaria'

    document.getElementById('contenneir_1').style.display = "none"
    document.getElementById('contenneir_2').style.display = "block"

    recette_secretaria(1)
})



//   Les quêtes dudimanche  
document.getElementById('autre_recette').addEventListener('click', function (params) {
    document.getElementById('titre_menu').innerHTML = `
                <i class="bx bx-menu"></i>   Autres
                recettes
                `
    document.getElementById('titre_side').innerHTML = `Autres
    recettes `
    document.getElementById('mes_boutons').style.display = 'block'
    document.getElementById('type_entree').value = 'autre_recette'

    document.getElementById('contenneir_1').style.display = "none"
    document.getElementById('contenneir_2').style.display = "block"

    autre_recette(1)
})














document.getElementById('btn_add').addEventListener('click', function (params) {
    let type_entree = document.getElementById('type_entree').value

    if (type_entree == 'qute_dimanche') {
        $('#form_quete_dimanche').modal('show')
    }
    if (type_entree == 'quete_semaine') {
        $('#form_quete_semaine').modal('show')
    }
    if (type_entree == 'quete_ordinaire') {
        $('#form_quete_ordinaie').modal('show')
    }



    if (type_entree == 'quete_extraordinaire') {
        $('#form_quete_extraordinaires').modal('show')
    }
    if (type_entree == 'dernier_de_culte') {
        $('#form_quete_deniers').modal('show')
    }
    if (type_entree == 'les_dimes') {
        $('#form_quete_dimes').modal('show')
    }
    if (type_entree == 'les_dons') {
        $('#form_quete_dons').modal('show')
    }
    if (type_entree == 'recette_secretaria') {
        $('#form_quete_recettes').modal('show')
    }
    if (type_entree == 'autre_recette') {
        $('#form_quete_Autres').modal('show')
    }

})





function dateRell_1_0() {
    // body...
    var date = new Date();

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




function dateRell_1_0_2(datess) {
    // body...
    var date = new Date(datess);

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










// ##############################################
// ##############################################
// ##############################################
// ##############################################
// ##############################################
// ##############################################
// ##############################################
// ##############################################









async function save_data() {


    let type_entree = document.getElementById('type_entree').value


    let form_data = new FormData()



    if (type_entree == 'qute_dimanche') {

        let impere_dimanche = document.getElementById('impere_dimanche').checked

        let montanthomme = document.getElementById('montanthomme').value.trim() == "" ? 0 : document.getElementById('montanthomme').value.trim()
        let montant_femme = document.getElementById('montant_femme').value.trim() == "" ? 0 : document.getElementById('montant_femme').value.trim()
        let montant_remerciement_ordinaire = document.getElementById('montant_remerciement_ordinaire').value.trim() == "" ? 0 : document.getElementById('montant_remerciement_ordinaire').value.trim()


        // let impere_djigbezan = document.getElementById('impere_djigbezan').checked

        let montant_lundi = document.getElementById('montant_lundi').value.trim() == "" ? 0 : document.getElementById('montant_lundi').value.trim()
        let montant_mardi = document.getElementById('montant_mardi').value.trim() == "" ? 0 : document.getElementById('montant_mardi').value.trim()
        let montant_mercredi = document.getElementById('montant_mercredi').value.trim() == "" ? 0 : document.getElementById('montant_mercredi').value.trim()
        let montant_jeudi = document.getElementById('montant_jeudi').value.trim() == "" ? 0 : document.getElementById('montant_jeudi').value.trim()
        let montant_vendredi = document.getElementById('montant_vendredi').value.trim() == "" ? 0 : document.getElementById('montant_vendredi').value.trim()
        let montant_samedi = document.getElementById('montant_samedi').value.trim() == "" ? 0 : document.getElementById('montant_samedi').value.trim()
        let montant_dimanche = document.getElementById('montant_dimanche').value.trim() == "" ? 0 : document.getElementById('montant_dimanche').value.trim()
        let montant_remerciement_dyigbezan = document.getElementById('montant_remerciement_dyigbezan').value.trim() == "" ? 0 : document.getElementById('montant_remerciement_dyigbezan').value.trim()




        //##################################  calcul total simple


        let total_ordinaire =
            parseFloat(montanthomme) +
            parseFloat(montant_femme) +
            parseFloat(montant_remerciement_ordinaire)



        let total_dyigbezan =
            parseFloat(montant_lundi) +
            parseFloat(montant_mardi) +
            parseFloat(montant_mercredi) +
            parseFloat(montant_jeudi) +
            parseFloat(montant_vendredi) +
            parseFloat(montant_samedi) +
            parseFloat(montant_dimanche) +
            parseFloat(montant_remerciement_dyigbezan)



        let totals = parseFloat(total_ordinaire) + parseFloat(total_dyigbezan)




        //##################################  calcul total impere

        let calcult_impere_dimanche

        if (impere_dimanche == true) {

            calcult_impere_dimanche = (parseFloat(total_ordinaire) * 50) / 100
            form_data.append('impere_dimanche', "true")

        }
        else {
            calcult_impere_dimanche = (parseFloat(total_ordinaire) * 10) / 100
            form_data.append('impere_dimanche', "false")
        }

        form_data.append('total_quete_impere_dimancje', parseFloat(calcult_impere_dimanche))


        // console.log(calcult_impere_dimanche)


        let calcult_impere_dyigbezan = 0
        form_data.append('impere_djigbezan', "false")
        // if (impere_djigbezan == true) {

        //     calcult_impere_dyigbezan = (parseFloat(total_dyigbezan) * 50) / 100
        //     form_data.append('impere_djigbezan', "true")
        // }
        // else {
        //     // calcult_impere_dyigbezan = (parseFloat(total_dyigbezan) * 10) / 100
        //     // form_data.append('impere_djigbezan', "false")

        //     calcult_impere_dyigbezan = 0
        // }

        form_data.append('total_quete_impere_djigbezan', 0)







        let totals_des_quete_impere = parseFloat(calcult_impere_dimanche) + parseFloat(calcult_impere_dyigbezan)
        form_data.append('totals_des_quete_impere', totals_des_quete_impere)




        let date_quette_dimanche = document.getElementById('date_quette_dimanche').value
        let heure_quette_dimanche = document.getElementById('heure_quette_dimanche').value


        form_data.append('date_quette_dimanche', dateRell_1_0_2(date_quette_dimanche))
        form_data.append('heure_quette_dimanche', heure_quette_dimanche)


        form_data.append('type', "qute_dimanche")

        form_data.append('montanthomme', montanthomme)
        form_data.append('montant_femme', montant_femme)
        form_data.append('montant_lundi', montant_lundi)
        form_data.append('montant_mardi', montant_mardi)
        form_data.append('montant_mercredi', montant_mercredi)
        form_data.append('montant_jeudi', montant_jeudi)
        form_data.append('montant_vendredi', montant_vendredi)
        form_data.append('montant_samedi', montant_samedi)
        form_data.append('montant_dimanche', montant_dimanche)
        form_data.append('dates', dateRell_1_0_2(date_quette_dimanche))


        form_data.append('montant_remerciement_ordinaire', montant_remerciement_ordinaire)
        form_data.append('montant_remerciement_dyigbezan', montant_remerciement_dyigbezan)

        form_data.append('total_ordinaire', total_ordinaire)
        form_data.append('total_dyigbezan', total_dyigbezan)

        form_data.append('totals', totals)



        // for (let value of form_data) {
        //     console.log(value)
        // }

    }





    if (type_entree == 'quete_semaine') {


        let montant_semaine_homme = document.getElementById('montant_semaine_homme').value.trim() == "" ? 0 : document.getElementById('montant_semaine_homme').value.trim()
        let montant_semaine_femme = document.getElementById('montant_semaine_femme').value.trim() == "" ? 0 : document.getElementById('montant_semaine_femme').value.trim()
        let montant_remerciement_semaine = document.getElementById('montant_remerciement_semaine').value.trim() == "" ? 0 : document.getElementById('montant_remerciement_semaine').value.trim()

        let totals = parseInt(montant_semaine_homme) +
            parseInt(montant_semaine_femme) +
            parseInt(montant_remerciement_semaine)


        let date_quette_semaine = document.getElementById('date_quette_semaine').value
        let heure_quette_semaine = document.getElementById('heure_quette_semaine').value



        form_data.append('date_quette_semaine', dateRell_1_0_2(date_quette_semaine))
        form_data.append('heure_quette_semaine', heure_quette_semaine)


        form_data.append('type', "quete_semaine")
        form_data.append('montant_semaine_homme', montant_semaine_homme)
        form_data.append('montant_semaine_femme', montant_semaine_femme)
        form_data.append('montant_remerciement_semaine', montant_remerciement_semaine)
        form_data.append('totals', totals)
        form_data.append('dates', dateRell_1_0_2(date_quette_semaine))

    }





    if (type_entree == 'quete_ordinaire') {



        let montant_home_quete_fete = document.getElementById('montant_home_quete_fete').value.trim() == "" ? 0 : document.getElementById('montant_home_quete_fete').value.trim()
        let montant_femme_quete_fete = document.getElementById('montant_femme_quete_fete').value.trim() == "" ? 0 : document.getElementById('montant_femme_quete_fete').value.trim()
        let montant_remerciement_quete_fete = document.getElementById('montant_remerciement_quete_fete').value.trim() == "" ? 0 : document.getElementById('montant_remerciement_quete_fete').value.trim()

        let totals = parseInt(montant_home_quete_fete) +
            parseInt(montant_femme_quete_fete) +
            parseInt(montant_remerciement_quete_fete)



        let date_quette_ordinaires = document.getElementById('date_quette_ordinaires').value
        let heure_quette_ordinaires = document.getElementById('heure_quette_ordinaires').value


        form_data.append('date_quette_ordinaires', dateRell_1_0_2(date_quette_ordinaires))
        form_data.append('heure_quette_ordinaires', heure_quette_ordinaires)



        form_data.append('type', "quete_ordinaire")
        form_data.append('montant_home_quete_fete', montant_home_quete_fete)
        form_data.append('montant_femme_quete_fete', montant_femme_quete_fete)
        form_data.append('montant_remerciement_quete_fete', montant_remerciement_quete_fete)
        form_data.append('totals', totals)
        form_data.append('dates', dateRell_1_0_2(date_quette_ordinaires))
    }



    if (type_entree == 'quete_extraordinaire') {

        let montant_home_quete_extraordinaires = document.getElementById('montant_home_quete_extraordinaires').value.trim() == "" ? 0 : document.getElementById('montant_home_quete_extraordinaires').value.trim()
        let montant_femme_quete_extraordinaires = document.getElementById('montant_femme_quete_extraordinaires').value.trim() == "" ? 0 : document.getElementById('montant_femme_quete_extraordinaires').value.trim()
        let montant_remerciement_quete_extraordinaires = document.getElementById('montant_remerciement_quete_extraordinaires').value.trim() == "" ? 0 : document.getElementById('montant_remerciement_quete_extraordinaires').value.trim()

        let totals = parseInt(montant_home_quete_extraordinaires) +
            parseInt(montant_femme_quete_extraordinaires) +
            parseInt(montant_remerciement_quete_extraordinaires)



        let date_quette_extraordinaires = document.getElementById('date_quette_extraordinaires').value
        let heure_quette_extraordinaires = document.getElementById('heure_quette_extraordinaires').value


        form_data.append('date_quette_extraordinaires', dateRell_1_0_2(date_quette_extraordinaires))
        form_data.append('heure_quette_extraordinaires', heure_quette_extraordinaires)



        form_data.append('type', "quete_extraordinaire")
        form_data.append('montant_home_quete_extraordinaires', montant_home_quete_extraordinaires)
        form_data.append('montant_femme_quete_extraordinaires', montant_femme_quete_extraordinaires)
        form_data.append('montant_remerciement_quete_extraordinaires', montant_remerciement_quete_extraordinaires)
        form_data.append('totals', totals)
        form_data.append('dates', dateRell_1_0_2(date_quette_extraordinaires))


    }





    if (type_entree == 'dernier_de_culte') {
        let montant_dernier_cult = document.getElementById('montant_dernier_cult').value.trim() == "" ? 0 : document.getElementById('montant_dernier_cult').value.trim()
        let donateur_dernier_cult = document.getElementById('donateur_dernier_cult').value.trim() == "" ? 0 : document.getElementById('donateur_dernier_cult').value.trim()

        form_data.append('type', "dernier_de_culte")
        form_data.append('montant_dernier_cult', montant_dernier_cult)
        form_data.append('donateur_dernier_cult', donateur_dernier_cult)
        form_data.append('dates', dateRell_1_0())


    }



    if (type_entree == 'les_dimes') {
        let nom_donateur_dime = document.getElementById('nom_donateur_dime').value.trim() == "" ? 0 : document.getElementById('nom_donateur_dime').value.trim()
        let montant_dime = document.getElementById('montant_dime').value.trim() == "" ? 0 : document.getElementById('montant_dime').value.trim()

        form_data.append('type', "les_dimes")
        form_data.append('nom_donateur_dime', nom_donateur_dime)
        form_data.append('montant_dime', montant_dime)
        form_data.append('dates', dateRell_1_0())


    }



    if (type_entree == 'les_dons') {
        let nom_donateur_dons = document.getElementById('nom_donateur_dons').value.trim() == "" ? 0 : document.getElementById('nom_donateur_dons').value.trim()
        let montant_dons = document.getElementById('montant_dons').value.trim() == "" ? 0 : document.getElementById('montant_dons').value.trim()

        form_data.append('type', "les_dons")
        form_data.append('nom_donateur_dons', nom_donateur_dons)
        form_data.append('montant_dons', montant_dons)
        form_data.append('dates', dateRell_1_0())
    }



    if (type_entree == 'recette_secretaria') {
        let rapport_secretaria = document.getElementById('rapport_secretaria').value.trim() == "" ? 0 : document.getElementById('rapport_secretaria').value.trim()
        let montant_secretaria = document.getElementById('montant_secretaria').value.trim() == "" ? 0 : document.getElementById('montant_secretaria').value.trim()

        form_data.append('type', "recette_secretaria")
        form_data.append('rapport_secretaria', rapport_secretaria)
        form_data.append('montant_secretaria', montant_secretaria)
        form_data.append('dates', dateRell_1_0())
    }




    if (type_entree == 'autre_recette') {
        let rapport_autre = document.getElementById('rapport_autre').value.trim() == "" ? 0 : document.getElementById('rapport_autre').value.trim()
        let montant_autre = document.getElementById('montant_autre').value.trim() == "" ? 0 : document.getElementById('montant_autre').value.trim()

        form_data.append('type', "autre_recette")
        form_data.append('rapport_autre', rapport_autre)
        form_data.append('montant_autre', montant_autre)
        form_data.append('dates', dateRell_1_0())
    }



    swal({
        title: "Vérification",
        text: "Es que vos données sont correct ? ",
        icon: "warning",
        buttons: ["Annuler", "Oui"],
        confirmButtonColor: '#2C3648',
        closeOnClickOutside: false,
        // dangerMode: true,

    })
        .then(async (willDelete) => {
            if (willDelete) {


                let data = await posttData(Routes.add_finance, form_data)


                if (data.data == "save") {

                    if (type_entree == 'qute_dimanche') {
                        $('#form_quete_dimanche').modal('hide')

                        document.getElementById('impere_dimanche').checked = false

                        document.getElementById('impere_djigbezan').checked = false


                        document.getElementById('montanthomme').value = ""
                        document.getElementById('montant_femme').value = ""
                        document.getElementById('montant_lundi').value = ""
                        document.getElementById('montant_mardi').value = ""
                        document.getElementById('montant_mercredi').value = ""
                        document.getElementById('montant_jeudi').value = ""
                        document.getElementById('montant_vendredi').value = ""
                        document.getElementById('montant_samedi').value = ""
                        document.getElementById('montant_dimanche').value = ""
                        document.getElementById('montant_remerciement_ordinaire').value = ""
                        document.getElementById('montant_remerciement_dyigbezan').value = ""

                        tous_les_qute_dimanche(1)

                    }
                    if (type_entree == 'quete_semaine') {
                        $('#form_quete_semaine').modal('hide')
                        document.getElementById('montant_semaine_homme').value = ""
                        document.getElementById('montant_semaine_femme').value = ""
                        document.getElementById('montant_remerciement_semaine').value = ""

                        quete_semaine(1)

                    }
                    if (type_entree == 'quete_ordinaire') {
                        $('#form_quete_ordinaie').modal('hide')

                        document.getElementById('montant_home_quete_fete').value = ""
                        document.getElementById('montant_femme_quete_fete').value = ""
                        document.getElementById('montant_remerciement_quete_fete').value = ""

                        quete_ordinaire(1)
                    }



                    if (type_entree == 'quete_extraordinaire') {
                        $('#form_quete_extraordinaires').modal('hide')

                        document.getElementById('montant_home_quete_extraordinaires').value = ""
                        document.getElementById('montant_femme_quete_extraordinaires').value = ""
                        document.getElementById('montant_remerciement_quete_extraordinaires').value = ""


                        quete_extraordinaire(1)

                    }
                    if (type_entree == 'dernier_de_culte') {
                        $('#form_quete_deniers').modal('hide')
                        document.getElementById('montant_dernier_cult').value = ''
                        document.getElementById('donateur_dernier_cult').value = ''

                        dernier_de_culte(1)

                    }
                    if (type_entree == 'les_dimes') {
                        $('#form_quete_dimes').modal('hide')
                        document.getElementById('nom_donateur_dime').value = ""
                        document.getElementById('montant_dime').value = ""
                        les_dimes(1)
                    }
                    if (type_entree == 'les_dons') {
                        $('#form_quete_dons').modal('hide')
                        document.getElementById('nom_donateur_dons').value = ""
                        document.getElementById('montant_dons').value = ""
                        les_dons(1)
                    }
                    if (type_entree == 'recette_secretaria') {
                        $('#form_quete_recettes').modal('hide')
                        document.getElementById('rapport_secretaria').value = ""
                        document.getElementById('montant_secretaria').value = ""
                        recette_secretaria(1)
                    }
                    if (type_entree == 'autre_recette') {
                        $('#form_quete_Autres').modal('hide')
                        document.getElementById('rapport_autre').value = ""
                        document.getElementById('montant_autre').value = ""
                        autre_recette(1)
                    }

                }




            }
        });


}

































$(document).on("click", "#pagination_link li a", function (event) {


    event.preventDefault();
    var page = $(this).data("ci-pagination-page");
    // tous_les_messe(page);

    let type_entree = document.getElementById('type_entree').value

    if (type_entree == 'messe_commande') {
        tous_les_messe(page);
    }

    if (type_entree == 'qute_dimanche') {
        tous_les_qute_dimanche(page);
    }


    if (type_entree == 'quete_semaine') {
        quete_semaine(page);
    }
    if (type_entree == 'quete_ordinaire') {
        quete_ordinaire(page);
    }



    if (type_entree == 'quete_extraordinaire') {
        quete_extraordinaire(page);
    }
    if (type_entree == 'dernier_de_culte') {
        dernier_de_culte(page);
    }
    if (type_entree == 'les_dimes') {
        les_dimes(page);
    }
    if (type_entree == 'les_dons') {
        les_dons(page);
    }
    if (type_entree == 'recette_secretaria') {
        recette_secretaria(page);
    }
    if (type_entree == 'autre_recette') {
        autre_recette(page);
    }




});




// #################  les fonction display #################
// #################  les fonction display #################
// #################  les fonction display #################
// #################  les fonction display #################
// #################  les fonction display #################
// #################  les fonction display #################









async function tous_les_qute_dimanche(page) {

    MA_BASE = []
    document.getElementById('my_thead').innerHTML = `
            <tr>
                <th border: none !important;">Dates</th>
                <th border: none !important;">Type de quete</th>
                <th border: none !important;">Total </th>
            </tr>
    `

    let data = await getData(Routes.quetes_du_dimanche + "/" + page)




    MA_BASE.push(data.data)
    $('#pagination_link').html(data.pagination_link);


    document.getElementById('content_les_messes').innerHTML = `
                <tr> <td colspan="6" style="text-align:center" > 
                <div class="spinner-grow text-primary mt-3" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </td> </tr>    `


    if (data.data.length > 0) {
        // document.getElementById('total_paroissien').innerHTML = "Total (s) messe (s) : " + data.data.length

        document.getElementById('content_les_messes').innerHTML = ""


        data.data.forEach(element => {


            let row = `
                    <tr style="cursor: pointer;" onclick="detail(${element.id} )">
                    <td  >${element.dates}</td>
                    <td  >Les quêtes du dimanche</td>
                    <td>${element.totals} Fcfa</td>
                 </tr>
                 
                        `

            document.getElementById('content_les_messes').innerHTML += row
        });
    }
    else {

        document.getElementById('content_les_messes').innerHTML = ""

        let row = `  <tr style="text-align:center" > <td colspan="3">Pas de donnée </td> </tr>  `

        document.getElementById('content_les_messes').innerHTML = row
    }



}
















async function quete_semaine(page) {

    MA_BASE = []
    document.getElementById('my_thead').innerHTML = `
            <tr>
                <th border: none !important;">Dates</th>
                <th border: none !important;">Type de quete</th>
                <th border: none !important;">Total </th>
            </tr>
    `

    let data = await getData(Routes.quete_semaine + "/" + page)

    MA_BASE.push(data.data)

    $('#pagination_link').html(data.pagination_link);


    document.getElementById('content_les_messes').innerHTML = `
                <tr> <td colspan="6" style="text-align:center" > 
                <div class="spinner-grow text-primary mt-3" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </td> </tr>    `


    if (data.data.length > 0) {
        // document.getElementById('total_paroissien').innerHTML = "Total (s) messe (s) : " + data.data.length

        document.getElementById('content_les_messes').innerHTML = ""


        data.data.forEach(element => {


            let row = `
                    <tr style="cursor: pointer;" onclick="detail(${element.id} )">
                    <td  >${element.dates}</td>
                    <td  >Les quêtes de la semaine</td>
                    <td>${element.totals} Fcfa</td>
                 </tr>
                 
                        `

            document.getElementById('content_les_messes').innerHTML += row
        });
    }
    else {

        document.getElementById('content_les_messes').innerHTML = ""

        let row = `  <tr style="text-align:center" > <td colspan="3">Pas de donnée </td> </tr>  `

        document.getElementById('content_les_messes').innerHTML = row
    }




}












async function quete_ordinaire(page) {

    MA_BASE = []
    document.getElementById('my_thead').innerHTML = `
            <tr>
                <th border: none !important;">Dates</th>
                <th border: none !important;">Type de quete</th>
                <th border: none !important;">Total </th>
            </tr>
    `

    let data = await getData(Routes.quetes_ordinaires + "/" + page)



    MA_BASE.push(data.data)
    $('#pagination_link').html(data.pagination_link);


    document.getElementById('content_les_messes').innerHTML = `
                <tr> <td colspan="6" style="text-align:center" > 
                <div class="spinner-grow text-primary mt-3" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </td> </tr>    `


    if (data.data.length > 0) {
        // document.getElementById('total_paroissien').innerHTML = "Total (s) messe (s) : " + data.data.length

        document.getElementById('content_les_messes').innerHTML = ""


        data.data.forEach(element => {


            let row = `
                    <tr style="cursor: pointer;" onclick="detail(${element.id} )">
                    <td  >${element.dates}</td>
                    <td  >Quêtes ordinaires des fête</td>
                    <td>${element.totals} Fcfa</td>
                 </tr>
                 
                        `

            document.getElementById('content_les_messes').innerHTML += row
        });
    }
    else {

        document.getElementById('content_les_messes').innerHTML = ""

        let row = `  <tr style="text-align:center" > <td colspan="3">Pas de donnée </td> </tr>  `

        document.getElementById('content_les_messes').innerHTML = row
    }



}












async function quete_extraordinaire(page) {

    MA_BASE = []

    document.getElementById('my_thead').innerHTML = `
            <tr>
                <th border: none !important;">Dates</th>
                <th border: none !important;">Type de quete</th>
                <th border: none !important;">Total </th>
            </tr>
    `

    let data = await getData(Routes.quetes_extraordinaires + "/" + page)




    MA_BASE.push(data.data)
    $('#pagination_link').html(data.pagination_link);


    document.getElementById('content_les_messes').innerHTML = `
                <tr> <td colspan="6" style="text-align:center" > 
                <div class="spinner-grow text-primary mt-3" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </td> </tr>    `


    if (data.data.length > 0) {
        // document.getElementById('total_paroissien').innerHTML = "Total (s) messe (s) : " + data.data.length

        document.getElementById('content_les_messes').innerHTML = ""


        data.data.forEach(element => {


            let row = `
                    <tr style="cursor: pointer;" onclick="detail(${element.id} )">
                    <td  >${element.dates}</td>
                    <td  >Quêtes extraordinaires </td>
                    <td>${element.totals} Fcfa</td>
                 </tr>
                 
                        `

            document.getElementById('content_les_messes').innerHTML += row
        });
    }
    else {

        document.getElementById('content_les_messes').innerHTML = ""

        let row = `  <tr style="text-align:center" > <td colspan="3">Pas de donnée </td> </tr>  `

        document.getElementById('content_les_messes').innerHTML = row
    }



}












async function dernier_de_culte(page) {

    MA_BASE = []
    document.getElementById('my_thead').innerHTML = `
            <tr>
                <th border: none !important;">Dates</th>
                <th border: none !important;">Donateur</th>
                <th border: none !important;">Montant </th>
            </tr>
    `
    let data = await getData(Routes.les_deniers_de_culte + "/" + page)


    MA_BASE.push(data.data)

    $('#pagination_link').html(data.pagination_link);


    document.getElementById('content_les_messes').innerHTML = `
                <tr> <td colspan="6" style="text-align:center" > 
                <div class="spinner-grow text-primary mt-3" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </td> </tr>    `


    if (data.data.length > 0) {
        // document.getElementById('total_paroissien').innerHTML = "Total (s) messe (s) : " + data.data.length

        document.getElementById('content_les_messes').innerHTML = ""


        data.data.forEach(element => {


            let row = `
                    <tr style="cursor: pointer;" onclick="detail(${element.id} )">
                    <td  >${element.dates}</td>
                    <td  >${element.donateur_dernier_cult}</td>
                    <td>${element.montant_dernier_cult} Fcfa</td> 
                 </tr>
                 
                        `

            document.getElementById('content_les_messes').innerHTML += row
        });
    }

    else {

        document.getElementById('content_les_messes').innerHTML = ""

        let row = `  <tr style="text-align:center" > <td colspan="3">Pas de donnée </td> </tr>  `

        document.getElementById('content_les_messes').innerHTML = row
    }


}












async function les_dimes(page) {

    MA_BASE = []
    document.getElementById('my_thead').innerHTML = `
            <tr>
            <th border: none !important;">Dates</th>
            <th border: none !important;">Donateur</th>
            <th border: none !important;">Montant </th>
            </tr>
    `
    let data = await getData(Routes.les_dimes + "/" + page)



    MA_BASE.push(data.data)
    $('#pagination_link').html(data.pagination_link);


    document.getElementById('content_les_messes').innerHTML = `
                <tr> <td colspan="6" style="text-align:center" > 
                <div class="spinner-grow text-primary mt-3" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </td> </tr>    `


    if (data.data.length > 0) {
        // document.getElementById('total_paroissien').innerHTML = "Total (s) messe (s) : " + data.data.length

        document.getElementById('content_les_messes').innerHTML = ""


        data.data.forEach(element => {


            let row = `
                    <tr style="cursor: pointer;" onclick="detail(${element.id} )">
                    <td  >${element.dates}</td>
                    <td  >${element.nom_donateur_dime}</td>
                    <td>${element.montant_dime} Fcfa</td> 
                 </tr>
                 
                        `

            document.getElementById('content_les_messes').innerHTML += row
        });
    }

    else {

        document.getElementById('content_les_messes').innerHTML = ""

        let row = `  <tr style="text-align:center" > <td colspan="3">Pas de donnée </td> </tr>  `

        document.getElementById('content_les_messes').innerHTML = row
    }



}












async function les_dons(page) {

    MA_BASE = []
    document.getElementById('my_thead').innerHTML = `
            <tr>
            <th border: none !important;">Dates</th>
            <th border: none !important;">Donateur</th>
            <th border: none !important;">Montant </th>
            </tr>
    `
    let data = await getData(Routes.les_don + "/" + page)


    MA_BASE.push(data.data)

    $('#pagination_link').html(data.pagination_link);


    document.getElementById('content_les_messes').innerHTML = `
                <tr> <td colspan="6" style="text-align:center" > 
                <div class="spinner-grow text-primary mt-3" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </td> </tr>    `


    if (data.data.length > 0) {
        // document.getElementById('total_paroissien').innerHTML = "Total (s) messe (s) : " + data.data.length

        document.getElementById('content_les_messes').innerHTML = ""


        data.data.forEach(element => {


            let row = `
                    <tr style="cursor: pointer;" onclick="detail(${element.id} )">
                    <td  >${element.dates}</td>
                    <td  >${element.nom_donateur_dons}</td>
                    <td>${element.montant_dons} Fcfa</td> 
                 </tr>
                 
                        `

            document.getElementById('content_les_messes').innerHTML += row
        });
    }
    else {

        document.getElementById('content_les_messes').innerHTML = ""

        let row = `  <tr style="text-align:center" > <td colspan="3">Pas de donnée </td> </tr>  `

        document.getElementById('content_les_messes').innerHTML = row
    }




}












async function recette_secretaria(page) {

    MA_BASE = []

    document.getElementById('my_thead').innerHTML = `
            <tr>
                <th border: none !important;">Dates</th>
                <th border: none !important;">Rapport</th>
                <th border: none !important;">Montant </th>
            </tr>
    `
    let data = await getData(Routes.recette_secretaria + "/" + page)



    MA_BASE.push(data.data)
    $('#pagination_link').html(data.pagination_link);


    document.getElementById('content_les_messes').innerHTML = `
                <tr> <td colspan="6" style="text-align:center" > 
                <div class="spinner-grow text-primary mt-3" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </td> </tr>    `


    if (data.data.length > 0) {
        // document.getElementById('total_paroissien').innerHTML = "Total (s) messe (s) : " + data.data.length

        document.getElementById('content_les_messes').innerHTML = ""


        data.data.forEach(element => {


            let row = `
                    <tr style="cursor: pointer;" onclick="detail(${element.id} )">
                    <td  >${element.dates} </td>
                    <td  >${element.rapport_secretaria}</td>
                    <td>${element.montant_secretaria}  Fcfa</td>
                 </tr>
                 
                        `

            document.getElementById('content_les_messes').innerHTML += row
        });
    }

    else {

        document.getElementById('content_les_messes').innerHTML = ""

        let row = `  <tr style="text-align:center" > <td colspan="3">Pas de donnée </td> </tr>  `

        document.getElementById('content_les_messes').innerHTML = row
    }




}












async function autre_recette(page) {

    MA_BASE = []
    document.getElementById('my_thead').innerHTML = `
            <tr>
            <th border: none !important;">Dates</th>
            <th border: none !important;">Rapport</th>
            <th border: none !important;">Montant </th>
            </tr>
    `

    let data = await getData(Routes.autres_recettes + "/" + page)



    MA_BASE.push(data.data)

    $('#pagination_link').html(data.pagination_link);


    document.getElementById('content_les_messes').innerHTML = `
                <tr> <td colspan="6" style="text-align:center" > 
                <div class="spinner-grow text-primary mt-3" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </td> </tr>    `


    if (data.data.length > 0) {
        // document.getElementById('total_paroissien').innerHTML = "Total (s) messe (s) : " + data.data.length

        document.getElementById('content_les_messes').innerHTML = ""


        data.data.forEach(element => {


            let row = `
                    <tr style="cursor: pointer;" onclick="detail(${element.id} )">
                    <td  >${element.dates} </td>
                    <td  >${element.rapport_autre}</td>
                    <td>${element.montant_autre}  Fcfa</td>
                 </tr>
                 
                        `

            document.getElementById('content_les_messes').innerHTML += row
        });
    }

    else {

        document.getElementById('content_les_messes').innerHTML = ""

        let row = `  <tr style="text-align:center" > <td colspan="3">Pas de donnée </td> </tr>  `

        document.getElementById('content_les_messes').innerHTML = row
    }


}











// #################  les fonction display #################
// #################  les fonction display #################
// #################  les fonction display #################




document.getElementById('btn_imprimer').addEventListener('click', function (e) {

    // $('#modal_detail').modal('hide')

    let table = document.getElementById('print_detai')


    // let options = {
    //     margin: 10,
    //     // filename: "bilan.pdf",
    //     image: { type: 'png', quality: 1 },
    //     html2canvas: { scale: 2 },
    //     jsPDF: { init: 'in', format: 'letter', }
    // }
    // html2pdf().set(options).from(table).save()



    var impr = document.getElementById('print_detai')


    // var divElements = document.getElementById("print_detai").innerHTML;
    // var oldPage = document.body.innerHTML;

    // w.document.write('<scr' + 'ipt type="text/javascript">' + 'window.onload = function() { window.print(); window.close(); };' + '</sc' + 'ript>');

    // document.body.innerHTML =
    //     `
    //     <script type="text/javascript">window.onload = function() { window.print(); window.close(); };</script>'
    //     <html><head><title>yhyhyyh</title></head><body> 
    //     ${divElements}  </body>
    //     `
    // window.print();
    // document.body.innerHTML = oldPage;


    // $(".print_detai").printArea({
    //     mode: "iframe",
    //     standard: "html5",
    //     // popTitle: 'relatorio',
    //     popClose: false,
    //     // extraCss: '../css/impressao_retrato.css',
    //     // extraHead: '',
    //     // retainAttr: ["id", "class", "style"],
    //     printDelay: 500, // tempo de atraso na impressao
    //     printAlert: true,
    //     printMsg: 'Aguarde a impressão'
    // });



    var mode = 'iframe'; //popup
    var close = mode == "popup";
    var options = {
        mode: mode,
        popClose: close,
        standard: "html5",
        extraCss: '../scss/print.css',
    };
    $("#print_detai").printArea(options);



})



function back() {
    window.history.back();
}









function detail(params) {

    if (MA_BASE.length > 0) {
        MA_BASE[0].forEach(element => {
            if (element.id == parseInt(params)) {

                // ##########  operation  ###########

                $('#modal_detail').modal('show')
                let type_entree = document.getElementById('type_entree').value

                // ###############################
                if (type_entree == 'qute_dimanche') {




                    document.getElementById('content_detail_head').innerHTML =
                        `
                     <tr>
                                                                        <th>Dates</th>
                                                                        <th>Type e quete</th>
                                                                        <th>description</th>
                                                                        <th>Total 1</th>
                                                                        <th>Total 2</th>
                                                                        <th>Total<span> </span></th>
                                                                    </tr>`


                    let row = `
                        <tr  >
                                <td rowspan=11  >  ${element.dates} </td>
                                <td rowspan=3  >Ordinaire</td>
                                <td  >homme</td>
                                <td  >${element.montanthomme} Fcfa</td>
                                <td rowspan=3  >${element.total_ordinaire} Fcfa</td>
                                <td rowspan=11  > ${element.totals} Fcfa</td>
                                </tr>
                                <tr >
                                    <td  >femme  </td>
                                <td  >${element.montant_femme} Fcfa</td>
                                </tr>
                                <tr  >
                                <td  >remerciement</td>
                                <td  >${element.montant_remerciement_ordinaire} Fcfa</td>
                                </tr>
                                <tr >
                                    <td rowspan=8  >dyigbrzan</td>
                                    <td >lundi</td>
                                    <td >${element.montant_lundi} Fcfa</td>
                                    <td rowspan=8 >${element.total_dyigbezan} Fcfa</td>
                                </tr>    
                                <tr >
                                    <td  >mardi</td>
                                    <td >${element.montant_mardi} Fcfa</td>
                                </tr>
                                <tr >
                                    <td  >mercredi</td>
                                    <td >${element.montant_mercredi} Fcfa</td>
                                </tr>
                                <tr >
                                    <td  >jeudi</td>
                                    <td >${element.montant_jeudi} Fcfa</td>
                                </tr>
                                <tr >
                                    <td  >vendredi</td>
                                    <td >${element.montant_vendredi} Fcfa</td>
                                </tr>
                                <tr >
                                    <td  >samidie</td>
                                    <td >${element.montant_samedi} Fcfa</td>
                                </tr>
                                <tr >
                                    <td  >dimanche</td>
                                    <td >${element.montant_dimanche} Fcfa</td>
                                </tr>
                                <tr >
                                    <td  >remmerciement</td>
                                    <td >${element.montant_remerciement_dyigbezan} Fcfa</td>
                                </tr>
                        `
                    document.getElementById('content_detail_body').innerHTML = row

                }

                // ###############################
                if (type_entree == 'quete_semaine') {
                    document.getElementById('content_detail_head').innerHTML =
                        `
                 <tr>
                                                                    <th>Dates</th>
                                                                    
                                                                    <th>description</th>
                                                                    <th>Total 1</th>
                                                                    <th>TotalS</th>
                                                                     
                                                                </tr>`


                    let row = `
                    <tr>
                            <td rowspan=3>${element.dates}</td>
                            
                            <td>homme</td>
                            <td>${element.montant_semaine_homme} Fcfa</td>
                            <td rowspan=3 >${element.totals} Fcfa</td>
                            
                        </tr>
                        <tr>
                            <td>femme</td>
                            <td>${element.montant_semaine_femme} Fcfa</td>
                        </tr>
                        <tr>
                            <td>remerciement</td>
                            <td>${element.montant_remerciement_semaine} Fcfa</td>
                        </tr>

                                                                `
                    document.getElementById('content_detail_body').innerHTML = row


                }

                // ###############################
                if (type_entree == 'quete_ordinaire') {
                    document.getElementById('content_detail_head').innerHTML =
                        `
             <tr>
                                                                <th>Dates</th>
                                                                
                                                                <th>description</th>
                                                                <th>Total 1</th>
                                                                <th>TotalS</th>
                                                                 
                                                            </tr>`


                    let row = `
                <tr>
                        <td rowspan=3>${element.dates}</td>
                        
                        <td>homme</td>
                        <td>${element.montant_home_quete_fete} Fcfa</td>
                        <td rowspan=3> ${element.totals} Fcfa</td>
                        
                    </tr>
                    <tr>
                        <td>femme</td>
                        <td>${element.montant_femme_quete_fete} Fcfa</td>
                    </tr>
                    <tr>
                        <td>remerciement</td>
                        <td>${element.montant_remerciement_quete_fete} Fcfa</td>
                    </tr>

                                                            `
                    document.getElementById('content_detail_body').innerHTML = row
                }

                // ###############################



                if (type_entree == 'quete_extraordinaire') {
                    document.getElementById('content_detail_head').innerHTML =
                        `
             <tr>
                    <th>Dates</th>
                    <th>description</th>
                    <th>Total 1</th>
                    <th>TotalS</th>
                    </tr>`


                    let row = `
                <tr>
                        <td rowspan=3>${element.dates}</td>
                        
                        <td>homme</td>
                        <td>${element.montant_home_quete_extraordinaires} Fcfa</td>
                        <td rowspan=3 >${element.totals} Fcfa</td>
                        
                    </tr>
                    <tr>
                        <td>femme</td>
                        <td>${element.montant_femme_quete_extraordinaires} Fcfa</td>
                    </tr>
                    <tr>
                        <td>remerciement</td>
                        <td>${element.montant_remerciement_quete_extraordinaires} Fcfa</td>
                    </tr>

                                                            `
                    document.getElementById('content_detail_body').innerHTML = row
                }

                // ###############################
                if (type_entree == 'dernier_de_culte') {
                    document.getElementById('content_detail_head').innerHTML =
                        `
             <tr>
                    <th>Dates</th>
                    <th>Donateur</th>
                    <th>Montant</th>
                     </tr>`

                    let row = `
                    <tr>
                            <td  >${element.dates}</td> 
                             <td>${element.donateur_dernier_cult}</td>
                            <td   >${element.montant_dernier_cult} Fcfa</td>
                            
                        </tr>
                         
    
                                                                `
                    document.getElementById('content_detail_body').innerHTML = row


                }

                // ###############################
                if (type_entree == 'les_dimes') {
                    document.getElementById('content_detail_head').innerHTML =
                        `
         <tr>
                <th>Dates</th>
                <th>Donateur</th>
                <th>Montant</th>
                 </tr>`

                    let row = `
                <tr>
                        <td  >${element.dates}</td> 
                         <td>${element.nom_donateur_dime}</td>
                        <td   >${element.montant_dime} Fcfa</td>
                        
                    </tr>
                     

                                                            `
                    document.getElementById('content_detail_body').innerHTML = row

                }

                // ###############################
                if (type_entree == 'les_dons') {
                    document.getElementById('content_detail_head').innerHTML =
                        `
         <tr>
                <th>Dates</th>
                <th>Donateur</th>
                <th>Montant</th>
                 </tr>`

                    let row = `
                <tr>
                        <td  >${element.dates}</td> 
                         <td>${element.nom_donateur_dons}</td>
                        <td   >${element.montant_dons} Fcfa</td>
                        
                    </tr>
                     

                                                            `
                    document.getElementById('content_detail_body').innerHTML = row

                }

                // ###############################
                if (type_entree == 'recette_secretaria') {
                    document.getElementById('content_detail_head').innerHTML =
                        `
         <tr>
                <th>Dates</th>
                <th>Rapport</th>
                <th>Montant</th>
                 </tr>`

                    let row = `
                <tr>
                        <td  >${element.dates}</td> 
                         <td>${element.rapport_secretaria}</td>
                        <td   >${element.montant_secretaria} Fcfa</td>
                        
                    </tr>
                     

                                                            `
                    document.getElementById('content_detail_body').innerHTML = row

                }

                // ###############################
                if (type_entree == 'autre_recette') {
                    document.getElementById('content_detail_head').innerHTML =
                        `
         <tr>
                <th>Dates</th>
                <th>Rapport</th>
                <th>Montant</th>
                 </tr>`

                    let row = `
                <tr>
                        <td  >${element.dates}</td> 
                         <td>${element.rapport_autre}</td>
                        <td   >${element.montant_autre} Fcfa</td>
                        
                    </tr>
                     

                                                            `
                    document.getElementById('content_detail_body').innerHTML = row
                }

                // ##########  operation  ###########
            }
        });


    }
}









document.getElementById('btn_search_paroissien').addEventListener('click', function (e) {
    e.preventDefault()

    document.getElementById('btn_lancer_recherche').value = ""
    document.getElementById('content_recherche_les_paroissuen').innerHTML = ""


    $('#resultat_recherche').modal('show')

})


document.getElementById('btn_search_paroissien_1').addEventListener('click', function (e) {
    e.preventDefault()

    document.getElementById('btn_lancer_recherche').value = ""
    document.getElementById('content_recherche_les_paroissuen').innerHTML = ""


    $('#resultat_recherche').modal('show')

})



document.getElementById('btn_search_paroissien_2').addEventListener('click', function (e) {
    e.preventDefault()

    document.getElementById('btn_lancer_recherche').value = ""
    document.getElementById('content_recherche_les_paroissuen').innerHTML = ""


    $('#resultat_recherche').modal('show')

})


document.getElementById('btn_lancer_recherche').addEventListener('keyup', async function (params) {


    let mot_cle_recherche = document.getElementById('btn_lancer_recherche').value.trim()

    if (mot_cle_recherche == '') {
        // document.getElementById("btn_lancer_recherche").className = "form-control is-invalid"
    }
    else {

        let form_data = new FormData()

        form_data.append('checked_1', "oui")
        form_data.append('checked_2', "")
        form_data.append('checked_3', "")
        form_data.append('checked_4', "")
        form_data.append('checked_5', "")


        form_data.append('mot_cle', mot_cle_recherche)


        let data = await posttData(Routes.rechercher_paroissien, form_data)


        if (data.data.length > 0) {

            $('#modal_recherche').modal('hide')

            document.getElementById('content_recherche_les_paroissuen').innerHTML = ""
            data.data.forEach(element => {
                let row = `
                            <tr style="cursor: pointer;" onclick="selectionner(${element.id})">
                            <td>
                            <i class="fab fa-angular fa-lg text-danger me-3"></i>
                            ${element.nom_paroissien}
                            </td>
                            <td>${element.prenom_paroissien}</td>
    
                            <td>${element.sexe_paroissien}</td>
                            <td>${element.profession_paroissien}</td>
                             
                        </tr>
                            `

                document.getElementById('content_recherche_les_paroissuen').innerHTML += row
            });

            // $('#resultat_recherche').modal('show')

        }






    }



    // $('#modal_recherche').modal('show')

})




async function selectionner(params) {


    let form_data = new FormData()
    form_data.append('id', params)

    let data = await posttData(Routes.detail_paroissien, form_data)

    let type_entree = document.getElementById('type_entree').value

    data.data.forEach(element => {

        if (type_entree == 'dernier_de_culte') {
            document.getElementById('donateur_dernier_cult').value = element.nom_paroissien + " " + element.prenom_paroissien
        }
        if (type_entree == 'les_dimes') {
            document.getElementById('nom_donateur_dime').value = element.nom_paroissien + " " + element.prenom_paroissien

        }
        if (type_entree == 'les_dons') {
            document.getElementById('nom_donateur_dons').value = element.nom_paroissien + " " + element.prenom_paroissien
        }


    });
    $('#resultat_recherche').modal('hide')


}