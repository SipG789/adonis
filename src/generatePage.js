const Employee = require("../lib/Employee");


// create employee cards
const generateEmployee = employees => {
  if (!employees) {
    return '';
  }
 const employeeCardData = employees.map(employee =>{
    return(
    `
  <section class="my-3" id="engineer-one">
  <div class="card">
  <div class="card-engineer">
    <h2 class="page-title align-items-center text-secondary bg-dark py-2 px-3">${employee.name}</h2>
    <h3 class="page-title text-secondary bg-dark py-2 px-3">Engineer</h3>
  </div>
  <div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item align-items-center">ID: ${employee.id}</li>
    <li class="list-group-item align-items-center">Email: ${employee.email}</li>
    ${employee.github ? `<li class="list-group-item align-items-center">GitHub: "https://github.com/${employee.github}"</li>`: null}
    ${employee.school ? `<li class="list-group-item align-items-center">School: ${employee.school}</li>`: null}
  </ul>
</div>
  </section>
  `)
  })
  return employeeCardData.join(" ");
};

// using dummy info for now to see if it will generate a page and success... will return to fix this later 
const generatePage = (data) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Best Team Ever!</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
      </div>
    </header>
    <main class="container my-5">
<div class="container"> 
  <section class="my-3" id="manager">
  <div class="card">
  <div class="card-manager">
    <h2 class="page-title text-secondary bg-dark py-2 px-3">${data.name}</h2>
    <h3 class="page-title text-secondary bg-dark py-2 px-3">Manager</h3>
  </div>
  <div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${data.id}</li>
    <li class="list-group-item">Email: ${data.email}</li>
    <li class="list-group-item">Office Number: ${data.officeNumber}</li>
  </ul>
</div>
  </section>
  ${generateEmployee(data.team)}
      
  
</div>
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">2022 Team Generator! </h3>
    </footer>
  </body>
  </html>
    `
};


// send to index file 
module.exports = generatePage;