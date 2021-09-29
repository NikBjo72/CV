console.log("Hej html!");
'use strict'

async function getGitHub() {
    const response = await fetch ("https://api.github.com/users/NikBjo72/starred");
    const GitHubData = await response.json();

    let makeRepo = document.getElementById("repos");

    for (let i = 0; i < GitHubData.length; i++){
        //let githubDiscription = document.getElementById("repoDiscription");
        makeRepo.insertAdjacentHTML('afterbegin', '<div id="'+GitHubData[i].id+'" class="row text repo"></div>');
        let repo = document.getElementById(GitHubData[i].id);
        repo.insertAdjacentHTML('beforeend', '<h2>'+GitHubData[i].name+'</h2>');
        repo.insertAdjacentHTML('beforeend', '<p class="lead">'+GitHubData[i].description+'</p>');
        repo.insertAdjacentHTML('beforeend', '<a id="pagesBtn" class="btn btn-primary" href="'+GitHubData[i].html_url+'" target="_blank" role="button">Till repot på GitHub</a>');
        
            if (GitHubData[0].has_pages)
            repo.insertAdjacentHTML('beforeend', '<a id="pagesBtn" class="btn btn-primary" href="https://nikbjo72.github.io/'+GitHubData[i].name+'" target="_blank" role="button">Till Pages för repot</a>');

            repo.insertAdjacentHTML('beforeend','<p></p><p class="border-top my-1"></p>');
    }   
    console.log(GitHubData);

}

getGitHub()