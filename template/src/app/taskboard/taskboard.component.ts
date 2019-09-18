import { Component, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TaskBoardService } from './taskboard.service';
import { CrudModalComponent } from './crud-modal/crud-modal.component';
import { Task } from './taskboard.model';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss'],
  providers: [TaskBoardService],
  encapsulation: ViewEncapsulation.None
})
export class TaskboardComponent {

  @ViewChild('todoTitle') titleInputRef: ElementRef;
  @ViewChild('todoMessage') messageInputRef: ElementRef;

  BAG = "task-group";

  tasks: Task[];
  todo: Task[];
  inProcess: Task[];
  backLog: Task[];
  completed: Task[];

  constructor(private dragulaService: DragulaService, private elRef: ElementRef, private taskBoardService: TaskBoardService, private modalService: NgbModal) {
    this.tasks = this.taskBoardService.tasks;
    this.loadTasks();    
    dragulaService.drop(this.BAG)
      .subscribe(({ el, target }) => {
        this.updateTaskStatus(el.getAttribute('task-id'), target.id)
      });
  }

  loadTasks() {

    this.todo = this.tasks.filter((task: Task) => task.status === 'New');
    this.inProcess = this.tasks.filter((task: Task) => task.status === 'In-Process');
    this.backLog = this.tasks.filter((task: Task) => task.status === 'Pending');
    this.completed = this.tasks.filter((task: Task) => task.status === 'Completed');
  }

  editTask(id: number) {
    let task: Task = this.tasks.find(x => x.taskId === id);
    const modalRef = this.modalService.open(CrudModalComponent);
    modalRef.componentInstance.id = id; // should be the id
    modalRef.componentInstance.data = { title: task.taskTitle, message: task.taskMessage }; // should be the data

    modalRef.result.then((result) => {
     
      let index = this.tasks.indexOf(task);
      task.taskTitle = result.title;
      task.taskMessage = result.message;
      this.taskBoardService.UpdateTask(task, index).subscribe(data => {
        this.tasks = data;
        this.loadTasks();
      });

    }).catch((error) => {
      console.log(error);
    });
  }

  updateTaskStatus(id: string, status: string) {
    let task: Task = this.tasks.find(x => x.taskId === +id);
    let index = this.tasks.indexOf(task);      
      task.status = status;
      this.taskBoardService.UpdateTask(task, index).subscribe(data => {
        this.tasks = data;
        this.loadTasks();
      });

  }

  deleteTask(id: number) {
    let task: Task = this.tasks.find(x => x.taskId === id);
    let index = this.tasks.indexOf(task);
    this.taskBoardService.deleteTask(index).subscribe(data => {
      this.tasks = data;
      this.loadTasks();
    });
  }

  addTask() {
    const modalRef = this.modalService.open(CrudModalComponent, );
    modalRef.componentInstance.id = 0; // should be the id
    modalRef.componentInstance.data = { title: '', message: ''}; // should be the data

    modalRef.result.then((result) => {
      this.taskBoardService.addNewTask(result.title, result.message).subscribe(data => {
        this.tasks = data;
        this.loadTasks();
      });
    }).catch((error) => {
      console.log(error);
    });
  }


}
