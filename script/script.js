fetch('script/music.json')
    .then(response => response.json())

    .then(data => {
        data.results.forEach(element => {
            toutlesimages.innerHTML += `


        
           
                <div data-type="${element.plateform}" class="col-lg-3 col-sm-6 bordercss shadow p-3 m-2 mb-5 bg-body rounded" id="apparait">
                    <img src="img/${element.img}.jpg" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class=" card-title text-start fs-4 m-2 p-3">${element.titre}</h5>
                        <p class=" text-center">Date de Sortie: ${element.date_de_sortie}</p>
                        <p class="card m-2 p-2 fs-">${element.info}</p> 
                        <p class= "text-center pt-2 fs-3">Prix : ${element.prix}€</p>
                        <div class="row ">
                        <div class="col ">
                        <div class="mt-3 pt-2">
                        reference:${element.reference}
                        </div>
                        </div>
                        <div class="col d-flex justify-content-end">
                            <a class=" mt-3 pt-1 btn btn-dark" href="#" onclick="ajoutepanier('${element.prix},${element.img},${element.reference},${element.titre},${element.info},${element.quantite}')">Ajouter aupanier <i class="bi bi-bag ps-2"></i></a>
                        </div>
                        </div>
                        
                    </div>
                </div>
        
        
        `
        });
    })

let boutonSingle = document.getElementById('boutonSingle')
let boutonVinyle = document.getElementById('boutonVinyle')


boutonSingle.addEventListener("click", () => {
    const vinyle = document.querySelectorAll("[data-type='vinyle']")
    const single = document.querySelectorAll("[data-type='cd']")

    vinyle.forEach(element => {
        console.log(element);
        element.style.display = 'none'
    })

    single.forEach(element => {
        element.style.display = 'block'
    })

})



boutonVinyle.addEventListener("click", () => {
    const vinyle = document.querySelectorAll("[data-type='vinyle']")
    const single = document.querySelectorAll("[data-type='cd']")

    vinyle.forEach(element => {
        console.log(element);
        element.style.display = 'block'
        console.log(vinyle)
    })

    single.forEach(element => {
        element.style.display = 'none'
    })
})


let monTotal = 0
let montableau = []

function pushPanier(test) {
    montableau.push(test)
}

// ajoute au panier 
function ajoutepanier(element) {
    let index = 0

    let donnee = element.split(',')
    // let apparait = document.getElementById('apparait')

    // div qui ajoute dans le panier 
    let myajoute = document.getElementById('myajoute')

    if (montableau.indexOf(donnee[2]) < 0) {
       

        myajoute.innerHTML +=
            `
                    <tr class="align-middle" id="chiffre-${index}">
                    <td><img class="img-panier" src='img/${donnee[1]}.jpg'  alt=""></td>
                    <td id="maRef${donnee[2]}">${donnee[2]}</td>
                    <td>${donnee[3]}</td>
                    <td>${donnee[4]}</td>
                    <td id="maQuantite${donnee[2]}">${donnee[5]}</td>
                    <td id="monPrix${donnee[2]}">${donnee[0]}€</td>
                    <td id="monSoustotal${donnee[2]}"></td>
                    <td><button type="button" class="btn-close border border-dark text text-end" aria-label="Close" onclick="supprimer('chiffre-${index}')"></button></td>
                </tr>
         `       

        pushPanier(donnee[2])
        monsoustotal(donnee[2])
    } else {
        let maQuantite = document.getElementById("maQuantite" + donnee[2])
        let ancien = maQuantite.innerText
        let nouvelle = Number(ancien)+1
        maQuantite.innerHTML= nouvelle
         monsoustotal(donnee[2])

    }
    index++
    monTotal += Number(donnee[0])
    document.getElementById('myTotal').innerHTML= monTotal
}


function monsoustotal(reference){

    let maQuantite = document.getElementById ('maQuantite' + reference)
    let monSoustotal = document.getElementById('monSoustotal' + reference)
    let monPrix = document.getElementById('monPrix' + reference)
    let result = parseFloat(maQuantite.innerText) * parseFloat(monPrix.innerText)
    monSoustotal.innerHTML=result

}











function supprimer(chiffreId) {

    let effacer = document.getElementById(chiffreId)
    montableau.splice(effacer, 1)
    effacer.remove()


}




