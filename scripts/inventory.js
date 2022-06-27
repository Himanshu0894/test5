function append() {
    let data = JSON.parse(localStorage.getItem("data")) || [];
    let container = document.getElementById("products_data");


    data.forEach(function (el) {
        let div = document.createElement("div");
        let p = document.createElement("p");
        p.innerText = el.brand
        let p1 = document.createElement("p");
        p1.innerText = el.name;
        let p2 = document.createElement("p");
        p2.innerText = el.price;
        let img = document.createElement("img");
        img.src = el.image;
        let btn = document.createElement("button");
        btn.innerText = "Remove Product";
        btn.addEventListener("click",function(){
        remove(element);
        })
        div.append(p, p1, p2, img,btn)
        container.append(div);
    });

}
append();

function remove(element){
    let data = JSON.parse(localStorage.getItem("data")) || [];
    let remove = data.filter(function(el,index){
        if(index==element){
        let del = JSON.parse(localStorage.getItem("del")) || [];
        del.push(el)
        localStorage.setItem("del",JSON.stringify(del))
        }
        else{
        return index!==element;
        }
    });
    element.target.parentNode.remove();

  localStorage.setItem("data",JSON.stringify(remove));
  append();

}