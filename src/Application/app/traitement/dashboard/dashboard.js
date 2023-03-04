$(document).ready(function () {

    finance_de_annee()
    finance_du_mois_actuelle()

    // finance_sortir_du_mois_actuelle()


});




document.getElementById('btn_deconnexion').addEventListener('click', function (params) {

    document.location.href = 'login.html'

})



var BASE_DATE_MOIS_SI = []
var LISTE_POSITION = []






const mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]

function frenchTodayDate(donnee) {

    let today = new Date(donnee);
    let year = today.getFullYear()
    let dayNumber = today.getDate()
    let month = mois[today.getMonth()]
    let weekday = today.toLocaleDateString("fr-FR", { weekday: "long" });

    return { weekday, dayNumber, month, year }
}




function les_mois_a_afficher(la_date) {

    let recherche = LISTE_POSITION.filter(function (item) {
        return item == la_date
    })

    if (recherche.length == 0) {
        LISTE_POSITION.push(la_date)
    }
    else {
        // LISTE_POSITION = LISTE_POSITION.filter(function (item) {
        //     return item !== la_date
        // })
    }

}



function finance_du_mois_actuelle() {




    let capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase();
    let { weekday, dayNumber, month, year } = frenchTodayDate(new Date())
    // let aujourdhui = `${capitalize(weekday)}, le ${dayNumber} ${month} ${year}`
    let aujourdhui = `  ${month} ${year}`

    document.getElementById('statisque_du_mois').innerHTML = "Résultat du mois de " + aujourdhui

    // console.log(aujourdhui)



    // document.getElementById('le_mois_de_filtre').innerHTML = "Mois de " + aujourdhui
    // document.getElementById('date_impession').innerHTML = "Mois de " + aujourdhui





    LISTE_POSITION = []
    BASE_DATE_MOIS_SI = []

    let le_mois = get_mois() - 1
    let le_annaa = get_annee()



    let recuperer_lesèjours = getDaysInMonth(le_mois, le_annaa)

    recuperer_lesèjours.forEach(element => {
        let date_formate = dateRell_1(element)
        BASE_DATE_MOIS_SI.push(date_formate)

        let les_mois = date_formate.substring(3, 5)
        // console.log(les_mois)
        les_mois_a_afficher(les_mois)

    });


    // await tous_les_qute_dimanche()


    lancer_calcul()


}




function getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    // console.log(date)
    var days = [];
    while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    return days;
}



function get_mois() {
    // body...
    var date = new Date();

    var moi = date.getMonth() + 1;
    if (moi == 1 || moi == 2 || moi == 3 || moi == 4 || moi == 5 || moi == 6 || moi == 7 || moi == 8 || moi == 9) {
        // var mois = "0" + moi;
        var mois = moi;
    }
    else {
        var mois = moi;
    }

    return mois;
}


function get_annee() {
    // body...
    var date = new Date();
    var annee = date.getFullYear();
    return annee;
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
    var laDate = jours + "/" + mois + "/" + annee;
    return laDate;
}




function lancer_calcul() {
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


    les_sortir()
}



// #################################################################################
// #################################################################################
// #################################################################################
// #################################################################################


var BASE_JANVIER = []
var BASE_FEVRIER = []
var BASE_MARS = []
var BASE_AVRIL = []
var BASE_MAIL = []
var BASE_JUIN = []
var BASE_JUILLET = []
var BASE_AOUT = []
var BASE_SEPTEMNRE = []
var BASE_OCTOBRE = []
var BASE_NOVEMBRE = []
var BASE_DECEMBRE = []


var LES_MOIS_DE_ANNEE = Array(
    "2023-01-01",
    "2023-02-01",
    "2023-03-01",
    "2023-04-01",
    "2023-05-01",
    "2023-06-01",
    "2023-07-01",
    "2023-08-01",
    "2023-09-01",
    "2023-10-01",
    "2023-11-01",
    "2023-12-01",
)


function finance_de_annee() {
    BASE_JANVIER = []
    LES_MOIS_DE_ANNEE.forEach(element => {
        // console.log(element)
        finance_du_mois_actuelle_2(element)
    });
}



function finance_du_mois_actuelle_2(la_date) {

    let capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase();
    let { weekday, dayNumber, month, year } = frenchTodayDate(new Date(la_date))
    // let aujourdhui = `${capitalize(weekday)}, le ${dayNumber} ${month} ${year}`
    let aujourdhui = `  ${month} ${year}`



    // console.log(aujourdhui)
    // document.getElementById('le_mois_de_filtre').innerHTML = "Mois de " + aujourdhui
    // document.getElementById('date_impession').innerHTML = "Mois de " + aujourdhui




    let le_mois = new Date(la_date).getMonth()
    let le_annaa = new Date(la_date).getFullYear()



    let recuperer_lesèjours = getDaysInMonth(le_mois, le_annaa)

    recuperer_lesèjours.forEach(element => {
        let date_formate = dateRell_1(element)



        if (month == "janvier") { BASE_JANVIER.push(date_formate) }

        if (month == "février") { BASE_FEVRIER.push(date_formate) }

        if (month == "mars") { BASE_MARS.push(date_formate) }

        if (month == "avril") { BASE_AVRIL.push(date_formate) }

        if (month == "mai") { BASE_MAIL.push(date_formate) }

        if (month == "juin") { BASE_JUIN.push(date_formate) }

        if (month == "juillet") { BASE_JUILLET.push(date_formate) }

        if (month == "août") { BASE_AOUT.push(date_formate) }

        if (month == "septembre") { BASE_SEPTEMNRE.push(date_formate) }

        if (month == "octobre") { BASE_OCTOBRE.push(date_formate) }

        if (month == "novembre") { BASE_NOVEMBRE.push(date_formate) }

        if (month == "décembre") { BASE_DECEMBRE.push(date_formate) }

        // BASE_DATE_MOIS_SI.push(date_formate)

        // let les_mois = date_formate.substring(3, 5)
        // // console.log(les_mois)
        // les_mois_a_afficher(les_mois)

    });


    if (month == "décembre") {
        console.log('fini')

        lancer_les_calcul()


        // console.log(BASE_JANVIER)
        // console.log(BASE_FEVRIER)
        // console.log(BASE_MARS)
        // console.log(BASE_AVRIL)
        // console.log(BASE_MAIL)
        // console.log(BASE_JUIN)
        // console.log(BASE_JUILLET)
        // console.log(BASE_AOUT)
        // console.log(BASE_SEPTEMNRE)
        // console.log(BASE_OCTOBRE)
        // console.log(BASE_NOVEMBRE)
        // console.log(BASE_DECEMBRE)
    }

    // lancer_calcul()

}










