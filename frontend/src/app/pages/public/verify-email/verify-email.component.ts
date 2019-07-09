import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/shared/services/auth/auth.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {

  loading = true;
  isverified = false;

  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    this.verfiyEmail();
  }

  verfiyEmail() {
    const token = this.route.snapshot.queryParams['token'] || null;
    const userId = this.route.snapshot.queryParams['id'] || null;

    this.authService.verifyEmail({token, userId})
      .pipe(finalize(() => this.loading = false))
      .subscribe(x => console.log(x), error => console.log(error));
  }

}
