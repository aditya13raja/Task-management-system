import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  @Output() editTask = new EventEmitter<Task>();

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().then((tasks) => {
      this.tasks = tasks;
    });
  }

  onEditTask(task: Task) {
    this.editTask.emit(task);
  }

  onDeleteTask(id: string) {
    this.taskService.deleteTask(id).then(() => {
      this.tasks = this.tasks.filter(task => task.id !== id);
    });
  }
}
