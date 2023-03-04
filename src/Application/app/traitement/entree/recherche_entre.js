document.getElementById('btn_reacherche').addEventListener('click', function (params) {
    $('#modal_recherche_2').modal('show')
})



var BASE_RESULTAT = []











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
    // var laDate = annee + "/" + mois + "/" + jours;
    var laDate = jours + "/" + mois + "/" + annee;
    return laDate;
}









document.getElementById('btn_recherche_periode').addEventListener('click', function (params) {
    let date_1 = document.getElementById('dates_1').value.trim()
    let date_2 = document.getElementById('dates_2').value.trim()

    BASE_RESULTAT = []


    if (date_1 == "") {
        console.log('saisissez unz adte')
    }
    else {

        if (date_1 != "" && date_2 == "") {

            let donnee = MA_BASE[0].filter((element) => {
                return element.dates == dateRell_1_2(date_1)
            }
            );

            if (donnee.length > 0) {
                BASE_RESULTAT = donnee
            }
            else {
                BASE_RESULTAT = []
            }


            afficher(BASE_RESULTAT)

        }





        else if (date_1 != "" && date_2 != "") {

            let donnee = MA_BASE[0].filter((element) => {
                console.log(element)
                let x = date_1.split('/').reverse().join('-');
                let x_2 = date_2.split('/').reverse().join('-');

                let dat_1 = element.dates.split('/').reverse().join('-');



                console.log(date_1)
                console.log(x_2)
                console.log(dat_1)

                return new Date(dat_1) >= new Date(x) && new Date(dat_1) <= new Date(x_2)

            }
            );

            if (donnee.length > 0) {
                BASE_RESULTAT = donnee
            }
            else {
                BASE_RESULTAT = []
            }


            afficher(BASE_RESULTAT)
        }
    }


})






function afficher(data) {

    console.log(data)
    document.getElementById('dates_1').value = ""
    document.getElementById('dates_2').value = ""
    $('#modal_recherche_2').modal('hide')






    let type_entree = document.getElementById('type_entree').value

    if (type_entree == 'qute_dimanche') {
        tous_les_qute_dimanche_2(data)
    }
    if (type_entree == 'quete_semaine') {
        quete_semaine_2(data)
    }
    if (type_entree == 'quete_ordinaire') {
        quete_ordinaire_2(data)
    }

    if (type_entree == 'quete_extraordinaire') {
        quete_extraordinaire_2(data)
    }
    if (type_entree == 'dernier_de_culte') {
        dernier_de_culte_2(data)
    }
    if (type_entree == 'les_dimes') {
        les_dimes_2(data)
    }
    if (type_entree == 'les_dons') {
        les_dons_2(data)
    }
    if (type_entree == 'recette_secretaria') {
        recette_secretaria_2(data)
    }
    if (type_entree == 'autre_recette') {
        autre_recette_2(data)
    }





}






















function tous_les_qute_dimanche_2(data) {

    // MA_BASE = []
    document.getElementById('my_thead').innerHTML = `
            <tr>
                <th style="color: white;border: none !important;">Dates</th>
                <th style="color: white;border: none !important;">Type de quete</th>
                <th style="color: white;border: none !important;">Total </th>
            </tr>
    `

    if (data.length > 0) {
        // document.getElementById('total_paroissien').innerHTML = "Total (s) messe (s) : " + response.data.length

        document.getElementById('content_les_messes').innerHTML = ""


        data.forEach(element => {


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



}
















function quete_semaine_2(data) {

    // MA_BASE = []
    document.getElementById('my_thead').innerHTML = `
            <tr>
                <th style="color: white;border: none !important;">Dates</th>
                <th style="color: white;border: none !important;">Type de quete</th>
                <th style="color: white;border: none !important;">Total </th>
            </tr>
    `


    if (data.length > 0) {
        // document.getElementById('total_paroissien').innerHTML = "Total (s) messe (s) : " + data.length

        document.getElementById('content_les_messes').innerHTML = ""


        data.forEach(element => {


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



}












function quete_ordinaire_2(data) {

    // MA_BASE = []
    document.getElementById('my_thead').innerHTML = `
            <tr>
                <th style="color: white;border: none !important;">Dates</th>
                <th style="color: white;border: none !important;">Type de quete</th>
                <th style="color: white;border: none !important;">Total </th>
            </tr>
    `


    if (data.length > 0) {
        // document.getElementById('total_paroissien').innerHTML = "Total (s) messe (s) : " + data.length

        document.getElementById('content_les_messes').innerHTML = ""


        data.forEach(element => {


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



}












function quete_extraordinaire_2(data) {

    // MA_BASE = []

    document.getElementById('my_thead').innerHTML = `
            <tr>
                <th style="color: white;border: none !important;">Dates</th>
                <th style="color: white;border: none !important;">Type de quete</th>
                <th style="color: white;border: none !important;">Total </th>
            </tr>
    `


    if (data.length > 0) {
        // document.getElementById('total_paroissien').innerHTML = "Total (s) messe (s) : " + response.data.length

        document.getElementById('content_les_messes').innerHTML = ""


        data.forEach(element => {


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



}












function dernier_de_culte_2(data) {

    // MA_BASE = []
    document.getElementById('my_thead').innerHTML = `
            <tr>
                <th style="color: white;border: none !important;">Dates</th>
                <th style="color: white;border: none !important;">Donateur</th>
                <th style="color: white;border: none !important;">Montant </th>
            </tr>
    `


    if (data.length > 0) {
        // document.getElementById('total_paroissien').innerHTML = "Total (s) messe (s) : " + response.data.length

        document.getElementById('content_les_messes').innerHTML = ""


        data.forEach(element => {


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



}












function les_dimes_2(data) {

    // MA_BASE = []
    document.getElementById('my_thead').innerHTML = `
            <tr>
            <th style="color: white;border: none !important;">Dates</th>
            <th style="color: white;border: none !important;">Donateur</th>
            <th style="color: white;border: none !important;">Montant </th>
            </tr>
    `

    if (data.length > 0) {
        // document.getElementById('total_paroissien').innerHTML = "Total (s) messe (s) : " + response.data.length

        document.getElementById('content_les_messes').innerHTML = ""


        data.forEach(element => {


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



}












function les_dons_2(data) {

    // MA_BASE = []
    document.getElementById('my_thead').innerHTML = `
            <tr>
            <th style="color: white;border: none !important;">Dates</th>
            <th style="color: white;border: none !important;">Donateur</th>
            <th style="color: white;border: none !important;">Montant </th>
            </tr>
    `

    if (data.length > 0) {
        // document.getElementById('total_paroissien').innerHTML = "Total (s) messe (s) : " + response.data.length

        document.getElementById('content_les_messes').innerHTML = ""


        data.forEach(element => {


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



}












function recette_secretaria_2(data) {

    // MA_BASE = []

    document.getElementById('my_thead').innerHTML = `
            <tr>
                <th style="color: white;border: none !important;">Dates</th>
                <th style="color: white;border: none !important;">Rapport</th>
                <th style="color: white;border: none !important;">Montant </th>
            </tr>
    `

    if (data.length > 0) {
        // document.getElementById('total_paroissien').innerHTML = "Total (s) messe (s) : " + response.data.length

        document.getElementById('content_les_messes').innerHTML = ""


        data.forEach(element => {


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




}












function autre_recette_2(data) {

    // MA_BASE = []
    document.getElementById('my_thead').innerHTML = `
            <tr>
            <th style="color: white;border: none !important;">Dates</th>
            <th style="color: white;border: none !important;">Rapport</th>
            <th style="color: white;border: none !important;">Montant </th>
            </tr>
    `

    if (data.length > 0) {
        // document.getElementById('total_paroissien').innerHTML = "Total (s) messe (s) : " + response.data.length

        document.getElementById('content_les_messes').innerHTML = ""


        data.forEach(element => {


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
    }




}











// #################  les fonction display #################
// #################  les fonction display #################
// #################  les fonction display #################



