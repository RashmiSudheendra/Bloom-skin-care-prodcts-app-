async function getHairCareData(){
    let data= await fetch("products.json")
    let res = await data.json()
    // console.log(res)
    console.log(res);
    // dryskinprod(res);
    hairCareprod(res);
}

getHairCareData()

{

    let proddispdiv=document.getElementById("proddispdiv");
    function hairCareprod(product){
        
        proddispdiv.innerHTML=""
        console.log(product)
        product.filter((element)=>{if(element.category=="Hair"){
            var proddiv = document.createElement('div');
            proddiv.classList.add('col','prods');
            console.log(element);
            console.log(element.image);
            proddiv.innerHTML=`
            <div class="col prods h-100">
                <div class="card h-100">
                <img src="${element.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="row justify-content-evenly align-items-end">
                        <div class=" col-6 w-100 mb-2 d-flex justify-content-between align-items-start">
                            <p class="card-title w-100 text-center fs-6 fw-bold">${element.prodName}</p>
                        </div>
                        <div class="col d-flex justify-content-around align-items-end mt-1">
                            <div class="d-flex justify-content-around align-items-end">
                                <i class="fa-solid fa-star mb-1 mx-1" id="star"></i>
                                <p class="fw-bolder text-center m-0 mx-1">4.5</p>
                            </div>
                            <div class="d-flex justify-content-around align-items-center">
                            <i class="fa-sharp fa-solid fa-bag-shopping mx-1"  id="cart"></i>
                            <p id="addCart" class="fw-bold p-2 m-0 mx-1" onclick="addToCart(${element.id})">Add to Cart</p>
                            </div>
                        </div>
                </div>
                </div>
            </div>`;
            proddispdiv.append(proddiv);
            }
        })
    }

}


var itemsCart = document.getElementById("itemsCart")

async function addToCart(id){
    let data= await fetch("products.json")
    let products = await data.json()
    // console.log(products)
    var item = products.filter((product)=>product.id == id)
    cart.push(item);
    console.log(cart);
    itemsCart.innerHTML=`${cart.length}`
}
