import { useState } from 'react'
import { marked } from 'marked'
import './App.css';

function App() {
  marked.setOptions({
    breaks: true,
  })
 
  const [text, setText] = useState('# Here\'s my\n## React Markdown Previewer!\nCurious to dive deeper? Explore the official [site here!](https://marked.js.org)\nOr, you can install it by running:\n`npm install -g marked`\nThen,\n```\n# Print all options:\n $ marked --help\n```\n> "TO MAKE A LONG STORY SHORT"\n\n **Benefits of Markdown:**\n- Simple syntax\n- Converts easily to HTML\n- Portable across platforms\n\n![Marked-logo](https://marked.js.org/img/logo-black.svg)')
  
  return (
    <div className="App">
      <header className="App__header">
        <h1 className='header__h1'>RubberDucking</h1>
        <p className='header__p'>Discover the Magic of Markdown!
        Write something in a note block, and watch it come to life on your screen. Simple, powerful, and fun to use!</p>
      </header> 
      
      <main className='App__main'>
        <section className='main__section--Desktop'>
          <article id='preview'
          dangerouslySetInnerHTML={{
            __html: marked(text)
          }}
          // To check html output
          // {marked.parse(text)} 
          ></article>
          <img></img>
        </section>
        <section className='main__section--Notes'>
          <textarea 
          id='editor' onChange={(event) => {
            setText(event.target.value)
          }}
          value={text}
          ></textarea>
        </section>
      </main>

      <footer className='App__footer'>
        <p className='footer__p'>This app is inspired by the Markdown Previewer project from 
          <a className='footer__a' href='https://markdown-previewer.freecodecamp.rocks' target='_blank'>
          <img className='footer__img' alt="freeCodeCampLogo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/FreeCodeCamp_logo.svg/1600px-FreeCodeCamp_logo.svg.png'></img></a>
          's Front End Development Libraries certification.
          </p>
      </footer>
    </div>
  );
}

export default App;
