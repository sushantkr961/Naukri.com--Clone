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
  if (i < photos.length - 1) {
    i++;
  } else {
    i = 0;
  }
}
setInterval(slide, 3000);


// const API_ID = "15093f72";
// const API_KEY = "846bdebb67eca7508d6807f04da28a3b";

const API_ID = "3adb517c";
const API_KEY = "6365ca0a1022166c8c290e296b68b083";

//  <-------- .then & .catch ----------->

// <----------- ES6 way ---------->
// fetch('https://arbeitnow.com/api/job-board-api')
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

//  <----------- ES5 way ----------->
// fetch('https://arbeitnow.com/api/job-board-api')
// .then ((response)=> {
//     return response.json()
// })
// .then ((response) => {
//     console.log("response:",response.Array)

// })
// .catch ((error) => {console.log("error:",error)})

let jobdata = async () => {
  try {
    // const url = `http://api.adzuna.com:80/v1/api/jobs/gb/search/1?app_id=${API_ID}&app_key=${API_KEY}&results_per_page=20&what=javascript%20developer&what_exclude=java&where=london&sort_by=salary&salary_min=30000&full_time=1&permanent=1&content-type=application/json`;

    const url = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${API_ID}&app_key=${API_KEY}`;
    let response = await fetch(url);
    let result = await response.json();
    console.log(result);
    appendData(result.results);
  } catch (error) {
    console.log("error:", error);
  }
};
jobdata();

let container = document.getElementById("sk_alljobs");

// function appendData(result){
//   let { title, company_name, tags, location, job_types } = result;

//   container.innerHTML =
//     `<h2>${ title }</h2>
//     <p><i class="fa-solid fa-location-dot"></i> ${ location }</p>
//     <p><i class="fa-solid fa-building"></i> ${ company_name }</p>
//     <p><i class="fa-solid fa-file-lines"></i> ${ job_types }</p>
//     <p><i class="fa-solid fa-handshake"></i> ${ tags }</p>`;
// }

function appendData(result) {
  container.innerHTML = null;

  // result.forEach(({ title, company_name, tags, location, job_types }) => {

  result.forEach((el) => {
    let post = document.createElement("h2");
    post.textContent = el.category.label;

    let company = document.createElement("p");
    company.innerHTML = "Company:- " + el.company.display_name;

    let s = document.createElement("p");
    s.textContent = "Salary:- " +"₹" + el.salary_min + " - " + "₹" + el.salary_max + " P.A";
    let locate = document.createElement("p");
    // locate.textContent = location;
    locate.innerText = "Location:- " + el.location.area;

    let types = document.createElement("p");
    // types.textContent = job_types;
    types.textContent = el.contract_time;

    let hr = document.createElement("hr");

    let posted = document.createElement("p");
    posted.textContent = "Posted: " + el.created;

    let div = document.createElement("div");
    div.append(post, company, s, locate, types, hr, posted);
    div.setAttribute("id","sk_lil")
    div.addEventListener("click", () => {
      localStorage.setItem("jobs", JSON.stringify(el));
      window.location.href = "jobs3.html"
    });
    container.append(div);
  });
}

// <----------- Pagination ----------->

const pagin = (results, per_page) => {
  // 10 result per page

  let buttons_div = document.getElementById("sk_page");

  let buttons = Math.ceil(results / per_page);

  for (let i = 1; i <= buttons; i++) {
    let btn = document.createElement("button");
    btn.innerText = i;
    btn.onclick = () => {
      jobdata(i);
    };

    buttons_div.append(btn);
  }
};

pagin(10, 2);
