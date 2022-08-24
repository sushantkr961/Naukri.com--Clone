
const API_ID = "15093f72";
const API_KEY = "846bdebb67eca7508d6807f04da28a3b";

// api for job

const url1 = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${API_ID}&app_key=${API_KEY}`;

// fetch('https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=15093f72&app_key=846bdebb67eca7508d6807f04da28a3b')
// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err));



// api for top companies for cook job

const url2 = `http://api.adzuna.com/v1/api/jobs/gb/top_companies?app_id=${API_ID}&app_key=${API_KEY}&what=cook&content-type=application/json`;

// api for catogries job

const url3 = `http://api.adzuna.com/v1/api/jobs/gb/categories?app_id=${YOUR_API_ID}&app_key=${API_KEY}&&content-type=application/json`;


// jobs in West Midlands

const url4 = `http://api.adzuna.com/v1/api/jobs/gb/history?app_id=${API_ID}&app_key=${API_KEY}&location0=UK&location1=West%20Midlands&content-type=application/json`;

// Simple jobs query in whole uk

const url5 = `http://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${API_ID}&app_key=${API_KEY}&results_per_page=20&what=javascript%20developer&content-type=application/json`;

// Complex jobs query

const url6 = `http://api.adzuna.com:80/v1/api/jobs/gb/search/1?app_id=${APP_ID}&app_key=${APP_KEY}&results_per_page=20&what=javascript%20developer&what_exclude=java&where=london&sort_by=salary&salary_min=30000&full_time=1&permanent=1&content-type=application/json`;


// Free Job Board API

const url7 = `https://arbeitnow.com/api/job-board-api`;



