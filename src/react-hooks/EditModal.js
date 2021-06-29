import React, { useRef } from 'react'
import './css/index.css'
import Modal from './Modal'

function EditModal(props){
    const { isShowEditModal, modalTitle, editDetermineEv, color, checkData } = props
    const checkboxRef = useRef(), textareaRef = useRef()
    const editEv = () => {
        const data = {
            id: new Date().getTime(),
            content: textareaRef.current.value,
            complete: checkboxRef.current.checked
        }
        editDetermineEv(data, checkData.id)
    }
    return(
        <Modal isShowModal={isShowEditModal} modalTitle={modalTitle} color={color}>
            <div className='checkModal'>
                <p className='checkModal-content'><span>日期：</span><span className='span1'>{checkData.id}</span></p>
                <p className='checkModal-content' style={{marginTop:'5px'}}>
                    <span>内容：</span>
                    <textarea className='textarea' ref={textareaRef}>
                        {checkData.content}
                    </textarea>
                </p>
                <p className='checkModal-content'>
                    <span>状态：</span>
                    <input type='checkbox' defaultChecked={checkData.complete} ref={checkboxRef}/>
                </p>
                <button className='modal-btn' style={{backgroundColor:color}} onClick={editEv}>确定</button>
            </div>
        </Modal>
    )
}

export default EditModal