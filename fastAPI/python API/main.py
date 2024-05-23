from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from uuid import UUID, uuid4

app=FastAPI()

#creating model based on pydantic
#pydantic model are converted into JSON so that data can be parsed
#you define all the fields that are to be in your data and what the type will be using annotations

class Task(BaseModel):
    id:Optional[UUID] = None
    title:str
    description: Optional[str] = None
    completed: bool = False

#creating a dummy database
tasks= []


#endpoint to creating a new task
#saying that the Task model is to be used to encode the JSON that is returned from this route
@app.post("/tasks/",response_model=Task)
def create_task(task: Task):
    task.id = uuid4()
    tasks.append(task)
    return task

#endpoint to read the tasks
@app.get("/tasks/",response_model = List[Task])
def read_tasks():
    return tasks

#endpoint to viewing a specific task
#introduction of path parameter
@app.get("/tasks/{task_id}",response_model=Task)
def read_task(task_id:UUID):
    for task in tasks:
        if task.id == task_id:
            return task
        raise HTTPException(status_code=404,detail="Task not found")
    
#endpoint to update a task
@app.put("/tasks/{task_id}", response_model=Task)
def update_task(task_id: UUID, task_update: Task):
    #added an index to each task item as it iterates
    for idx, task in enumerate(tasks):
        #task.copy creates a copy of the original task
        #applies updates to the copied task
        if task.id == task_id:
            #converts task_update into a dictionary and excludes all key-value pairs where the value is none
            #only prpoerties with actual updated values are included in the dictionary
            updated_task= task.copy(update=task_update.dict(exclude_unset=True))
            tasks[idx]= updated_task
            return updated_task
    raise HTTPException(status_code=404, detail="Task not found")
    


#endpoint to delete task
@app.delete("/tasks/{task_id}", response_model=Task)
def delete_task(task_id: UUID):
    for idx, task in enumerate(tasks):
        #removes task from the list of tasks
        if task.id == task_id:
           return tasks.pop(idx)
    raise HTTPException(status_code=404, detail="Task not found")
        
         
    
    


