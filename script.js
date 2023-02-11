let insertproduct = document.getElementById("imageinsert")
fetch("https://dummyjson.com/products")
    .then((Response) => (Response.json()))
    .then((data) => { transfer(data) })

function transfer(data) {
  
    const allProducts = data.products;
    console.log(allProducts);
    console.log(allProducts[0].title);
    let el=[]
    allProducts.forEach(element => {
        el.push (`
        <div class="finalimages">      
        <img src=${element.images[0]} />
        <div class=leftheading>
        Title: ${element.title}
        Brand: ${element.brand}
        </div>
        Price: $${element.price}
        Rating: ${element.rating}
        Stock: ${element.stock}
        </div>       
        `)

        for(var i=0;i<el.length;i++){
        document.getElementsByClassName('productimage')[i].innerHTML = el[i];
        }

        

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









