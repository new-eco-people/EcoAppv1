import { Injectable } from '@angular/core';
import { Task } from './taskboard.model';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable()
export class TaskBoardService {

    constructor() { }

    public tasks: Task[] = [
        new Task(
            1,
            'Responsive',
            'Etiam porta sem malesuada magna mollis euismod.',
            'May 17',
            'Elizabeth Elliott',
            'assets/img/portrait/small/avatar-s-3.png',
            'New'),
        new Task(
            2,
            'QA Testing',
            'Etiam porta sem malesuada magna mollis euismod.',
            'May 17',
            'Elizabeth Elliott',
            'assets/img/portrait/small/avatar-s-3.png',
            'New'),
        new Task(
            3,
            'Budget',
            'Etiam porta sem malesuada magna mollis euismod.',
            'May 17',
            'Elizabeth Elliott',
            'assets/img/portrait/small/avatar-s-3.png',
            'New'),
        new Task(
            4,
            'checklist',
            'Etiam porta sem malesuada magna mollis euismod.',
            'Apr 11',
            'Bruce Reid',
            'assets/img/portrait/small/avatar-s-1.png',
            'In-Process'),
        new Task(
            5,
            'Navigation',
            'Etiam porta sem malesuada magna mollis euismod.',
            'Apr 11',
            'Bruce Reid',
            'assets/img/portrait/small/avatar-s-1.png',
            'In-Process'),
        new Task(
            6,
            'Bootstrap 4',
            'Etiam porta sem malesuada magna mollis euismod.',
            'Apr 11',
            'Bruce Reid',
            'assets/img/portrait/small/avatar-s-1.png',
            'In-Process'),
        new Task(
            7,
            'Assessment',
            'Etiam porta sem malesuada magna mollis euismod.',
            'Jun 19',
            'Kelly Reyes',
            'assets/img/portrait/small/avatar-s-5.png',
            'Pending'),
        new Task(
            8,
            'Schedule',
            'Etiam porta sem malesuada magna mollis euismod.',
            'Jun 19',
            'Kelly Reyes',
            'assets/img/portrait/small/avatar-s-5.png',
            'Pending'),
        new Task(
            9,
            'Unit tests',
            'Etiam porta sem malesuada magna mollis euismod.',
            'Jun 19',
            'Kelly Reyes',
            'assets/img/portrait/small/avatar-s-5.png',
            'Pending'),
        new Task(
            10,
            'Angular 5',
            'Etiam porta sem malesuada magna mollis euismod.',
            'Aug 22',
            'Sara Ali',
            'assets/img/portrait/small/avatar-s-7.png',
            'Completed'),
        new Task(
            11,
            'Fields',
            'Etiam porta sem malesuada magna mollis euismod.',
            'Aug 22',
            'Sara Ali',
            'assets/img/portrait/small/avatar-s-7.png',
            'Completed'),
        new Task(
            12,
            'Task board',
            'Etiam porta sem malesuada magna mollis euismod.',
            'Aug 22',
            'Sara Ali',
            'assets/img/portrait/small/avatar-s-7.png',
            'Completed')
    ];


   addNewTask(title: string, message: string) {
        let task: Task = {
            taskId: Math.round(Math.random() * 10000000000),
            taskTitle: title,
            taskMessage: message,
            createdOn: 'Nov 12',
            createdBy: 'Elizabeth Elliott',
            assignedTo: 'assets/img/portrait/small/avatar-s-3.png',
            status: 'New'
        }
        this.tasks.unshift(task);
    return of(this.tasks.slice()).pipe(delay(100));
        
    }
    UpdateTask(task: Task, index: number) {
        // this.tasks.splice(index, 1, task);
        this.tasks = this.tasks.map(i => {
            if(i.taskId === task.taskId) {
              return Object.assign({}, i, task);
            }
            return i;
          })
          return of(this.tasks.slice()).pipe(delay(1000));
    }
    deleteTask(index: number) {
        this.tasks.splice(index, 1);
        return of(this.tasks.slice()).pipe(delay(100));
    }

}