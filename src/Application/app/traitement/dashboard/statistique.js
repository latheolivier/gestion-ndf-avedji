function lancer_les_calcul() {

    calcul_mois_de_janvier()

    calcul_mois_de_fevrier()
    calcul_mois_de_mars()
    calcul_mois_de_avril()
    calcul_mois_de_mai()
    calcul_mois_de_juin()
    calcul_mois_de_juillet()
    calcul_mois_de_aout()
    calcul_mois_de_septembre()
    calcul_mois_de_octobre()
    calcul_mois_de_novembre()
    calcul_mois_de_decembre()
}


var VALEUR_GRAPH = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]




setTimeout(() => {
    // VALEUR_GRAPH[1] = 10000


    // chart.updateSeries([{
    //     name: 'Statistique',
    //     data: VALEUR_GRAPH
    // },
    // ])


}, 1500);




// ############################### Graph ##################################################
// #################################################################################




var options = {

    chart: {
        // type: 'area'
        height: 320,
        type: 'bar',
        stacked: false
    },
    series: [{
        name: 'Statistique',
        data: VALEUR_GRAPH
    }],
    xaxis: {
        categories: ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre",
            "Octobre", "Novembre", "Décembre"
        ]
    }
}

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();














// ############################### janvier ##################################################
// #################################################################################









var ENTREE_MOIS_JANVIER = Array()
var SORTIE_MOIS_JANVIER = Array()





function verifier_si_calcu_janvier() {


    if (ENTREE_MOIS_JANVIER.length == 10) {
        let calcul = 0

        ENTREE_MOIS_JANVIER.forEach(element => {
            calcul = calcul + parseFloat(element)
        });

        let calcul_total = calcul - parseFloat(SORTIE_MOIS_JANVIER[0])

        VALEUR_GRAPH[0] = calcul_total


        chart.updateSeries([{
            name: 'Statistique',
            data: VALEUR_GRAPH
        },
        ])
    }
}






async function calcul_mois_de_janvier() {

    //console.log('demarrerss')
    ENTREE_MOIS_JANVIER = []

    SORTIE_MOIS_JANVIER = []






    // ################  sortir  #################

    var calcul_somme = 0
    var data = await getData(Routes.get_all_sortir)

    BASE_JANVIER.forEach(mes_dates => {
        data.all_sortir.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant)
            }
        });

    })


    SORTIE_MOIS_JANVIER.push(calcul_somme)
    // ####################################






    var calcul_somme = 0

    var data = await getData(Routes.all_messe_2 + "/" + 1)

    BASE_JANVIER.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant)
            }
        });

    })

    ENTREE_MOIS_JANVIER.push(calcul_somme)
    verifier_si_calcu_janvier()








    var calcul_somme = 0

    var data = await getData(Routes.quetes_du_dimanche + "/" + 1)

    BASE_JANVIER.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_JANVIER.push(calcul_somme)
    verifier_si_calcu_janvier()


















    var calcul_somme = 0

    var data = await getData(Routes.quete_semaine + "/" + 1)

    BASE_JANVIER.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_JANVIER.push(calcul_somme)
    verifier_si_calcu_janvier()
















    var calcul_somme = 0

    var data = await getData(Routes.quetes_ordinaires + "/" + 1)

    BASE_JANVIER.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_JANVIER.push(calcul_somme)
    verifier_si_calcu_janvier()













    var calcul_somme = 0


    var data = await getData(Routes.quetes_extraordinaires + "/" + 1)
    BASE_JANVIER.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_JANVIER.push(calcul_somme)
    verifier_si_calcu_janvier()













    var calcul_somme = 0

    var data = await getData(Routes.les_deniers_de_culte + "/" + 1)

    BASE_JANVIER.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dernier_cult)
            }
        });

    })


    ENTREE_MOIS_JANVIER.push(calcul_somme)
    verifier_si_calcu_janvier()















    var calcul_somme = 0

    var data = await getData(Routes.les_dimes + "/" + 1)




    BASE_JANVIER.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dime)
            }
        });

    })

    ENTREE_MOIS_JANVIER.push(calcul_somme)
    verifier_si_calcu_janvier()













    var calcul_somme = 0

    var data = await getData(Routes.les_don + "/" + 1)


    BASE_JANVIER.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dons)
            }
        });

    })

    ENTREE_MOIS_JANVIER.push(calcul_somme)
    verifier_si_calcu_janvier()















    var calcul_somme = 0

    var data = await getData(Routes.recette_secretaria + "/" + 1)


    BASE_JANVIER.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_secretaria)
            }
        });

    })


    ENTREE_MOIS_JANVIER.push(calcul_somme)
    verifier_si_calcu_janvier()















    var calcul_somme = 0

    var data = await getData(Routes.autres_recettes + "/" + 1)


    BASE_JANVIER.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_autre)
            }
        });

    })


    ENTREE_MOIS_JANVIER.push(calcul_somme)
    verifier_si_calcu_janvier()






    // calcul_mois_de_fevrier()


}








// ############################### fevrier  ##################################################
// #################################################################################







var ENTREE_MOIS_FEVRIER = Array()
var SORTIE_MOIS_FEVRIER = Array()





function verifier_si_calcu_fevrier() {
    //console.log(ENTREE_MOIS_FEVRIER)


    if (ENTREE_MOIS_FEVRIER.length == 10) {
        console.log(ENTREE_MOIS_FEVRIER)



        let calcul = 0

        ENTREE_MOIS_FEVRIER.forEach(element => {

            calcul = calcul + parseFloat(element)
        });


        let calcul_total = calcul - parseFloat(SORTIE_MOIS_FEVRIER[0])

        VALEUR_GRAPH[1] = calcul_total


        chart.updateSeries([{
            name: 'Statistique',
            data: VALEUR_GRAPH
        },
        ])
    }
}






async function calcul_mois_de_fevrier() {

    //console.log('demarrerss fevrier')
    ENTREE_MOIS_FEVRIER = []

    SORTIE_MOIS_FEVRIER = []






    // ################  sortir  #################

    var calcul_somme = 0
    var data = await getData(Routes.get_all_sortir)

    BASE_FEVRIER.forEach(mes_dates => {
        data.all_sortir.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant)
            }
        });

    })


    SORTIE_MOIS_FEVRIER.push(calcul_somme)
    // ####################################






    var calcul_somme = 0

    var data = await getData(Routes.all_messe_2 + "/" + 1)

    BASE_FEVRIER.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant)
            }
        });

    })

    ENTREE_MOIS_FEVRIER.push(calcul_somme)
    verifier_si_calcu_fevrier()







    var calcul_somme = 0

    var data = await getData(Routes.quetes_du_dimanche + "/" + 1)

    BASE_FEVRIER.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_FEVRIER.push(calcul_somme)
    verifier_si_calcu_fevrier()


















    var calcul_somme = 0

    var data = await getData(Routes.quete_semaine + "/" + 1)

    BASE_FEVRIER.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_FEVRIER.push(calcul_somme)
    verifier_si_calcu_fevrier()
















    var calcul_somme = 0

    var data = await getData(Routes.quetes_ordinaires + "/" + 1)

    BASE_FEVRIER.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_FEVRIER.push(calcul_somme)
    verifier_si_calcu_fevrier()













    var calcul_somme = 0


    var data = await getData(Routes.quetes_extraordinaires + "/" + 1)
    BASE_FEVRIER.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_FEVRIER.push(calcul_somme)
    verifier_si_calcu_fevrier()













    var calcul_somme = 0

    var data = await getData(Routes.les_deniers_de_culte + "/" + 1)

    BASE_FEVRIER.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dernier_cult)
            }
        });

    })


    ENTREE_MOIS_FEVRIER.push(calcul_somme)
    verifier_si_calcu_fevrier()















    var calcul_somme = 0

    var data = await getData(Routes.les_dimes + "/" + 1)




    BASE_FEVRIER.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dime)
            }
        });

    })

    ENTREE_MOIS_FEVRIER.push(calcul_somme)
    verifier_si_calcu_fevrier()













    var calcul_somme = 0

    var data = await getData(Routes.les_don + "/" + 1)


    BASE_FEVRIER.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dons)
            }
        });

    })

    ENTREE_MOIS_FEVRIER.push(calcul_somme)
    verifier_si_calcu_fevrier()















    var calcul_somme = 0

    var data = await getData(Routes.recette_secretaria + "/" + 1)


    BASE_FEVRIER.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_secretaria)
            }
        });

    })


    ENTREE_MOIS_FEVRIER.push(calcul_somme)
    verifier_si_calcu_fevrier()















    var calcul_somme = 0

    var data = await getData(Routes.autres_recettes + "/" + 1)


    BASE_FEVRIER.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_autre)
            }
        });

    })


    ENTREE_MOIS_FEVRIER.push(calcul_somme)
    verifier_si_calcu_fevrier()




    // calcul_mois_de_mars()



}





// ############################### mars  ##################################################
// #################################################################################







var ENTREE_MOIS_MARS = Array()
var SORTIE_MOIS_MARS = Array()





function verifier_si_calcu_mars() {
    //console.log(ENTREE_MOIS_MARS)

    if (ENTREE_MOIS_MARS.length == 10) {
        let calcul = 0

        ENTREE_MOIS_MARS.forEach(element => {
            calcul = calcul + parseFloat(element)
        });

        let calcul_total = calcul - parseFloat(SORTIE_MOIS_MARS[0])

        VALEUR_GRAPH[2] = calcul_total


        chart.updateSeries([{
            name: 'Statistique',
            data: VALEUR_GRAPH
        },
        ])
    }
}






async function calcul_mois_de_mars() {

    //console.log('demarrerss mars')
    ENTREE_MOIS_MARS = []

    SORTIE_MOIS_MARS = []






    // ################  sortir  #################

    var calcul_somme = 0
    var data = await getData(Routes.get_all_sortir)

    BASE_MARS.forEach(mes_dates => {
        data.all_sortir.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant)
            }
        });

    })


    SORTIE_MOIS_MARS.push(calcul_somme)
    // ####################################






    var calcul_somme = 0

    var data = await getData(Routes.all_messe_2 + "/" + 1)

    BASE_MARS.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant)
            }
        });

    })

    ENTREE_MOIS_MARS.push(calcul_somme)
    verifier_si_calcu_mars()








    var calcul_somme = 0

    var data = await getData(Routes.quetes_du_dimanche + "/" + 1)

    BASE_MARS.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_MARS.push(calcul_somme)
    verifier_si_calcu_mars()


















    var calcul_somme = 0

    var data = await getData(Routes.quete_semaine + "/" + 1)

    BASE_MARS.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_MARS.push(calcul_somme)
    verifier_si_calcu_mars()
















    var calcul_somme = 0

    var data = await getData(Routes.quetes_ordinaires + "/" + 1)

    BASE_MARS.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_MARS.push(calcul_somme)
    verifier_si_calcu_mars()













    var calcul_somme = 0


    var data = await getData(Routes.quetes_extraordinaires + "/" + 1)
    BASE_MARS.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_MARS.push(calcul_somme)
    verifier_si_calcu_mars()













    var calcul_somme = 0

    var data = await getData(Routes.les_deniers_de_culte + "/" + 1)

    BASE_MARS.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dernier_cult)
            }
        });

    })


    ENTREE_MOIS_MARS.push(calcul_somme)
    verifier_si_calcu_mars()















    var calcul_somme = 0

    var data = await getData(Routes.les_dimes + "/" + 1)




    BASE_MARS.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dime)
            }
        });

    })

    ENTREE_MOIS_MARS.push(calcul_somme)
    verifier_si_calcu_mars()













    var calcul_somme = 0

    var data = await getData(Routes.les_don + "/" + 1)


    BASE_MARS.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dons)
            }
        });

    })

    ENTREE_MOIS_MARS.push(calcul_somme)
    verifier_si_calcu_mars()















    var calcul_somme = 0

    var data = await getData(Routes.recette_secretaria + "/" + 1)


    BASE_MARS.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_secretaria)
            }
        });

    })


    ENTREE_MOIS_MARS.push(calcul_somme)
    verifier_si_calcu_mars()















    var calcul_somme = 0

    var data = await getData(Routes.autres_recettes + "/" + 1)


    BASE_MARS.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_autre)
            }
        });

    })


    ENTREE_MOIS_MARS.push(calcul_somme)
    verifier_si_calcu_mars()




    // calcul_mois_de_avril()



}





// ############################### avril  ##################################################
// #################################################################################
// ############################### avril  ##################################################
// #################################################################################
// ############################### avril  ##################################################
// #################################################################################








var ENTREE_MOIS_AVRIL = Array()
var SORTIE_MOIS_AVRIL = Array()





function verifier_si_calcu_avril() {
    //console.log(ENTREE_MOIS_AVRIL)

    if (ENTREE_MOIS_AVRIL.length == 10) {
        let calcul = 0

        ENTREE_MOIS_AVRIL.forEach(element => {
            calcul = calcul + parseFloat(element)
        });

        let calcul_total = calcul - parseFloat(SORTIE_MOIS_AVRIL[0])

        VALEUR_GRAPH[3] = calcul_total


        chart.updateSeries([{
            name: 'Statistique',
            data: VALEUR_GRAPH
        },
        ])
    }
}






async function calcul_mois_de_avril() {

    //console.log('demarrerss avrl')
    ENTREE_MOIS_AVRIL = []

    SORTIE_MOIS_AVRIL = []






    // ################  sortir  #################

    var calcul_somme = 0
    var data = await getData(Routes.get_all_sortir)

    BASE_AVRIL.forEach(mes_dates => {
        data.all_sortir.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant)
            }
        });

    })


    SORTIE_MOIS_AVRIL.push(calcul_somme)
    // ####################################






    var calcul_somme = 0

    var data = await getData(Routes.all_messe_2 + "/" + 1)

    BASE_AVRIL.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant)
            }
        });

    })

    ENTREE_MOIS_AVRIL.push(calcul_somme)
    verifier_si_calcu_avril()








    var calcul_somme = 0

    var data = await getData(Routes.quetes_du_dimanche + "/" + 1)

    BASE_AVRIL.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_AVRIL.push(calcul_somme)
    verifier_si_calcu_avril()


















    var calcul_somme = 0

    var data = await getData(Routes.quete_semaine + "/" + 1)

    BASE_AVRIL.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_AVRIL.push(calcul_somme)
    verifier_si_calcu_avril()
















    var calcul_somme = 0

    var data = await getData(Routes.quetes_ordinaires + "/" + 1)

    BASE_AVRIL.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_AVRIL.push(calcul_somme)
    verifier_si_calcu_avril()













    var calcul_somme = 0


    var data = await getData(Routes.quetes_extraordinaires + "/" + 1)
    BASE_AVRIL.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_AVRIL.push(calcul_somme)
    verifier_si_calcu_avril()













    var calcul_somme = 0

    var data = await getData(Routes.les_deniers_de_culte + "/" + 1)

    BASE_AVRIL.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dernier_cult)
            }
        });

    })


    ENTREE_MOIS_AVRIL.push(calcul_somme)
    verifier_si_calcu_avril()















    var calcul_somme = 0

    var data = await getData(Routes.les_dimes + "/" + 1)




    BASE_AVRIL.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dime)
            }
        });

    })

    ENTREE_MOIS_AVRIL.push(calcul_somme)
    verifier_si_calcu_avril()













    var calcul_somme = 0

    var data = await getData(Routes.les_don + "/" + 1)


    BASE_AVRIL.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dons)
            }
        });

    })

    ENTREE_MOIS_AVRIL.push(calcul_somme)
    verifier_si_calcu_avril()















    var calcul_somme = 0

    var data = await getData(Routes.recette_secretaria + "/" + 1)


    BASE_AVRIL.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_secretaria)
            }
        });

    })


    ENTREE_MOIS_AVRIL.push(calcul_somme)
    verifier_si_calcu_avril()















    var calcul_somme = 0

    var data = await getData(Routes.autres_recettes + "/" + 1)


    BASE_AVRIL.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_autre)
            }
        });

    })


    ENTREE_MOIS_AVRIL.push(calcul_somme)
    verifier_si_calcu_avril()




    // calcul_mois_de_mai()



}





// ############################### mai  ##################################################
// #################################################################################
// ############################### mai  ##################################################
// #################################################################################
// ############################### mai  ##################################################
// #################################################################################







var ENTREE_MOIS_MAI = Array()
var SORTIE_MOIS_MAI = Array()





function verifier_si_calcu_mai() {
    //console.log(ENTREE_MOIS_MAI)

    if (ENTREE_MOIS_MAI.length == 10) {
        let calcul = 0

        ENTREE_MOIS_MAI.forEach(element => {
            calcul = calcul + parseFloat(element)
        });

        let calcul_total = calcul - parseFloat(SORTIE_MOIS_MAI[0])

        VALEUR_GRAPH[4] = calcul_total


        chart.updateSeries([{
            name: 'Statistique',
            data: VALEUR_GRAPH
        },
        ])
    }
}






async function calcul_mois_de_mai() {

    //console.log('demarrerss  mai')
    ENTREE_MOIS_MAI = []

    SORTIE_MOIS_MAI = []






    // ################  sortir  #################

    var calcul_somme = 0
    var data = await getData(Routes.get_all_sortir)

    BASE_MAIL.forEach(mes_dates => {
        data.all_sortir.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant)
            }
        });

    })


    SORTIE_MOIS_MAI.push(calcul_somme)
    // ####################################






    var calcul_somme = 0

    var data = await getData(Routes.all_messe_2 + "/" + 1)

    BASE_MAIL.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant)
            }
        });

    })

    ENTREE_MOIS_MAI.push(calcul_somme)
    verifier_si_calcu_mai()








    var calcul_somme = 0

    var data = await getData(Routes.quetes_du_dimanche + "/" + 1)

    BASE_MAIL.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_MAI.push(calcul_somme)
    verifier_si_calcu_mai()


















    var calcul_somme = 0

    var data = await getData(Routes.quete_semaine + "/" + 1)

    BASE_MAIL.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_MAI.push(calcul_somme)
    verifier_si_calcu_mai()
















    var calcul_somme = 0

    var data = await getData(Routes.quetes_ordinaires + "/" + 1)

    BASE_MAIL.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_MAI.push(calcul_somme)
    verifier_si_calcu_mai()













    var calcul_somme = 0


    var data = await getData(Routes.quetes_extraordinaires + "/" + 1)
    BASE_MAIL.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_MAI.push(calcul_somme)
    verifier_si_calcu_mai()













    var calcul_somme = 0

    var data = await getData(Routes.les_deniers_de_culte + "/" + 1)

    BASE_MAIL.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dernier_cult)
            }
        });

    })


    ENTREE_MOIS_MAI.push(calcul_somme)
    verifier_si_calcu_mai()















    var calcul_somme = 0

    var data = await getData(Routes.les_dimes + "/" + 1)




    BASE_MAIL.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dime)
            }
        });

    })

    ENTREE_MOIS_MAI.push(calcul_somme)
    verifier_si_calcu_mai()













    var calcul_somme = 0

    var data = await getData(Routes.les_don + "/" + 1)


    BASE_MAIL.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dons)
            }
        });

    })

    ENTREE_MOIS_MAI.push(calcul_somme)
    verifier_si_calcu_mai()















    var calcul_somme = 0

    var data = await getData(Routes.recette_secretaria + "/" + 1)


    BASE_MAIL.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_secretaria)
            }
        });

    })


    ENTREE_MOIS_MAI.push(calcul_somme)
    verifier_si_calcu_mai()















    var calcul_somme = 0

    var data = await getData(Routes.autres_recettes + "/" + 1)


    BASE_MAIL.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_autre)
            }
        });

    })


    ENTREE_MOIS_MAI.push(calcul_somme)
    verifier_si_calcu_mai()



    // calcul_mois_de_juin()




}





// ############################### juin  ##################################################
// #################################################################################
// ############################### juin  ##################################################
// #################################################################################
// ############################### juin  ##################################################
// #################################################################################






var ENTREE_MOIS_JUIN = Array()
var SORTIE_MOIS_JUIN = Array()





function verifier_si_calcu_juin() {
    //console.log(ENTREE_MOIS_JUIN)

    if (ENTREE_MOIS_JUIN.length == 10) {
        let calcul = 0

        ENTREE_MOIS_JUIN.forEach(element => {
            calcul = calcul + parseFloat(element)
        });

        let calcul_total = calcul - parseFloat(SORTIE_MOIS_JUIN[0])

        VALEUR_GRAPH[5] = calcul_total


        chart.updateSeries([{
            name: 'Statistique',
            data: VALEUR_GRAPH
        },
        ])
    }
}






async function calcul_mois_de_juin() {

    //console.log('demarrerss juin')
    ENTREE_MOIS_JUIN = []

    SORTIE_MOIS_JUIN = []






    // ################  sortir  #################

    var calcul_somme = 0
    var data = await getData(Routes.get_all_sortir)

    BASE_JUIN.forEach(mes_dates => {
        data.all_sortir.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant)
            }
        });

    })


    SORTIE_MOIS_JUIN.push(calcul_somme)
    // ####################################






    var calcul_somme = 0

    var data = await getData(Routes.all_messe_2 + "/" + 1)

    BASE_JUIN.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant)
            }
        });

    })

    ENTREE_MOIS_JUIN.push(calcul_somme)
    verifier_si_calcu_juin()








    var calcul_somme = 0

    var data = await getData(Routes.quetes_du_dimanche + "/" + 1)

    BASE_JUIN.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_JUIN.push(calcul_somme)
    verifier_si_calcu_juin()


















    var calcul_somme = 0

    var data = await getData(Routes.quete_semaine + "/" + 1)

    BASE_JUIN.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_JUIN.push(calcul_somme)
    verifier_si_calcu_juin()
















    var calcul_somme = 0

    var data = await getData(Routes.quetes_ordinaires + "/" + 1)

    BASE_JUIN.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_JUIN.push(calcul_somme)
    verifier_si_calcu_juin()













    var calcul_somme = 0


    var data = await getData(Routes.quetes_extraordinaires + "/" + 1)
    BASE_JUIN.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_JUIN.push(calcul_somme)
    verifier_si_calcu_juin()













    var calcul_somme = 0

    var data = await getData(Routes.les_deniers_de_culte + "/" + 1)

    BASE_JUIN.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dernier_cult)
            }
        });

    })


    ENTREE_MOIS_JUIN.push(calcul_somme)
    verifier_si_calcu_juin()















    var calcul_somme = 0

    var data = await getData(Routes.les_dimes + "/" + 1)




    BASE_JUIN.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dime)
            }
        });

    })

    ENTREE_MOIS_JUIN.push(calcul_somme)
    verifier_si_calcu_juin()













    var calcul_somme = 0

    var data = await getData(Routes.les_don + "/" + 1)


    BASE_JUIN.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dons)
            }
        });

    })

    ENTREE_MOIS_JUIN.push(calcul_somme)
    verifier_si_calcu_juin()















    var calcul_somme = 0

    var data = await getData(Routes.recette_secretaria + "/" + 1)


    BASE_JUIN.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_secretaria)
            }
        });

    })


    ENTREE_MOIS_JUIN.push(calcul_somme)
    verifier_si_calcu_juin()















    var calcul_somme = 0

    var data = await getData(Routes.autres_recettes + "/" + 1)


    BASE_JUIN.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_autre)
            }
        });

    })


    ENTREE_MOIS_JUIN.push(calcul_somme)
    verifier_si_calcu_juin()




    // calcul_mois_de_juillet()



}




// ############################### juillet  ##################################################
// #################################################################################
// ############################### juillet  ##################################################
// #################################################################################
// ############################### juillet  ##################################################
// #################################################################################








var ENTREE_MOIS_JUILLET = Array()
var SORTIE_MOIS_JUILLET = Array()





function verifier_si_calcu_juillet() {
    //console.log(ENTREE_MOIS_JUILLET)

    if (ENTREE_MOIS_JUILLET.length == 10) {
        let calcul = 0

        ENTREE_MOIS_JUILLET.forEach(element => {
            calcul = calcul + parseFloat(element)
        });

        let calcul_total = calcul - parseFloat(SORTIE_MOIS_JUILLET[0])

        VALEUR_GRAPH[6] = calcul_total


        chart.updateSeries([{
            name: 'Statistique',
            data: VALEUR_GRAPH
        },
        ])
    }
}






async function calcul_mois_de_juillet() {

    //console.log('demarrerss juillet')
    ENTREE_MOIS_JUILLET = []

    SORTIE_MOIS_JUILLET = []






    // ################  sortir  #################

    var calcul_somme = 0
    var data = await getData(Routes.get_all_sortir)

    BASE_JUILLET.forEach(mes_dates => {
        data.all_sortir.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant)
            }
        });

    })


    SORTIE_MOIS_JUILLET.push(calcul_somme)
    // ####################################






    var calcul_somme = 0

    var data = await getData(Routes.all_messe_2 + "/" + 1)

    BASE_JUILLET.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant)
            }
        });

    })

    ENTREE_MOIS_JUILLET.push(calcul_somme)
    verifier_si_calcu_juillet()








    var calcul_somme = 0

    var data = await getData(Routes.quetes_du_dimanche + "/" + 1)

    BASE_JUILLET.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_JUILLET.push(calcul_somme)
    verifier_si_calcu_juillet()


















    var calcul_somme = 0

    var data = await getData(Routes.quete_semaine + "/" + 1)

    BASE_JUILLET.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_JUILLET.push(calcul_somme)
    verifier_si_calcu_juillet()
















    var calcul_somme = 0

    var data = await getData(Routes.quetes_ordinaires + "/" + 1)

    BASE_JUILLET.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_JUILLET.push(calcul_somme)
    verifier_si_calcu_juillet()













    var calcul_somme = 0


    var data = await getData(Routes.quetes_extraordinaires + "/" + 1)
    BASE_JUILLET.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_JUILLET.push(calcul_somme)
    verifier_si_calcu_juillet()













    var calcul_somme = 0

    var data = await getData(Routes.les_deniers_de_culte + "/" + 1)

    BASE_JUILLET.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dernier_cult)
            }
        });

    })


    ENTREE_MOIS_JUILLET.push(calcul_somme)
    verifier_si_calcu_juillet()















    var calcul_somme = 0

    var data = await getData(Routes.les_dimes + "/" + 1)




    BASE_JUILLET.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dime)
            }
        });

    })

    ENTREE_MOIS_JUILLET.push(calcul_somme)
    verifier_si_calcu_juillet()













    var calcul_somme = 0

    var data = await getData(Routes.les_don + "/" + 1)


    BASE_JUILLET.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dons)
            }
        });

    })

    ENTREE_MOIS_JUILLET.push(calcul_somme)
    verifier_si_calcu_juillet()















    var calcul_somme = 0

    var data = await getData(Routes.recette_secretaria + "/" + 1)


    BASE_JUILLET.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_secretaria)
            }
        });

    })


    ENTREE_MOIS_JUILLET.push(calcul_somme)
    verifier_si_calcu_juillet()















    var calcul_somme = 0

    var data = await getData(Routes.autres_recettes + "/" + 1)


    BASE_JUILLET.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_autre)
            }
        });

    })


    ENTREE_MOIS_JUILLET.push(calcul_somme)
    verifier_si_calcu_juillet()




    // calcul_mois_de_aout()



}





// ############################### aout  ##################################################
// #################################################################################
// ############################### aout  ##################################################
// #################################################################################
// ############################### aout  ##################################################
// #################################################################################



































var ENTREE_MOIS_AOUT = Array()
var SORTIE_MOIS_AOUT = Array()





function verifier_si_calcu_aout() {
    //console.log(ENTREE_MOIS_AOUT)

    if (ENTREE_MOIS_AOUT.length == 10) {
        let calcul = 0

        ENTREE_MOIS_AOUT.forEach(element => {
            calcul = calcul + parseFloat(element)
        });

        let calcul_total = calcul - parseFloat(SORTIE_MOIS_AOUT[0])

        VALEUR_GRAPH[7] = calcul_total


        chart.updateSeries([{
            name: 'Statistique',
            data: VALEUR_GRAPH
        },
        ])
    }
}






async function calcul_mois_de_aout() {

    //console.log('demarrerss aout')
    ENTREE_MOIS_AOUT = []

    SORTIE_MOIS_AOUT = []






    // ################  sortir  #################

    var calcul_somme = 0
    var data = await getData(Routes.get_all_sortir)

    BASE_AOUT.forEach(mes_dates => {
        data.all_sortir.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant)
            }
        });

    })


    SORTIE_MOIS_AOUT.push(calcul_somme)
    // ####################################






    var calcul_somme = 0

    var data = await getData(Routes.all_messe_2 + "/" + 1)

    BASE_AOUT.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant)
            }
        });

    })

    ENTREE_MOIS_AOUT.push(calcul_somme)
    verifier_si_calcu_aout()








    var calcul_somme = 0

    var data = await getData(Routes.quetes_du_dimanche + "/" + 1)

    BASE_AOUT.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_AOUT.push(calcul_somme)
    verifier_si_calcu_aout()


















    var calcul_somme = 0

    var data = await getData(Routes.quete_semaine + "/" + 1)

    BASE_AOUT.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_AOUT.push(calcul_somme)
    verifier_si_calcu_aout()
















    var calcul_somme = 0

    var data = await getData(Routes.quetes_ordinaires + "/" + 1)

    BASE_AOUT.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_AOUT.push(calcul_somme)
    verifier_si_calcu_aout()













    var calcul_somme = 0


    var data = await getData(Routes.quetes_extraordinaires + "/" + 1)
    BASE_AOUT.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_AOUT.push(calcul_somme)
    verifier_si_calcu_aout()













    var calcul_somme = 0

    var data = await getData(Routes.les_deniers_de_culte + "/" + 1)

    BASE_AOUT.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dernier_cult)
            }
        });

    })


    ENTREE_MOIS_AOUT.push(calcul_somme)
    verifier_si_calcu_aout()















    var calcul_somme = 0

    var data = await getData(Routes.les_dimes + "/" + 1)




    BASE_AOUT.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dime)
            }
        });

    })

    ENTREE_MOIS_AOUT.push(calcul_somme)
    verifier_si_calcu_aout()













    var calcul_somme = 0

    var data = await getData(Routes.les_don + "/" + 1)


    BASE_AOUT.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dons)
            }
        });

    })

    ENTREE_MOIS_AOUT.push(calcul_somme)
    verifier_si_calcu_aout()















    var calcul_somme = 0

    var data = await getData(Routes.recette_secretaria + "/" + 1)


    BASE_AOUT.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_secretaria)
            }
        });

    })


    ENTREE_MOIS_AOUT.push(calcul_somme)
    verifier_si_calcu_aout()















    var calcul_somme = 0

    var data = await getData(Routes.autres_recettes + "/" + 1)


    BASE_AOUT.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_autre)
            }
        });

    })


    ENTREE_MOIS_AOUT.push(calcul_somme)
    verifier_si_calcu_aout()



    // calcul_mois_de_septembre()




}





// ############################### septembre  ##################################################
// #################################################################################
// ############################### septembre  ##################################################
// #################################################################################
// ############################### septembre  ##################################################
// #################################################################################







var ENTREE_MOIS_SEPTEMBRE = Array()
var SORTIE_MOIS_SEPTEMBRE = Array()





function verifier_si_calcu_septembre() {
    //console.log(ENTREE_MOIS_SEPTEMBRE)

    if (ENTREE_MOIS_SEPTEMBRE.length == 10) {
        let calcul = 0

        ENTREE_MOIS_SEPTEMBRE.forEach(element => {
            calcul = calcul + parseFloat(element)
        });

        let calcul_total = calcul - parseFloat(SORTIE_MOIS_SEPTEMBRE[0])

        VALEUR_GRAPH[8] = calcul_total


        chart.updateSeries([{
            name: 'Statistique',
            data: VALEUR_GRAPH
        },
        ])
    }
}






async function calcul_mois_de_septembre() {

    //console.log('demarrerss septembre')
    ENTREE_MOIS_SEPTEMBRE = []

    SORTIE_MOIS_SEPTEMBRE = []






    // ################  sortir  #################

    var calcul_somme = 0
    var data = await getData(Routes.get_all_sortir)

    BASE_SEPTEMNRE.forEach(mes_dates => {
        data.all_sortir.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant)
            }
        });

    })


    SORTIE_MOIS_SEPTEMBRE.push(calcul_somme)
    // ####################################






    var calcul_somme = 0

    var data = await getData(Routes.all_messe_2 + "/" + 1)

    BASE_SEPTEMNRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant)
            }
        });

    })

    ENTREE_MOIS_SEPTEMBRE.push(calcul_somme)
    verifier_si_calcu_septembre()








    var calcul_somme = 0

    var data = await getData(Routes.quetes_du_dimanche + "/" + 1)

    BASE_SEPTEMNRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_SEPTEMBRE.push(calcul_somme)
    verifier_si_calcu_septembre()


















    var calcul_somme = 0

    var data = await getData(Routes.quete_semaine + "/" + 1)

    BASE_SEPTEMNRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_SEPTEMBRE.push(calcul_somme)
    verifier_si_calcu_septembre()
















    var calcul_somme = 0

    var data = await getData(Routes.quetes_ordinaires + "/" + 1)

    BASE_SEPTEMNRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_SEPTEMBRE.push(calcul_somme)
    verifier_si_calcu_septembre()













    var calcul_somme = 0


    var data = await getData(Routes.quetes_extraordinaires + "/" + 1)
    BASE_SEPTEMNRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_SEPTEMBRE.push(calcul_somme)
    verifier_si_calcu_septembre()













    var calcul_somme = 0

    var data = await getData(Routes.les_deniers_de_culte + "/" + 1)

    BASE_SEPTEMNRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dernier_cult)
            }
        });

    })


    ENTREE_MOIS_SEPTEMBRE.push(calcul_somme)
    verifier_si_calcu_septembre()















    var calcul_somme = 0

    var data = await getData(Routes.les_dimes + "/" + 1)




    BASE_SEPTEMNRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dime)
            }
        });

    })

    ENTREE_MOIS_SEPTEMBRE.push(calcul_somme)
    verifier_si_calcu_septembre()













    var calcul_somme = 0

    var data = await getData(Routes.les_don + "/" + 1)


    BASE_SEPTEMNRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dons)
            }
        });

    })

    ENTREE_MOIS_SEPTEMBRE.push(calcul_somme)
    verifier_si_calcu_septembre()















    var calcul_somme = 0

    var data = await getData(Routes.recette_secretaria + "/" + 1)


    BASE_SEPTEMNRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_secretaria)
            }
        });

    })


    ENTREE_MOIS_SEPTEMBRE.push(calcul_somme)
    verifier_si_calcu_septembre()















    var calcul_somme = 0

    var data = await getData(Routes.autres_recettes + "/" + 1)


    BASE_SEPTEMNRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_autre)
            }
        });

    })


    ENTREE_MOIS_SEPTEMBRE.push(calcul_somme)
    verifier_si_calcu_septembre()





    // calcul_mois_de_octobre()


}








// ############################### octobre  ##################################################
// #################################################################################
// ############################### octobre  ##################################################
// #################################################################################
// ############################### octobre  ##################################################
// #################################################################################






var ENTREE_MOIS_OCTOBRE = Array()
var SORTIE_MOIS_OCTOBRE = Array()





function verifier_si_calcu_octobre() {
    //console.log(ENTREE_MOIS_OCTOBRE)

    if (ENTREE_MOIS_OCTOBRE.length == 10) {
        let calcul = 0

        ENTREE_MOIS_OCTOBRE.forEach(element => {
            calcul = calcul + parseFloat(element)
        });

        let calcul_total = calcul - parseFloat(SORTIE_MOIS_OCTOBRE[0])

        VALEUR_GRAPH[9] = calcul_total


        chart.updateSeries([{
            name: 'Statistique',
            data: VALEUR_GRAPH
        },
        ])
    }
}






async function calcul_mois_de_octobre() {

    //console.log('demarrerss OCTOBRE')
    ENTREE_MOIS_OCTOBRE = []

    SORTIE_MOIS_OCTOBRE = []






    // ################  sortir  #################

    var calcul_somme = 0
    var data = await getData(Routes.get_all_sortir)

    BASE_OCTOBRE.forEach(mes_dates => {
        data.all_sortir.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant)
            }
        });

    })


    SORTIE_MOIS_OCTOBRE.push(calcul_somme)
    // ####################################






    var calcul_somme = 0

    var data = await getData(Routes.all_messe_2 + "/" + 1)

    BASE_OCTOBRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant)
            }
        });

    })

    ENTREE_MOIS_OCTOBRE.push(calcul_somme)
    verifier_si_calcu_octobre()








    var calcul_somme = 0

    var data = await getData(Routes.quetes_du_dimanche + "/" + 1)

    BASE_OCTOBRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_OCTOBRE.push(calcul_somme)
    verifier_si_calcu_octobre()


















    var calcul_somme = 0

    var data = await getData(Routes.quete_semaine + "/" + 1)

    BASE_OCTOBRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_OCTOBRE.push(calcul_somme)
    verifier_si_calcu_octobre()
















    var calcul_somme = 0

    var data = await getData(Routes.quetes_ordinaires + "/" + 1)

    BASE_OCTOBRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_OCTOBRE.push(calcul_somme)
    verifier_si_calcu_octobre()













    var calcul_somme = 0


    var data = await getData(Routes.quetes_extraordinaires + "/" + 1)
    BASE_OCTOBRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_OCTOBRE.push(calcul_somme)
    verifier_si_calcu_octobre()













    var calcul_somme = 0

    var data = await getData(Routes.les_deniers_de_culte + "/" + 1)

    BASE_OCTOBRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dernier_cult)
            }
        });

    })


    ENTREE_MOIS_OCTOBRE.push(calcul_somme)
    verifier_si_calcu_octobre()















    var calcul_somme = 0

    var data = await getData(Routes.les_dimes + "/" + 1)




    BASE_OCTOBRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dime)
            }
        });

    })

    ENTREE_MOIS_OCTOBRE.push(calcul_somme)
    verifier_si_calcu_octobre()













    var calcul_somme = 0

    var data = await getData(Routes.les_don + "/" + 1)


    BASE_OCTOBRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dons)
            }
        });

    })

    ENTREE_MOIS_OCTOBRE.push(calcul_somme)
    verifier_si_calcu_octobre()















    var calcul_somme = 0

    var data = await getData(Routes.recette_secretaria + "/" + 1)


    BASE_OCTOBRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_secretaria)
            }
        });

    })


    ENTREE_MOIS_OCTOBRE.push(calcul_somme)
    verifier_si_calcu_octobre()















    var calcul_somme = 0

    var data = await getData(Routes.autres_recettes + "/" + 1)


    BASE_OCTOBRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_autre)
            }
        });

    })


    ENTREE_MOIS_OCTOBRE.push(calcul_somme)
    verifier_si_calcu_octobre()





    // calcul_mois_de_novembre()


}






// ############################### novembre  ##################################################
// #################################################################################
// ############################### novembre  ##################################################
// #################################################################################
// ############################### novembre  ##################################################
// #################################################################################






var ENTREE_MOIS_NOVEMBRE = Array()
var SORTIE_MOIS_NOVEMBRE = Array()





function verifier_si_calcu_novembre() {
    //console.log(ENTREE_MOIS_NOVEMBRE)

    if (ENTREE_MOIS_NOVEMBRE.length == 10) {
        let calcul = 0

        ENTREE_MOIS_NOVEMBRE.forEach(element => {
            calcul = calcul + parseFloat(element)
        });

        let calcul_total = calcul - parseFloat(SORTIE_MOIS_NOVEMBRE[0])

        VALEUR_GRAPH[10] = calcul_total


        chart.updateSeries([{
            name: 'Statistique',
            data: VALEUR_GRAPH
        },
        ])
    }
}






async function calcul_mois_de_novembre() {

    //console.log('demarrerss novemvre')
    ENTREE_MOIS_NOVEMBRE = []

    SORTIE_MOIS_NOVEMBRE = []






    // ################  sortir  #################

    var calcul_somme = 0
    var data = await getData(Routes.get_all_sortir)

    BASE_NOVEMBRE.forEach(mes_dates => {
        data.all_sortir.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant)
            }
        });

    })


    SORTIE_MOIS_NOVEMBRE.push(calcul_somme)
    // ####################################






    var calcul_somme = 0

    var data = await getData(Routes.all_messe_2 + "/" + 1)

    BASE_NOVEMBRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant)
            }
        });

    })

    ENTREE_MOIS_NOVEMBRE.push(calcul_somme)
    verifier_si_calcu_novembre()








    var calcul_somme = 0

    var data = await getData(Routes.quetes_du_dimanche + "/" + 1)

    BASE_NOVEMBRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_NOVEMBRE.push(calcul_somme)
    verifier_si_calcu_novembre()


















    var calcul_somme = 0

    var data = await getData(Routes.quete_semaine + "/" + 1)

    BASE_NOVEMBRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_NOVEMBRE.push(calcul_somme)
    verifier_si_calcu_novembre()
















    var calcul_somme = 0

    var data = await getData(Routes.quetes_ordinaires + "/" + 1)

    BASE_NOVEMBRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_NOVEMBRE.push(calcul_somme)
    verifier_si_calcu_novembre()













    var calcul_somme = 0


    var data = await getData(Routes.quetes_extraordinaires + "/" + 1)
    BASE_NOVEMBRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_NOVEMBRE.push(calcul_somme)
    verifier_si_calcu_novembre()













    var calcul_somme = 0

    var data = await getData(Routes.les_deniers_de_culte + "/" + 1)

    BASE_NOVEMBRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dernier_cult)
            }
        });

    })


    ENTREE_MOIS_NOVEMBRE.push(calcul_somme)
    verifier_si_calcu_novembre()















    var calcul_somme = 0

    var data = await getData(Routes.les_dimes + "/" + 1)




    BASE_NOVEMBRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dime)
            }
        });

    })

    ENTREE_MOIS_NOVEMBRE.push(calcul_somme)
    verifier_si_calcu_novembre()













    var calcul_somme = 0

    var data = await getData(Routes.les_don + "/" + 1)


    BASE_NOVEMBRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dons)
            }
        });

    })

    ENTREE_MOIS_NOVEMBRE.push(calcul_somme)
    verifier_si_calcu_novembre()















    var calcul_somme = 0

    var data = await getData(Routes.recette_secretaria + "/" + 1)


    BASE_NOVEMBRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_secretaria)
            }
        });

    })


    ENTREE_MOIS_NOVEMBRE.push(calcul_somme)
    verifier_si_calcu_novembre()















    var calcul_somme = 0

    var data = await getData(Routes.autres_recettes + "/" + 1)


    BASE_NOVEMBRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_autre)
            }
        });

    })


    ENTREE_MOIS_NOVEMBRE.push(calcul_somme)
    verifier_si_calcu_novembre()




    // calcul_mois_de_decembre()



}





// ############################### decembre  ##################################################
// #################################################################################
// ############################### decembre  ##################################################
// #################################################################################
// ############################### decembre  ##################################################
// #################################################################################






var ENTREE_MOIS_DECEMBRE = Array()
var SORTIE_MOIS_DECEMBRE = Array()





function verifier_si_calcu_decembre() {
    //console.log(ENTREE_MOIS_DECEMBRE)

    if (ENTREE_MOIS_DECEMBRE.length == 10) {
        let calcul = 0

        ENTREE_MOIS_DECEMBRE.forEach(element => {
            calcul = calcul + parseFloat(element)
        });

        let calcul_total = calcul - parseFloat(SORTIE_MOIS_DECEMBRE[0])

        VALEUR_GRAPH[11] = calcul_total


        chart.updateSeries([{
            name: 'Statistique',
            data: VALEUR_GRAPH
        },
        ])
    }
}






async function calcul_mois_de_decembre() {

    //console.log('demarrerss')
    ENTREE_MOIS_DECEMBRE = []

    SORTIE_MOIS_DECEMBRE = []






    // ################  sortir  #################

    var calcul_somme = 0
    var data = await getData(Routes.get_all_sortir)

    BASE_DECEMBRE.forEach(mes_dates => {
        data.all_sortir.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant)
            }
        });

    })


    SORTIE_MOIS_DECEMBRE.push(calcul_somme)
    // ####################################






    var calcul_somme = 0

    var data = await getData(Routes.all_messe_2 + "/" + 1)

    BASE_DECEMBRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant)
            }
        });

    })

    ENTREE_MOIS_DECEMBRE.push(calcul_somme)
    verifier_si_calcu_decembre()








    var calcul_somme = 0

    var data = await getData(Routes.quetes_du_dimanche + "/" + 1)

    BASE_DECEMBRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_DECEMBRE.push(calcul_somme)
    verifier_si_calcu_decembre()


















    var calcul_somme = 0

    var data = await getData(Routes.quete_semaine + "/" + 1)

    BASE_DECEMBRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_DECEMBRE.push(calcul_somme)
    verifier_si_calcu_decembre()
















    var calcul_somme = 0

    var data = await getData(Routes.quetes_ordinaires + "/" + 1)

    BASE_DECEMBRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_DECEMBRE.push(calcul_somme)
    verifier_si_calcu_decembre()













    var calcul_somme = 0


    var data = await getData(Routes.quetes_extraordinaires + "/" + 1)
    BASE_DECEMBRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.totals)
            }
        });

    })

    ENTREE_MOIS_DECEMBRE.push(calcul_somme)
    verifier_si_calcu_decembre()













    var calcul_somme = 0

    var data = await getData(Routes.les_deniers_de_culte + "/" + 1)

    BASE_DECEMBRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dernier_cult)
            }
        });

    })


    ENTREE_MOIS_DECEMBRE.push(calcul_somme)
    verifier_si_calcu_decembre()















    var calcul_somme = 0

    var data = await getData(Routes.les_dimes + "/" + 1)




    BASE_DECEMBRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dime)
            }
        });

    })

    ENTREE_MOIS_DECEMBRE.push(calcul_somme)
    verifier_si_calcu_decembre()













    var calcul_somme = 0

    var data = await getData(Routes.les_don + "/" + 1)


    BASE_DECEMBRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_dons)
            }
        });

    })

    ENTREE_MOIS_DECEMBRE.push(calcul_somme)
    verifier_si_calcu_decembre()















    var calcul_somme = 0

    var data = await getData(Routes.recette_secretaria + "/" + 1)


    BASE_DECEMBRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_secretaria)
            }
        });

    })


    ENTREE_MOIS_DECEMBRE.push(calcul_somme)
    verifier_si_calcu_decembre()















    var calcul_somme = 0

    var data = await getData(Routes.autres_recettes + "/" + 1)


    BASE_DECEMBRE.forEach(mes_dates => {
        data.data.forEach(element => {
            if (mes_dates == element.dates) {
                calcul_somme = calcul_somme + parseInt(element.montant_autre)
            }
        });

    })


    ENTREE_MOIS_DECEMBRE.push(calcul_somme)
    verifier_si_calcu_decembre()








}


