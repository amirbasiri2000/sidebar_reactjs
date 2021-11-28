import { useState , useEffect } from "react"
import { menuHandlerStore, Step1, Step2, Step3 } from "../Components"


export const Home = () =>{


    const [ state , setState ] = useState({
        step : 0,
        formData : {},
        formSubmited : false,
    })

    
    const FormDisplay = () =>{
        if(state.step === 0){
            return <Step1 state={state} setState={setState}/>
        }else if( state.step === 1 ){
            return <Step2 state={state} setState={setState} />
        }else if(state.step === 2 ) {
            return <Step3 state={state} setState={setState}/>
        }
    }

    return(
        
        <div className=" w-full flex justify-center mt-2">
            {FormDisplay()}
        </div>
    )
}