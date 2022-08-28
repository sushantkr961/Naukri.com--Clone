document.querySelector("#kcform");
    function log()
    {
        event.preventDefault()
      var email= document.querySelector("#kcemail").value
      var password= document.querySelector("#kcpass").value
      var arr1=[]
      arr1.push(email,password)

     var arr=JSON.parse(localStorage.getItem("kcuser"));
     console.log(arr)
     arr.map(function(elem){
    if((email==elem.Email) && (password==elem.Password))  
    {
        window.location.href="index.html"
      alert("Welcome to naukri")
    } 
     else if(email!=elem.Email)
     {
      //   alert("email wrong")
     }
    else if(password!=elem.Password)
     {
        alert("password wrong")
     }
   })
}
// ========================================================================================

function otp(){
   document.getElementById("main")=null;
}
