import { useState } from "react"


export const Step1 = ({setState,state}) =>{


    

    const inputChangeHandler = (event) =>{
        const inputData = {[event.target.name] : event.target.value };
        setState({...state , formData : {...state.formData , ...inputData}})
        
    }
   
    const nextClickHandler = () =>{
        setState({...state , step : state.step += 1} )
    }

    // console.log('formdata is : ' , state.formData)
    return(
        <div className="w-full mt-20 max-w-xs text-left">
            <form className="bg-white shadow-md rounded px-8 pt-2 pb-2 mb-4">
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
                        <div className="w-10 bg-gray-400 h-10 bg-green mx-auto rounded-full text-lg text-white flex items-center">
                            <span className="text-grey-500 text-center w-full">2</span>
                        </div>
                    </div>
                
                    <div className="w-1/4  bg-gray-400 h-2 my-auto align-center items-center align-middle content-center flex">
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
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input 
                        onChange={inputChangeHandler} 
                        value={state.formData.Email || ''}
                        name="Email" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="email" 
                        type="email" 
                        placeholder="Email"/>
                </div>


                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        password
                    </label>
                    <input 
                        onChange={inputChangeHandler} 
                        value={state.formData.Password || ''}
                        name="Password" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        id="password" 
                        type="password" 
                        placeholder="***********"/>
                    
                </div>


                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Confirm Password
                    </label>
                    <input 
                        onChange={inputChangeHandler}
                        value={state.formData.confirm_password || ''}
                        name="confirm_password" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        id="password" 
                        type="password" 
                        placeholder="***********"/>
                    
                </div>


                <div className="flex items-center justify-start">
                    <button onClick={nextClickHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Next
                    </button>
                </div>
            </form>
        </div>
    )
}