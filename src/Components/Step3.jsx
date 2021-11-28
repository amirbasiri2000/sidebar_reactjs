

export const Step3 = ({setState , state}) =>{



    const inputChangeHandler = (event) =>{
        const inputData = {[event.target.name] : event.target.value };
        setState({...state , formData : {...state.formData , ...inputData}})
        
    }

    const fomrSubmitHandler = (event) =>{
        event.preventDefault();

        setState({...state , formSubmited : true});
    }

    const prevClickHandler = () =>{
        setState({...state , step : state.step -= 1} )
    }

    const finalAcceptFormHandler = () =>{
        setState({
            ...state,
            formSubmited : false,
            step : 0
        })
    }

    return(
        <>
        {state.formSubmited ? <div className="w-full h-screen top-0 absolute shadow-inner bg-gray-200 z-50">
            <div style={{direction:'ltr'}} className="w-1/2 mx-auto mt-40 h-1/2 bg-gray-600 shadow-xl rounded-2xl p-10 flex flex-col text-left">
                <div className="flex"><h4 className="text-gray-400 mb-2 text-2xl font-bold">First Name :</h4><p className="ml-3 text-gray-200 text-lg"> {state.formData.First_name}</p></div>
                <div className="flex"><h4 className="text-gray-400 mb-2 text-2xl font-bold">last Name :</h4><p className="ml-3 text-gray-200 text-lg"> {state.formData.sur_name}</p></div>
                <div className="flex"><h4 className="text-gray-400 mb-2 text-2xl font-bold">nationality Name :</h4><p className="ml-3 text-gray-200 text-lg"> {state.formData.natianality}</p></div>
                <div className="flex"><h4 className="text-gray-400 mb-2 text-2xl font-bold">Email :</h4><p className="ml-3 text-gray-200 text-lg"> {state.formData.Email}</p></div>
                <button onClick={finalAcceptFormHandler} className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-auto rounded focus:outline-none focus:shadow-outline" type="button">
                        OK
                </button>
            </div>
        </div> : <>
            <div className="w-full mt-20 max-w-xs text-left">
            <form onSubmit={fomrSubmitHandler} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                        <div className="w-10 h-10 bg-green-600 border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center">
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
                        Natioanality
                    </label>
                    <input 
                        onChange={inputChangeHandler} 
                        value={state.formData.natianality || ''}
                        name="natianality" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="nationality" 
                        type="text" 
                        placeholder="Username"/>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        others
                    </label>
                    <input 
                        onChange={inputChangeHandler} 
                        value={state.formData.others || ''}
                        name="others" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        id="others" 
                        type="text" 
                        placeholder="surname"/>
                    
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="sumbit">
                        Submit
                    </button>
                    <button  onClick={prevClickHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        prev
                    </button>
                </div>
            </form>
        </div>
        </>}
    </>
    )
}