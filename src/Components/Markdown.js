import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


function Markdown() {
    const [input, setInput] = useState("");
  return <>
  <div className='row'>
    <h3 className='text-center'>Markdown</h3>
    <div className='App '>
      <textarea
        autoFocus
        className='textarea'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      
      <ReactMarkdown
       source={input}
        className='markdown  '
        renderers={{
         Component
        }}
        />
        
    </div> 
    </div>
  </>
}
const Component = ({value,language}) => { 
    return (
      <SyntaxHighlighter language={language ?? null} style={{docco}}>
        {value ?? ''}
      </SyntaxHighlighter>
    );
  }; 

export default Markdown