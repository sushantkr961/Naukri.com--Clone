document.querySelector("#kcform").addEventListener("submit",log)
    function log()
    {
        event.preventDefault()
      var name=document.querySelector("#kcname").value
      var email= document.querySelector("#kcemail").value
      var password= document.querySelector("#kcpassword").value
      var mobile=document.querySelector("#kcmobile").value
      var livecity=document.getElementById("kclivecity").value
      var arr=[JSON.parse(localStorage.getItem("kcuser"))];
      console.log(arr.Email)
      if((password.includes("@")|| password.includes("`") || password.includes("~") || password.includes("!") || password.includes("#") || password.includes("$") || password.includes("%") || password.includes("^") || password.includes("&") || password.includes("*") || password.includes("(") || password.includes(")") || password.includes("-") || password.includes("_") || password.includes("=") || password.includes("+") || password.includes("/") || password.includes("|") || password.includes("'") || password.includes(";") || password.includes(":") || password.includes(",") || password.includes(".") || password.includes("<") || password.includes(">") || password.includes("?"))&& password.length>5)
      {
            var obj={
                Name:name,
                Email:email,
                Password:password,
                Mobile:mobile,
                Livecity:livecity
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
      citydiv.innerHTML=null
        citydiv.style.height="200px"
        citydiv.style.width=`90%`;
        // citydiv.style.background="red"

        let kch4=document.createElement("h4");
        kch4.innerText="Current City";

        let kclivecity=document.createElement("input");
        kclivecity.setAttribute("id","kclivecity")
        kclivecity.placeholder="Mention the city you live in";

        let kcsuggdiv=document.createElement("div")
        kcsuggdiv.setAttribute("id","kcsuggdiv")

        let kcp=document.createElement("p")
        kcp.innerText="Suggestions:"

        let kcbtn2=document.createElement("button")
        kcbtn2.innerText="Mumbai"

        let kcbtn3=document.createElement("button")
        kcbtn3.innerText="Bangalore/Bengaluru"
        
        let kcbtn4=document.createElement("button")
        kcbtn4.innerText="Hyderabad/Secunderabad"
        
        let kcbtn5=document.createElement("button")
        kcbtn5.innerText="Chennai"

        let kcbtn6=document.createElement("button")
        kcbtn6.innerText="New Delhi"

        let kcbtn7=document.createElement("button")
        kcbtn7.innerText="Pune"
        kcbtn7.style.marginTop="2%"
       
        kcsuggdiv.append(kcp,kcbtn2,kcbtn3,kcbtn4,kcbtn5,kcbtn6,kcbtn7)

        citydiv.append(kch4,kclivecity,kcsuggdiv)
    }

    function hideCity(){
      citydiv.innerHTML=null
        citydiv.style.height="0px"
        citydiv.style.width=`0px`;
    }