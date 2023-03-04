$(document).ready(async function () {


    // getstatus()


    les_motif()

    // let varrr='fdfdf'
    // varrr.toLocaleUpperCase
})















document.getElementById('btn_deconnexion').addEventListener('click', function (params) {

    document.location.href = 'login.html'

})



document.getElementById('btn_add_motif').addEventListener('click', function (params) {

    $('#ajouter_motif').modal('show')

})



var BASE_MOTIF = Array()



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

async function les_motif() {

    loader(true)
    BASE_MOTIF = []



    let data = await getData(Routes.get_all_motif)


    let my_data = data.all_motif

    BASE_MOTIF.push(my_data)



    if (my_data.length == 0) {
    } else {
        document.getElementById('content_motif').innerHTML = ''
        my_data.forEach(element => {

            let id_tr = 'tr_motif_' + element.id

            let les_bouton

            if (MON_STATUS == "Propriété" || MON_STATUS == "Administrateur") {
                les_bouton = `
                        <button onclick="btn_sup_motif(`+ element.id + `)" class="dropdown-item " style="color: red;"> <i class="la la-trash"></i> Supprimer<buttona>
                        `
            } else {
                les_bouton = ""
            }


            let row_table = `
                    <tr id="`+ id_tr + `">
											<td>`+ element.le_motif + `</td>
											<td>`+ element.description_motif + `</td>
 											<td>

												<div class="dropdown">
                                                    <button   class="btn btn-primary rounded-pill dropdown-toggle hide-arrow" type="button" id="dropdownMenu1" data-bs-toggle="dropdown">Actions</button>
													<div class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">

														<button onclick= afficher_pop_edit_motif(`+ element.id + `)  class="dropdown-item"> <i class="la la-edit"></i> Editer<buttona>

                                                        <button onclick="btn_sup_motif(`+ element.id + `)" class="dropdown-item " style="color: red;"> <i class="la la-trash"></i> Supprimer<buttona>

													
                                                    </div>
												</div>
											</td>
										</tr>
                    `
            // let id_tr = 'tr_' + element.id

            // let title = "<tr id=" + id_tr + " ><td>" + element.domaine.toLocaleLowerCase() + "</td><td> "

            // let btn_edite = '<button class="btn btn-default" style="background-color: #FFC600 !important;color: #071228 !important;"  onclick="afficher_pop_edit_motif(' + element.id + ' )" ><i class="la la-edit"></i></button>'
            // let btn_delete = '<button  class="btn btn-danger" onclick="btn_sup_motif(' + element.id + ' )" ><i class="la la-trash"></i></button> </td> </tr>'

            document.getElementById('content_motif').innerHTML += row_table

        });
    }

    setTimeout(() => {
        loader(false)
    }, 500);



}


// ##########################################################################
// finction d'ajout de domaine
// ##########################################################################








document.getElementById('btn_ajouter_motif').addEventListener('click', async function (params) {

    let le_motif = document.getElementById('le_motif').value.trim()
    let description_motif = document.getElementById('description_motif').value.trim()

    if (le_motif == "" || description_motif == "") {
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

        les_donnees.append('le_motif', le_motif)
        les_donnees.append('description_motif', description_motif)

        let data = await posttData(Routes.add_motif, les_donnees)





        if (data.resultat == 'save') {
            console.log('save')
            $('#ajouter_motif').modal('hide')
            document.getElementById('le_motif').value = ""
            document.getElementById('description_motif').value = ""
            les_motif()

            swal({
                title: "Motif ajouté",
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

function afficher_pop_edit_motif(params) {

    // console.log('rfrfr')
    // loader(true)

    BASE_MOTIF[0].forEach(element => {
        if (element.id == params) {
            $('#modifier_motif').modal("show");

            document.getElementById('id_modifer_motif').value = params

            document.getElementById('le_motif_m').value = element.le_motif
            document.getElementById('description_motif_m').value = element.description_motif
            // document.getElementById('role_initial').innerHTML = element.role
        }

    });





    // let les_donnees = new FormData()

    // les_donnees.append('id', params)

    // fetch(
    //     URL + 'get_user', {
    //     method: 'POST',
    //     body: les_donnees,
    //     headers: {
    //         Accept: "application/json",

    //     }
    // }
    // ).then(response => response.json())
    //     .then(response => {

    //         console.log(response.data_user)
    //         loader(false)

    //         $('#modifier_motif').modal("show");

    //         document.getElementById('id_modifer_motif').value = params

    //         response.data_user.forEach(element => {
    //             document.getElementById('le_motif_m').value = element.utilisateur
    //             document.getElementById('description_motif_m').value = element.mot_de_passe
    //             // document.getElementById('role_initial').innerHTML = element.role
    //         });


    //     })
    //     .catch((error) => {

    //         loader(false)

    //         error_internet()
    //     });



}






document.getElementById('btn_update_motif').addEventListener('click', async function (params) {


    loader(true)

    let id_modifer_util = document.getElementById('id_modifer_motif').value.trim()

    let le_motif_m = document.getElementById('le_motif_m').value.trim()
    let description_motif_m = document.getElementById('description_motif_m').value.trim()

    if (le_motif_m == "" || description_motif_m == "") {

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
        les_donnees.append('le_motif', le_motif_m)
        les_donnees.append('description_motif', description_motif_m)

        let data = await posttData(Routes.update_motif, les_donnees)



        // console.log(response)
        if (data.resultat == 'save') {

            rafrechir_1()

            loader(false)

            $('#modifier_motif').modal('hide')


            let id_tr = 'tr_motif_' + id_modifer_util

            let les_bouton

            if (MON_STATUS == "Propriété" || MON_STATUS == "Administrateur") {
                les_bouton = `
                        <button onclick= btn_sup_motif(`+ id_modifer_util + `) class="dropdown-item " style="color: red;"> <i class="la la-trash"></i> Supprimer<buttona>
                        `
            } else {
                les_bouton = ""
            }



            let row_table = `
                     
											<td>`+ le_motif_m + `</td>
											<td>`+ description_motif_m + `</td>
 											<td>

                                            <div class="dropdown">
                                                    <button   class="btn btn-primary rounded-pill dropdown-toggle hide-arrow" type="button" id="dropdownMenu1" data-bs-toggle="dropdown">Actions</button>
													<div class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">

														<button onclick= afficher_pop_edit_motif(`+ id_modifer_util + `)  class="dropdown-item"> <i class="la la-edit"></i> Editer<buttona>

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





async function rafrechir_1() {

    loader(true)
    BASE_MOTIF = []

    let data = await getData(Routes.get_all_motif)


    let my_data = data.all_motif

    BASE_MOTIF.push(my_data)


}
// ##########################################################################
// fonction de suppression de domaine
// ##########################################################################



async function btn_sup_motif(params) {

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

                let data = await posttData(Routes.delete_motif, les_donnees)



                if (data.resultat == 'save') {

                    let id_tr = 'tr_motif_' + params
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








