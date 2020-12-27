let firstName = document.getElementById("FirstName");
const SecondName = document.getElementById("SecondName");
const mail = document.getElementById("email");
const psw = document.getElementById("psw");
const registerbtn = document.querySelector(".registerbtn");
const PhoneNumber = document.getElementById("PhoneNumber");
const YourLocation = document.getElementById("YourLocation");
let accountIformation ={
  firstName:"",
  SecondName:"",
  mail:"",
  psw:"",
  PhoneNumber:[],
  YourLocation:""                         
}



  registerbtn.addEventListener('click', function(e){
    e.preventDefault();
    if(firstName.value){
      console.log(true);
      console.log(firstName.value)                                                                                                          
    accountIformation.firstName = firstName.value;
    accountIformation.SecondName = SecondName.value;
    accountIformation.mail = mail.value;
    accountIformation.psw = psw.value;
    accountIformation.PhoneNumber = PhoneNumber.value;
    accountIformation.YourLocation = YourLocation.value;
    console.log(accountIformation)
    localStorage.setItem('accountIformation', JSON.stringify(accountIformation));
    }else{
      console.log(false);
    }
    localStorage.setItem('accountIformation', JSON.stringify(accountIformation));
  })

  