(function () {
    // getstatus()
    tous_les_paroissiens(1)
})();



var BDD_PAROISSIEN = []




// function verifier(params) {
//     setTimeout(() => {
//         document.getElementById('nom_paroissien').className = "form-control was-validated"
//     }, 5000);
// }





/*@
    fonction progress bar
@*/

var compteur = 0

function gerer_progress() {

    let progress = setInterval(() => {
        compteur = compteur + 10
        document.getElementById('my_progress').style.width = compteur + "%"
        if (compteur == 110) {
            clearInterval(progress)
            document.getElementById('my_progress').style.width = "0%"
            compteur = 0

        }
    }, 200);

}


/*@
    fonction de recuperation de tous kles parroissien
@*/



async function tous_les_paroissiens(page) {

    BDD_PAROISSIEN = []


    spinner_table("content_les_paroissuen", 8)


    let data = await getData(Routes.all_paroissien + "/" + page)

    if (data.data.length > 0) {

        BDD_PAROISSIEN.push(data.base_paroissien)

        $('#pagination_link').html(data.pagination_link);





        vider_div("content_les_paroissuen")


        data.data.forEach(element => {

            let table_tr = "ligne_paroissien_" + element.id

            let row = `
                    <tr id="${table_tr}" data-type-menu="${element.id}" class="context-menu-one row_display" style="cursor: pointer;" class="row_display">
                    <td onclick="show_detail(${element.id})">
                    ${element.nom_paroissien.toUpperCase()}
                    </td>
                    <td onclick="show_detail(${element.id})">${element.prenom_paroissien}</td>
                    <td onclick="show_detail(${element.id})">${element.sexe_paroissien}</td>
                    <td onclick="show_detail(${element.id})">${dateRell_1_4(element.date_naissance)}</td>
                     <td onclick="show_detail(${element.id})">${element.date_bapteme == "" ? "..." : dateRell_1_4(element.date_bapteme)}</td>
                    <td onclick="show_detail(${element.id})">${element.Date_de_la_premiere_communion == "" ? "..." : dateRell_1_4(element.Date_de_la_premiere_communion)}</td>
                    <td onclick="show_detail(${element.id})">${element.Date_de_la_confirmation == "" ? "..." : dateRell_1_4(element.Date_de_la_confirmation)}</td>
                </tr>
                    `

            document.getElementById('content_les_paroissuen').innerHTML += row





            let row_2 = `
                    <tr   class="context-menu-one row_display" style="cursor: pointer;" class="row_display">
                    <td >  ${element.nom_paroissien.toUpperCase()}  </td>
                    <td >${element.prenom_paroissien}</td>
                    <td >${element.sexe_paroissien}</td>
                    <td >${element.date_naissance}</td>
                   
                    <td >${element.date_bapteme == "" ? "..." : element.date_bapteme}</td>
                    <td >${element.Date_de_la_premiere_communion == "" ? "..." : element.Date_de_la_premiere_communion}</td>
                    <td >${element.Date_de_la_confirmation == "" ? "..." : element.Date_de_la_confirmation}</td>

                </tr>
                    `
            document.getElementById('content_recherche_les_paroissuen').innerHTML += row_2

        });


    }
    else {
        donnee_vide("content_les_paroissuen", 8)
    }


}



/*@
    page suivant sur la pagination
@*/



$(document).on("click", "#pagination_link li a", function (event) {
    event.preventDefault();
    var page = $(this).data("ci-pagination-page");
    tous_les_paroissiens(page);
    console.log(page)
});



/*@
    clik droit sur un parroisien
@*/

$(function () {
    $.contextMenu({
        selector: '.context-menu-one',
        callback: function (key, options) {
            var m = "clicked: " + key;
            // window.console && console.log(m) || alert(m);

            let my_class_name = options.$trigger.attr("data-type-menu");
            if (key == "detail") {

                show_detail(my_class_name)
            }
            if (key == "edit") {
                modifier_paroissien(my_class_name)
            }
            if (key == "delete") {
                supprimer_paroissien(my_class_name)
            }



        },
        items: {
            "detail": { name: "Détail", icon: "show" },
            "edit": { name: "Editer", icon: "edit" },
            "delete": {
                name: "Supprimer", icon: "delete", visible: function (key, opt) {
                    if (MON_STATUS == "Propriété" || MON_STATUS == "Administrateur") {
                        return true
                    } else {
                        return false
                    }

                }
            },

        }
    });


});


/*@
    clik droit sur un parroisien
@*/





/*@
    bouton d'ajout de parroissien
@*/
document.getElementById('btn_add').addEventListener('click', function (e) {
    e.preventDefault()
    $('#largeModal').modal('show')
})









/*@
    INPUT BAPTEME
@*/

document.getElementById('defaultRadio2').addEventListener('click', function (params) {

    let donnee = [
        {
            id: 'numero_enregistrement',
            label: 'Numéro d’enregistrement',
            type: 'number',
            require: false,
        },
        {
            id: 'date_bapteme',
            label: 'Date de baptême',
            type: 'date',
            require: false,
        },
        {
            id: 'eglise_bapteme',
            label: 'Eglise du baptême',
            type: 'text',
            require: false,
        },
        {
            id: 'lieu_bapteme',
            label: 'Lieu du baptême',
            type: 'text',
            require: false,
        },
        {
            id: 'condition_bapteme',
            label: 'Conditions du baptême',
            type: 'text',
            require: false,
        },
        {
            id: 'Nom_du_pere',
            label: 'Nom du père',
            type: 'text',
            require: false,
        },
        {
            id: 'Nom_du_mere',
            label: 'Nom du mère',
            type: 'text',
            require: false,
        },
        {
            id: 'Origine_du_pere',
            label: 'Origine du père',
            type: 'text',
            require: false,
        },
        {
            id: 'Nom_du_parrain',
            label: 'Nom du parrain',
            type: 'text',
            require: false,
        },
        {
            id: 'Nom_de_la_marraine',
            label: 'Nom de la marraine',
            type: 'text',
            require: false,
        },
        {
            id: 'Celebrant_du_bapteme',
            label: 'Célébrant du baptême',
            type: 'text',
            require: false,
        },
        {
            id: 'Cure_de_la_paroisse_bapteme',
            label: 'Curé de la paroisse',
            type: 'text',
            require: false,
        },
    ]
    generer_champs_input("content_data_bapteme", donnee)

})


document.getElementById('defaultRadio1').addEventListener('click', function (params) {
    document.getElementById("content_data_bapteme").style.display = 'none'
    // vider apres les champs input
})



/*@
    INPUT BAPTEME
@*/






/*@
    Première communion
@*/



document.getElementById('defaultRadio_comunion_2').addEventListener('click', function (params) {

    let donnee = [
        {
            id: 'Numero_enregistrement_premiere_communion',
            label: 'Numéro d’enregistrement',
            type: 'number',
            require: false,
        },
        {
            id: 'Date_de_la_premiere_communion',
            label: 'Date de la première communion',
            type: 'date',
            require: false,
        },
        {
            id: 'Eglise_de_la_ceremonie_communion',
            label: 'Eglise de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Lieu_de_la_ceremonie_communion',
            label: 'Lieu de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Celebrant_de_la_ceremonie_communion',
            label: 'Célébrant de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Cure_de_la_paroisse_premier_comunion',
            label: 'Curé de la paroisse',
            type: 'text',
            require: false,
        },
    ]

    generer_champs_input("content_data_Première_communion", donnee)

})



document.getElementById('defaultRadio1_comunion').addEventListener('click', function (params) {
    document.getElementById("content_data_Première_communion").style.display = 'none'
    // vider apres les champs input
})



/*@
    Première communion
@*/




/*@
    Confirmation
@*/


document.getElementById('defaultRadio2_confirmation').addEventListener('click', function (params) {

    let donnee = [
        {
            id: 'Numero_enregistrement_confirmation',
            label: 'Numéro d’enregistrement',
            type: 'number',
            require: false,
        },
        {
            id: 'Date_de_la_confirmation',
            label: 'Date de la confirmation',
            type: 'date',
            require: false,
        },
        {
            id: 'Eglise_de_la_ceremonie_confirmation',
            label: 'Eglise de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Lieu_de_la_ceremonie_confirmation',
            label: 'Lieu de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Celebrant_de_la_ceremonie_confirmation',
            label: 'Célébrant de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Parrain_Marraine_Couple_parrain',
            label: 'Parrain/Marraine/Couple parrain',
            type: 'text',
            require: false,
        },
        {
            id: 'Cure_de_la_paroisse_confirmation',
            label: 'Curé de la paroisse',
            type: 'text',
            require: false,
        },
    ]

    generer_champs_input("content_data_confirmation", donnee)

})



document.getElementById('defaultRadio1_confirmation').addEventListener('click', function (params) {
    document.getElementById("content_data_confirmation").style.display = 'none'
    // vider apres les champs input
})


/*@
    Confirmation
@*/







/*@
    Mariage  
@*/


document.getElementById('defaultRadio2_Mariage').addEventListener('click', function (params) {

    let donnee = [
        {
            id: 'numero_enregistrement_mariage',
            label: 'Numéro d’enregistrement',
            type: 'number',
            require: false,
        },
        {
            id: 'Eglise_de_la_ceremonie_mariage',
            label: 'Eglise de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Eglise_Lieu_de_la_ceremonie',
            label: 'Lieu de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Date_du_mariage',
            label: 'Date du mariage',
            type: 'date',
            require: false,
        },
        {
            id: 'nom_conjoint',
            label: 'Avec (conjoint)',
            type: 'text',
            require: false,
        },
        {
            id: 'Pere_du_conjoint_ou_de_la_conjointe',
            label: 'Père du conjoint ou de la conjointe',
            type: 'text',
            require: false,
        },
        {
            id: 'Mere_du_conjoint_ou_de_la_conjointe',
            label: 'Mère du conjoint ou de la conjointe',
            type: 'text',
            require: false,
        },
        {
            id: 'Date_de_naissance_du_conjoint_ou_conjointe',
            label: 'Date de naissance du conjoint ou conjointe',
            type: 'date',
            require: false,
        },
        {
            id: 'Lieu_de_naissance',
            label: 'Lieu de naissance',
            type: 'text',
            require: false,
        },
        {
            id: 'Date_de_son_bapteme',
            label: 'Date de son baptême',
            type: 'date',
            require: false,
        },
        {
            id: 'Son_numero_au_registre_des_baptemes',
            label: 'Son numéro au registre des baptêmes',
            type: 'text',
            require: false,
        },
        {
            id: 'Dates_de_publication_des_bans_dans_la_paroisse',
            label: 'Dates de publication des bans dans la paroisse',
            type: 'date',
            require: false,
        },
        {
            id: 'Dates_de_publication_des_bans_dans_les_autres_paroisses',
            label: 'Dates de publication des bans dans les autres paroisses',
            type: 'date',
            require: false,
        },
        {
            id: 'Couple_temoin',
            label: 'Couple témoin (Mr et Mme)',
            type: 'text',
            require: false,
        },
        {
            id: 'Dispenses_obtenue',
            label: 'Dispenses obtenues',
            type: 'text',
            require: false,
        },
        {
            id: 'Celebrant_de_la_ceremonie_mariage',
            label: 'Célébrant de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Cure_de_la_paroisse_mariage',
            label: 'Curé de la paroisse',
            type: 'text',
            require: false,
        },
    ]

    generer_champs_input("content_data_Mariage", donnee)

})



document.getElementById('defaultRadio1_Mariage').addEventListener('click', function (params) {
    document.getElementById("content_data_Mariage").style.display = 'none'
    // vider apres les champs input
})


/*@
    Mariage
@*/





/*@
    ajouter les champs automatique
@*/



function generer_champs_input(contenneur_div, tableau_de_donnee) {

    //  Vider dans un premier temps mon contenneur
    document.getElementById(contenneur_div).innerHTML = ""
    // Creer mon composant

    // Injecter les donnee da,s la champs
    if (tableau_de_donnee.length > 0) {
        tableau_de_donnee.forEach(element => {
            let require = element.require ? " *" : ""
            let mon_input = `
            <label for="nameLarge" class="form-label">${element.label} ${require} </label>
                <input type="${element.type}" id="${element.id}" class="form-control"  />
            `
            document.getElementById(contenneur_div).innerHTML += mon_input
        });
        document.getElementById(contenneur_div).style.display = 'block'
    }
}

/*@
    ajouter les champs automatique
@*/








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



function dateRell_1_4(valeur) {
    // body...
    var date = new Date(valeur);

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


function verifier_champs(data_field) {

    let error = []

    data_field.forEach(element => {

        if (element.require === true) {
            let verifie = document.getElementById(element.ident).value.trim()
            if (verifie === "") {
                // document.getElementById(element.ident).className = "form-control is-invalid"
                error.push('error')
            } else {
                // document.getElementById(element.ident).className = "form-control is-valid"

            }

            // document.getElementById(element.ident).value.trim() === "" ?
            //     document.getElementById(element.ident).className = "form-control is-invalid"

            //     :
            //     document.getElementById(element.ident).className = "form-control is-valid"

        }
    });

    return error
}






/*@
    ajouter le parroissien
@*/


document.getElementById('btn_ajouter').addEventListener('click', async function (params) {






    let form_data = new FormData()




    let mes_input = [
        {
            ident: 'numero_carnet',
            require: true,
        },
        {
            ident: 'nom_paroissien',
            require: true,
        },
        {
            ident: 'prenom_paroissien',
            require: true,
        },
        {
            ident: 'sexe_paroissien',
            require: true,
        },
        {
            ident: 'date_naissance',
            require: true,
        },
        // {
        //     ident: 'age_paroissien',
        //     require: true,
        // },
        {
            ident: 'numero_paroissien',
            require: false,
        },

        {
            ident: 'email_paroissien',
            require: false,
        },
        {
            ident: 'profession_paroissien',
            require: false,
        },
        {
            ident: 'domicile_paroissien',
            require: true,
        },
        {
            ident: 'association_paroissien',
            require: false,
        },

    ]



    let select_bapteme = document.getElementById('defaultRadio2').checked
    let select_conmunion = document.getElementById('defaultRadio_comunion_2').checked
    let select_confirmation = document.getElementById('defaultRadio2_confirmation').checked
    let select_mariage = document.getElementById('defaultRadio2_Mariage').checked

    if (select_bapteme == true) {

        form_data.append("etat_bapteme", true)

        mes_input.push({
            ident: 'numero_enregistrement',
            require: false,
        },)

        mes_input.push({
            ident: 'date_bapteme',
            require: false,
        },)

        mes_input.push({
            ident: 'eglise_bapteme',
            require: false,
        },)

        mes_input.push({
            ident: 'lieu_bapteme',
            require: false,
        },)

        mes_input.push({
            ident: 'condition_bapteme',
            require: false,
        },)

        mes_input.push({
            ident: 'Nom_du_pere',
            require: false,
        },)

        mes_input.push({
            ident: 'Nom_du_mere',
            require: false,
        },)

        mes_input.push({
            ident: 'Origine_du_pere',
            require: false,
        },)

        mes_input.push({
            ident: 'Nom_du_parrain',
            require: false,
        },)

        mes_input.push({
            ident: 'Nom_de_la_marraine',
            require: false,
        },)

        mes_input.push({
            ident: 'Celebrant_du_bapteme',
            require: false,
        },)

        mes_input.push({
            ident: 'Cure_de_la_paroisse_bapteme',
            require: false,
        },)

    }
    else {
        form_data.append("etat_bapteme", false)
    }


    if (select_conmunion == true) {
        form_data.append("etat_premiere_communion", true)

        mes_input.push({
            ident: 'Numero_enregistrement_premiere_communion',
            require: false,
        },)

        mes_input.push({
            ident: 'Date_de_la_premiere_communion',
            require: false,
        })
            ,
            mes_input.push({
                ident: 'Eglise_de_la_ceremonie_communion',
                require: false,
            },)

        mes_input.push({
            ident: 'Lieu_de_la_ceremonie_communion',
            require: false,
        },)

        mes_input.push({
            ident: 'Celebrant_de_la_ceremonie_communion',
            require: false,
        },)

        mes_input.push({
            ident: 'Cure_de_la_paroisse_premier_comunion',
            require: false,
        },)

    }
    else {
        form_data.append("etat_premiere_communion", false)
    }



    if (select_confirmation == true) {
        form_data.append("etat_confirmation", true)
        mes_input.push({
            ident: 'Numero_enregistrement_confirmation',
            require: false,
        },)

        mes_input.push({
            ident: 'Date_de_la_confirmation',
            require: false,
        },)

        mes_input.push({
            ident: 'Eglise_de_la_ceremonie_confirmation',
            require: false,
        },)

        mes_input.push({
            ident: 'Lieu_de_la_ceremonie_confirmation',
            require: false,
        },)

        mes_input.push({
            ident: 'Celebrant_de_la_ceremonie_confirmation',
            require: false,
        },)

        mes_input.push({
            ident: 'Parrain_Marraine_Couple_parrain',
            require: false,
        },)

        mes_input.push({
            ident: 'Cure_de_la_paroisse_confirmation',
            require: false,
        },)

    }
    else {
        form_data.append("etat_confirmation", false)
    }



    if (select_mariage == true) {

        form_data.append("etat_mariage", true)

        mes_input.push({
            ident: 'numero_enregistrement_mariage',
            require: false,
        },)

        mes_input.push({
            ident: 'Eglise_de_la_ceremonie_mariage',
            require: false,
        },)

        mes_input.push({
            ident: 'Eglise_Lieu_de_la_ceremonie',
            require: false,
        },)

        mes_input.push({
            ident: 'Date_du_mariage',
            require: false,
        },)

        mes_input.push({
            ident: 'nom_conjoint',
            require: false,
        },)

        mes_input.push({
            ident: 'Pere_du_conjoint_ou_de_la_conjointe',
            require: false,
        },)

        mes_input.push({
            ident: 'Mere_du_conjoint_ou_de_la_conjointe',
            require: false,
        },)

        mes_input.push({
            ident: 'Date_de_naissance_du_conjoint_ou_conjointe',
            require: false,
        },)

        mes_input.push({
            ident: 'Lieu_de_naissance',
            require: false,
        },)

        mes_input.push({
            ident: 'Date_de_son_bapteme',
            require: false,
        },)

        mes_input.push({
            ident: 'Son_numero_au_registre_des_baptemes',
            require: false,
        },)

        mes_input.push({
            ident: 'Dates_de_publication_des_bans_dans_la_paroisse',
            require: false,
        },)

        mes_input.push({
            ident: 'Dates_de_publication_des_bans_dans_les_autres_paroisses',
            require: false,
        },)

        mes_input.push({
            ident: 'Couple_temoin',
            require: false,
        },)

        mes_input.push({
            ident: 'Dispenses_obtenue',
            require: false,
        },)

        mes_input.push({
            ident: 'Celebrant_de_la_ceremonie_mariage',
            require: false,
        },)

        mes_input.push({
            ident: 'Cure_de_la_paroisse_mariage',
            require: false,
        },)

    }
    else {
        form_data.append("etat_mariage", false)
    }

    form_data.append('dates', dateRell_1_0())





    let resultat_check = verifier_champs(mes_input)

    if (resultat_check.length > 0) {
        swal({
            title: "Erreur",
            text: "Les champs à étoiles sont obligatoires",
            icon: "error",
            button: "Ok",
        });
    }
    else {


        mes_input.forEach(element => {
            form_data.append(element.ident, document.getElementById(element.ident).value)
        });

        // for (let value of form_data.values()) {





        for (let value of form_data) {
            console.log(value)
        }


        // post data



        let data = await posttData(Routes.add_paroissien, form_data)



        if (data.resultat == "save") {


            let progress = setInterval(() => {

                document.getElementById('progess_container').style.height = '10px'

                compteur = compteur + 10
                document.getElementById('my_progress').style.width = compteur + "%"

                if (compteur == 110) {
                    document.getElementById('progess_container').style.height = '0px'
                    clearInterval(progress)
                    document.getElementById('my_progress').style.width = "0%"
                    compteur = 0




                    $('#largeModal').modal('hide')
                    tous_les_paroissiens(1)


                    swal({
                        title: "Ajouté",
                        text: "Paroissien ajouté avec succès",
                        icon: "success",
                        button: "Ok",
                    });

                    mes_input.forEach(element => {
                        document.getElementById(element.ident).value = ""
                    });


                    document.getElementById('defaultRadio2').checked = false
                    document.getElementById('defaultRadio_comunion_2').checked = false
                    document.getElementById('defaultRadio2_confirmation').checked = false
                    document.getElementById('defaultRadio2_Mariage').checked = false


                    document.getElementById('content_data_bapteme').style.display = "none"
                    document.getElementById('content_data_Première_communion').style.display = "none"
                    document.getElementById('content_data_confirmation').style.display = "none"
                    document.getElementById('content_data_Mariage').style.display = "none"


                }
            }, 200);



        }


    }

    // etat_bapteme


    // numero_enregistrement
    // date_bapteme
    // eglise_bapteme
    // lieu_bapteme
    // condition_bapteme
    // Nom_du_pere
    // Nom_du_mere
    // Origine_du_pere
    // Nom_du_parrain
    // Nom_de_la_marraine
    // Celebrant_du_bapteme
    // Cure_de_la_paroisse_bapteme








    // etat_première_communion

    // Numero_enregistrement_première_communion
    // Date_de_la_premiere_communion
    // Eglise_de_la_ceremonie_communion
    // Lieu_de_la_ceremonie_communion
    // Celebrant_de_la_ceremonie_communion
    // Cure_de_la_paroisse_premier_comunion













    // etat_confirmation

    // Numero_enregistrement_confirmation
    // Date_de_la_confirmation
    // Eglise_de_la_ceremonie_confirmation
    // Lieu_de_la_ceremonie_confirmation
    // Celebrant_de_la_ceremonie_confirmation
    // Parrain_Marraine_Couple_parrain
    // Cure_de_la_paroisse_confirmation










})


/*@
ajouter le parroissien
@*/





















/*@
show detail
@*/


async function show_detail(params) {



    let data_bapteme = [
        {
            id: 'numero_enregistrement_mm',
            label: 'Numéro d’enregistrement',
            type: 'number',
            require: false,
        },
        {
            id: 'date_bapteme_mm',
            label: 'Date de baptême',
            type: 'date',
            require: true,
        },
        {
            id: 'eglise_bapteme_mm',
            label: 'Eglise du baptême',
            type: 'text',
            require: true,
        },
        {
            id: 'lieu_bapteme_mm',
            label: 'Lieu du baptême',
            type: 'text',
            require: false,
        },
        {
            id: 'condition_bapteme_mm',
            label: 'Conditions du baptême',
            type: 'text',
            require: true,
        },
        {
            id: 'Nom_du_pere_mm',
            label: 'Nom du père',
            type: 'text',
            require: true,
        },
        {
            id: 'Nom_du_mere_mm',
            label: 'Nom du mère',
            type: 'text',
            require: true,
        },
        {
            id: 'Origine_du_pere_mm',
            label: 'Origine du père',
            type: 'text',
            require: true,
        },
        {
            id: 'Nom_du_parrain_mm',
            label: 'Nom du parrain',
            type: 'text',
            require: true,
        },
        {
            id: 'Nom_de_la_marraine_mm',
            label: 'Nom de la marraine',
            type: 'text',
            require: true,
        },
        {
            id: 'Celebrant_du_bapteme_mm',
            label: 'Célébrant du baptême',
            type: 'text',
            require: true,
        },
        {
            id: 'Cure_de_la_paroisse_bapteme_mm',
            label: 'Curé de la paroisse',
            type: 'text',
            require: true,
        },
    ]

    let data_comminion = [
        {
            id: 'Numero_enregistrement_premiere_communion_mm',
            label: 'Numéro d’enregistrement',
            type: 'number',
            require: false,
        },
        {
            id: 'Date_de_la_premiere_communion_mm',
            label: 'Date de la première communion',
            type: 'date',
            require: false,
        },
        {
            id: 'Eglise_de_la_ceremonie_communion_mm',
            label: 'Eglise de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Lieu_de_la_ceremonie_communion_mm',
            label: 'Lieu de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Celebrant_de_la_ceremonie_communion_mm',
            label: 'Célébrant de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Cure_de_la_paroisse_premier_comunion_mm',
            label: 'Curé de la paroisse',
            type: 'text',
            require: false,
        },
    ]


    let data_confirmation = [
        {
            id: 'Numero_enregistrement_confirmation_mm',
            label: 'Numéro d’enregistrement',
            type: 'number',
            require: false,
        },
        {
            id: 'Date_de_la_confirmation_mm',
            label: 'Date de la confirmation',
            type: 'date',
            require: false,
        },
        {
            id: 'Eglise_de_la_ceremonie_confirmation_mm',
            label: 'Eglise de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Lieu_de_la_ceremonie_confirmation_mm',
            label: 'Lieu de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Celebrant_de_la_ceremonie_confirmation_mm',
            label: 'Célébrant de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Parrain_Marraine_Couple_parrain_mm',
            label: 'Parrain/Marraine/Couple parrain',
            type: 'text',
            require: false,
        },
        {
            id: 'Cure_de_la_paroisse_confirmation_mm',
            label: 'Curé de la paroisse',
            type: 'text',
            require: false,
        },
    ]


    let data_mariage = [
        {
            id: 'numero_enregistrement_mariage_mm',
            label: 'Numéro d’enregistrement',
            type: 'number',
            require: false,
        },
        {
            id: 'Eglise_de_la_ceremonie_mariage_mm',
            label: 'Eglise de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Eglise_Lieu_de_la_ceremonie_mm',
            label: 'Lieu de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Date_du_mariage_mm',
            label: 'Date du mariage',
            type: 'date',
            require: false,
        },
        {
            id: 'nom_conjoint_mm',
            label: 'Avec (conjoint)',
            type: 'text',
            require: false,
        },
        {
            id: 'Pere_du_conjoint_ou_de_la_conjointe_mm',
            label: 'Père du conjoint ou de la conjointe',
            type: 'text',
            require: false,
        },
        {
            id: 'Mere_du_conjoint_ou_de_la_conjointe_mm',
            label: 'Mère du conjoint ou de la conjointe',
            type: 'text',
            require: false,
        },
        {
            id: 'Date_de_naissance_du_conjoint_ou_conjointe_mm',
            label: 'Date de naissance du conjoint ou conjointe',
            type: 'date',
            require: false,
        },
        {
            id: 'Lieu_de_naissance_mm',
            label: 'Lieu de naissance',
            type: 'text',
            require: false,
        },
        {
            id: 'Date_de_son_bapteme_mm',
            label: 'Date de son baptême',
            type: 'date',
            require: false,
        },
        {
            id: 'Son_numero_au_registre_des_baptemes_mm',
            label: 'Son numéro au registre des baptêmes',
            type: 'text',
            require: false,
        },
        {
            id: 'Dates_de_publication_des_bans_dans_la_paroisse_mm',
            label: 'Dates de publication des bans dans la paroisse',
            type: 'date',
            require: false,
        },
        {
            id: 'Dates_de_publication_des_bans_dans_les_autres_paroisses_mm',
            label: 'Dates de publication des bans dans les autres paroisses',
            type: 'date',
            require: false,
        },
        {
            id: 'Couple_temoin_mm',
            label: 'Couple témoin (Mr et Mme)',
            type: 'text',
            require: false,
        },
        {
            id: 'Dispenses_obtenue_mm',
            label: 'Dispenses obtenues',
            type: 'text',
            require: false,
        },
        {
            id: 'Celebrant_de_la_ceremonie_mariage_mm',
            label: 'Célébrant de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Cure_de_la_paroisse_mariage_mm',
            label: 'Curé de la paroisse',
            type: 'text',
            require: false,
        },
    ]




    let form_data = new FormData()
    form_data.append('id', params)


    let data = await posttData(Routes.detail_paroissien, form_data)



    data.data.forEach(element => {





        document.getElementById('detail_nom').innerHTML = "Nom : " + element.nom_paroissien
        document.getElementById('detail_prenom').innerHTML = "Prénom : " + element.prenom_paroissien
        document.getElementById('detail_sexe').innerHTML = "Sexe : " + element.sexe_paroissien

        document.getElementById('detail_numero_carnet').innerHTML = "Numéro de carnet : " + element.numero_carnet

        document.getElementById('detail_date_naissance').innerHTML = "Date de naissance : " + dateRell_1_4(element.date_naissance)
        // document.getElementById('detail_age').innerHTML = "Age : " + element.age_paroissien + " ans"

        document.getElementById('detail_numero').innerHTML = "Numéro de téléphone : " + element.numero_paroissien
        document.getElementById('detail_email').innerHTML = "Email : " + element.email_paroissien
        document.getElementById('detail_profession').innerHTML = "Profession : " + element.profession_paroissien
        document.getElementById('detail_domicile').innerHTML = "Domicile : " + element.domicile_paroissien
        document.getElementById('detail_association').innerHTML = "Association : " + element.association_paroissien


        if (element.etat_bapteme == true) {

            document.getElementById("detail_bapteme").innerHTML = ""

            document.getElementById("detail_bapteme").innerHTML = `
                     <a href="javascript:void(0);" class="list-group-item list-group-item-action active">
                        Baptême</a>`

            data_bapteme.forEach(element_bapteme => {

                if (element_bapteme.type == 'date') {
                    document.getElementById("detail_bapteme").innerHTML += `
                    <a href="javascript:void(0);" class="list-group-item list-group-item-action">
                    ${element_bapteme.label} : ${dateRell_1_4(element[element_bapteme.id.replace('_mm', "")])}
                    </a>
                            `
                }
                else {
                    document.getElementById("detail_bapteme").innerHTML += `
                    <a href="javascript:void(0);" class="list-group-item list-group-item-action">
                    ${element_bapteme.label} : ${element[element_bapteme.id.replace('_mm', "")]}
                    </a>
                            `
                }

            });

        } else {
            document.getElementById("detail_bapteme").innerHTML = ""

            document.getElementById("detail_bapteme").innerHTML = `
                     <a href="javascript:void(0);" class="list-group-item list-group-item-action active">
                        Baptême</a>`

            document.getElementById("detail_bapteme").innerHTML += `
                    <a href="javascript:void(0);" class="list-group-item list-group-item-action">
                        Non 
                    </a>
                            `
        }



        if (element.etat_premiere_communion == true) {
            document.getElementById("detail_premier_comminion").innerHTML = ""

            document.getElementById("detail_premier_comminion").innerHTML = `
                     <a href="javascript:void(0);" class="list-group-item list-group-item-action active">
                        Première communion</a>`

            data_comminion.forEach(element_comminion => {


                if (element_comminion.type == 'date') {
                    document.getElementById("detail_premier_comminion").innerHTML += `
                    <a href="javascript:void(0);" class="list-group-item list-group-item-action">
                    ${element_comminion.label} : ${dateRell_1_4(element[element_comminion.id.replace('_mm', "")])}
                    </a>
                            `
                }
                else {
                    document.getElementById("detail_premier_comminion").innerHTML += `
                    <a href="javascript:void(0);" class="list-group-item list-group-item-action">
                    ${element_comminion.label} : ${element[element_comminion.id.replace('_mm', "")]}
                    </a>
                            `
                }


                // document.getElementById("detail_premier_comminion").innerHTML += `
                //         <a href="javascript:void(0);" class="list-group-item list-group-item-action">
                //         ${element_comminion.label} : ${element[element_comminion.id.replace('_mm', "")]}
                //         </a>
                //                 `


            });

        } else {
            document.getElementById("detail_premier_comminion").innerHTML = ""

            document.getElementById("detail_premier_comminion").innerHTML = `
                     <a href="javascript:void(0);" class="list-group-item list-group-item-action active">
                        Première communion</a>`

            document.getElementById("detail_premier_comminion").innerHTML += `
                    <a href="javascript:void(0);" class="list-group-item list-group-item-action">
                        Non 
                    </a>
                            `
        }



        if (element.etat_confirmation == true) {

            document.getElementById("detail_Confirmation").innerHTML = ""

            document.getElementById("detail_Confirmation").innerHTML = `
                     <a href="javascript:void(0);" class="list-group-item list-group-item-action active">
                        Confirmation</a>`

            data_confirmation.forEach(element_confirmation => {


                if (element_confirmation.type == 'date') {
                    document.getElementById("detail_Confirmation").innerHTML += `
                    <a href="javascript:void(0);" class="list-group-item list-group-item-action">
                    ${element_confirmation.label} : ${dateRell_1_4(element[element_confirmation.id.replace('_mm', "")])}
                    </a>
                            `
                }
                else {
                    document.getElementById("detail_Confirmation").innerHTML += `
                    <a href="javascript:void(0);" class="list-group-item list-group-item-action">
                    ${element_confirmation.label} : ${element[element_confirmation.id.replace('_mm', "")]}
                    </a>
                            `
                }


                // document.getElementById("detail_Confirmation").innerHTML += `
                //         <a href="javascript:void(0);" class="list-group-item list-group-item-action">
                //         ${element_confirmation.label} : ${element[element_confirmation.id.replace('_mm', "")]}
                //         </a>
                //                 `


            });
        } else {
            document.getElementById("detail_Confirmation").innerHTML = ""

            document.getElementById("detail_Confirmation").innerHTML = `
                     <a href="javascript:void(0);" class="list-group-item list-group-item-action active">
                        Confirmation</a>`

            document.getElementById("detail_Confirmation").innerHTML += `
                    <a href="javascript:void(0);" class="list-group-item list-group-item-action">
                        Non 
                    </a>
                            `
        }



        if (element.etat_mariage == true) {

            document.getElementById("detail_Mariage").innerHTML = ""

            document.getElementById("detail_Mariage").innerHTML = `
                     <a href="javascript:void(0);" class="list-group-item list-group-item-action active">
                        Mariage</a>`

            data_mariage.forEach(element_mariage => {


                if (element_mariage.type == 'date') {
                    document.getElementById("detail_Mariage").innerHTML += `
                    <a href="javascript:void(0);" class="list-group-item list-group-item-action">
                    ${element_mariage.label} : ${dateRell_1_4(element[element_mariage.id.replace('_mm', "")])}
                    </a>
                            `
                }
                else {
                    document.getElementById("detail_Mariage").innerHTML += `
                    <a href="javascript:void(0);" class="list-group-item list-group-item-action">
                    ${element_mariage.label} : ${element[element_mariage.id.replace('_mm', "")]}
                    </a>
                            `
                }


                // document.getElementById("detail_Mariage").innerHTML += `
                //         <a href="javascript:void(0);" class="list-group-item list-group-item-action">
                //         ${element_mariage.label} : ${element[element_mariage.id.replace('_mm', "")]}
                //         </a>
                //                 `


            });
        } else {
            document.getElementById("detail_Mariage").innerHTML = ""

            document.getElementById("detail_Mariage").innerHTML = `
                     <a href="javascript:void(0);" class="list-group-item list-group-item-action active">
                        Mariage</a>`

            document.getElementById("detail_Mariage").innerHTML += `
                    <a href="javascript:void(0);" class="list-group-item list-group-item-action">
                        Non 
                    </a>
                            `
        }
    });

    $('#detail_paroissien').modal('show')




}


/*@
show detail
@*/









/*@
frmlaire d'edition
@*/


async function modifier_paroissien(identifiant) {




    let data_bapteme = [
        {
            id: 'numero_enregistrement_mm',
            label: 'Numéro d’enregistrement',
            type: 'number',
            require: false,
        },
        {
            id: 'date_bapteme_mm',
            label: 'Date de baptême',
            type: 'date',
            require: false,
        },
        {
            id: 'eglise_bapteme_mm',
            label: 'Eglise du baptême',
            type: 'text',
            require: false,
        },
        {
            id: 'lieu_bapteme_mm',
            label: 'Lieu du baptême',
            type: 'text',
            require: false,
        },
        {
            id: 'condition_bapteme_mm',
            label: 'Conditions du baptême',
            type: 'text',
            require: false,
        },
        {
            id: 'Nom_du_pere_mm',
            label: 'Nom du père',
            type: 'text',
            require: false,
        },
        {
            id: 'Nom_du_mere_mm',
            label: 'Nom du mère',
            type: 'text',
            require: false,
        },
        {
            id: 'Origine_du_pere_mm',
            label: 'Origine du père',
            type: 'text',
            require: false,
        },
        {
            id: 'Nom_du_parrain_mm',
            label: 'Nom du parrain',
            type: 'text',
            require: false,
        },
        {
            id: 'Nom_de_la_marraine_mm',
            label: 'Nom de la marraine',
            type: 'text',
            require: false,
        },
        {
            id: 'Celebrant_du_bapteme_mm',
            label: 'Célébrant du baptême',
            type: 'text',
            require: false,
        },
        {
            id: 'Cure_de_la_paroisse_bapteme_mm',
            label: 'Curé de la paroisse',
            type: 'text',
            require: false,
        },
    ]

    let data_comminion = [
        {
            id: 'Numero_enregistrement_premiere_communion_mm',
            label: 'Numéro d’enregistrement',
            type: 'number',
            require: false,
        },
        {
            id: 'Date_de_la_premiere_communion_mm',
            label: 'Date de la première communion',
            type: 'date',
            require: false,
        },
        {
            id: 'Eglise_de_la_ceremonie_communion_mm',
            label: 'Eglise de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Lieu_de_la_ceremonie_communion_mm',
            label: 'Lieu de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Celebrant_de_la_ceremonie_communion_mm',
            label: 'Célébrant de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Cure_de_la_paroisse_premier_comunion_mm',
            label: 'Curé de la paroisse',
            type: 'text',
            require: false,
        },
    ]


    let data_confirmation = [
        {
            id: 'Numero_enregistrement_confirmation_mm',
            label: 'Numéro d’enregistrement',
            type: 'number',
            require: false,
        },
        {
            id: 'Date_de_la_confirmation_mm',
            label: 'Date de la confirmation',
            type: 'date',
            require: false,
        },
        {
            id: 'Eglise_de_la_ceremonie_confirmation_mm',
            label: 'Eglise de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Lieu_de_la_ceremonie_confirmation_mm',
            label: 'Lieu de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Celebrant_de_la_ceremonie_confirmation_mm',
            label: 'Célébrant de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Parrain_Marraine_Couple_parrain_mm',
            label: 'Parrain/Marraine/Couple parrain',
            type: 'text',
            require: false,
        },
        {
            id: 'Cure_de_la_paroisse_confirmation_mm',
            label: 'Curé de la paroisse',
            type: 'text',
            require: false,
        },
    ]


    let data_mariage = [
        {
            id: 'numero_enregistrement_mariage_mm',
            label: 'Numéro d’enregistrement',
            type: 'number',
            require: false,
        },
        {
            id: 'Eglise_de_la_ceremonie_mariage_mm',
            label: 'Eglise de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Eglise_Lieu_de_la_ceremonie_mm',
            label: 'Lieu de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Date_du_mariage_mm',
            label: 'Date du mariage',
            type: 'date',
            require: false,
        },
        {
            id: 'nom_conjoint_mm',
            label: 'Avec (conjoint)',
            type: 'text',
            require: false,
        },
        {
            id: 'Pere_du_conjoint_ou_de_la_conjointe_mm',
            label: 'Père du conjoint ou de la conjointe',
            type: 'text',
            require: false,
        },
        {
            id: 'Mere_du_conjoint_ou_de_la_conjointe_mm',
            label: 'Mère du conjoint ou de la conjointe',
            type: 'text',
            require: false,
        },
        {
            id: 'Date_de_naissance_du_conjoint_ou_conjointe_mm',
            label: 'Date de naissance du conjoint ou conjointe',
            type: 'date',
            require: false,
        },
        {
            id: 'Lieu_de_naissance_mm',
            label: 'Lieu de naissance',
            type: 'text',
            require: false,
        },
        {
            id: 'Date_de_son_bapteme_mm',
            label: 'Date de son baptême',
            type: 'date',
            require: false,
        },
        {
            id: 'Son_numero_au_registre_des_baptemes_mm',
            label: 'Son numéro au registre des baptêmes',
            type: 'text',
            require: false,
        },
        {
            id: 'Dates_de_publication_des_bans_dans_la_paroisse_mm',
            label: 'Dates de publication des bans dans la paroisse',
            type: 'date',
            require: false,
        },
        {
            id: 'Dates_de_publication_des_bans_dans_les_autres_paroisses_mm',
            label: 'Dates de publication des bans dans les autres paroisses',
            type: 'date',
            require: false,
        },
        {
            id: 'Couple_temoin_mm',
            label: 'Couple témoin (Mr et Mme)',
            type: 'text',
            require: false,
        },
        {
            id: 'Dispenses_obtenue_mm',
            label: 'Dispenses obtenues',
            type: 'text',
            require: false,
        },
        {
            id: 'Celebrant_de_la_ceremonie_mariage_mm',
            label: 'Célébrant de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Cure_de_la_paroisse_mariage_mm',
            label: 'Curé de la paroisse',
            type: 'text',
            require: false,
        },
    ]




    let form_data = new FormData()
    form_data.append('id', identifiant)

    let data = await posttData(Routes.detail_paroissien, form_data)



    data.data.forEach(element => {

        document.getElementById("content_data_bapteme_m").innerHTML = ""
        document.getElementById("content_data_Première_communion_m").innerHTML = ""
        document.getElementById("content_data_confirmation_m").innerHTML = ""
        document.getElementById("content_data_Mariage_m").innerHTML = ""



        document.getElementById('ident_modifier').value = element.id


        document.getElementById('numero_carnet_mm').value = element.numero_carnet

        document.getElementById('nom_paroissien_mm').value = element.nom_paroissien
        document.getElementById('prenom_paroissien_mm').value = element.prenom_paroissien
        document.getElementById('sexe_initail').innerHTML = element.sexe_paroissien
        document.getElementById('numero_paroissien_mm').value = element.numero_paroissien
        document.getElementById('date_naissance_mm').value = element.date_naissance
        // document.getElementById('age_paroissien_mm').value = element.age_paroissien
        document.getElementById('email_paroissien_mm').value = element.email_paroissien
        document.getElementById('profession_paroissien_mm').value = element.profession_paroissien
        document.getElementById('domicile_paroissien_mm').value = element.domicile_paroissien
        document.getElementById('association_paroissien_mm').value = element.association_paroissien


        if (element.etat_bapteme == true) {

            document.getElementById("defaultRadio1_m").checked = false;
            document.getElementById("defaultRadio2_m").checked = true;
            document.getElementById("content_data_bapteme_m").style.display = "block"
            document.getElementById("content_data_bapteme_m").innerHTML = ""
            data_bapteme.forEach(element_bapteme => {

                document.getElementById("content_data_bapteme_m").innerHTML += `
                            <label for="${element_bapteme.id}" class="form-label">${element_bapteme.label}</label>
                            <input type="${element_bapteme.type}" id="${element_bapteme.id}" value="${element[element_bapteme.id.replace('_mm', "")]}" class="form-control"  />
                                `
            });

        } else {
            document.getElementById("defaultRadio1_m").checked = true;
            document.getElementById("defaultRadio2_m").checked = false;
        }



        if (element.etat_premiere_communion == true) {
            document.getElementById("defaultRadio1_comunion_m").checked = false;
            document.getElementById("defaultRadio_comunion_2_m").checked = true;
            document.getElementById("content_data_Première_communion_m").style.display = "block"
            document.getElementById("content_data_Première_communion_m").innerHTML = ""

            data_comminion.forEach(element_comminion => {

                document.getElementById("content_data_Première_communion_m").innerHTML += `
                            <label for="${element_comminion.id}" class="form-label">${element_comminion.label}</label>
                            <input type="${element_comminion.type}" id="${element_comminion.id}" value="${element[element_comminion.id.replace('_mm', "")]}" class="form-control"  />
                                `
            });

        } else {
            document.getElementById("defaultRadio1_comunion_m").checked = true;
            document.getElementById("defaultRadio_comunion_2_m").checked = false;
        }



        if (element.etat_confirmation == true) {
            document.getElementById("defaultRadio1_confirmation_m").checked = false;
            document.getElementById("defaultRadio2_confirmation_m").checked = true;
            document.getElementById("content_data_confirmation_m").style.display = "block"
            document.getElementById("content_data_confirmation_m").innerHTML = ""
            data_confirmation.forEach(element_confirmation => {

                document.getElementById("content_data_confirmation_m").innerHTML += `
                            <label for="${element_confirmation.id}" class="form-label">${element_confirmation.label}</label>
                            <input type="${element_confirmation.type}" id="${element_confirmation.id}" value="${element[element_confirmation.id.replace('_mm', "")]}" class="form-control"  />
                                `

            });
        } else {
            document.getElementById("defaultRadio1_confirmation_m").checked = true;
            document.getElementById("defaultRadio2_confirmation_m").checked = false;
        }



        if (element.etat_mariage == true) {
            document.getElementById("defaultRadio1_Mariage_m").checked = false;
            document.getElementById("defaultRadio2_Mariage_m").checked = true;
            document.getElementById("content_data_Mariage_m").style.display = "block"
            document.getElementById("content_data_Mariage_m").innerHTML = ""
            data_mariage.forEach(element_mariage => {


                document.getElementById("content_data_Mariage_m").innerHTML += `
                            <label for="${element_mariage.id}" class="form-label">${element_mariage.label}</label>
                            <input type="${element_mariage.type}" id="${element_mariage.id}" value="${element[element_mariage.id.replace('_mm', "")]}" class="form-control"  />
                                `

            });
        } else {
            document.getElementById("defaultRadio1_Mariage_m").checked = true;
            document.getElementById("defaultRadio2_Mariage_m").checked = false;
        }
    });

    $('#modal_modifier_paroissien').modal('show')





}
/*@
frmlaire d'edition
@*/





















// ###############################################
// INPUT bapteme update
// ###############################################

document.getElementById('defaultRadio2_m').addEventListener('click', function (params) {

    let data_bapteme = [
        {
            id: 'numero_enregistrement_mm',
            label: 'Numéro d’enregistrement',
            type: 'number',
            require: false,
        },
        {
            id: 'date_bapteme_mm',
            label: 'Date de baptême',
            type: 'date',
            require: false,
        },
        {
            id: 'eglise_bapteme_mm',
            label: 'Eglise du baptême',
            type: 'text',
            require: true,
        },
        {
            id: 'lieu_bapteme_mm',
            label: 'Lieu du baptême',
            type: 'text',
            require: true,
        },
        {
            id: 'condition_bapteme_mm',
            label: 'Conditions du baptême',
            type: 'text',
            require: true,
        },
        {
            id: 'Nom_du_pere_mm',
            label: 'Nom du père',
            type: 'text',
            require: true,
        },
        {
            id: 'Nom_du_mere_mm',
            label: 'Nom du mère',
            type: 'text',
            require: true,
        },
        {
            id: 'Origine_du_pere_mm',
            label: 'Origine du père',
            type: 'text',
            require: true,
        },
        {
            id: 'Nom_du_parrain_mm',
            label: 'Nom du parrain',
            type: 'text',
            require: true,
        },
        {
            id: 'Nom_de_la_marraine_mm',
            label: 'Nom de la marraine',
            type: 'text',
            require: true,
        },
        {
            id: 'Celebrant_du_bapteme_mm',
            label: 'Célébrant du baptême',
            type: 'text',
            require: true,
        },
        {
            id: 'Cure_de_la_paroisse_bapteme_mm',
            label: 'Curé de la paroisse',
            type: 'text',
            require: true,
        },
    ]

    document.getElementById("content_data_bapteme_m").innerHTML = ""

    data_bapteme.forEach(element_bapteme => {


        document.getElementById("content_data_bapteme_m").innerHTML += `
            <label for="${element_bapteme.id}" class="form-label">${element_bapteme.label}</label>
            <input type="${element_bapteme.type}" id="${element_bapteme.id}"   class="form-control"  />
                `

    });

    document.getElementById("content_data_bapteme_m").style.display = 'block'
    // vider apres les champs input
})

document.getElementById('defaultRadio1_m').addEventListener('click', function (params) {
    document.getElementById("content_data_bapteme_m").style.display = 'none'
    // vider apres les champs input
})



// ###############################################
// INPUT bapteme
// ###############################################










// ###############################################
// INPUT premier communion update
// ###############################################

document.getElementById('defaultRadio_comunion_2_m').addEventListener('click', function (params) {

    let data_comminion = [
        {
            id: 'Numero_enregistrement_premiere_communion_mm',
            label: 'Numéro d’enregistrement',
            type: 'number',
            require: false,
        },
        {
            id: 'Date_de_la_premiere_communion_mm',
            label: 'Date de la première communion',
            type: 'date',
            require: false,
        },
        {
            id: 'Eglise_de_la_ceremonie_communion_mm',
            label: 'Eglise de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Lieu_de_la_ceremonie_communion_mm',
            label: 'Lieu de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Celebrant_de_la_ceremonie_communion_mm',
            label: 'Célébrant de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Cure_de_la_paroisse_premier_comunion_mm',
            label: 'Curé de la paroisse',
            type: 'text',
            require: false,
        },
    ]

    document.getElementById("content_data_Première_communion_m").innerHTML = ""

    data_comminion.forEach(element_comminion => {


        document.getElementById("content_data_Première_communion_m").innerHTML += `
            <label for="${element_comminion.id}" class="form-label">${element_comminion.label}</label>
            <input type="${element_comminion.type}" id="${element_comminion.id}"   class="form-control"  />
                `

    });

    document.getElementById("content_data_Première_communion_m").style.display = 'block'
    // vider apres les champs input
})

document.getElementById('defaultRadio1_comunion_m').addEventListener('click', function (params) {
    document.getElementById("content_data_Première_communion_m").style.display = 'none'
    // vider apres les champs input
})



// ###############################################
// INPUT premiere cominnion
// ###############################################











// ###############################################
// INPUT confirmation update
// ###############################################

document.getElementById('defaultRadio2_confirmation_m').addEventListener('click', function (params) {


    let data_confirmation = [
        {
            id: 'Numero_enregistrement_confirmation_mm',
            label: 'Numéro d’enregistrement',
            type: 'number',
            require: false,
        },
        {
            id: 'Date_de_la_confirmation_mm',
            label: 'Date de la confirmation',
            type: 'date',
            require: false,
        },
        {
            id: 'Eglise_de_la_ceremonie_confirmation_mm',
            label: 'Eglise de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Lieu_de_la_ceremonie_confirmation_mm',
            label: 'Lieu de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Celebrant_de_la_ceremonie_confirmation_mm',
            label: 'Célébrant de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Parrain_Marraine_Couple_parrain_mm',
            label: 'Parrain/Marraine/Couple parrain',
            type: 'text',
            require: false,
        },
        {
            id: 'Cure_de_la_paroisse_confirmation_mm',
            label: 'Curé de la paroisse',
            type: 'text',
            require: false,
        },
    ]


    document.getElementById("content_data_confirmation_m").innerHTML = ""

    data_confirmation.forEach(element_confirmation => {


        document.getElementById("content_data_confirmation_m").innerHTML += `
            <label for="${element_confirmation.id}" class="form-label">${element_confirmation.label}</label>
            <input type="${element_confirmation.type}" id="${element_confirmation.id}"   class="form-control"  />
                `

    });

    document.getElementById("content_data_confirmation_m").style.display = 'block'
    // vider apres les champs input
})

document.getElementById('defaultRadio1_confirmation_m').addEventListener('click', function (params) {
    document.getElementById("content_data_confirmation_m").style.display = 'none'
    // vider apres les champs input
})



// ###############################################
// INPUT confirmation
// ###############################################







// ###############################################
// INPUT BAPTEME update
// ###############################################

document.getElementById('defaultRadio2_Mariage_m').addEventListener('click', function (params) {


    let data_mariage = [
        {
            id: 'numero_enregistrement_mariage_mm',
            label: 'Numéro d’enregistrement',
            type: 'number',
            require: false,
        },
        {
            id: 'Eglise_de_la_ceremonie_mariage_mm',
            label: 'Eglise de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Eglise_Lieu_de_la_ceremonie_mm',
            label: 'Lieu de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Date_du_mariage_mm',
            label: 'Date du mariage',
            type: 'date',
            require: false,
        },
        {
            id: 'nom_conjoint_mm',
            label: 'Avec (conjoint)',
            type: 'text',
            require: false,
        },
        {
            id: 'Pere_du_conjoint_ou_de_la_conjointe_mm',
            label: 'Père du conjoint ou de la conjointe',
            type: 'text',
            require: false,
        },
        {
            id: 'Mere_du_conjoint_ou_de_la_conjointe_mm',
            label: 'Mère du conjoint ou de la conjointe',
            type: 'text',
            require: false,
        },
        {
            id: 'Date_de_naissance_du_conjoint_ou_conjointe_mm',
            label: 'Date de naissance du conjoint ou conjointe',
            type: 'date',
            require: false,
        },
        {
            id: 'Lieu_de_naissance_mm',
            label: 'Lieu de naissance',
            type: 'text',
            require: false,
        },
        {
            id: 'Date_de_son_bapteme_mm',
            label: 'Date de son baptême',
            type: 'date',
            require: false,
        },
        {
            id: 'Son_numero_au_registre_des_baptemes_mm',
            label: 'Son numéro au registre des baptêmes',
            type: 'text',
            require: false,
        },
        {
            id: 'Dates_de_publication_des_bans_dans_la_paroisse_mm',
            label: 'Dates de publication des bans dans la paroisse',
            type: 'date',
            require: false,
        },
        {
            id: 'Dates_de_publication_des_bans_dans_les_autres_paroisses_mm',
            label: 'Dates de publication des bans dans les autres paroisses',
            type: 'date',
            require: false,
        },
        {
            id: 'Couple_temoin_mm',
            label: 'Couple témoin (Mr et Mme)',
            type: 'text',
            require: false,
        },
        {
            id: 'Dispenses_obtenue_mm',
            label: 'Dispenses obtenues',
            type: 'text',
            require: false,
        },
        {
            id: 'Celebrant_de_la_ceremonie_mariage_mm',
            label: 'Célébrant de la cérémonie',
            type: 'text',
            require: false,
        },
        {
            id: 'Cure_de_la_paroisse_mariage_mm',
            label: 'Curé de la paroisse',
            type: 'text',
            require: false,
        },
    ]

    document.getElementById("content_data_Mariage_m").innerHTML = ""

    data_mariage.forEach(element_mariage => {


        document.getElementById("content_data_Mariage_m").innerHTML += `
            <label for="${element_mariage.id}" class="form-label">${element_mariage.label}</label>
            <input type="${element_mariage.type}" id="${element_mariage.id}"   class="form-control"  />
                `

    });

    document.getElementById("content_data_Mariage_m").style.display = 'block'
    // vider apres les champs input
})

document.getElementById('defaultRadio1_Mariage_m').addEventListener('click', function (params) {
    document.getElementById("content_data_Mariage_m").style.display = 'none'
    // vider apres les champs input
})



// ###############################################
// INPUT BAPTEME
// ###############################################





document.getElementById('btn_update').addEventListener('click', async function (params) {

    let form_data = new FormData()

    let mes_input = [
        {
            ident: 'numero_carnet_mm',
            require: true,
        },
        {
            ident: 'nom_paroissien_mm',
            require: true,
        },
        {
            ident: 'prenom_paroissien_mm',
            require: true,
        },
        {
            ident: 'sexe_paroissien_mm',
            require: true,
        },
        {
            ident: 'date_naissance_mm',
            require: true,
        },
        // {
        //     ident: 'age_paroissien_mm',
        //     require: true,
        // },
        {
            ident: 'numero_paroissien_mm',
            require: false,
        },

        {
            ident: 'email_paroissien_mm',
            require: false,
        },
        {
            ident: 'profession_paroissien_mm',
            require: false,
        },
        {
            ident: 'domicile_paroissien_mm',
            require: true,
        },
        {
            ident: 'association_paroissien_mm',
            require: false,
        },

    ]

    let mon_id = document.getElementById('ident_modifier').value


    let select_bapteme = document.getElementById('defaultRadio2_m').checked
    let select_conmunion = document.getElementById('defaultRadio_comunion_2_m').checked
    let select_confirmation = document.getElementById('defaultRadio2_confirmation_m').checked
    let select_mariage = document.getElementById('defaultRadio2_Mariage_m').checked






    if (select_bapteme == true) {

        form_data.append("etat_bapteme", true)

        mes_input.push({
            ident: 'numero_enregistrement_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'date_bapteme_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'eglise_bapteme_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'lieu_bapteme_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'condition_bapteme_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'Nom_du_pere_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'Nom_du_mere_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'Origine_du_pere_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'Nom_du_parrain_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'Nom_de_la_marraine_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'Celebrant_du_bapteme_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'Cure_de_la_paroisse_bapteme_mm',
            require: false,
        },)

    }
    else {
        form_data.append("etat_bapteme", false)
    }


    if (select_conmunion == true) {
        form_data.append("etat_premiere_communion", true)

        mes_input.push({
            ident: 'Numero_enregistrement_premiere_communion_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'Date_de_la_premiere_communion_mm',
            require: false,
        })
            ,
            mes_input.push({
                ident: 'Eglise_de_la_ceremonie_communion_mm',
                require: false,
            },)

        mes_input.push({
            ident: 'Lieu_de_la_ceremonie_communion_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'Celebrant_de_la_ceremonie_communion_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'Cure_de_la_paroisse_premier_comunion_mm',
            require: false,
        },)

    }
    else {
        form_data.append("etat_premiere_communion", false)
    }



    if (select_confirmation == true) {
        form_data.append("etat_confirmation", true)
        mes_input.push({
            ident: 'Numero_enregistrement_confirmation_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'Date_de_la_confirmation_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'Eglise_de_la_ceremonie_confirmation_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'Lieu_de_la_ceremonie_confirmation_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'Celebrant_de_la_ceremonie_confirmation_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'Parrain_Marraine_Couple_parrain_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'Cure_de_la_paroisse_confirmation_mm',
            require: false,
        },)

    }
    else {
        form_data.append("etat_confirmation", false)
    }



    if (select_mariage == true) {

        form_data.append("etat_mariage", true)

        mes_input.push({
            ident: 'numero_enregistrement_mariage_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'Eglise_de_la_ceremonie_mariage_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'Eglise_Lieu_de_la_ceremonie_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'Date_du_mariage_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'nom_conjoint_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'Pere_du_conjoint_ou_de_la_conjointe_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'Mere_du_conjoint_ou_de_la_conjointe_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'Date_de_naissance_du_conjoint_ou_conjointe_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'Lieu_de_naissance_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'Date_de_son_bapteme_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'Son_numero_au_registre_des_baptemes_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'Dates_de_publication_des_bans_dans_la_paroisse_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'Dates_de_publication_des_bans_dans_les_autres_paroisses_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'Couple_temoin_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'Dispenses_obtenue_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'Celebrant_de_la_ceremonie_mariage_mm',
            require: false,
        },)

        mes_input.push({
            ident: 'Cure_de_la_paroisse_mariage_mm',
            require: false,
        },)

    }
    else {
        form_data.append("etat_mariage", false)
    }







    let resultat_check = verifier_champs(mes_input)

    if (resultat_check.length > 0) {
        swal({
            title: "Erreur",
            text: "Les champs à étoiles sont obligatoires",
            icon: "error",
            button: "Ok",
        });
    }
    else {


        mes_input.forEach(element => {

            form_data.append(element.ident.replace('_mm', ""), document.getElementById(element.ident).value)
        });


        form_data.append("id", mon_id)



        // for (let value of form_data.values()) {
        for (let value of form_data) {
            console.log(value)
        }

        let data = await posttData(Routes.update_paroissien, form_data)





        if (data.resultat == "save") {


            let progress = setInterval(() => {

                document.getElementById('progess_container_2').style.height = '10px'

                compteur = compteur + 10
                document.getElementById('my_progress_2').style.width = compteur + "%"

                if (compteur == 110) {
                    document.getElementById('progess_container_2').style.height = '0px'
                    clearInterval(progress)
                    document.getElementById('my_progress_2').style.width = "0%"
                    compteur = 0


                    afficher_la_modification(mon_id)


                }
            }, 200);


            // tous_les_paroissiens()

        }



    }
})














async function afficher_la_modification(identifiant) {

    $('#modal_modifier_paroissien').modal('hide')


    let form_data = new FormData()
    form_data.append('id', identifiant)

    let data = await posttData(Routes.detail_paroissien, form_data)
    BDD_PAROISSIEN = []
    BDD_PAROISSIEN.push(data.base_paroissien)


    data.data.forEach(element => {

        let table_tr = "ligne_paroissien_" + identifiant

        let row = `
                     <td onclick="show_detail(${element.id})">
                    ${element.nom_paroissien.toUpperCase()}
                    </td>
                    <td onclick="show_detail(${element.id})">${element.prenom_paroissien}</td>
                    <td onclick="show_detail(${element.id})">${element.sexe_paroissien}</td>
                    <td onclick="show_detail(${element.id})">${dateRell_1_4(element.date_naissance)}</td>
                     <td onclick="show_detail(${element.id})">${element.date_bapteme == "" ? "..." : dateRell_1_4(element.date_bapteme)}</td>
                    <td onclick="show_detail(${element.id})">${element.Date_de_la_premiere_communion == "" ? "..." : dateRell_1_4(element.Date_de_la_premiere_communion)}</td>
                    <td onclick="show_detail(${element.id})">${element.Date_de_la_confirmation == "" ? "..." : dateRell_1_4(element.Date_de_la_confirmation)}</td>

                  
                    `

        document.getElementById(table_tr).innerHTML = row

    })

    swal({
        title: "Modifié",
        text: "Paroissien modifié avec succès",
        icon: "success",
        button: "Ok",
    });





}














document.getElementById('all_detail').addEventListener('click', function (params) {


    let total_homme = 0
    let total_femme = 0

    let total_paroisse = 0

    BDD_PAROISSIEN[0].forEach(element => {
        if (element.sexe_paroissien.toLowerCase() == "masculin") {
            total_homme++
        }
        if (element.sexe_paroissien.toLowerCase() == "feminin") {
            total_femme++
        }
    });

    total_paroisse = total_homme + total_femme


    document.getElementById('calcul_total_homme').innerHTML = total_homme
    document.getElementById('calcul_total_femme').innerHTML = total_femme
    document.getElementById('calcul_total_paroissien').innerHTML = total_paroisse


    $('#modal_all_detail').modal('show')



})










/*@
    delete data
@*/


async function supprimer_paroissien(params) {


    swal({
        title: "Suppression",
        text: "Voulez vous supprimer ? ",
        icon: "warning",
        buttons: ["Annuler", "Oui"],
        confirmButtonColor: '#2C3648',
        closeOnClickOutside: false,
        // dangerMode: true,

    })
        .then(async (willDelete) => {
            if (willDelete) {


                // ########################



                let form_data = new FormData()
                form_data.append('id', params)

                let data = await posttData(Routes.supprimer_paroissien, form_data)


                if (data.data == "save") {


                    let table_tr = "ligne_paroissien_" + params

                    document.getElementById(table_tr).innerHTML = ""

                    // tous_les_paroissiens(1)

                    swal({
                        title: "Supprimé",
                        text: "Paroissien supprimé avec succès",
                        icon: "success",
                        button: "Ok",
                    });
                }



                // ########################
            }
        });


}


/*@
    delete data
@*/



/*@
    rafraichir
@*/


document.getElementById('btn_actualiser').addEventListener('click', function (params) {

    var divsToHide = document.getElementsByClassName("row_display"); //divsToHide is an array
    for (var i = 0; i < divsToHide.length; i++) {
        divsToHide[i].style.visibility = "hidden"; // or
        divsToHide[i].style.display = "none"; // depending on what you're doing
    }
    tous_les_paroissiens(1)

    RECHERCHE_ACTIVE = []
})


/*@
    rafraichir
@*/







/*@
    bouton d'impression
@*/



document.getElementById('btn_imprimer_2').addEventListener('click', function (e) {

    // var options = { mode: "popup", popClose: true, extraHead: '<meta charset="utf-8"/>,<meta http-equiv="X-UA-Compatible" content="IE=edge"/>,<style rel="stylesheet" type="text/css" media="print">@page { size: landscape; }</style>' };

    // $("#container_print").printArea(options);

    var mode = 'iframe'; //popup
    var close = mode == "popup";
    var options = {
        mode: mode,
        popClose: close,
        standard: "html5",
        extraCss: '../scss/print_paroissien.css',
    };
    $("#container_print").printArea(options);


})


document.getElementById('btn_imprimer').addEventListener('click', function (params) {

    $('#filtrage').modal('show')

    // var mode = 'iframe'; //popup
    // var close = mode == "popup";
    // var options = {
    //     mode: mode,
    //     popClose: close,
    //     standard: "html5",
    //     extraCss: '../scss/print.css',
    // };
    // $("#container_print").printArea(options);
})




document.getElementById('btn_print_detail').addEventListener('click', function (params) {
    // let table = document.getElementById('content_detail')


    // let options = {
    //     margin: 10,
    //     // filename: "bilan.pdf",
    //     image: { type: 'png', quality: 0.98 },
    //     html2canvas: { scale: 2 },
    //     jsPDF: { init: 'in', format: 'letter', }
    // }
    // html2pdf().set(options).from(table).save()



    var mode = 'iframe'; //popup
    var close = mode == "popup";
    var options = {
        mode: mode,
        popClose: close,
        standard: "html5",
        extraCss: '../scss/print_paroissien.css',
    };
    $("#content_detail").printArea(options);




})

/*@
    bouton d'impression
@*/





document.getElementById('btn_deconnexion').addEventListener('click', function (params) {

    document.location.href = 'login.html'

})
