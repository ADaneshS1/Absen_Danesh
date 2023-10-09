window.onload = () => { 
    document.getElementById('dataForm') .addEventListener('submit', function (event) {
      event.preventDefault();
  
      const name = document.getElementById('nama').value; 
  
      const apiUrl = 'http://localhost:3011/api/user';
  
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      })    
  
        .then((response) => response.json())
        .then((data) => {
          if(data.error) {
            alert(data.message);
            return;
          }
          window.open('/', '_self');
        })
  
        .catch((error) => {
          alert('Terjadi kesalahan saat mengirim data ke API.');
        });
    });
    };