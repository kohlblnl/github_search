'use strict'

function getUserInput(){
  let username = $('.user-input').val();
  let url = "https://api.github.com/users/" + username +"/repos";

  const options = {
    headers: new Headers({
      "Authorization" : "token edd15c1d6bf38854a067b073caf9ed05c9c9fded"
    })
  };

  fetch(url, options)
    .then(response => response.json())
    .then(responseJson => createHtml(responseJson));
}

function createHtml(responseJson){
console.log(responseJson);

  let contentHtml = "";
  let repoName = "";
  let repoLink ="";

  for(let i = 0; i < responseJson.length; i++){
    repoName = `${responseJson[i].name}`;
    repoLink = `${responseJson[i].html_url}`

    contentHtml = '<h2>'+repoName+'</h2><a href="'+repoLink+'" target="_blank">'+repoLink+'</a>' + contentHtml;
  }
  
  $('#user-repos').html(contentHtml);
}

function watchForm(){
  $('.submit').click(function(event){
    event.preventDefault();
    getUserInput();
  });
}

$(watchForm);