import { Controller,Get, Post, Put, Delete,Body, Param, Req, Res } from '@nestjs/common';
import CreateTaskDto from './dto/create-task.dto';

//import { Request,Response} from 'express';
import { TasksService } from './tasks.service';




@Controller('tasks')
export class TasksController {

    constructor(private readonly taskService:TasksService){

    }

    @Get()
    async getTasks():Promise<any>{
        return await this.taskService.getTasks();
    }
    
    @Get('/:id')
    getTask(@Param('id') id:string){
        console.log(id)
        return this.taskService.getTask(Number(id));
    }
   /* @Get()
    getTask(req:Request,res:Response):object{
        const params= req.body;
        const par=req.params;
        return res.status(200).send({params,par});
    }

    */
   /*
    @Get()
    getTask(@Req() req,@Res() res):Response{
        return res.send("hello")
    }*/


    @Post()
    createTask(@Body() task:CreateTaskDto):string{
        console.log(task)
        return 'creating a task';
    }


    @Put('/:id')
    updateTask(@Body() task:CreateTaskDto,@Param("id") id):string{
        console.log(task);
        console.log(id)
        return 'Updating a task';
    }

    @Delete('/:id')
    deleteTaks(@Param("id") id):string{
        console.log('Delete task',id)
        return 'Deleting a task' + id;
    }

}
