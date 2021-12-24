import React from 'react'

import { useSpeechRecognition } from './Hooks/useSpeechRecognition'
import CountDownLevel from './utils/CountDownLevel'

const App = () => {


  const { speechRecognition, handleStartRecoding, handleStopRecording, script, start } = useSpeechRecognition()
  const [countDown, setCountDown] = React.useState(3)
  const [words, setWords] = React.useState([])
  const [wordPresentation, setWordPresentation] = React.useState([])
  const [sec, setSec] = React.useState(0)

  React.useEffect(() => {
    let timeID
    if (start) {
      timeID = setInterval(() => {
        setCountDown(prev => Math.max(prev - 1, 0))
      }, [1000])
    }
    return () => clearInterval(timeID)
  })

  React.useEffect(async () => {
    try {
      const url = 'http://api.datamuse.com/words?sp=*on&v=es'
      const fetchData = await fetch(url)

      if (fetchData.status === 200) {
        console.log('parcero')
        const data = await fetchData.json()
        console.log(data, 'hell')
        setWords(data)
      }

    } catch (err) {

      return err.message

    }
  }, [])

  React.useEffect(() => {
    if (words.length > 0) {
      const storedWords = []
      for (let i = 0; i < 4; i++) {
        let NUMBER_RANDOM = Math.random();
     
        let currentWord = words[Math.ceil(NUMBER_RANDOM * words.length - 1)]
        storedWords.push(currentWord)
      }
      console.log(storedWords)
      setWordPresentation(prev => [...prev, storedWords])
    }
  }, [words])
  React.useEffect( () => {
    console.log(wordPresentation)
  }, [wordPresentation])



  return (
    <div>
      <h1>Titulo</h1>
      {script}
      <div>
        {countDown}
      </div>

      {wordPresentation.length > 0

        ? <div>
          {wordPresentation[sec].map(item => {
            return (
              <div>
                {item.word}
              </div>
            )
          })}
        </div>

        : null}



      <button onClick={handleStartRecoding}>
        Start
      </button>
      <button onClick={handleStopRecording}>
        Finalizar
      </button>



    </div>
  )
}

export default App
