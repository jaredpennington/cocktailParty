var userFormEl = document.querySelector('#user-form');
var nameInputEl = document.querySelector('#username');
var repoContainerEl = document.querySelector('#repos-container');
var repoSearchTerm = document.querySelector('#repo-search-term');

var formSubmitHandler = function(event) {
  // prevent page from refreshing
  event.preventDefault();

  // get value from input element
  var username = nameInputEl.value.trim();

  // enter a city
  if (username) {
    getUserRepos(username);
    repoContainerEl.textContent = '';
    nameInputEl.value = '';
  } else {
    alert('Please enter a city');
  }
};

var getUserRepos = function(user) {
  // format the github api url
  var apiUrl = 'https://api.openbrewerydb.org/breweries?by_city=' + user;

  // make a get request to url
  fetch(apiUrl)
    .then(function(response) {
      // request was successful
      if (response.ok) {
        console.log(response);
        response.json().then(function(data) {
          console.log(data);
          displayRepos(data, user);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function(error) {
      alert('Unable to connect to find breweries');
    });
};

var displayRepos = function(repos, searchTerm) {
  // check if api returned any repos
  if (repos.length === 0) {
    repoContainerEl.textContent = 'No breweries in area.';
    return;
  }

  repoSearchTerm.textContent = searchTerm;

  // loop over repos
  for (var i = 0; i < repos.length; i++) {
    // format repo name
    var repoName = repos[i].street + '/' + repos[i].name;

    // create a container for each repo
    var repoEl = document.createElement('div');
    repoEl.classList = 'list-item flex-row justify-space-between align-center';

    // create a span element to hold repository name
    var titleEl = document.createElement('span');
    titleEl.textContent = repoName;

    // append to container
    repoEl.appendChild(titleEl);

    // create a status element
    var statusEl = document.createElement('span');
    statusEl.classList = 'flex-row align-center';

    // check if current repo has issues or not
    if (repos[i].open_issues_count > 0) {
      statusEl.innerHTML =
        "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + ' issue(s)';
    } else {
      statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
    }

    // append to container
    repoEl.appendChild(statusEl);

    // append container to the dom
    repoContainerEl.appendChild(repoEl);
  }
};

// add event listeners to forms
userFormEl.addEventListener('submit', formSubmitHandler);



//var apiUrl = "https://api.openbrewerydb.org/breweries?by_city=" + user;


//var getUserRepos = function(user) {
    // format the github api url
    //var apiUrl = "https://api.openbrewerydb.org/breweries?by_city=" + user;
  
    // make a get request to url
    //fetch(apiUrl).then(function(response) {
     // console.log(response);
     // response.json().then(function(data) {
     //   displayRepos(data, user);
     // });
   // });
 // };