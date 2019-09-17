import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PrivateAddProblemComponent } from '../../modals/problem/private-add-problem/private-add-problem.component';

@Component({
  selector: 'app-private-problem-feeds',
  templateUrl: './private-problem-feeds.component.html',
  styleUrls: ['./private-problem-feeds.component.scss']
})
export class PrivateProblemFeedsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openCreateProblem() {
    this.dialog.open(PrivateAddProblemComponent, {maxWidth: '800px', width: '800px'});
  }

}
