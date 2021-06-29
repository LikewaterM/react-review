import React, { useRef } from 'react'

function TodoList(props){
    const { todoListDatas, checkEv, editEv, checkedChangeEv, deleteEv } = props
    return(
        <ul className='todolist'>
            {
                todoListDatas.map((item,key)=>{
                    return (
                        <li key={key} className='todolist-li'>
                            <div className='todolist-div'>
                                <input className='todolist-input' type='checkbox' checked={item.complete} onChange={()=>checkedChangeEv(item.id)}/>
                                <span className='todolist-span' style={{textDecoration:(item.complete?'line-through':'none')}}>{item.content}</span>
                                <div className='todolist-btnGroup'>
                                    <button className='todolist-btn-check' onClick={()=>{checkEv(item.id)}}>查看</button>
                                    <button className='todolist-btn-edit' onClick={()=>{editEv(item.id)}}>编辑</button>
                                    <button className='todolist-btn-delete' onClick={()=>{deleteEv(item.id)}}>删除</button>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default TodoList