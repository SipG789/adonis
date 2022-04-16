
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
      
  <section class="my-3" id="manager">
  <div class="card">
  <div class="card-manager">
    <h2 class="page-title text-secondary bg-dark py-2 px-3">${data.title}</h2>
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
  
  <section class="my-3" id="engineer-one">
  <div class="card">
  <div class="card-engineer">
    <h2 class="page-title text-secondary bg-dark py-2 px-3">${data.empName}</h2>
    <h3 class="page-title text-secondary bg-dark py-2 px-3">Engineer</h3>
  </div>
  <div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${data.empId}</li>
    <li class="list-group-item">Email: ${data.empEmail}</li>
    <li class="list-group-item">GitHub: ${data.github}</li>
  </ul>
</div>
  </section>
      
  

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