var $userList = document.querySelector('#user-list');
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log('Status:', xhr.status);
  console.log('response:', xhr.response);
  for (var i = 0; i < xhr.response.length; i++) {
    var usersElement = document.createElement('li');
    usersElement.textContent = xhr.response[i].name;
    $userList.appendChild(usersElement);
  }
});
xhr.send();
