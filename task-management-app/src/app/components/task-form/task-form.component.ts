import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  @Input() task: Task = {
    id: '',
    title: '',
    description: '',
    dueDate: new Date(),
    priority: 'medium',
    status: 'to-do',
    history: [],
  };

  @Input() isEditMode = false;
  @Output() taskSaved = new EventEmitter<Task>();

  constructor(private taskService: TaskService) {}

  onSubmit() {
    if (this.isEditMode) {
      this.taskService.updateTask(this.task).then((updatedTask) => {
        this.taskSaved.emit(updatedTask);
      });
    } else {
      this.taskService.createTask(this.task).then((newTask) => {
        this.taskSaved.emit(newTask);
      });
    }
  }
}
