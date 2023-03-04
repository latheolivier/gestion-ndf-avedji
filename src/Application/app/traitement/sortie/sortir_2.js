$(document).ready(async function () {

    les_sortir()
    recuperer_les_motif()

    // let varrr='fdfdf'
    // varrr.toLocaleUpperCase
})














document.getElementById('btn_click_sortir').addEventListener('click', function (params) {
    recuperer_les_motif()
})




async function recuperer_les_motif() {

    let data = await getData(Routes.get_all_motif)

    let my_data = data.all_motif

    if (my_data.length == 0) {
    } else {
        document.getElementById('votre_motif').innerHTML = ''
        document.getElementById('votre_motif').innerHTML = '<option value="">Séléctionner</option>'

        my_data.forEach(element => {
            let row_table = ` <option> ${element.le_motif}  </option>   `

            document.getElementById('votre_motif').innerHTML += row_table

        });




        document.getElementById('votre_motif_m').innerHTML = ''
        document.getElementById('votre_motif_m').innerHTML = '<option value="">Séléctionner</option>'

        my_data.forEach(element => {
            let row_table = ` <option> ${element.le_motif}  </option>   `

            document.getElementById('votre_motif_m').innerHTML += row_table

        });
    }




}











document.getElementById('btn_a_sortir').addEventListener('click', function (params) {
    $('#ajouter_sortir_modal').modal('show')
})



var BASE_SORTIR = Array()



// params.currentTarget.getAttribute('identifiant')


function error_internet() {
    // swal({
    //     title: "Aucun accès à Internet",
    //     // text: "Vous n'avez pas de produit vendue",
    //     icon: "warning",
    //     button: "Ok",
    // });
}

function loader(etat) {
    if (etat == true) {
        // $('#loader_spinner').modal("show");
    }
    if (etat == false) {
        // $('#loader_spinner').modal('hide')
    }
}



// ##########################################################################
// afficher les donnees des stagiaires
// ##########################################################################

async function les_sortir() {

    loader(true)
    BASE_SORTIR = []


    let data = await getData(Routes.get_all_sortir)




    let my_data = data.all_sortir

    BASE_SORTIR.push(my_data)



    if (my_data.length == 0) {
    } else {
        document.getElementById('content_sortir').innerHTML = ''

        my_data.forEach(element => {

            let id_tr = 'tr_sortir_' + element.id

            let les_bouton

            if (MON_STATUS == "Propriété" || MON_STATUS == "Administrateur") {
                les_bouton = `
                        <button onclick= btn_sup_sortir(`+ element.id + `) class="dropdown-item " style="color: red;"> <i class="la la-trash"></i> Supprimer<buttona>
                        `
            } else {
                les_bouton = ""
            }



            let row_table = `
                    <tr id="`+ id_tr + `">
											<td>`+ element.dates + `</td>
											<td>`+ element.votre_motif + `</td>
											<td>`+ element.description_sortie + `</td>
											<td>`+ element.le_beneficiere + `</td>
											<td>`+ element.numero_facture + `</td>
											<td>`+ element.montant + ` Fcfa</td>
 											<td>

												<div class="dropdown">
                                                    <button   class="btn btn-primary rounded-pill dropdown-toggle hide-arrow" type="button" id="dropdownMenu1" data-bs-toggle="dropdown">Actions</button>
													<div class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">

														<button onclick= afficher_pop_edit_sortir(`+ element.id + `)  class="dropdown-item"> <i class="la la-edit"></i> Editer<buttona>

                                                    ${les_bouton}													
                                                                </div>
												</div>
											</td>
										</tr>
                    `
            // let id_tr = 'tr_' + element.id

            // let title = "<tr id=" + id_tr + " ><td>" + element.domaine.toLocaleLowerCase() + "</td><td> "

            // let btn_edite = '<button class="btn btn-default" style="background-color: #FFC600 !important;color: #071228 !important;"  onclick="afficher_pop_edit_sortir(' + element.id + ' )" ><i class="la la-edit"></i></button>'
            // let btn_delete = '<button  class="btn btn-danger" onclick="btn_sup_sortir(' + element.id + ' )" ><i class="la la-trash"></i></button> </td> </tr>'

            document.getElementById('content_sortir').innerHTML += row_table

        });
    }

    setTimeout(() => {
        loader(false)
    }, 500);

}


// ##########################################################################
// finction d'ajout de domaine
// ##########################################################################








document.getElementById('btn_add_sortir').addEventListener('click', async function (params) {

    let votre_motif = document.getElementById('votre_motif').value.trim()
    let description_sortie = document.getElementById('description_sortie').value.trim()
    let le_beneficiere = document.getElementById('le_beneficiere').value.trim()
    let numero_facture = document.getElementById('numero_facture').value.trim()
    let montant = document.getElementById('montant').value.trim()

    if (votre_motif == "" || description_sortie == "" || le_beneficiere == "" || numero_facture == ""
        || montant == ""
    ) {
        swal({
            title: "Erreur",
            text: "Tous les champs sont obligatoires",
            icon: "error",
            button: "Ok",
        });
    }
    else {


        // loader(true)


        let les_donnees = new FormData()

        les_donnees.append('votre_motif', votre_motif)
        les_donnees.append('description_sortie', description_sortie)
        les_donnees.append('le_beneficiere', le_beneficiere)
        les_donnees.append('numero_facture', numero_facture)
        les_donnees.append('montant', montant)

        let data = await posttData(Routes.add_sortir, les_donnees)



        if (data.resultat == 'save') {
            console.log('save')
            $('#ajouter_sortir_modal').modal('hide')

            document.getElementById('votre_motif').value = ""
            document.getElementById('description_sortie').value = ""
            document.getElementById('le_beneficiere').value = ""
            document.getElementById('numero_facture').value = ""
            document.getElementById('montant').value = ""


            les_sortir()

            swal({
                title: "Sortie ajouté",
                text: "Le motif a été ajouté avec succès",
                icon: "success",
                button: "Ok",
            });
        }

    }

})


// ##########################################################################
// fonction de modifier le domaine
// ##########################################################################

function afficher_pop_edit_sortir(params) {

    // console.log('rfrfr')
    // loader(true)

    BASE_SORTIR[0].forEach(element => {
        if (element.id == params) {

            $('#modifier_sortir').modal("show");

            document.getElementById('id_modifer_sortir').value = params
            document.getElementById('la_daate').value = element.dates

            // mySelect.value = myValue;

            document.getElementById('votre_motif_m').value = element.votre_motif

            // document.getElementById('initail_m').innerHTML = element.votre_motif
            document.getElementById('description_sortie_m').value = element.description_sortie
            document.getElementById('le_beneficiere_m').value = element.le_beneficiere
            document.getElementById('numero_facture_m').value = element.numero_facture
            document.getElementById('montant_m').value = element.montant
            // document.getElementById('role_initial').innerHTML = element.role




        }

    });







}





document.getElementById('btn_update_sortir').addEventListener('click', async function (params) {


    loader(true)

    let id_modifer_util = document.getElementById('id_modifer_sortir').value.trim()
    let la_daate = document.getElementById('la_daate').value

    let votre_motif_m = document.getElementById('votre_motif_m').value
    let description_sortie_m = document.getElementById('description_sortie_m').value
    let le_beneficiere_m = document.getElementById('le_beneficiere_m').value
    let numero_facture_m = document.getElementById('numero_facture_m').value
    let montant_m = document.getElementById('montant_m').value



    if (votre_motif_m == "" || description_sortie_m == "" || le_beneficiere_m == "" || numero_facture_m == ""
        || montant_m == "") {

        loader(false)
        swal({
            title: "Erreur",
            text: "Tous les champs sont pbligatoires",
            icon: "error",
            button: "Ok",
        });
    }
    else {

        let les_donnees = new FormData()

        les_donnees.append('id', id_modifer_util)

        les_donnees.append('votre_motif', votre_motif_m)
        les_donnees.append('description_sortie', description_sortie_m)
        les_donnees.append('le_beneficiere', le_beneficiere_m)
        les_donnees.append('numero_facture', numero_facture_m)
        les_donnees.append('montant', montant_m)

        let data = await posttData(Routes.update_sortir, les_donnees)


        // console.log(response)
        if (data.resultat == 'save') {

            rafrechir_2()

            loader(false)

            $('#modifier_sortir').modal('hide')


            let id_tr = 'tr_sortir_' + id_modifer_util

            let les_bouton

            if (MON_STATUS == "Propriété" || MON_STATUS == "Administrateur") {
                les_bouton = `
                        <button onclick= btn_sup_sortir(`+ id_modifer_util + `) class="dropdown-item " style="color: red;"> <i class="la la-trash"></i> Supprimer<buttona>
                        `
            } else {
                les_bouton = ""
            }

            let row_table = `
                     
											<td>`+ la_daate + `</td>
											<td>`+ votre_motif_m + `</td>
											<td>`+ description_sortie_m + `</td>
											<td>`+ le_beneficiere_m + `</td>
											<td>`+ numero_facture_m + `</td>
											<td>`+ montant_m + `  Fcfa</td>
 											<td>

                                            <div class="dropdown">
                                                    <button   class="btn btn-primary rounded-pill dropdown-toggle hide-arrow" type="button" id="dropdownMenu1" data-bs-toggle="dropdown">Actions</button>
													<div class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">

														<button onclick= afficher_pop_edit_sortir(`+ id_modifer_util + `)  class="dropdown-item"> <i class="la la-edit"></i> Editer<buttona>

                                                        ${les_bouton}													
                                                                </div>
												</div>


												 
											</td>
										 
                    `

            document.getElementById(id_tr).innerHTML = row_table

            swal({
                title: "Modifiée",
                // text: "Tous les champs sont obligatoire",
                icon: "success",
                button: "Ok",
            });
        }


    }



})





async function rafrechir_2() {

    BASE_SORTIR = []

    let data = await getData(Routes.get_all_sortir)

    let my_data = data.all_sortir

    BASE_SORTIR.push(my_data)

}
// ##########################################################################
// fonction de suppression de domaine
// ##########################################################################



async function btn_sup_sortir(params) {

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


                loader(true)





                let les_donnees = new FormData()

                les_donnees.append('id', params)

                let data = await posttData(Routes.delete_sortir, les_donnees)





                if (data.resultat == 'save') {

                    let id_tr = 'tr_sortir_' + params
                    document.getElementById(id_tr).innerHTML = ""

                    loader(false)

                    swal({
                        title: "Effectué",
                        text: "Domaine supprimé avec succès",
                        icon: "success",
                        button: "Ok",
                    });
                }






            }
        });
}





// #######################################################################
// #######################################################################
// #######################################################################
// #######################################################################
// #######################################################################
// #######################################################################
// #######################################################################
// #######################################################################
// #######################################################################