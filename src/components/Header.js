
import '../style/Header.css';

function Headre() {

  let img = require('../images/troll-face.png')
  return (
    <header className="header">
      <img src={img} alt="m"
          className="header--image"
      />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Course - Project 3</h4>
  </header>
  );
}

export default Headre;
