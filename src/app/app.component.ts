import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  /*   public users: User[] = [
    { id: 3, name: 'Val' },
    { id: 4, name: 'Gio' },
    { id: 5, name: 'Beka' },
    { id: 6, name: 'Nino' },
    { id: 8, name: 'Beka' },
  ] */

  /* public email: FormControl = new FormControl('', [Validators.required]);
  public password: FormControl = new FormControl(''); */

/*   public form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  }); */

  public form!: FormGroup;

  constructor(
    private _fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  public submit(): void {
    console.log(this.form)
    // console.log(this.email.value, this.password.value);
  }

  /* search(query: string) {
    console.log(query)
    const filtered: User[] = this.users.filter(val => query == val.name);
    console.log(filtered);
  } */

}
