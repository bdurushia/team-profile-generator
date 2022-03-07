const generatePage = (myTeam) => {
    let members = '';

    for (let i = 0; i < myTeam.length; i++) {
        if (myTeam[i].role === 'Manager') {
            members += `
            <div class="card card-style m-4" style="width: 20rem">
                <div class="card-header">
                    <h5 class="card-title">
                        ${myTeam[i].name}
                    </h5>
                    <h6 class="card-subtitle mb-2">
                        <i class="fas fa-mug-hot mx-2"></i>${myTeam[i].role}
                    </h6>
                </div>
                <div class="card-body py-5">
                    <div class="card" style="width: 18rem;">
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">ID: ${myTeam[i].id}</li>
                          <li class="list-group-item">Email: <a href="mailto:${myTeam[i].email}">${myTeam[i].email}</a></li>
                          <li class="list-group-item">Office Number: ${myTeam[i].officeNumber}</li>
                        </ul>
                      </div>
                </div>
            </div>`
        } else if (myTeam[i].role === 'Engineer') {
            members += `
            <div class="card card-style m-4" style="width: 20rem">
                <div class="card-header">
                    <h5 class="card-title">
                        ${myTeam[i].name}
                    </h5>
                    <h6 class="card-subtitle mb-2">
                        <i class="fas fa-glasses mx-2"></i>${myTeam[i].role}
                    </h6>
                </div>
                <div class="card-body py-5">
                    <div class="card" style="width: 18rem;">
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">ID: ${myTeam[i].id}</li>
                          <li class="list-group-item">Email: <a href="mailto:${myTeam[i].email}">${myTeam[i].email}</a></li>
                          <li class="list-group-item">GitHub Profile: <a href="https://github.com/${myTeam[i].github}">${myTeam[i].github}</a></li>
                        </ul>
                      </div>
                </div>
            </div>`
        } else { // Intern HTML
            members += `
            <div class="card card-style m-4" style="width: 20rem">
                <div class="card-header">
                    <h5 class="card-title">
                        ${myTeam[i].name}
                    </h5>
                    <h6 class="card-subtitle mb-2">
                        <i class="fas fa-user-graduate mx-2"></i>${myTeam[i].role}
                    </h6>
                </div>
                <div class="card-body py-5">
                    <div class="card" style="width: 18rem;">
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">ID: ${myTeam[i].id}</li>
                          <li class="list-group-item">Email: <a href="mailto:${myTeam[i].email}">${myTeam[i].email}</a></li>
                          <li class="list-group-item">University: ${myTeam[i].school}</li>
                        </ul>
                      </div>
                </div>
            </div>`
        }
        
    }

    let pageTemplate = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link 
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
                rel="stylesheet" 
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
                crossorigin="anonymous">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link 
                href="https://fonts.googleapis.com/css2?family=Encode+Sans:wght@300;400;500;600;700;800;900&display=swap" 
                rel="stylesheet">
            <link 
                rel="stylesheet" 
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" 
                integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" 
                crossorigin="anonymous" />
                <!-- 5.14.0 -->
            <link rel="stylesheet" href="./style.css">
            <title>Team Profile</title>
        </head>
        <body>
            <header class="header container-fluid p-5">
                <h1 class="my-team">My Programming Team</h1>
            </header>
        
            <section class="container-fluid">
                <div class="card-container container-fluid d-flex flex-wrap justify-content-center p-5">
        
                ${members}
        
                </div>
            </section>
            
            <script src="../index.js"></script>
        </body>
        </html>`;

    return pageTemplate;
};

module.exports = generatePage;