let details = JSON.parse(localStorage.getItem("jobs"));
console.log(details)
let container = document.getElementById("sk_jobdetails");

function showJobData (details) {
    container.innerHTML = null;

    let post = document.createElement("h2");
    post.textContent = details.title;

    let company = document.createElement("p")
    company.textContent = details.company_name

    let locate = document.createElement("p");
    locate.textContent = details.location;

    let btn1 = document.createElement("button");
    btn1.textContent = "Register to apply";

    let btn2 = document.createElement("button");
    btn2.textContent = "LOGIN TO APPLY";

    let h3 = document.createElement("h3");
    h3.textContent = "Job description";

    let desc = document.createElement("p");
    var regex = /(<([^>]+)>)/ig;
    details.description = details.description.replace(regex, "");
    desc.textContent = details.description;


    let edu = document.createElement("h4");
    edu.textContent = "Education";

    let roleh = document.createElement("h4");
    roleh.textContent = "Role";

    let rolet = document.createElement("p");
    rolet.textContent = details.job_types;

    let role = document.createElement("p");
    role.textContent = details.tags;

    let rolecat = document.createElement("h4");
    rolecat.textContent = "Role Catogries";

    let rolec = document.createElement("p");
    rolec.textContent = details.slug;

    let wev = document.createElement("h4");
    wev.textContent = "Click below for All details";

    let wevl = document.createElement("p");
    wevl.textContent = details.url;






    let div = document.createElement("div");
    div.append(post,  company, locate, btn1, btn2)

    let div2 = document.createElement("div");
    div2.append(h3, desc, edu, role, rolec, roleh, rolet,rolecat, rolec, wev, wevl)

    container.append(div, div2)

}
showJobData(details);