document.querySelector('button').addEventListener('click', function() {
  fetch('https://official-joke-api.appspot.com/random_joke  ')
      .then(res => res.json())
      .then(data => {
        console.log(data);
          document.querySelector('#result').innerHTML = `
              <p>${data.setup}</p>
              <p>${data.punchline}</p>
          `;
      })
      .catch(err => console.error('Affrimation api err:', err));
});
