



function Button(props){

 





    return(
        <button type="button" className={`rounded-lg px-4 py-2 text-center w-full font-semibold ${props.background || "bg-blue-500"} ${props.colorText || ''}}`}>
            {props.children}
        </button>
   
 
    )
}

export default Button