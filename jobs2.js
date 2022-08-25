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
    const url = "https://arbeitnow.com/api/job-board-api";
    let response = await fetch(url);
    let data = await response.json();
    mode = "no-cors";
    console.log(data.data);
    appendData(data.data);
  } catch (error) {
    console.log("error:", error);
  }
};
jobdata();

const container = document.getElementById("sk_alljobs");
function appendData(data) {
  container.innerHTML = null;

  data.forEach((el) => {
    let post = document.createElement("h2");
    post.textContent = el.title;

    let logo1 = document.createElement("i");
    logo1.setAttribute("class","fa-solid fa-building");

    let company = document.createElement("p");
    company.appendChild(logo1);
    company.textContent = el.company_name;

    let role = document.createElement("p");
    role.textContent = el.tags

    let location = document.createElement("p");
    location.textContent = el.location;

    let types = document.createElement("p");
    types.textContent = el.job_types;

    let div = document.createElement("div");
    div.append(post, company, role, location, types);
    container.append(div);
  });
}
