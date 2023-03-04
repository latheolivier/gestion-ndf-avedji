// ##########  spinner loading  ############
// ##########  spinner loading  ############

function spinner_table(div, nbr_colaps) {
    let row = `
            <tr>
                <td colspan="${nbr_colaps}" >
                <div class="spinner-border spinner-border-lg text-primary" role="status">
                     <span class="visually-hidden">Loading...</span>
                 </div>
                  </td>
            </tr>
    `
    document.getElementById(div).innerHTML = row
}



// ##########  spinner configuration  ############
// ##########  spinner configuration  ############

function spinner_content(div) {
    let row = `
             
                <div class="spinner-border spinner-border-sm text-primary" role="status">
                     <span class="visually-hidden">Loading...</span>
                 </div>
                
    `
    document.getElementById(div).innerHTML = row
}




// ##########  empty comtent  ############
// ##########  empty comtent  ############


function donnee_vide(div, nbr_colaps) {
    let row = `
            <tr>
                <td colspan="${nbr_colaps}" >
                 Pas de donnée
                  </td>
            </tr>
    `
    document.getElementById(div).innerHTML = row
}


// ##########  vider comtent  ############
// ##########  vider comtent  ############


function vider_div(div) {
    document.getElementById(div).innerHTML = ""
}