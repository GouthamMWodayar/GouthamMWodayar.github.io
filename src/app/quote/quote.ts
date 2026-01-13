import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-quote',
  imports: [FormsModule],
  templateUrl: './quote.html',
  styleUrl: './quote.scss',
})
export class Quote {
 constructor() { }

  // sendEmail(form: NgForm, formElement: any) {
  //   if (!form.valid) {
  //     alert('Please fill all fields');
  //     return;
  //   }

  //   emailjs.sendForm(
  //     'service_lxqdy0k',   // replace with your EmailJS service ID
  //     'template_wm303eu',  // replace with your EmailJS template ID
  //     form.form as any,    // pass the Angular form
  //     'sWaTyfydT7_WIHxvO'       // replace with your EmailJS user ID
      
      
  //   ).then((result: EmailJSResponseStatus) => {
  //     console.log(result.text);
  //     alert('Email sent successfully!');
  //     form.reset(); // clear form
  //   }, (error) => {
  //     console.error(error.text);
  //     alert('Oops! Something went wrong.');
  //   });
  // }
  formData = {
    name: '',
    subject:'',
    email: '',
    message: '',
    phone:''
  };

sendEmail() {
    const { name, email, message ,subject, phone} = this.formData;

    if (!name || !email || !message || !phone) {
      alert('Please fill all fields');
      return;
    }

    emailjs.send(
      'service_lxqdy0k',       // replace with your EmailJS service ID
      'template_wm303eu',      // replace with your EmailJS template ID
      { name, email, message ,subject, phone}, // template variables
      'sWaTyfydT7_WIHxvO'           // replace with your EmailJS user ID
    ).then(
      (res: EmailJSResponseStatus) => {
        alert('We will connect with you shortly');
        this.formData = { name: '', email: '', message: '' ,subject:'', phone: ''}; // reset form
      },
      (err) => {
        console.error(err);
        alert('Oops! Something went wrong.');
      }
    );
  }
 
}
