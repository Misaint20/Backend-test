import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaksDto } from './dto/create-task.dto';
import { UpdateTaksDto } from './dto/update-task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('/tasks')
@ApiTags('tasks')
export class TasksController {
    tasksService: TasksService

    constructor(tasksService: TasksService) {
        this.tasksService = tasksService
    }

    @ApiOperation({ summary: 'Get all tasks' })
    @ApiResponse({ status: 200, description: 'Return all tasks' })
    @Get()
    getAllTasks(@Query() query: any) {
        console.log(query)
        return this.tasksService.getTasks()
    }

    @ApiOperation({ summary: 'Get a task' })
    @Get('/:id')
    getTask(@Param('id') id: string) {
        console.log(id)
        return this.tasksService.getTask(parseInt(id))
    }

    @ApiOperation({ summary: 'Create a task' })
    @Post()
    @UsePipes(new ValidationPipe())
    createTask(@Body() task: CreateTaksDto) {
        return this.tasksService.createTask(task)
    }

    @Put()
    updateTask(@Body() task: UpdateTaksDto) {
        return this.tasksService.updateTask(task)
    }

    @Delete()
    deleteTask() {
        return this.tasksService.deleteTask()
    }

    @Patch()
    updateTaskStatus() {
        return this.tasksService.updateTaskService()
    }
}
