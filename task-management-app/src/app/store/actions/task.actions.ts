import { createAction, props } from '@ngrx/store';
import { Task } from '../../models/task.model';

export const loadTasks = createAction('[Task List] Load Tasks');
export const loadTasksSuccess = createAction('[Task List] Load Tasks Success', props<{ tasks: Task[] }>());
export const loadTasksFailure = createAction('[Task List] Load Tasks Failure', props<{ error: any }>());
export const addTask = createAction('[Task Form] Add Task', props<{ task: Task }>());
export const updateTask = createAction('[Task Form] Update Task', props<{ task: Task }>());
export const deleteTask = createAction('[Task List] Delete Task', props<{ id: string }>());