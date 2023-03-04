
(function () {
    getstatus()
})();



var MON_STATUS = window.localStorage.getItem('role_logiciel_eglise_catholique')




async function getstatus() {

    if (MON_STATUS == "" || MON_STATUS == null) {




        let le_user = window.localStorage.getItem('utilisateur_logiciel_eglise_catholique')

        console.log(le_user)

        if (le_user != null && le_user != "") {

            let les_donnees = new FormData()

            les_donnees.append('utilisateur', le_user)

            let data = await posttData(Routes.get_user_by_name, les_donnees)



            if (data.data_user.length == 0) {
                document.location.href = 'login.html'
            }
            else {
                data.data_user.forEach(element => {
                    // document.getElementById('nom_user_m').value = element.utilisateur
                    console.log(element.role)
                    MON_STATUS = element.role

                    if (MON_STATUS.toLocaleLowerCase() == "Administrateur".toLocaleLowerCase()) {
                        document.getElementById('menu_utilisateur').style.display = "block"
                        document.getElementById('menu_paroissien').style.display = "block"
                        document.getElementById('menu_demande_messe').style.display = "block"
                        document.getElementById('menu_finance').style.display = "block"
                    }
                    else if (MON_STATUS.toLocaleLowerCase() == "Propriétaire".toLocaleLowerCase()) {
                        document.getElementById('menu_utilisateur').style.display = "none"
                        document.getElementById('menu_paroissien').style.display = "block"
                        document.getElementById('menu_demande_messe').style.display = "block"
                        document.getElementById('menu_finance').style.display = "block"
                    }

                    else if (MON_STATUS.toLocaleLowerCase() == "Comptable".toLocaleLowerCase()) {
                        document.getElementById('menu_utilisateur').style.display = "none"
                        document.getElementById('menu_paroissien').style.display = "none"
                        document.getElementById('menu_demande_messe').style.display = "none"
                        document.getElementById('menu_finance').style.display = "block"

                    }
                    else if (MON_STATUS.toLocaleLowerCase() == "Sécretaire".toLocaleLowerCase()) {
                        document.getElementById('menu_utilisateur').style.display = "none"
                        document.getElementById('menu_paroissien').style.display = "block"
                        document.getElementById('menu_demande_messe').style.display = "block"
                        document.getElementById('menu_finance').style.display = "none"

                    }

                });

                // tous_les_paroissiens(1)
            }


        }
        else {
            document.location.href = 'login.html'
        }
    }
    // #################################
    else {
        if (MON_STATUS.toLocaleLowerCase() == "Administrateur".toLocaleLowerCase()) {
            document.getElementById('menu_utilisateur').style.display = "block"
            document.getElementById('menu_paroissien').style.display = "block"
            document.getElementById('menu_demande_messe').style.display = "block"
            document.getElementById('menu_finance').style.display = "block"
        }
        else if (MON_STATUS.toLocaleLowerCase() == "Propriétaire".toLocaleLowerCase()) {
            document.getElementById('menu_utilisateur').style.display = "none"
            document.getElementById('menu_paroissien').style.display = "block"
            document.getElementById('menu_demande_messe').style.display = "block"
            document.getElementById('menu_finance').style.display = "block"
        }

        else if (MON_STATUS.toLocaleLowerCase() == "Comptable".toLocaleLowerCase()) {
            document.getElementById('menu_utilisateur').style.display = "none"
            document.getElementById('menu_paroissien').style.display = "none"
            document.getElementById('menu_demande_messe').style.display = "none"
            document.getElementById('menu_finance').style.display = "block"

        }
        else if (MON_STATUS.toLocaleLowerCase() == "Sécretaire".toLocaleLowerCase()) {
            document.getElementById('menu_utilisateur').style.display = "none"
            document.getElementById('menu_paroissien').style.display = "block"
            document.getElementById('menu_demande_messe').style.display = "block"
            document.getElementById('menu_finance').style.display = "none"

        }
    }



}


document.getElementById('menu_finance').addEventListener('click', function (params) {
    document.location.href = 'dashbord.html'
})