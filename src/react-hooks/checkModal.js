import React from 'react'
import './css/index.css'
import Modal from './Modal'
import { getLocalTime } from './utils/index'

function CheckModal(props){
    const { isShowCheckModal, modalTitle, checkDetermineEv, checkData, color } = props
    return(
        <Modal isShowModal={isShowCheckModal} modalTitle={modalTitle} color={color}>
            <div className='checkModal'>
                <p className='checkModal-content'><span>日期：</span><span className='span1'>{getLocalTime(checkData.id)}</span></p>
                <p className='checkModal-content'><span>内容：</span><span className='span1'>{checkData.content}</span></p>
                <p className='checkModal-content'><span>状态：</span><span className='span1'>{checkData.complete?'已完成':'未完成'}</span></p>
                <button className='modal-btn' style={{backgroundColor:color}} onClick={checkDetermineEv}>确定</button>
            </div>
        </Modal>
    )
}

export default CheckModal