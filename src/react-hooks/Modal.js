import React from 'react'
import './css/index.css'

function Modal(props){
    const { isShowModal, modalTitle, children, color } = props
    return(
        <>
        {
            isShowModal ? (
                <div className='modal-shadow'>
                    <div className='modal'>
                        <div className='modal-title' style={{backgroundColor:color}}>{modalTitle || '标题'}</div>
                        <div className='modal-content'>
                            {children}
                        </div>
                    </div>
                </div>
            ): null
        }
        </>
    )
}

export default Modal