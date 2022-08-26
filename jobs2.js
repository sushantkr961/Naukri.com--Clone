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
    let result = await response.json();
    mode = "no-cors";
    let original = result.data;
    console.log(original);
    appendData(original);
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
    // post.textContent = title;
    post.textContent = el.title;

    let company = document.createElement("p");
    // company.textContent = company_name;
    company.innerHTML = el.company_name;
    
    let role = document.createElement("p");
    // role.textContent = tags;
    role.textContent = el.tags;
    
    let locate = document.createElement("p");
    // locate.textContent = location;
    locate.innerText = el.location;
    
    let types = document.createElement("p");
    // types.textContent = job_types;
    types.textContent = el.job_types;
    

    let div = document.createElement("div");
    div.append(post, company, role, locate, types);
    div.addEventListener("click",() => {
      localStorage.setItem("jobs",JSON.stringify(el))
    });
    container.append(div);

  });
}
