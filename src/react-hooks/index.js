import React, { useState, useCallback, useEffect } from 'react'
import MyHeader from './MyHeader'
import AddInput from './AddInput'
import TodoList from './TodoList'
import CheckModal from './checkModal'
import EditModal from './EditModal'

function App(){
    const [headTitle] = useState('事件待办')
    const [isShow, setIsShow] = useState(false)
    const [todoList, setTodoList] = useState([])
    const [isShowCheckModal, setIsShowCheckModal] = useState(false)
    const [checkData, setCheckData] = useState({})
    const [isShowEditModal, setIsShowEditModal] = useState(false)

    // useEffect方法可以写多个，但是有执行顺序
    // 第一个参数是个函数，是要执行的动作；第二个参数是个数组，是第一个参数的依赖
    useEffect(() => {
        const localTodoList = JSON.parse(localStorage.getItem("localTodoList") || "[]")
        setTodoList(localTodoList)
    }, [])

    useEffect(() => {
        localStorage.setItem('localTodoList', JSON.stringify(todoList))
    }, [todoList])

    const onAddInputEv = () => {
        setIsShow(!isShow)
    }

    const getInputVal = useCallback((val) => {
        const data = {
            id: new Date().getTime(),
            content: val,
            complete: false
        }
        setTodoList((todoList) => [...todoList, data])
    }, [])

    const checkEv = useCallback((val) => {
        _getSelected(todoList, val)
        setIsShowCheckModal(true)
    }, [todoList])

    const editEv = useCallback((val) => {
        _getSelected(todoList, val)
        setIsShowEditModal(true)
    }, [todoList])

    function _getSelected(todoList, val){
        console.log(val,'val')
        const filterData = todoList.filter(item => item.id === val)[0]
        setCheckData(filterData)
    }

    const deleteEv = (id) => {
        const filterData = todoList.filter(item => item.id !== id)
        setTodoList(filterData)
    }

    const checkDetermineEv = () => {
        setIsShowCheckModal(false)
    }

    const editDetermineEv = (data,id) => {
        let newList = []
        todoList.map(item => {
            if(item.id === id){
                item = data
            }
            newList.push(item)
        })
        setTodoList(newList)
        setIsShowEditModal(false)
    }

    const checkedChangeEv = (id) => {
        let newList = []
        todoList.map(item => {
            if(item.id === id){
                item.complete = !item.complete
            }
            newList.push(item)
        })
        setTodoList(newList)
    }
    return(
        <div>
            <CheckModal 
                checkDetermineEv={checkDetermineEv} 
                isShowCheckModal={isShowCheckModal} 
                checkData={checkData}
                modalTitle='查看' 
                color='#3CB0DE'   
            />
            <EditModal 
                editDetermineEv={editDetermineEv} 
                isShowEditModal={isShowEditModal} 
                checkData={checkData}
                modalTitle='编辑' 
                color='green'
            />
            <MyHeader title={headTitle} onAddInputEv={onAddInputEv} />
            <AddInput isShow={isShow} getInputVal={getInputVal}/>
            <TodoList todoListDatas={todoList} checkedChangeEv={checkedChangeEv} checkEv={checkEv} editEv={editEv} deleteEv={deleteEv}/>
        </div>
    )
}

export default App