import { Component } from '@angular/core';
import * as nodemailer from 'nodemailer';
import { EmailService } from './email.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent {
  formData = {
    name: '',
    email: '',
    message: '',
  };

  constructor(private emailService: EmailService) {}

  submitForm() {
    const { name, email, message } = this.formData;
    this.emailService.sendEmail(name, email, message);
  }
}
