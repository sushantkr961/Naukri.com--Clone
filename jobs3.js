let details = JSON.parse(localStorage.getItem("jobs"));
console.log(details);
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

  let h3 = document.createElement("h3");
  h3.textContent = "Job description:";

  let desc = document.createElement("p");
  // var regex = /(<([^>]+)>)/gi;
  // details.description = details.description.replace(regex, "");
  desc.textContent = details.description;

  let edu = document.createElement("h4");
  edu.textContent = "Education:";

  let roleh = document.createElement("h4");
  roleh.textContent = "Role:";

  let rolet = document.createElement("p");
  rolet.textContent = details.contract_time;

  let role = document.createElement("p");
  role.textContent = details.tags;

  let rolecat = document.createElement("h4");
  rolecat.textContent = "Role Catogries:";

  let rolec = document.createElement("p");
  rolec.textContent = details.slug;

  let wev = document.createElement("h4");
  wev.textContent = "Click below for All details:";

  let wevl = document.createElement("a");
  wevl.textContent = details.redirect_url;

  let divbtn = document.createElement("div");
  divbtn.setAttribute("id", "sks_divbtn");
  divbtn.append(btn1, btn2);

  let div = document.createElement("div");
  div.setAttribute("class", "sk_top");
  div.append(post, company, salary, locate, divbtn);

  let div2 = document.createElement("div");
  div2.setAttribute("class", "sk_middle");
  div2.append(
    h3,
    desc,
    edu,
    role,
    rolec,
    roleh,
    rolet,
    rolecat,
    rolec,
    wev,
    wevl
  );

  container.append(div, div2);
}
showJobData(details);

const API_ID = "15093f72";
const API_KEY = "846bdebb67eca7508d6807f04da28a3b";

const url1 = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${API_ID}&app_key=${API_KEY}`;

let contaienr2 = document.getElementById("sk_interest");

let getMData = async () => {
  try {
    let res = await fetch(url1);
    let data = await res.json();
    console.log(data.results);
  } catch (error) {
    console.log(error);
  }
};
getMData();

function showMData(data) {
  contaienr2.innerHTML = null;

  data.forEach((el) => {});
}
