import React from 'react'

const Informacion = () => {
    return (
        <div className='container p-8 mx-auto my-20'>
        <h1 className='text-2xl'>Hola! 👋</h1>
        <br/>

        <p className='text-justify'>
            Este proyecto es la combinación de una gran pasion como la improvisación en sus diferentes presentaciones. 
            <br />
            <ol className='text-left'>
            <li className='text-left'>Teatro </li>
            <li className='text-left'>trova</li>     
            <li className='text-left'>freeStyle rap</li>   
            <li className='text-left'>cuenteria</li>    
            </ol> 
            
            Cada una de estas artes hace desarrollar habilidades blandas como la comunicación asertiva,
            la elocuencia, expresión corporal y nos adentramos a descubrir lo rico de nuestra lengua, en nuestro caso el español.
            <br /><br/>
            Esta aplicación como todo proyecto empieza simple y es solo con fin recreativo.
            Decido empezar un miniproyecto para compartir y pasar un buen rato entre amigos y ojalá se convierta en  una herramienta para empezar en este gran mundo del arte del repentismo.
            <br/><br />
            La dinámica consiste en construir en 120 segundo rimas improvisadas con las palabras que aparecen en la pantalla.
            El set de palabras se presentan de a 4  y cada 10 segundos cambia.
            En la pantalla se mostrará la rima que va construyendo  el participante y cada 10 segundo mostrará las frases construidas con el numero de palabras acertadas.

            <br />
            <hr />
            Espero que disfrutes esta aplicación, y si eres desarrollador , eres libre de aportar en el desarrollo de esta aplicación para que pueda seguir creciendo.

            <br />
            <br/>
            Las herramientas como canciones fueron descargas y son utilizadas con el fin de compartir y es sin ánimo de lucro.

            <p className='border rounded-2xl px-4 py-2 text-center text-white my-8' style={{
                background: '#121f3d'
            }}>  🚀 Hecho con 🧡 por <a className="font-semibold underline" href="https://www.twitter.com/darmo.10" target="_blank" rel="noreferrer">Danilo Morales </a> para el mundo  🌍 </p>

            
        </p>

        
    </div>
    )
}

export default Informacion
