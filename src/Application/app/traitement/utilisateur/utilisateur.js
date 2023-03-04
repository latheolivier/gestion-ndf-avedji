$(document).ready(function () {
    les_data()
    // let varrr='fdfdf'
    // varrr.toLocaleUpperCase
})


document.getElementById('btn_deconnexion').addEventListener('click', function (params) {

    document.location.href = 'login.html'

})



document.getElementById('btn_add').addEventListener('click', function (params) {

    $('#ajouter_utilisateur').modal('show')

})

// params.currentTarget.getAttribute('identifiant')


function error_internet() {
    swal({
        title: "Aucun accès à Internet",
        // text: "Vous n'avez pas de produit vendue",
        icon: "warning",
        button: "Ok",
    });
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

async function les_data() {

    loader(true)

    let data = await getData(Routes.get_all_user)


    let my_data = data.all_user

    if (my_data.length == 0) {
    } else {
        document.getElementById('content_user').innerHTML = ''
        my_data.forEach(element => {

            let id_tr = 'tr_' + element.id

            let row_table = `
                    <tr id="`+ id_tr + `">
											<td>`+ element.utilisateur + `</td>
											<td>`+ element.mot_de_passe + `</td>
											<td>`+ element.role + `</td>
											<td>

												<div class="dropdown">
                                                    <button   class="btn btn-primary rounded-pill dropdown-toggle hide-arrow" type="button" id="dropdownMenu1" data-bs-toggle="dropdown">Actions</button>
													<div class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">

														<button onclick= afficher_pop_edit(`+ element.id + `)  class="dropdown-item"> <i class="la la-edit"></i> Editer<buttona>

													<button onclick= btn_sup_domaine(`+ element.id + `) class="dropdown-item " style="color: red;"> <i class="la la-trash"></i> Supprimer<buttona>
													
                                                                </div>
												</div>
											</td>
										</tr>
                    `
            // let id_tr = 'tr_' + element.id

            // let title = "<tr id=" + id_tr + " ><td>" + element.domaine.toLocaleLowerCase() + "</td><td> "

            // let btn_edite = '<button class="btn btn-default" style="background-color: #FFC600 !important;color: #071228 !important;"  onclick="afficher_pop_edit(' + element.id + ' )" ><i class="la la-edit"></i></button>'
            // let btn_delete = '<button  class="btn btn-danger" onclick="btn_sup_domaine(' + element.id + ' )" ><i class="la la-trash"></i></button> </td> </tr>'

            document.getElementById('content_user').innerHTML += row_table

        });
    }

    setTimeout(() => {
        loader(false)
    }, 500);



}


// ##########################################################################
// finction d'ajout de domaine
// ##########################################################################






document.getElementById('btn_add_user').addEventListener('click', async function (params) {

    let nom_user = document.getElementById('nom_user').value.trim()
    let passe = document.getElementById('passe').value.trim()
    let role = document.getElementById('role').value.trim()

    if (nom_user == "" || passe == "" || role == "") {
        swal({
            title: "Erreur",
            text: "Tous les champs sont obligatoires",
            icon: "error",
            button: "Ok",
        });
    }
    else {


        loader(true)


        let les_donnees = new FormData()

        les_donnees.append('utilisateur', nom_user)
        les_donnees.append('mot_de_passe', passe)
        les_donnees.append('role', role)

        let data = await posttData(Routes.add_user, les_donnees)



        if (data.resultat == 'save') {
            console.log('save')
            $('#ajouter_utilisateur').modal('hide')
            document.getElementById('nom_user').value = ""
            document.getElementById('passe').value = ""
            document.getElementById('role').value = ""
            les_data()

            swal({
                title: "Utilisateur ajouté",
                text: "Utilisateur ajouté avec succès",
                icon: "success",
                button: "Ok",
            });
        }


    }

})


// ##########################################################################
// fonction de modifier le domaine
// ##########################################################################

async function afficher_pop_edit(params) {

    console.log('rfrfr')
    // loader(true)

    let les_donnees = new FormData()

    les_donnees.append('id', params)

    let data = await posttData(Routes.get_user, les_donnees)


    loader(false)

    $('#modifier_utilisateur').modal("show");

    document.getElementById('id_modifer_util').value = params

    data.data_user.forEach(element => {
        document.getElementById('nom_user_m').value = element.utilisateur
        document.getElementById('passe_m').value = element.mot_de_passe
        document.getElementById('role_initial').innerHTML = element.role
    });





}





document.getElementById('btn_update_utilisateur').addEventListener('click', async function (params) {


    loader(true)

    let id_modifer_util = document.getElementById('id_modifer_util').value.trim()

    let nom_user_m = document.getElementById('nom_user_m').value.trim()
    let passe_m = document.getElementById('passe_m').value.trim()
    let role_m = document.getElementById('role_m').value.trim()

    if (nom_user_m == "" || passe_m == "" || role_m == "") {

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
        les_donnees.append('utilisateur', nom_user_m)
        les_donnees.append('mot_de_passe', passe_m)
        les_donnees.append('role', role_m)

        let data = await posttData(Routes.update_user, les_donnees)

        // console.log(response)
        if (data.resultat == 'save') {

            loader(false)

            $('#modifier_utilisateur').modal('hide')


            let id_tr = 'tr_' + id_modifer_util

            let row_table = `
                     
											<td>`+ nom_user_m + `</td>
											<td>`+ passe_m + `</td>
											<td>`+ role_m + `</td>
											<td>

                                            <div class="dropdown">
                                                    <button   class="btn btn-primary rounded-pill dropdown-toggle hide-arrow" type="button" id="dropdownMenu1" data-bs-toggle="dropdown">Actions</button>
													<div class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">

														<button onclick= afficher_pop_edit(`+ id_modifer_util + `)  class="dropdown-item"> <i class="la la-edit"></i> Editer<buttona>

													<button onclick= btn_sup_domaine(`+ id_modifer_util + `) class="dropdown-item " style="color: red;"> <i class="la la-trash"></i> Supprimer<buttona>
													
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



// ##########################################################################
// fonction de suppression de domaine
// ##########################################################################



async function btn_sup_domaine(params) {

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
                let data = await posttData(Routes.delete_user, les_donnees)


                if (data.resultat == 'save') {

                    let id_tr = 'tr_' + params
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