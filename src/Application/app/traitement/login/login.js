

document.getElementById('btn_connexion').addEventListener('click', async function (e) {
    e.preventDefault()
    let pseudo = document.getElementById('pseudo').value.trim()
    let passe = document.getElementById('passe').value.trim()


    if (pseudo == "" || pseudo == "") {
        swal({
            title: "Erreur",
            text: "Tous les champs sont obligatoires",
            icon: "error",
            button: "Ok",
        });
    }
    else {



        let les_donnees = new FormData()

        les_donnees.append('utilisateur', pseudo)
        les_donnees.append('mot_de_passe', passe)

        let data = await posttData(Routes.connexion, les_donnees)


        if (data.resultat == 'found') {

            // window.location.href = "login/connexion/" + pseudo
            window.localStorage.setItem('utilisateur_logiciel_eglise_catholique', pseudo)
            window.localStorage.setItem('role_logiciel_eglise_catholique', data.user_role)


            if (data.user_role.toLocaleLowerCase() == "Comptable".toLocaleLowerCase()) {
                document.location.href = 'dashbord.html'
            }
            else {
                document.location.href = 'app_tous_les_paroissiens.html'
            }

        }
        else {

            document.getElementById('msg_alert').style.display = "block"


            document.getElementById('pseudo').value = ""
            document.getElementById('passe').value = ""

            // $.notify({
            //     icon: 'la la-bell',
            //     title: 'Error ',
            //     message: 'Utilisateur ou mot de passe incorrect',

            // }, {
            //     type: 'danger',
            //     // color: "#fff", background: "#D44950",
            //     placement: {
            //         from: "top",
            //         align: "center"
            //     },
            //     time: 100,

            // });
        }




    }

    // if (pseudo == 'admin' && passe == 'admin') {
    //     // document.location.href = 'index.html'
    //     window.location.href = "fournisseurs"
    // } else {
    //     document.getElementById('msg_alert').style.display = "block"
    // }
})