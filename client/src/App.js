import './styles.css';

function App() {

  return (
    <>
      <header>
        <div className="switch" onClick={() => document.body.classList.toggle('dark')}>
          <div className="flicker"></div>
          <div className="moon"></div>
        </div>
      </header>
      <section className="main">
        <div className="main-text">
          <h1>Teressa Sung</h1>
          <p>Welcome to my page!</p>
          <br />
          <p>I am a software developer who is passionate about designing creative, fun, and innovative websites and web applications.</p>
          <br />
          <a href="#footer">Contact Me ></a>
        </div>

        <div className="hero-image">
          <div className="cube" id="react"></div>
          <div className="cube" id="javascript"></div>
          <div className="cube" id="html"></div>
          <div className="cube" id="css"></div>
        </div>
      </section>

      <section className="sub-section">
        <div className="square" id="spotify">
          <h2>Spotify Clone</h2>
          <p>A music player application</p>
          <br />
          {/* link github page */}
          <a href="">check it out </a>
        </div>
        <div className="square" id="candy">
          <h2>Candy Shop</h2>
          <p>an e-commerce website selling candies</p>
          <br />
          <a href="">check it out </a>
        </div>
        <div className="square" id="chat">
          <h2>React Chat App</h2>
          <p>a messenger application to chat with users</p>
          <br /> f
          <a href="">check it out </a>
        </div>
        <div className="square" id="quiz">
          <h2>Quiz App</h2>
          <p>a fun math quiz game</p>
          <br />
          <a href="">check it out </a>
        </div>
      </section>

      <footer id="footer">
        <p>teressas.hawaii@gmail.com</p>
      </footer>
    </>
  );
}

export default App;
