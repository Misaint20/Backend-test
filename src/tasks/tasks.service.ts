import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaksDto } from './dto/create-task.dto';
import { UpdateTaksDto } from './dto/update-task.dto';

export interface User {
    name: String;
    age: number
}

@Injectable()
export class TasksService {

    private tasks = []

    getTasks() {
        return this.tasks
    }

    createTask(task: CreateTaksDto) {
        console.log(task)
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1
        })
        return task
    }

    getTask(id: number) {
        const taskFound = this.tasks.find(task => task.id === id)

        if (!taskFound) return new NotFoundException(`La tarea con el id: ${id} no fue econtrada`)
        return taskFound
    }

    updateTask(task: UpdateTaksDto) {
        console.log(task)
        return 'Actualizando tareas'
    }

    deleteTask() {
        return 'Eliminando tareas'
    }

    updateTaskService() {
        return 'Actualizndo el estado de una tarea'
    }
}
