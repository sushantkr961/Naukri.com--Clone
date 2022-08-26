document.querySelector("#kcform").addEventListener("submit",log)
    function log()
    {
        event.preventDefault()
      var name=document.querySelector("#kcname").value
      var email= document.querySelector("#kcemail").value
      var password= document.querySelector("#kcpassword").value
      var mobile=document.querySelector("#kcmobile").value
    //   console.log(name,email,password,mobile)
      var arr=[JSON.parse(localStorage.getItem("kcuser"))];
      console.log(arr.Email)
      if((password.includes("@")|| password.includes("`") || password.includes("~") || password.includes("!") || password.includes("#") || password.includes("$") || password.includes("%") || password.includes("^") || password.includes("&") || password.includes("*") || password.includes("(") || password.includes(")") || password.includes("-") || password.includes("_") || password.includes("=") || password.includes("+") || password.includes("/") || password.includes("|") || password.includes("'") || password.includes(";") || password.includes(":") || password.includes(",") || password.includes(".") || password.includes("<") || password.includes(">") || password.includes("?"))&& password.length>5)
      {
            var obj={
                Name:name,
                Email:email,
                Password:password,
                Mobile:mobile,
            }
    
            arr.push(obj);
            localStorage.setItem("kcuser",JSON.stringify(arr));
            window.location.href="login.html"
       
      }
      else{
        alert("Something wrong in password")
      }
    }


    let citydiv=document.getElementById("kccity");
    function showCity(){
        citydiv.style.height="200px"
        citydiv.style.width=`100%`;
        citydiv.style.background="red"
    }

    function hideCity(){
        citydiv.style.height="0px"
        citydiv.style.width=`0px`;
        // citydiv.style.background="red"
    }
