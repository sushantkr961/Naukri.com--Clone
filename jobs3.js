import footer1 from "./footer1.js";
  document.getElementById("sk_deta").innerHTML = footer1();


  let photos = [
    "./images/photo1.jpg",
    "./images/photo2.jpg",
    "./images/photo3.jpg",
    "./images/photo4.jpg",
    "./images/photo5.jpg",
  ];
  
  let i = 0;
  function slide() {
    document.querySelector("#sk_photu").src = photos[i];
    if(i<photos.length-1){
      i++;
    }else{
      i=0;
    }
  }
  setInterval(slide,3000)




let details = JSON.parse(localStorage.getItem("jobs"));
// console.log(details);
let container = document.getElementById("sk_jobdetails");

function showJobData(details) {
  container.innerHTML = null;

  let post = document.createElement("h2");
  post.textContent = details.category.label;

  let company = document.createElement("p");
  company.textContent = details.company.display_name;

  let salary = document.createElement("p");
  salary.textContent =
    "₹" + details.salary_min + " - " + "₹" + details.salary_max + " P.A";

  let locate = document.createElement("p");
  locate.textContent = details.location.area;

  let btn1 = document.createElement("button");
  btn1.setAttribute("id", "sk_btn1");
  btn1.textContent = "Register to apply";

  let btn2 = document.createElement("button");
  btn2.setAttribute("id", "sk_btn2");
  btn2.textContent = "LOGIN TO APPLY";

  let divbtn = document.createElement("div");
  divbtn.setAttribute("id", "sks_divbtn");
  divbtn.append(btn1, btn2);

  let hr = document.createElement("hr");

  let posted = document.createElement("p");
  posted.textContent = "Posted: " + details.created;

  let div = document.createElement("div");
  div.setAttribute("class", "sk_top");
  div.append(post, company, salary, locate, divbtn, hr, posted);

  let h3 = document.createElement("h3");
  h3.textContent = "Job description:";

  let desc = document.createElement("p");
  // var regex = /(<([^>]+)>)/gi;
  // details.description = details.description.replace(regex, "");
  desc.textContent = details.description;

  let edu = document.createElement("h4");
  edu.textContent = "Education:";

  let educ = document.createElement("p");
  educ.textContent = details.title;

  let roleh = document.createElement("h4");
  roleh.textContent = "Employment Type: ";

  let emp = document.createElement("p");
  emp.textContent = details.contract_time + "," + details.contract_type;

  let role = document.createElement("p");
  role.textContent = details.tags;

  let rolec = document.createElement("p");
  rolec.textContent = details.slug;

  let wev = document.createElement("h4");
  wev.textContent = "Company Website: ";

  let wevl = document.createElement("a");
  wevl.textContent = details.redirect_url;

  let div2 = document.createElement("div");
  div2.setAttribute("class", "sk_middle");
  div2.append(h3, desc, edu, educ, role, rolec, roleh, emp, rolec, wev, wevl);

  container.append(div, div2);
}
showJobData(details);

// const API_ID = "15093f72";
// const API_KEY = "846bdebb67eca7508d6807f04da28a3b";

// const url1 = `http://api.adzuna.com/v1/api/jobs/gb/history?app_id=15093f72&app_key=846bdebb67eca7508d6807f04da28a3b&location0=UK&location1=West%20Midlands&content-type=application/json`;

let contaienr2 = document.getElementById("sk_inter");

let getMData = async () => {
  try {
    let res = await fetch(`https://arbeitnow.com/api/job-board-api`);
    let data = await res.json();
    // mode = "no-cors";
    console.log(data);
    showMData(data.data);
  } catch (error) {
    console.log(error);
  }
};
getMData();

function showMData(data) {
  contaienr2.innerHTML = null;

  data.forEach((el) => {
    
    let post = document.createElement("h3");
    post.textContent = el.tags;
    let company = document.createElement("p");
    company.textContent = el.company_name;
    let loc = document.createElement("p");
    loc.textContent = el.location;

    let hr = document.createElement("hr");
    contaienr2.append(post, company, loc, hr);
  });
}
