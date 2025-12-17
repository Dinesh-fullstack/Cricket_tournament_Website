// label
let lname = document.querySelector("#lname");
let lpassword = document.querySelector("#lpassword");
let lemail = document.querySelector("#lemail");
let ljerno = document.querySelector("#ljerno");
let lphone = document.querySelector("#lphone");

// input
let names = document.getElementById("name");
let pass = document.getElementById("pass");
let email =  document.getElementById("email");
let no = document.getElementById("no");
let phone =  document.getElementById("phone");


// pass
pass.addEventListener("mouseover",()=>{
    lpassword.classList.add("move");
})
pass.addEventListener("mouseout",()=>{
    lpassword.classList.remove("move");
})
// names
names.addEventListener("mouseover",()=>{
    lname.classList.add("move");
})
names.addEventListener("mouseout",()=>{
    lname.classList.remove("move");
})
// email
email.addEventListener("mouseover",()=>{
    lemail.classList.add("move");
})
email.addEventListener("mouseout",()=>{
    lemail.classList.remove("move");
})

// jerno
no.addEventListener("mouseover",()=>{
    ljerno.classList.add("move");
})
no.addEventListener("mouseout",()=>{
    ljerno.classList.remove("move");
})
//phone
phone.addEventListener("mouseover",()=>{
    lphone.classList.add("move");
})
phone.addEventListener("mouseout",()=>{
    lphone.classList.remove("move");
})


// ! footer

// input and label
let login = document.querySelector("#login");
let label = document.querySelectorAll("label");
let inner = document.querySelector(".inner");
let btn = document.querySelectorAll(".btn");
let footer = document.querySelectorAll(".footer");

let slide = document.querySelectorAll(".slide");

login.addEventListener("click",(e)=>{
    e.preventDefault();
    slide[0].classList.add("out");
    slide[1].classList.add("out");
    slide[2].classList.add("out");
    slide[3].classList.add("out");
    slide[4].classList.add("out");

    label[0].classList.add("upout");
    label[1].classList.add("upout");
    label[2].classList.add("upout");
    label[3].classList.add("upout");
    label[4].classList.add("upout");

    inner.classList.add("slide-right");

    btn[0].classList.add("down");
    btn[1].classList.add("down");

    setTimeout(()=>{
          open("./sunday_task.html");
        },1000);

    footer[0].classList.add("down");
    footer[1].classList.add("down");
})



// password

let img= document.querySelector("img");


img.addEventListener("click",(e)=>{
    if (pass.type == "password") {
        pass.type="text";
        img.src = "https://cdn-icons-png.flaticon.com/128/535/535193.png";
        
    }else{
        pass.type="password";
        img.src = "https://cdn-icons-png.flaticon.com/128/10812/10812267.png";
    }

    
});

// reset 

let reset =document.querySelector("#reset");

reset.addEventListener("click",()=>{
    names.value="";
    pass.value="";
    email.value="";
    no.value="";
    phone.value="";
    
})

// local storage 
let form = document.querySelector("form")

form.addEventListener("submit",(e)=>{

    e.preventDefault()

    let username = document.getElementById("name").value
    let userpass = document.getElementById("pass").value
    let useremail = document.getElementById("email").value
    let jercyno = document.getElementById("no").value
    let userphone = document.getElementById("phone").value

    console.log(useremail, username , userpass,jercyno, userphone)

    localStorage.setItem("signupName",username)
    localStorage.setItem("signupPass",userpass)
    localStorage.setItem("signupEmail",useremail)
    localStorage.setItem("signupJercyno",jercyno)
    localStorage.setItem("signupPhone",userphone)

    alert("signup done successfully")

    open("../Kycc home/mywebsite.html");
})
