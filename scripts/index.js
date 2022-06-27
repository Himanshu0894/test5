//store the products array in localstorage as "data"
function pro(b,n,p,i){
    this.brand =b;
    this.name = n;
    this.price =p;
    this.image =i;
}
function addproduct(e){
    e.preventDefault();
    let form = document.getElementById("product_form");
    let brand = form.product_brand.value;
    let name = form.product_name.value;
    let price = form.product_price.value;
    let image = form.product_image.value;

    let list = new pro(brand,name,price,image)
    let data = JSON.parse(localStorage.getItem("data"))||[];
    data.push(data);
    localStorage.setItem("data",JSON.stringify(data));
    console.log(list)
}
