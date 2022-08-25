document.querySelector("#for").addEventListener("submit",log)
    function log()
    {
        event.preventDefault()
      var name=document.querySelector("#name").value
      var email= document.querySelector("#email").value
      var password= document.querySelector("#pass").value
      var arr1=[]
      arr1.push(name,email,password)

     var arr=JSON.parse(localStorage.getItem("kcuser"));
     arr.map(function(elem){
    if((name==elem.Name) && (email==elem.Email) && (password==elem.Password))  
    {
        window.location.href="navbar.html"
    } 
     if(name!=elem.Name)
     {
        alert("Name wrong")
     }
     else if(email!=elem.Email)
     {
        alert("email wrong")
     }
    else if(password!=elem.Password)
     {
        alert("password wrong")
     }
   })
}