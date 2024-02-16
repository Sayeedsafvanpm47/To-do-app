import List from "./assets/components/List"
import Form from "./assets/components/Form"
import { Container as Container,Heading as Heading, Table as Table, Th as Th, Td as Td } from "./assets/styles/styles"
import { useState } from "react"


const App = () => {

  const [task,setTask] = useState([
    {id:1,activity:'Learn Sweet child o Mine solo',completed:false},
    {id:2,activity:'Learn React Completely',completed:false}
  ])
  const handleToggle = (id:number)=>{
    setTask(
      task.map((activity)=>{
        if(activity.id == id)
        {
          return {...activity,completed:!activity.completed}
          // console.log({...activity,completed:!activity.completed})
        }
        return activity
      })
    )
  }
  const deleteItem = (id:number)=>{
    setTask(
      task.filter((activity)=>{
      return activity.id !== id

      })
    )
  }
  return (
    <>
   <Heading>ToDo List</Heading>
    <Container>
   <Table>
    <thead>
      <tr>
      <Th>
    <h3>Things to be done!</h3>
    </Th>
    </tr>
    </thead>
    <tbody>
      <tr>
      <Td> <List activity={task} handleToggle={handleToggle} deleteItem={deleteItem}/></Td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <Td>
        <div> <Form  onSubmit={(newTask) => {
            setTask([...task, { ...newTask, id: task.length + 1, completed: false }]);
          }}/></div>
        </Td>
      </tr>
    </tfoot>
    </Table>
   
   
    </Container>
    </>
  )
}

export default App