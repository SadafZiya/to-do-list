import './App.css';
import {useState} from "react";

function App() {
    const [toDoList, setToDoList] = useState([])
    const [newTextToDo, setNewTextToDo] = useState('')

    const addNewToDo = () => {
        let newToDo = {
            id: toDoList.length === 0 ? 1 : toDoList.length + 1,
            text: newTextToDo,
            isDone: false,
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

    return (
        <div className="App">
            <header className="App-header">
                <div className={"main-div-to-do-lst"}>

                    <div>
                        {toDoList.map(item =>
                            <>
                                <label key={item.id}>
                                    <input type={'checkbox'} checked={item.isDone} id={item.id}
                                           onChange={toggleToDoItem} value={item.text}/>
                                    <span>{item.text}</span>
                                </label>
                            </>
                        )}
                    </div>
                    <div>
                        <input type={'text'} onChange={(e) => setNewTextToDo(e.target?.value)} value={newTextToDo}/>
                        <button onClick={addNewToDo}> Add To List</button>
                    </div>
                </div>

            </header>
        </div>
    );
}

export default App;
