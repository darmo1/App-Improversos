import React from "react";


export const useSpeechRecognition = () => {

    const [ start , setStart ] = React.useState(false)
    const [flagTime, setFlagTime] = React.useState(false)
    const SpeechRecognition =  window.webkitSpeechRecognition || window.SpeechRecognition
    const speechRecognition = new SpeechRecognition()
    speechRecognition.lang = 'es-ES';
    speechRecognition.continuous = true;
    speechRecognition.interimResults = true;

    const handleStartRecoding = () => {
        setTimeout( () => {
            setStart(true)
        }, [2000])   
    }

    const handleStopRecording = () => {
        console.log('stop it')
        speechRecognition.abort()
        setFlagTime(false)
    }
   

    return {

        speechRecognition,
        handleStartRecoding,
        handleStopRecording,
        start , 
        setStart,
        flagTime, setFlagTime
    }




}


