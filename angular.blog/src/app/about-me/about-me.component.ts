import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {

  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitForm(form: NgForm) {
    console.log('Form Data:', this.formData);

    // rensar formulär fälten
    form.resetForm();
    this.formData = { name: '', email: '', message: '' };
  }
}
