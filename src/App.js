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
      <header className='App__header'></header>
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
        
      </footer>
    </div>
  );
}

export default App;
