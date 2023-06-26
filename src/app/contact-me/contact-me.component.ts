import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent {
  infoText: string = `Dieses Kontaktformular verwendet 'mailto' zum Versenden von E-Mails. Die Verwendung eines E-Mail-Service-Providers oder Backends ist für eine persönliche Portfolio-Website möglicherweise überdimensioniert.
  Bei Problemen mit dem E-Mail-Client können Sie manuell an meine E-Mail-Adresse senden:\n\nferidun-aydogan@hotmail.de`;

  formData: any = {};
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }
  ngOnInit() {
    console.log(this.contactForm);
    this.contactForm.valueChanges.subscribe((test) => {
      console.log(test, this.contactForm.errors);
    });
  }
  submitForm() {
    if (this.contactForm.valid) {
      const emailSubject = 'Kontaktanfrage';
      const emailBody = `
          Name: ${this.contactForm.value.name}\n
          Email: ${this.contactForm.value.email}\n
          Nachricht: ${this.contactForm.value.message}
        `;

      const mailtoLink = `mailto:feridun-aydogan@hotmail.de?subject=${encodeURIComponent(
        emailSubject
      )}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;
    }
  }
}
