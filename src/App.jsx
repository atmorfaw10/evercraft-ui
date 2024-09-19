import { useEffect, useState } from 'react'
import './App.css'
import { httpGet } from './service/http';

function App() {
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [inputText, setInputText] = useState('');

  function handleInputText (newText) {
    setInputText(newText);
  }

  async function handleSubmit() {
    const response = await httpGet(inputText)
    setWelcomeMessage(response)
  }

  useEffect(() => {
    async function initMessage() {
      const initResponse = await httpGet()
      setWelcomeMessage(initResponse)
    }
    initMessage();
  }, [])
  


  return (
    <>
     {welcomeMessage}
     <div className='input-container'>
       <label htmlFor='nameTextBox'>What's your name?</label>
       <input id='nameTextBox' value={inputText} onChange={(event) => handleInputText(event.target.value)}/>
       <button label="submit" onClick={() => handleSubmit()}>Submit</button>
     </div>
     <div>Welcome to EverCraft!</div>
    </>
  )
}

export default App
