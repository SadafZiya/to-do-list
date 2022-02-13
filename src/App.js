import './App.css';
import {useState} from "react";
import deleteIcon from "./assets/png/delete.png";

function App() {
    const [toDoList, setToDoList] = useState([])
    const [newTextToDo, setNewTextToDo] = useState('')
    const [textToDoError, setTextToDoError] = useState(false)

    const addNewToDo = () => {
        if (!newTextToDo.trim()) {
            setTextToDoError(true)
            return false
        }
        let newToDo = {
            id: toDoList.length === 0 ? 1 : toDoList.length + 1,
            text: newTextToDo,
            isDone: false,
            editable: false
        }
        setNewTextToDo('')
        setToDoList([newToDo, ...toDoList])
    }
    const toggleToDoItem = (e) => {
        let {id} = e.target
        let findToDoItem = toDoList.find(item => item.id === +id)
        findToDoItem.isDone = !findToDoItem.isDone
        setToDoList([...toDoList])
    }
    const changeTextToDo = (e) => {
        let {value} = e.target
        setNewTextToDo(value)
        setTextToDoError(false)
    }
    const keyPressTextToDo = (e) => {
        if (e.charCode === 13) {
            addNewToDo()
        }
    }
    const removeToDoItem = (id) => {
        let list = toDoList.filter(item => item.id !== id)
        setToDoList(list)
    }
    return (
        <div className="App">
            <header className="App-header">
                <div className={"main-div-to-do-lst"}>

                    <div>
                        {toDoList.map(item =>
                            <section>
                                {!item.editable && <>
                                    <label key={item.id}>
                                        <input type={'checkbox'} checked={item.isDone} id={item.id}
                                               onChange={toggleToDoItem}
                                               value={item.text}/>
                                        <span>{item.text}</span>
                                    </label>
                                    <img src={deleteIcon} onClick={() => removeToDoItem(item.id)} alt={'removeItem'}/>
                                </>}
                            </section>
                        )}
                    </div>
                    <div>
                        <input type={'text'}
                               onChange={changeTextToDo}
                               onKeyPress={keyPressTextToDo}
                               value={newTextToDo}/>
                        <button onClick={addNewToDo}> Add To List</button>
                        {(!newTextToDo.trim() && textToDoError) &&
                        <label className={'text-to-do-error'}>you have to write something here</label>}
                    </div>
                </div>

            </header>
        </div>
    );
}

export default App;
