import { Injectable } from '@nestjs/common';

import { Task } from 'src/interfaces/task';

@Injectable()
export class TasksService {

    private tasks:Task[]=[
        {
            id:1,
            title:"testing",
            description:"testing description",
            done:true
        },
        {
            id:2,
            title:"testing2",
            description:"testing description2",
            done:true
        },
        {
            id:3,
            title:"testing3",
            description:"testing description3",
            done:true
        }
    ];


     async getTasks():Promise<Task[]>{
        return this.tasks;
    }

    getTask(id:number):Task{
        return this.tasks.find(task=>task.id===id);
    }





}
