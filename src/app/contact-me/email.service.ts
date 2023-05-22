import { Injectable } from '@angular/core';
import * as nodemailer from 'nodemailer';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'feriay1996@gmail.com',
        pass: 'atsngktjktlauypa',
      },
    });
  }

  sendEmail(name: string, email: string, message: string): void {
    const mailOptions = {
      from: email,
      to: 'feridun-aydogan@hotmail.de', // Ersetze dies mit deiner privaten E-Mail-Adresse
      subject: 'Neue Kontaktanfrage',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Fehler beim Versenden der E-Mail:', error);
      } else {
        console.log('E-Mail erfolgreich versendet:', info.response);
      }
    });
  }
}
