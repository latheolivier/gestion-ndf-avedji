

$(document).ready(async function () {
    tous_les_messe_historique()
    tous_les_qute_dimanche_historique()
    quete_semaine_historique()
    quete_ordinaire_historique()
    quete_extraordinaire_historique()
    dernier_de_cu_historiquelte()
    les_dimes_historique()


    les_dons_historique()
    recette_secretaria_historique()
    autre_recette_historique()
});





document.getElementById('all_historique').addEventListener('click', function (params) {
    document.getElementById('contenneir_1').style.display = "block"
    document.getElementById('contenneir_2').style.display = "none"

    tous_les_messe_historique()
    tous_les_qute_dimanche_historique()
    quete_semaine_historique()
    quete_ordinaire_historique()
    quete_extraordinaire_historique()
    dernier_de_cu_historiquelte()
    les_dimes_historique()


    les_dons_historique()
    recette_secretaria_historique()
    autre_recette_historique()
})











async function tous_les_messe_historique() {


    let data = await getData(Routes.all_messe_2 + "/" + 1)


    document.getElementById('tous_les_messe_historique').innerHTML = ""


    data.data.forEach(element => {



        let row = `
                        <tr >
                        <td>   ${element.dates}     </td>
                        <td>   ${element.type_de_messe}     </td>
                         <td>${element.nom_paroissien}</td>
                         <td>${element.montant} Fcfa</td>
                         
                    </tr>
                        `

        document.getElementById('tous_les_messe_historique').innerHTML += row
    });










}















async function tous_les_qute_dimanche_historique() {


    let data = await getData(Routes.quetes_du_dimanche + "/" + 1)




    document.getElementById('tous_les_qute_dimanche_historique').innerHTML = ""


    data.data.forEach(element => {


        let row = `
                    <tr style="cursor: pointer;"  >
                    <td  >${element.dates}</td>
                    <td  >Les quêtes du dimanche</td>
                    <td>${element.totals} Fcfa</td>
                 </tr>
                 
                        `

        document.getElementById('tous_les_qute_dimanche_historique').innerHTML += row
    });




}
















async function quete_semaine_historique() {


    let data = await getData(Routes.quete_semaine + "/" + 1)


    document.getElementById('quete_semaine_historique').innerHTML = ""

    data.data.forEach(element => {


        let row = `
                    <tr style="cursor: pointer;"  >
                    <td  >${element.dates}</td>
                    <td  >Les quêtes de la semaine</td>
                    <td>${element.totals} Fcfa</td>
                 </tr>
                 
                        `

        document.getElementById('quete_semaine_historique').innerHTML += row
    });






}












async function quete_ordinaire_historique() {


    let data = await getData(Routes.quetes_ordinaires + "/" + 1)





    document.getElementById('quete_ordinaire_historique').innerHTML = ""


    data.data.forEach(element => {


        let row = `
                    <tr style="cursor: pointer;"  >
                    <td  >${element.dates}</td>
                    <td  >Quêtes ordinaires des fête</td>
                    <td>${element.totals} Fcfa</td>
                 </tr>
                 
                        `

        document.getElementById('quete_ordinaire_historique').innerHTML += row
    });



}












async function quete_extraordinaire_historique() {


    let data = await getData(Routes.quetes_extraordinaires + "/" + 1)

    document.getElementById('quete_extraordinaire_historique').innerHTML = ""


    data.data.forEach(element => {


        let row = `
                    <tr  >
                    <td  >${element.dates}</td>
                    <td  >Quêtes extraordinaires </td>
                    <td>${element.totals} Fcfa</td>
                 </tr>
                 
                        `

        document.getElementById('quete_extraordinaire_historique').innerHTML += row
    });



}












async function dernier_de_cu_historiquelte() {

    let data = await getData(Routes.les_deniers_de_culte + "/" + 1)



    document.getElementById('dernier_de_cu_historiquelte').innerHTML = ""


    data.data.forEach(element => {


        let row = `
                    <tr  >
                    <td  >${element.dates}</td>
                    <td  >${element.donateur_dernier_cult}</td>
                    <td>${element.montant_dernier_cult} Fcfa</td> 
                 </tr>
                 
                        `

        document.getElementById('dernier_de_cu_historiquelte').innerHTML += row
    });



}












async function les_dimes_historique() {


    let data = await getData(Routes.les_dimes + "/" + 1)





    document.getElementById('les_dimes_historique').innerHTML = ""


    data.data.forEach(element => {


        let row = `
                    <tr  >
                    <td  >${element.dates}</td>
                    <td  >${element.nom_donateur_dime}</td>
                    <td>${element.montant_dime} Fcfa</td> 
                 </tr>
                 
                        `

        document.getElementById('les_dimes_historique').innerHTML += row
    });



}












async function les_dons_historique() {

    let data = await getData(Routes.les_don + "/" + 1)



    document.getElementById('les_dons_historique').innerHTML = ""


    data.data.forEach(element => {


        let row = `
                    <tr  >
                    <td  >${element.dates}</td>
                    <td  >${element.nom_donateur_dons}</td>
                    <td>${element.montant_dons} Fcfa</td> 
                 </tr>
                 
                        `

        document.getElementById('les_dons_historique').innerHTML += row
    });




}












async function recette_secretaria_historique() {

    let data = await getData(Routes.recette_secretaria + "/" + 1)



    document.getElementById('recette_secretaria_historique').innerHTML = ""


    data.data.forEach(element => {


        let row = `
                    <tr  >
                    <td  >${element.dates} </td>
                    <td  >${element.rapport_secretaria}</td>
                    <td>${element.montant_secretaria}  Fcfa</td>
                 </tr>
                 
                        `

        document.getElementById('recette_secretaria_historique').innerHTML += row
    });




}












async function autre_recette_historique() {


    let data = await getData(Routes.autres_recettes + "/" + 1)
    document.getElementById('autre_recette_historique').innerHTML = ""
    data.data.forEach(element => {


        let row = `
                    <tr    >
                    <td  >${element.dates} </td>
                    <td  >${element.rapport_autre}</td>
                    <td>${element.montant_autre}  Fcfa</td>
                 </tr>
                 
                        `

        document.getElementById('autre_recette_historique').innerHTML += row
    });





}






