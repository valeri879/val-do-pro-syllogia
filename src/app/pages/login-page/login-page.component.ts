import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  private _authService = inject(AuthService);
  private _fb = inject(FormBuilder);
  private _router = inject(Router);

  public form!: FormGroup;

  ngOnInit(): void {
    this._initForm();
  }

  private _initForm() {
    this.form = this._fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  submit() {
    this._authService.login(this.form.value).subscribe(
      res => {
        this._router.navigateByUrl('/profile');
      },
      err => {
        console.log(err.error);
      }
    )
  }
}
