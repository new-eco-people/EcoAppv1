import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-crud-modal',
  templateUrl: './crud-modal.component.html',
  styleUrls: ['./crud-modal.component.scss']
})
export class CrudModalComponent implements OnInit{

  ModalTitle = '';
  @Input() id: number;
  @Input() data: {};
  myForm: FormGroup;
  constructor(
   public activeModal: NgbActiveModal,
   private formBuilder: FormBuilder
  ) {

  }

  ngOnInit() {
    this.buildItemForm(this.data);
    if(this.id === 0) {
      this.ModalTitle = "Add Task";
    }
    else {
      this.ModalTitle = "Edit Task";
    }
  }

  private buildItemForm(item) {
    this.myForm = this.formBuilder.group({
      title: [item.title || '', Validators.required],
      message: [item.message || '', Validators.required],
    });
  }
  submitForm() {
    this.activeModal.close(this.myForm.value);
  }

}
