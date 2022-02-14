$(document).ready(function () {
    let response = ' {"deals": "Farrow and Ball"}';

    if (response) {
        try {
          let dealData = JSON.parse(response);
          showContent(dealData);
        } catch (err) {
          let errorMessage = err.name + " " + err.message;
          console.log(errorMessage);
          feed.innerHTML = "<em>Sorry, could not load deals</em>";
        } finally {
          let link = document.createElement('a');
          link.innerHTML = ' <a href="../html/04_try-catch-finally.html">reload</a>';
          feed.appendChild(link);
        }
    }
    
});