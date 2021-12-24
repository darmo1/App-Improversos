import React from "react";


export const useSpeechRecognition = () => {

    const [ script, setScript ] = React.useState('')
    const [ start , setStart ] = React.useState(false)

    const speechRecognition = new window.webkitSpeechRecognition();
    speechRecognition.lang = 'es-ES';
    speechRecognition.continuous = true;
    speechRecognition.interimResults = true;


    const handleStartRecoding = () => {
        console.log('iniciando')
        speechRecognition.start()
        setTimeout( () => {
            setStart(true)
        }, [2000])
        
    }


    const handleStopRecording = () => {
        console.log('stop it')
        speechRecognition.abort()
    }
    React.useEffect( () => {

        speechRecognition.onresult = e => {
            console.log(e.results[0][0].transcript)
            setScript(e.results[0][0].transcript.toString().toLowerCase())

        }

    }, [speechRecognition, speechRecognition.onresult])


   
    return {

        speechRecognition,
        handleStartRecoding,
        handleStopRecording,
        script,
        start , setStart
    }




}


