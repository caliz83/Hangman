import { useState } from 'react'
import './App.css'
import HangmanDrawing from './HangmanDrawing';
import HangmanWord from './HangmanWord';
import Keyboard from './Keyboard';


function App() {
  
  const words = 'tbd';
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  }) //words to pull from api - figure it out

  console.log(wordToGuess);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  return 
  <div>
    <div>
    Lose
    Win
    </div>
    <HangmanDrawing />
    <HangmanWord />
    <Keyboard />
  </div>
}

export default App
