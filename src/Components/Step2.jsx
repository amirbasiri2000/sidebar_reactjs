





export const Step2 = ({ state , setState }) =>{


    const inputChangeHandler = (event) =>{
        const inputData = {[event.target.name] : event.target.value };
        setState({...state , formData : {...state.formData , ...inputData}})
        
    }

    const nextClickHandler = () =>{
        setState({...state , step : state.step += 1} )
    }
    const prevClickHandler = () =>{
        setState({...state , step : state.step -= 1} )
    }

    return(
        <div className="w-full mt-20 max-w-xs text-left">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                {/* =================================================================== */}
            <div style={{direction:'ltr'}} className="max-w-xl  mx-auto my-4 border-b-2 pb-4 ">	
                <div className="flex justify-start pb-3 ">
                    

                    <div className=" p-0">
                        <div className="w-10 bg-green-600 h-10 bg-green mx-auto rounded-full text-lg text-white flex items-center">
                        <span className="text-grey-500 text-center w-full">1</span>
                        </div>
                    </div>


                    <div className="w-1/4  bg-green-600 h-2 my-auto align-center items-center align-middle content-center flex">
                        <div className="w-full bg-grey-light rounded items-center align-middle align-center ">
                            <div className="bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded " style={{width: "100%"}}></div>
                        </div>
                    </div>
                
                    
                    <div className="">
                        <div className="w-10 bg-green-600 h-10 bg-green mx-auto rounded-full text-lg text-white flex items-center">
                            <span className="text-grey-500 text-center w-full">2</span>
                        </div>
                    </div>
                
                    <div className="w-1/4 bg-green-600 h-2 my-auto align-center items-center align-middle content-center flex">
                        <div className="w-full bg-grey-light rounded items-center align-middle align-center ">
                            <div className="bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded " style={{width: "100%"}}></div>
                        </div>
                    </div>
                
                    <div className="">
                        <div className="w-10 h-10 bg-gray-400 border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center">
                            <span className="text-grey-500 text-center w-full">3</span>
                        </div>
                    </div>

                </div>
                
                <div className="flex text-xs justify-around  ">
                    <div className="w-1/4">
                        step 1
                    </div>
                    
                    <div className="w-1/4">
                        Pstep 2
                    </div>
                    
                    <div className="w-1/4">
                        step 3
                    </div>			
                </div>
            </div>
            {/* ====================================================================== */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        First Name
                    </label>
                    <input 
                        onChange={inputChangeHandler} 
                        value={state.formData.First_name || ''}
                        name="First_name" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="username" 
                        type="text" 
                        placeholder="Username"/>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        SurName
                    </label>
                    <input 
                        onChange={inputChangeHandler} 
                        value={state.formData.sur_name || ''}
                        name="sur_name" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        id="password" 
                        type="text" 
                        placeholder="surname"/>
                    
                </div>
                <div className="flex items-center justify-between">
                    <button onClick={nextClickHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Next
                    </button>
                    <button onClick={prevClickHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        prev
                    </button>
                </div>
            </form>
        </div>
    )
}