let price = document.querySelectorAll(".price");
let ul = document.querySelector(".ul")
let Name = document.querySelectorAll(".name");
let save = document.querySelector(".save");
let total = document.querySelector(".total");
let Username = document.getElementById('Username')
let warning = document.querySelector('.Warnings')
let selectList;
let priceindex;
let priceindexs = [];
let Productname;
let priceName;
let li;
// let btn;
let storage;
let storage2
let orderdata = [];
let deliverydata = {
  location:'',
  phonenumber:'',
  name:''
}

let array = [1,2,3,4,5,6,7];
let productName = []
let productprice1 = 0
let productprice2 = 0
let totalprice1 = 0
let totalprice2 = 0
let productquantity = []
console.log()



// musteri secdiyi mehsullari carta elave etdiyi esas code 1
for (let i = 0; i < price.length; i++) {
  price[i].index = i;
  price[i].addEventListener("click", function(e){
  priceindex = e.target.index;
// eger qeydiyyatdan kecibse carta melumatlari set edir 2
  storage = localStorage.getItem('accountIformation');
  storage2 = JSON.parse(storage)
  if(storage2){
    
  price[priceindex]
    console.log(price[priceindex])
    price[priceindex].style.display = "none"

  for (let i = 0; i < price.length; i++) {
    priceName = price[priceindex].textContent
    
  }
  console.log(priceindex)
  // musteri secdiyi mehsullarin qiymetinin toplanib set edildiyi code
  if(totalprice1 == 0){
    if(productprice1 == 0){
      productprice1 = Number( price[priceindex].innerHTML.slice(2));
      total.innerHTML = "Total Price:" + productprice1 + ": $"
      console.log(productprice1)
    }else if(productprice1 !== 0 && productprice2 == 0){
      productprice2 = Number( price[priceindex].innerHTML.slice(2));
      totalprice1 = productprice1 + productprice2
      total.innerHTML = "Total Price:" + totalprice1 + ": $"
    }
  }else{
    productprice1 = Number( price[priceindex].innerHTML.slice(2));
    totalprice1 = totalprice1 + productprice1
    productprice1 = 0
    console.log(totalprice1)
    total.innerHTML = "Total Price:" + totalprice1 + ": $"
  }
  

  
  for (let i = 0; i < Name.length; i++) {
    Productname = Name[priceindex].innerHTML
  }
  productName.push(Productname)
  Productname += ": " + priceName
  
  console.log(productName)
//  musteri secdiyi mehsullarin list create le bir bir set edildiyi code
  selectList = document.createElement("select");
  selectList.setAttribute("id", "mySelect");
  li = document.createElement('li');
  selectList.className = "select";
  li.innerHTML = Productname
  li.appendChild(selectList);
  ul.appendChild(li);
  // usteri secdiyi mehsullarin sayini select otion la secir
  for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", array[i]);
    option.text = array[i];
    selectList.appendChild(option);
}
}else{
  warning.innerHTML = "Zehmet olmasaqeydiyyatdan kecin"
}
  })
}



save.addEventListener('click' , function(){
  // productname markete gonderilir
  console.log(productName);
  storage = localStorage.getItem('accountIformation');
  storage2 = JSON.parse(storage)
  orderdata = productName;
  deliverydata.name = storage2.firstName;
  deliverydata.location = storage2.YourLocation
  deliverydata.phonenumber = storage2.PhoneNumber
  // delivery data kuryere
  console.log(deliverydata)
})








function myFunction() {
    document.getElementById("myDropdown1").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content1");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    });
























