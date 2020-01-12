import "core-js/stable";
import 'regenerator-runtime/runtime';
const app = document.getElementById('app');
const other = require('./other.html');

console.log(other);

app.innerHTML = `
  <h1>Parcel v2 Test!</h1>

  <p>
    Here's some content, hopefully this works.
  </p>

  ${other}
`;