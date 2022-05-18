fetch('script/music.json')
.then(response => response.json())

.then(data => {
    data.results.forEach(element => {
        toutlesimages.innerHTML += `


        
           
                <div class="col-lg-3 col-sm-6 bordercss shadow p-3 m-2 mb-5 bg-body rounded">
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
                            <a class=" mt-3 pt-1 btn btn-dark" href="#">Ajouter aupanier <i class="bi bi-bag ps-2"></i></a>
                        </div>
                        </div>
                        
                    </div>
                </div>
            
       
        
        `
    });
})
