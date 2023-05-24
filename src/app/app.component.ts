import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public form!: FormGroup;

  constructor(
    private _fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      name: ['Val Do'],
      lastName: [''],
      friendsGroup: this._fb.array([]),
      parents: this._fb.array([]),
    });
  }

  get name(): string {
    return this.form.controls['name'].value;
  }

  addFriend() {
    this.friends.push(new FormControl('', [Validators.required]));
  }

  addParents() {
    const parents = this._fb.group({
      mother: [''],
      father: [''],
    });

    this.parents.push(parents);
  }

  removeParents(i: number) {
    this.parents.removeAt(i);
  }

  removeFriend(i: number): void {
    this.friends.removeAt(i);
    console.log(i)
  }

  get friends(): FormArray {
    return this.form.controls['friendsGroup'] as FormArray;
  }

  get parents(): FormArray {
    return this.form.controls['parents'] as FormArray;
  }

  public submit(): void {
    console.log(this.form)
  }
}
