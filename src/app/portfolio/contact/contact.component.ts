import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { __values } from 'tslib';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NavbarComponent, FooterComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  userForm:any;

  constructor(public formbuilder: FormBuilder){}

  ngOnInit() {
    this.userForm = this.formbuilder.group ({
      name: [null],
      email: [null],
      message: [null],
    })
  }

  onSubmit() {
    console.log("From Submitted", this.userForm.value);
    
  }
}
