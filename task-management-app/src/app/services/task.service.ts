import { Injectable } from '@angular/core';
import axios from 'axios';
import { Task } from '../models/task.model';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private apiUrl = 'http://localhost:5000/api/tasks';

    async getTasks(): Promise<Task[]> {
        const response = await axios.get(this.apiUrl);
        return response.data;
    }

    async createTask(task: Task): Promise<Task> {
        const response = await axios.post(this.apiUrl, task);
        return response.data;
    }

    async updateTask(task: Task): Promise<Task> {
        const response = await axios.put(`${this.apiUrl}/${task.id}`, task);
        return response.data;
    }

    async deleteTask(id: string): Promise<void> {
        await axios.delete(`${this.apiUrl}/${id}`);
    }
}
