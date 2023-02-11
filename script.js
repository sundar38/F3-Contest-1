let insertproduct = document.getElementById("imageinsert")
fetch("https://dummyjson.com/products")
    .then((Response) => (Response.json()))
    .then((data) => { transfer(data) })

function transfer(data) {
  
    const allProducts = data.products;
    console.log(allProducts);
    allProducts.forEach(element => {
        const el = `
        <div class="finalimages">      
        <img src=${element.images[0]} />
        </div>        `
        document.getElementsByClassName('productimage')[0].innerHTML += el;

        const infosection=`
            <div class="firstline>
            Title: ${element.title}
            Brand: ${element.brand}
            </div>
        
        `
        document.getElementsByClassName("productinfo")[0].innerHTML+=infosection

    });
    // console.log(data.products)
    // let arr=data.products
    // console.log(arr);
    // let eachcard=document.getElementsByClassName("cards")
    //     let eachimage=document.getElementsByTagName("img")
    // for(details of arr){        
    //     eachcard[i].eachimage[i].src=details.images[i]
    // }




    // console.log(arr[0].images[0]);
    // let image=arr[0].images[0]
    // // image.style.height=50
    // let firstimage=document.querySelector("img")
    // firstimage.src=image


    //insertproduct.appendChild(firstimage)
}









