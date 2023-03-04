
$(document).ready(async function () {


    // await getstatus()

    tous_les_messe(1)

    // document.getElementById('messe_aujourdhui').click()

    // alert('frf')


});



document.getElementById('demander_imprimer_situation').addEventListener('click', function (params) {
    $('#imprimer_etat_demande').modal('show')
})






var UTILISATEUR_LOGICIEL = window.localStorage.getItem('utilisateur_logiciel_eglise_catholique')

var compteur = 0


function loading() {
    document.getElementById('content_les_messes').innerHTML = `
    <tr>
                <td colspan="8" >
                <div class="spinner-border spinner-border-lg text-primary" role="status">
                     <span class="visually-hidden">Loading...</span>
                 </div>
                  </td>
    </tr>
    `
}






document.getElementById('btn_print_recue').addEventListener('click', function (e) {

    let mode = 'iframe'; //popup
    let close = mode == "popup";
    let options = {
        mode: mode,
        popClose: close,
        standard: "html5",
        extraCss: '../scss/print_recue.css',
    };
    $("#container_print_recue").printArea(options);


})







document.getElementById('btn_imprimer_resultat').addEventListener('click', function (e) {

    $('#model_print').modal('show')

})




// document.getElementById('messe_aujourdhui').addEventListener('click', function (e) {

//     filter_initial()
//     // $('#model_print').modal('show')

// })


// document.getElementById('btn_imprimer').addEventListener('click', function (e) {

//     $('#model_print').modal('show')

// })




document.getElementById('btn_imprimer_2').addEventListener('click', function (e) {



    if (RECHERCHE_ACTIVE.length == 0) {

        // filter_initial()

        setTimeout(() => {
            let mode = 'iframe'; //popup
            let close = mode == "popup";
            let options = {
                mode: mode,
                popClose: close,
                standard: "html5",
                extraCss: '../scss/print.css',
            };
            $("#container_print").printArea(options);

        }, 500);

    }
    else {


        if (BASE_RESULTAT.length > 0) {
            let mode = 'iframe'; //popup
            let close = mode == "popup";
            let options = {
                mode: mode,
                popClose: close,
                standard: "html5",
                extraCss: '../scss/print.css',
            };
            $("#container_print").printArea(options);

        }




    }


})






document.getElementById('btn_imprimer_3').addEventListener('click', function (e) {

    let mode = 'iframe'; //popup
    let close = mode == "popup";
    let options = {
        mode: mode,
        popClose: close,
        standard: "html5",
        extraCss: '../scss/situation_messe.css',
    };
    $("#container_print_etat_situation").printArea(options);
})







var BDD_MESSE = []






$(function () {
    $.contextMenu({
        selector: '.context-menu-one',
        callback: function (key, options) {
            var m = "clicked: " + key;
            let my_class_name = options.$trigger.attr("data-type-menu");

            if (key == "delete") {
                supprimer_messe(my_class_name)
            }
            if (key == "edit") {
                modifier_messe(my_class_name)
            }
            if (key == "print") {
                imprimer_recue(my_class_name)
            }
        },
        items: {
            // <i class="fa-solid fa-print"></i>
            "print": { name: "Imprimer le reçu", icon: "print" },
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











function imprimer_recue(params) {






    BDD_MESSE[0].forEach(element => {
        if (element.id == params) {

            console.log(element.dates)

            document.getElementById('nom_recue').innerHTML = element.nom_paroissien.toUpperCase()
            document.getElementById('date_recue').innerHTML = element.date_de_la_demande
            document.getElementById('type_reccue').innerHTML = element.type_de_messe
            document.getElementById('dates_enregistrement').innerHTML = element.dates

            if (element.periode_2 != "") {
                document.getElementById('celebre_recue').innerHTML = "du " + element.periode_1 + " au " + element.periode_2
            }
            else {
                document.getElementById('celebre_recue').innerHTML = "le " + element.periode_1
            }

            document.getElementById('intension_recue').innerHTML = element.intenssion_de_la_messe

            document.getElementById('la_personne').innerHTML = UTILISATEUR_LOGICIEL
            $('#model_print_recue').modal('show')


        }
    });


}









document.getElementById('btn_deconnexion').addEventListener('click', function (params) {

    document.location.href = 'login.html'

})







function cut_word(params) {
    let taille = params.length

    let le_mot = ""

    if (taille > 50) {
        le_mot = params.substring(0, 50) + "..."
    } else {
        le_mot = params
    }
    return le_mot
}






async function tous_les_messe(page) {

    spinner_table("content_les_messes", 6)

    document.getElementById('la_date_filtre').innerHTML = "Historique des demandes de messe"
    document.getElementById('title_date_2').innerHTML = "Historique des demandes de messe"
    document.getElementById('id_titre_situation_demande').innerHTML = "Historique de situation des demandes de messe"



    BDD_MESSE = []

    let data = await getData(Routes.all_messe + "/" + page)





    // $('#pagination_link').html(response.pagination_link);

    BDD_MESSE.push(data.base_messe)

    vider_div("content_les_messes")



    if (data.data.length > 0) {



        // #################   1111111111111111   ###########################
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


            document.getElementById('content_les_messes').innerHTML += row
        });

        // #################   222222222222222   ###########################


        document.getElementById('content_etat_de_demande').innerHTML = ""



        data.data.forEach(element => {

            let my_row = "ligne_" + element.id

            let la_periode
            if (element.periode_2 != "") {
                la_periode = element.periode_1 + " <br> au <br> " + element.periode_2
            } else {
                la_periode = element.periode_1
            }


            let row = `
            <tr id="${my_row}" data-type-menu="${element.id}"     class="row_display">
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


            document.getElementById('content_etat_de_demande').innerHTML += row
        });

    }
    else {
        donnee_vide("content_les_messes", 6)

    }


}













async function detail(params) {


    let form_data = new FormData()

    form_data.append('id', params)

    let data = await posttData(Routes.get_one_messe, form_data)





    data.data.forEach(element => {

        let la_periode
        if (element.periode_2 != "") {
            la_periode = "du " + element.periode_1 + " au " + element.periode_2
        }
        else {
            la_periode = "le " + element.periode_1
        }


        let row_detail = `
            
            <a href="javascript:void(0);" class="list-group-item list-group-item-action"
            id="detail_nom">
          <b>  DATE DE DEMANDE </b> : ${element.dates}
        </a>


        <a href="javascript:void(0);" class="list-group-item list-group-item-action"
            id="detail_nom">
           <b> DATE DE LA MESSE</b> : ${la_periode}
        </a>


        <a href="javascript:void(0);" class="list-group-item list-group-item-action"
            id="detail_nom">
           <b> TYPE DE MESSE </b>: ${element.type_de_messe}
        </a>

        <a href="javascript:void(0);" class="list-group-item list-group-item-action"
            id="detail_nom">
           <b> HEURE DE LA MESSE</b> : ${element.heure_messe}
        </a>

        <a href="javascript:void(0);" class="list-group-item list-group-item-action"
            id="detail_nom">
           <b> AUTEUR</b> : ${element.nom_paroissien.toUpperCase()}
        </a>

        <a href="javascript:void(0);" class="list-group-item list-group-item-action"
            id="detail_nom">
          <b>  MONTANT</b> :  ${element.montant} Fcfa
        </a>

        <a href="javascript:void(0);" class="list-group-item list-group-item-action"
            id="detail_nom">
          <b>  INTENTION DE LA MESSE</b> : <br>
            ${element.intenssion_de_la_messe}
        </a>

            `
        document.getElementById('conteneur_detail_messe').innerHTML = row_detail
    });


    $('#detail_messe_commande').modal('show')


}



















$(document).on("click", "#pagination_link li a", function (event) {
    event.preventDefault();
    var page = $(this).data("ci-pagination-page");
    tous_les_messe(page);
    console.log(page)
});




// document.getElementById('btn_imprimer').addEventListener('click', function (params) {
//     let table = document.getElementById('my_table_print')


//     let options = {
//         margin: 10,
//         // filename: "bilan.pdf",
//         image: { type: 'png', quality: 0.98 },
//         html2canvas: { scale: 2 },
//         jsPDF: { init: 'in', format: 'letter', }
//     }
//     html2pdf().set(options).from(table).save()
// })




async function supprimer_messe(params) {


    swal({
        title: "Suppression",
        text: "Voulez vous supprime ? ",
        icon: "warning",
        buttons: ["Annuler", "Oui"],
        confirmButtonColor: '#2C3648',
        closeOnClickOutside: false,
        // dangerMode: true,

    })
        .then(async (willDelete) => {
            if (willDelete) {


                let form_data = new FormData()
                form_data.append('id', params)


                let data = await posttData(Routes.supprimer_messe, form_data)


                if (data.data == "save") {


                    // tous_les_messe(1)
                    let my_row = "ligne_" + params
                    document.getElementById(my_row).style.display = "none"

                    swal({
                        title: "Supprimé",
                        // text: "Tous les champs sont obligatoire",
                        icon: "success",
                        button: "Ok",
                    });
                }


            }
        });




}






// #####   regrouper les identifiant  #######




document.getElementById('btn_add').addEventListener('click', function (e) {
    e.preventDefault()
    $('#largeModal').modal('show')

})


document.getElementById('btn_search_paroissien').addEventListener('click', function (e) {
    e.preventDefault()

    document.getElementById('btn_lancer_recherche').value = ""
    document.getElementById('content_recherche_les_paroissuen').innerHTML = ""


    $('#resultat_recherche').modal('show')

})
































function verifier_les_date_selectionner(periodes_messe) {
    let capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase();
    let { weekday, dayNumber, month, year } = frenchTodayDate(periodes_messe.split('/').reverse().join('-'))
    let aujourdhui = `${capitalize(weekday)}, le ${dayNumber} ${month} ${year}`

    return weekday

}






















document.getElementById('date_de_la_messe').addEventListener('change', function (params) {

    let date_de_la_messe = document.getElementById('date_de_la_messe').value.trim()

    let selection = document.getElementById('type_de_messe').value







    if (selection == "Messe du dimanche") {
        let verifi = verifier_les_date_selectionner(date_de_la_messe)

        if (verifi.trim() != "dimanche") {
            document.getElementById('date_de_la_messe').value = ""
            swal({
                title: "Erreur de date",
                text: "Sélectionner une date de dimanche",
                icon: "error",
                button: "Ok",
            });
        }
    }




    // if (selection == "Messe spéciale") {

    // }
    if (selection == "Messe chantée" || selection == "Messe de la semaine") {
        let verifi = verifier_les_date_selectionner(date_de_la_messe)

        if (verifi.trim() === "dimanche") {
            document.getElementById('date_de_la_messe').value = ""
            swal({
                title: "Erreur de date",
                text: "Sélectionner une date sauf dimanche",
                icon: "error",
                button: "Ok",
            });
        }



    }

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


    data.data.forEach(element => {
        document.getElementById('nom_paroissien').value = element.nom_paroissien + " " + element.prenom_paroissien

    });
    $('#resultat_recherche').modal('hide')


}












function dtate_demain() {
    // body...
    var date = new Date();

    var jour = date.getDate();
    if (jour == 1 || jour == 2 || jour == 3 || jour == 4 || jour == 5 || jour == 6 || jour == 7 || jour == 8 || jour == 9) {
        var jours = "0" + (jour + 1);
    } else {
        var jours = (jour + 1);
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
    var laDate = jours + "-" + mois + "-" + annee;
    return laDate;
}





function dateRell_1_2(la_date) {
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
    var laDate = annee + "/" + mois + "/" + jours;
    return laDate;
}











document.getElementById('date_de_debut').addEventListener('change', function (params) {


    let verifie = document.getElementById('date_de_debut').value
    document.getElementById('date_de_fin').value = ""

    let date_de_debut = dateRell_1(document.getElementById('date_de_debut').value)



    let selection = document.getElementById('type_de_messe').value





    if (verifie != "") {


        let date_de_fin = document.getElementById('date_de_fin')

        let nombre_jour = document.getElementById('nombre_jour').value

        // if (selection == "Messe du dimanche") {
        //     let capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase();
        //     let { weekday, dayNumber, month, year } = frenchTodayDate(date_de_debut.split('/').reverse().join('-'))
        //     let aujourdhui = `${capitalize(weekday)}, le ${dayNumber} ${month} ${year}`
        //     if (weekday != "dimanche") {
        //         swal({
        //             title: "Le messe de dimanche doit etre célèbre un dimanche",
        //             // text: "Tous les champs sont obligatoire",
        //             icon: "error",
        //             button: "Ok",
        //         });
        //     }
        //     else{

        //     }
        // }


        if (nombre_jour > 0) {
            if (nombre_jour == 1) {
                date_de_fin.value = date_de_debut.replace(/-/g, '/')

            }
            else {

                let myDate = new Date(dateRell_1_2(verifie));

                //add a day to the date
                myDate.setDate(myDate.getDate() + parseInt(nombre_jour));

                let calcul = dateRell_1(myDate).replace(/-/g, '/')

                // let datestring = myDate.getDate() + "/" + (myDate.getMonth() + 1) + "/" + myDate.getFullYear()



                console.log(calcul)

                date_de_fin.value = calcul
            }
        } else {

        }




    }



})






document.getElementById('nombre_jour').addEventListener('keyup', function (params) {
    document.getElementById('date_de_fin').value = ""
    // document.getElementById('nombre_jour').value = ""

    let verifie = document.getElementById('date_de_debut').value
    document.getElementById('date_de_fin').value = ""

    let date_de_debut = dateRell_1(document.getElementById('date_de_debut').value)

    if (verifie != "") {


        let date_de_fin = document.getElementById('date_de_fin')

        let nombre_jour = document.getElementById('nombre_jour').value

        if (nombre_jour > 0) {
            if (nombre_jour == 1) {
                date_de_fin.value = date_de_debut.replace(/-/g, '/')
            }
            else {

                let myDate = new Date(dateRell_1_2(verifie));

                //add a day to the date
                myDate.setDate(myDate.getDate() + parseInt(nombre_jour));

                let calcul = dateRell_1(myDate).replace(/-/g, '/')
                // let datestring = myDate.getDate() + "/" + (myDate.getMonth() + 1) + "/" + myDate.getFullYear()



                console.log(calcul)
                date_de_fin.value = calcul
            }
        } else {

        }
    }
})












document.getElementById('type_de_messe').addEventListener('change', function (e) {
    e.preventDefault()
    let selection = document.getElementById('type_de_messe').value


    // ################################################
    if (selection == "Messe de la semaine" || selection == "Messe chantée") {



        document.getElementById('heure_messe_input').style.display = 'none'
        document.getElementById('field_periode_date').style.display = 'none'
        // date de la messe
        document.getElementById('field_date_de_la_messe').style.display = 'block'

        document.getElementById('heure_messe_select').style.display = "block"

        document.getElementById('heure_messe').innerHTML = ""
        document.getElementById('heure_messe').innerHTML = '<option value="">Sélectionner...</option>'


        if (selection == "Messe de la semaine") {
            let table = Array("05h30", "12h15")
            table.forEach(element => {
                document.getElementById('heure_messe').innerHTML += `
                      <option >${element}</option>`
            });
        } else {
            // let table = Array("05h30", "12h15")
            let table = Array("05h30",
                "6h00",
                "7h00",
                "11h00",
                "12h00",
                "18h30",
            )
            table.forEach(element => {
                document.getElementById('heure_messe').innerHTML += `
                      <option >${element}</option>`
            });
        }






        if (selection == "Messe de la semaine") {
            document.getElementById('montant').value = "1500"
        } else {
            document.getElementById('montant').value = "3000"
        }
        document.getElementById('montant').disabled = true
    }

    // ################################################


    else if (selection == "Messe du dimanche") {
        // date de la messe
        document.getElementById('heure_messe_input').style.display = 'none'
        document.getElementById('field_periode_date').style.display = 'none'
        document.getElementById('field_date_de_la_messe').style.display = 'block'

        document.getElementById('heure_messe_select').style.display = "block"

        document.getElementById('heure_messe').innerHTML = ""
        document.getElementById('heure_messe').innerHTML = '<option value="">Sélectionner...</option>'

        let table = Array("06h00", "08h30", "11h00", "18h00")

        table.forEach(element => {
            document.getElementById('heure_messe').innerHTML += `
                  <option >${element}</option>`
        });

        document.getElementById('montant').value = "3000"
        document.getElementById('montant').disabled = true

    }

    // ################################################


    else if (selection == "Messe spéciale") {
        // date de la messe
        document.getElementById('field_periode_date').style.display = 'none'

        document.getElementById('heure_messe_select').style.display = "none"
        document.getElementById('field_date_de_la_messe').style.display = 'block'
        document.getElementById('heure_messe_input').style.display = "block"

        document.getElementById('montant').value = "5000"
        document.getElementById('montant').disabled = true
    }


    // ################################################


    else if (selection == "Tridumm de messe") {

        document.getElementById('heure_messe_select').style.display = "none"

        document.getElementById('heure_messe_input').style.display = "block"

        document.getElementById('date_de_debut').value = ''
        // document.getElementById('date_de_fin').value = ''
        document.getElementById('field_periode_date').style.display = 'block'

        document.getElementById('field_date_de_la_messe').style.display = 'none'

        document.getElementById('montant').value = "5000"
        document.getElementById('montant').disabled = true
        document.getElementById('nombre_jour').value = 2
        document.getElementById('nombre_jour').style.display = 'none'

    }

    else if (selection == "Neuvaine de messe") {
        document.getElementById('heure_messe_select').style.display = "none"

        document.getElementById('heure_messe_input').style.display = "block"

        document.getElementById('date_de_debut').value = ''
        // document.getElementById('date_de_fin').value = ''
        document.getElementById('field_periode_date').style.display = 'block'

        document.getElementById('field_date_de_la_messe').style.display = 'none'

        document.getElementById('montant').value = "15000"
        document.getElementById('montant').disabled = true
        document.getElementById('nombre_jour').value = 8
        document.getElementById('nombre_jour').style.display = 'none'

    }

    else if (selection == "Trentaine de messe") {
        document.getElementById('heure_messe_select').style.display = "none"
        document.getElementById('heure_messe_input').style.display = "block"

        document.getElementById('date_de_debut').value = ''
        // document.getElementById('date_de_fin').value = ''
        document.getElementById('field_periode_date').style.display = 'block'

        document.getElementById('field_date_de_la_messe').style.display = 'none'


        document.getElementById('montant').value = "50000"
        document.getElementById('montant').disabled = true
        document.getElementById('nombre_jour').value = 29
        document.getElementById('nombre_jour').style.display = 'none'

    }

    else if (selection == "Messe de requiem") {
        document.getElementById('heure_messe_select').style.display = "none"
        document.getElementById('heure_messe_input').style.display = "block"

        document.getElementById('date_de_debut').value = ''
        // document.getElementById('date_de_fin').value = ''
        document.getElementById('field_periode_date').style.display = 'block'

        document.getElementById('field_date_de_la_messe').style.display = 'none'

        document.getElementById('montant').value = ""
        document.getElementById('montant').disabled = false
        document.getElementById('nombre_jour').value = ""
        document.getElementById('nombre_jour').style.display = 'block'

    }







})







document.getElementById('intention_1').addEventListener('click', function (params) {
    document.getElementById('intenssion_de_la_messe').value = ` AG au Sgr pour tous ses bienfaits dans sa vie et celle de sa famille. Demande la PD, la BD et l’assistance du Saint-Esprit sur lui/elle et sur toute sa famille par l’intercession de la VM.

    `

})



document.getElementById('intention_2').addEventListener('click', function (params) {
    document.getElementById('intenssion_de_la_messe').value = ` AG au Sgr pour tous ses bienfaits à l’occasion de son anniversaire de …… . Demande la PD, la BD et l’assistance du Saint-Esprit sur lui/elle et sur toute sa famille par l’intercession de la VM.
    
    `

})


document.getElementById('intention_3').addEventListener('click', function (params) {
    document.getElementById('intenssion_de_la_messe').value = `Messe pour le repos en Dieu de l’âme de …. Sans oublier les âmes du purgatoire et les enfants avortés 
    
    `

})


document.getElementById('intention_4').addEventListener('click', function (params) {
    document.getElementById('intenssion_de_la_messe').value = ` AG au Sgr pour tous ses bienfaits dans sa vie. Prie pour une intention particulière
    `

})








async function add_messe() {




    // document.getElementById('add_messe').addEventListener('click', async function (params) {


    let form_data = new FormData()


    let nom_Paroisse = document.getElementById('nom_Paroisse').value.trim()
    let nom_paroissien = document.getElementById('nom_paroissien').value.trim()
    let type_de_messe = document.getElementById('type_de_messe').value.trim()
    let montant = document.getElementById('montant').value.trim()
    let intenssion_de_la_messe = document.getElementById('intenssion_de_la_messe').value.trim()


    // if (nom_Paroisse == "" || nom_paroissien == "" || type_de_messe == "" ||
    //     montant == "" || intenssion_de_la_messe == "") {
    //     swal({
    //         title: "Erreur",
    //         text: "Tous les champs sont obligatoires",
    //         icon: "error",
    //         button: "Ok",
    //     });
    // }
    // else {



    let heure_messe


    let periode_de_la_messe



    if (type_de_messe == "Messe chantée" || type_de_messe == "Messe de la semaine" || type_de_messe == "Messe du dimanche" || type_de_messe == "Messe spéciale") {
        periode_de_la_messe = dateRell_1(document.getElementById('date_de_la_messe').value).replace(/-/g, '/')

        form_data.append('type_periode', "un")
        form_data.append('periode_1', periode_de_la_messe)
    }
    else if (type_de_messe == "Tridumm de messe" || type_de_messe == "Neuvaine de messe"
        || type_de_messe == "Trentaine de messe" || type_de_messe == "Messe de requiem") {
        // periode_de_la_messe = dateRell_1(document.getElementById('date_de_debut').value).replace(/-/g, '/') + " " + document.getElementById('date_de_fin').value

        form_data.append('type_periode', "deux")
        form_data.append('periode_1', dateRell_1(document.getElementById('date_de_debut').value).replace(/-/g, '/'))
        form_data.append('periode_2', document.getElementById('date_de_fin').value)
    }




    // ##############   heure date ############################

    if (type_de_messe == "Messe chantée" || type_de_messe == "Messe de la semaine" || type_de_messe == "Messe du dimanche") {
        heure_messe = document.getElementById('heure_messe').value
    }
    else {
        heure_messe = document.getElementById('heure_messe_field').value
    }



    // ##########  verifier condition   ####################




    form_data.append('nom_Paroisse', nom_Paroisse)
    form_data.append('nom_paroissien', nom_paroissien)
    form_data.append('type_de_messe', type_de_messe)
    form_data.append('montant', montant)
    form_data.append('intenssion_de_la_messe', intenssion_de_la_messe)
    form_data.append('heure_messe', heure_messe)

    form_data.append('date_de_la_demande', dateRell_1_0())


    let table_verifie = []

    for (let value of form_data) {
        // console.log(value)
        console.log(value)
    }
    for (let value of form_data.values()) {
        if (value == "") {
            table_verifie.push('vide')
        }

    }

    if (table_verifie.length > 0) {
        swal({
            title: "Erreur",
            text: "Tous les champs sont obligatoires",
            icon: "error",
            button: "Ok",
        });
    }
    else {



        let data = await posttData(Routes.add_messe, form_data)




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


                    $('#largeModal').modal('hide')
                    tous_les_messe(1)

                    // swal({
                    //     title: "Ajouté",
                    //     // text: "Tous les champs sont obligatoire",
                    //     icon: "success",
                    //     button: "Ok",
                    // });


                    generer_recue(data.last_data)

                    // document.getElementById('nom_Paroisse').value = ""
                    document.getElementById('nom_paroissien').value = ""

                    document.getElementById('montant').value = ""
                    document.getElementById('intenssion_de_la_messe').value = ""
                    document.getElementById('date_de_la_messe').value = ''
                    document.getElementById('heure_messe').value = ''
                    document.getElementById('date_de_fin').value = ''
                    document.getElementById('date_de_debut').value = ''

                    // document.getElementById('type_de_messe').value = ""
                    document.getElementById('type_de_messe').value = ""


                    document.getElementById('heure_messe_input').style.display = "none"

                    document.getElementById('heure_messe_select').style.display = "none"

                    document.getElementById('field_periode_date').style.display = "none"

                    document.getElementById('field_date_de_la_messe').style.display = "none"



                    document.getElementById('intention_1').checked = false
                    document.getElementById('intention_2').checked = false
                    document.getElementById('intention_3').checked = false
                    document.getElementById('intention_4').checked = false
                }
            }, 200);



        }


    }


    // }
    // date_de_la_messe
    // date_de_debut
    // date_de_fin

    // heure_messe
    // montant
    // intenssion_de_la_messe
    // date_de_la_demande


    // })


}




function generer_recue(params) {


    params.forEach(element => {
        document.getElementById('nom_recue').innerHTML = element.nom_paroissien.toUpperCase()
        document.getElementById('date_recue').innerHTML = element.date_de_la_demande
        document.getElementById('type_reccue').innerHTML = element.type_de_messe

        if (element.periode_2 != "") {
            document.getElementById('celebre_recue').innerHTML = "du " + element.periode_1 + " au " + element.periode_2
        }
        else {
            document.getElementById('celebre_recue').innerHTML = "le " + element.periode_1
        }

        document.getElementById('intension_recue').innerHTML = element.intenssion_de_la_messe
        document.getElementById('la_personne').innerHTML = UTILISATEUR_LOGICIEL

    });
    $('#model_print_recue').modal('show')
}












document.getElementById('btn_actualiser').addEventListener('click', function (params) {

    var divsToHide = document.getElementsByClassName("context-menu-one"); //divsToHide is an array
    for (var i = 0; i < divsToHide.length; i++) {
        divsToHide[i].style.visibility = "hidden"; // or
        divsToHide[i].style.display = "none"; // depending on what you're doing
    }

    RECHERCHE_ACTIVE = []
    tous_les_messe(1)


})





























document.getElementById('defaultCheck2').addEventListener('click', function (params) {
    let verifie = document.getElementById('defaultCheck2').checked

    if (verifie == true) {
        document.getElementById('demande_de_messe_a_b').style.display = 'block'
        document.getElementById('defaultCheck3').checked = false
        document.getElementById('demane_heure').style.display = 'none'
    } else {
        document.getElementById('demande_de_messe_a_b').style.display = 'none'
        document.getElementById('date_choisie_1').value = ''
    }
})


document.getElementById('defaultCheck3').addEventListener('click', function (params) {
    let verifie = document.getElementById('defaultCheck3').checked

    if (verifie == true) {
        document.getElementById('demane_heure').style.display = 'block'
        document.getElementById('defaultCheck2').checked = false
        document.getElementById('demande_de_messe_a_b').style.display = 'none'
    } else {
        document.getElementById('demane_heure').style.display = 'none'

        document.getElementById('date_choisie_2').value = ''
        document.getElementById('date_choisie_3').value = ''



    }
})























/*@
frmlaire d'edition
@*/


async function modifier_messe(identifiant) {



    let form_data = new FormData()
    form_data.append('id', identifiant)

    let data = await posttData(Routes.get_one_messe, form_data)

    $('#largeModal').modal('show')

    data.data.forEach(element => {


        document.getElementById('title_modal').innerHTML = "Modifier une demande de messe"

        document.getElementById('mes_bouton').innerHTML = `
        <button type="button" onclick="close_modale()" class="btn btn-outline-secondary" data-bs-dismiss="modal">
        Annuler
        </button>
        <button type="button"  onclick="final_edit(${element.id})" class="btn btn-primary">Editer</button>

        `
        // ################################

        let selection = element.type_de_messe
        document.getElementById('type_de_messe').value = element.type_de_messe
        document.getElementById('intenssion_de_la_messe').value = element.intenssion_de_la_messe
        document.getElementById('nom_paroissien').value = element.nom_paroissien


        // ############### 
        if (selection == "Messe de la semaine" || selection == "Messe chantée") {



            document.getElementById('heure_messe_input').style.display = 'none'
            document.getElementById('field_periode_date').style.display = 'none'
            // date de la messe
            document.getElementById('field_date_de_la_messe').style.display = 'block'

            document.getElementById('heure_messe_select').style.display = "block"

            document.getElementById('heure_messe').innerHTML = ""
            document.getElementById('heure_messe').innerHTML = '<option value="">Sélectionner...</option>'

            console.log('passer')

            document.getElementById('date_de_la_messe').value = element.periode_1.split('/').reverse().join('-')


            if (selection == "Messe de la semaine") {
                let table = Array("05h30", "12h15")
                table.forEach(element => {
                    document.getElementById('heure_messe').innerHTML += `
                              <option >${element}</option>`
                });

                document.getElementById('heure_messe').value = element.heure_messe
            } else {
                // let table = Array("05h30", "12h15")
                let table = Array("05h30",
                    "6h00",
                    "7h00",
                    "11h00",
                    "12h00",
                    "18h30",
                )
                table.forEach(element => {
                    document.getElementById('heure_messe').innerHTML += `
                              <option >${element}</option>`
                });
                document.getElementById('heure_messe').value = element.heure_messe
            }






            if (selection == "Messe de la semaine") {
                document.getElementById('montant').value = "1500"
            } else {
                document.getElementById('montant').value = "3000"
            }
            document.getElementById('montant').disabled = true
        }

        // ################################################


        else if (selection == "Messe du dimanche") {
            // date de la messe
            document.getElementById('heure_messe_input').style.display = 'none'
            document.getElementById('field_periode_date').style.display = 'none'
            document.getElementById('field_date_de_la_messe').style.display = 'block'

            document.getElementById('heure_messe_select').style.display = "block"
            document.getElementById('date_de_la_messe').value = element.periode_1.split('/').reverse().join('-')


            document.getElementById('heure_messe').innerHTML = ""
            document.getElementById('heure_messe').innerHTML = '<option value="">Sélectionner...</option>'

            let table = Array("06h00", "08h30", "11h00", "17h00")

            table.forEach(element => {
                document.getElementById('heure_messe').innerHTML += `
                          <option >${element}</option>`
            });
            document.getElementById('heure_messe').value = element.heure_messe
            document.getElementById('montant').value = "3000"
            document.getElementById('montant').disabled = true

        }

        // ################################################


        else if (selection == "Messe spéciale") {
            // date de la messe
            document.getElementById('field_periode_date').style.display = 'none'

            document.getElementById('heure_messe_select').style.display = "none"
            document.getElementById('field_date_de_la_messe').style.display = 'block'
            document.getElementById('heure_messe_input').style.display = "block"
            document.getElementById('date_de_la_messe').value = element.periode_1.split('/').reverse().join('-')

            document.getElementById('heure_messe_field').value = element.heure_messe


            document.getElementById('montant').value = "5000"
            document.getElementById('montant').disabled = true
        }


        // ################################################


        else if (selection == "Tridumm de messe") {

            document.getElementById('heure_messe_select').style.display = "none"

            document.getElementById('heure_messe_input').style.display = "block"

            document.getElementById('date_de_debut').value = ''
            // document.getElementById('date_de_fin').value = ''
            document.getElementById('field_periode_date').style.display = 'block'

            document.getElementById('field_date_de_la_messe').style.display = 'none'


            document.getElementById('heure_messe_field').value = element.heure_messe

            document.getElementById('date_de_debut').value = element.periode_1.split('/').reverse().join('-')
            document.getElementById('date_de_fin').value = element.periode_2.split('/').reverse().join('-')



            document.getElementById('montant').value = "5000"
            document.getElementById('montant').disabled = true
            document.getElementById('nombre_jour').value = 2
            document.getElementById('nombre_jour').style.display = 'none'

        }

        else if (selection == "Neuvaine de messe") {
            document.getElementById('heure_messe_select').style.display = "none"

            document.getElementById('heure_messe_input').style.display = "block"

            document.getElementById('date_de_debut').value = ''
            // document.getElementById('date_de_fin').value = ''
            document.getElementById('field_periode_date').style.display = 'block'

            document.getElementById('field_date_de_la_messe').style.display = 'none'
            document.getElementById('heure_messe_field').value = element.heure_messe

            document.getElementById('date_de_debut').value = element.periode_1.split('/').reverse().join('-')
            document.getElementById('date_de_fin').value = element.periode_2.split('/').reverse().join('-')


            document.getElementById('montant').value = "15000"
            document.getElementById('montant').disabled = true
            document.getElementById('nombre_jour').value = 8
            document.getElementById('nombre_jour').style.display = 'none'

        }

        else if (selection == "Trentaine de messe") {
            document.getElementById('heure_messe_select').style.display = "none"
            document.getElementById('heure_messe_input').style.display = "block"

            document.getElementById('date_de_debut').value = ''
            // document.getElementById('date_de_fin').value = ''
            document.getElementById('field_periode_date').style.display = 'block'

            document.getElementById('field_date_de_la_messe').style.display = 'none'
            document.getElementById('heure_messe_field').value = element.heure_messe

            document.getElementById('date_de_debut').value = element.periode_1.split('/').reverse().join('-')
            document.getElementById('date_de_fin').value = element.periode_2.split('/').reverse().join('-')


            document.getElementById('montant').value = "50000"
            document.getElementById('montant').disabled = true
            document.getElementById('nombre_jour').value = 29
            document.getElementById('nombre_jour').style.display = 'none'

        }

        else if (selection == "Messe de requiem") {
            document.getElementById('heure_messe_select').style.display = "none"
            document.getElementById('heure_messe_input').style.display = "block"

            document.getElementById('date_de_debut').value = ''
            // document.getElementById('date_de_fin').value = ''
            document.getElementById('field_periode_date').style.display = 'block'

            document.getElementById('field_date_de_la_messe').style.display = 'none'

            document.getElementById('date_de_debut').value = element.periode_1.split('/').reverse().join('-')
            document.getElementById('date_de_fin').value = element.periode_2.split('/').reverse().join('-')


            document.getElementById('heure_messe_field').value = element.heure_messe

            document.getElementById('montant').value = element.montant
            document.getElementById('montant').disabled = false
            document.getElementById('nombre_jour').value = ""
            document.getElementById('nombre_jour').style.display = 'block'


        }








        // ################################
    });

    // $('#modal_modifier_paroissien').modal('show')





}
/*@
frmlaire d'edition
@*/







/*@
modification final des donnees
@*/


async function final_edit(params) {



    let form_data = new FormData()


    let nom_Paroisse = document.getElementById('nom_Paroisse').value.trim()
    let nom_paroissien = document.getElementById('nom_paroissien').value.trim()
    let type_de_messe = document.getElementById('type_de_messe').value.trim()
    let montant = document.getElementById('montant').value.trim()
    let intenssion_de_la_messe = document.getElementById('intenssion_de_la_messe').value.trim()


    // if (nom_Paroisse == "" || nom_paroissien == "" || type_de_messe == "" ||
    //     montant == "" || intenssion_de_la_messe == "") {
    //     swal({
    //         title: "Erreur",
    //         text: "Tous les champs sont obligatoires",
    //         icon: "error",
    //         button: "Ok",
    //     });
    // }
    // else {



    let heure_messe


    let periode_de_la_messe



    if (type_de_messe == "Messe chantée" || type_de_messe == "Messe de la semaine" || type_de_messe == "Messe du dimanche" || type_de_messe == "Messe spéciale") {
        periode_de_la_messe = dateRell_1(document.getElementById('date_de_la_messe').value).replace(/-/g, '/')

        form_data.append('type_periode', "un")
        form_data.append('periode_1', periode_de_la_messe)
    }
    else if (type_de_messe == "Tridumm de messe" || type_de_messe == "Neuvaine de messe"
        || type_de_messe == "Trentaine de messe" || type_de_messe == "Messe de requiem") {
        // periode_de_la_messe = dateRell_1(document.getElementById('date_de_debut').value).replace(/-/g, '/') + " " + document.getElementById('date_de_fin').value

        form_data.append('type_periode', "deux")
        form_data.append('periode_1', dateRell_1(document.getElementById('date_de_debut').value).replace(/-/g, '/'))
        form_data.append('periode_2', document.getElementById('date_de_fin').value)
    }




    // ##############   heure date ############################

    if (type_de_messe == "Messe chantée" || type_de_messe == "Messe de la semaine" || type_de_messe == "Messe du dimanche") {
        heure_messe = document.getElementById('heure_messe').value
    }
    else {
        heure_messe = document.getElementById('heure_messe_field').value
    }



    // ##########  verifier condition   ####################




    form_data.append('nom_Paroisse', nom_Paroisse)
    form_data.append('nom_paroissien', nom_paroissien)
    form_data.append('type_de_messe', type_de_messe)
    form_data.append('montant', montant)
    form_data.append('intenssion_de_la_messe', intenssion_de_la_messe)
    form_data.append('heure_messe', heure_messe)
    form_data.append('date_de_la_demande', dateRell_1_0())


    form_data.append('id', params)



    let table_verifie = []

    for (let value of form_data) {
        // console.log(value)
        console.log(value)
    }
    for (let value of form_data.values()) {
        if (value == "") {
            table_verifie.push('vide')
        }

    }

    if (table_verifie.length > 0) {
        swal({
            title: "Erreur",
            text: "Tous les champs sont obligatoires",
            icon: "error",
            button: "Ok",
        });
    }
    else {



        let data = await posttData(Routes.update_messe, form_data)




        if (data.resultat == "save") {

            BDD_MESSE = []
            BDD_MESSE.push(data.base_messe)


            let my_row = "ligne_" + params

            data.data_update.forEach(element => {


                let la_periode
                if (element.periode_2 != "") {
                    la_periode = element.periode_1 + " <br> au <br> " + element.periode_2
                } else {
                    la_periode = element.periode_1
                }


                let row = `
                <td>
                <i class="fab fa-angular fa-lg text-danger me-3"></i>
                ${element.dates}
                </td>
    
                <td>${la_periode}</td>
                <td>${element.type_de_messe}</td>
                <td>${element.heure_messe}</td>
    
                 <td>${element.nom_paroissien}</td>
                 <td>${element.montant} Fcfa </td>
            `


                document.getElementById(my_row).innerHTML = row
            });





            let progress = setInterval(() => {

                document.getElementById('progess_container_2').style.height = '10px'

                compteur = compteur + 10
                document.getElementById('my_progress_2').style.width = compteur + "%"

                if (compteur == 110) {
                    document.getElementById('progess_container_2').style.height = '0px'
                    clearInterval(progress)
                    document.getElementById('my_progress_2').style.width = "0%"
                    compteur = 0


                    $('#largeModal').modal('hide')

                    document.getElementById('title_modal').innerHTML = "Ajouter une demande de messe"

                    document.getElementById('mes_bouton').innerHTML = `
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                        Annuler
                    </button>
                    <button type="button" onclick="add_messe()" id="add_messe" class="btn btn-primary">Ajouter</button>
            
                    `

                    // swal({
                    //     title: "Ajouté",
                    //     // text: "Tous les champs sont obligatoire",
                    //     icon: "success",
                    //     button: "Ok",
                    // });




                    // document.getElementById('nom_Paroisse').value = ""
                    document.getElementById('nom_paroissien').value = ""

                    document.getElementById('montant').value = ""
                    document.getElementById('intenssion_de_la_messe').value = ""
                    document.getElementById('date_de_la_messe').value = ''
                    document.getElementById('heure_messe').value = ''
                    document.getElementById('date_de_fin').value = ''
                    document.getElementById('date_de_debut').value = ''

                    // document.getElementById('type_de_messe').value = ""
                    document.getElementById('type_de_messe').value = ""


                    document.getElementById('heure_messe_input').style.display = "none"

                    document.getElementById('heure_messe_select').style.display = "none"

                    document.getElementById('field_periode_date').style.display = "none"

                    document.getElementById('field_date_de_la_messe').style.display = "none"


                }
            }, 200);



        }


    }


    // }
    // date_de_la_messe
    // date_de_debut
    // date_de_fin

    // heure_messe
    // montant
    // intenssion_de_la_messe
    // date_de_la_demande




}



/*@
modification final des donnees
@*/



/*@
fermer le modale
@*/



function close_modale() {
    document.getElementById('title_modal').innerHTML = "Ajouter une demande de messe"

    document.getElementById('mes_bouton').innerHTML = `
    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
        Annuler
    </button>
    <button type="button" onclick="add_messe()" id="add_messe" class="btn btn-primary">Ajouter</button>

    `



    document.getElementById('nom_paroissien').value = ""

    document.getElementById('montant').value = ""
    document.getElementById('intenssion_de_la_messe').value = ""
    document.getElementById('date_de_la_messe').value = ''
    document.getElementById('heure_messe').value = ''
    document.getElementById('date_de_fin').value = ''
    document.getElementById('date_de_debut').value = ''

    // document.getElementById('type_de_messe').value = ""
    document.getElementById('type_de_messe').value = ""


    document.getElementById('heure_messe_input').style.display = "none"

    document.getElementById('heure_messe_select').style.display = "none"

    document.getElementById('field_periode_date').style.display = "none"

    document.getElementById('field_date_de_la_messe').style.display = "none"

}

/*@
fermer le modale
@*/



