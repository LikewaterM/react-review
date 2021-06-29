import React, { useRef } from 'react'
import './css/index.css'

function AddInput(props){
    const inpRef = useRef(),
          { isShow, getInputVal } = props;
    
    const addInputValEv = () => {
        getInputVal(inpRef.current.value.trim())
        inpRef.current.value = ''
    }
    return(
        <>
            {
                isShow?(
                    <div className='addInput'>
                        <input className='addInput-input' ref={inpRef} />
                        <button onClick={addInputValEv} className='addInput-btn'>添加</button>
                    </div>
                ): null
            }
        </>
    )
}

export default AddInput