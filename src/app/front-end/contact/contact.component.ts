
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FrontServiceService } from 'src/app/services/front-service.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  public bannerTitle: string = "Contact";
  public bannerBg: string = "assets/images/bg/histoire-bg.jpg";
  public bannerText: string = "Contactez nous";

  public contactFormData !: FormGroup;

  constructor(
    private setTitle: Title,
    private formbuilder: FormBuilder,
    private serviceFront: FrontServiceService,
    // private datePie: DatePipe
  ) { }

  ngOnInit(): void {
    this.setTitle.setTitle("Contactez-nous - LIFILED");
    this.contactFormData = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  submitContact(){
    let data = {
      "user": this.contactFormData.value.name,
      "email": this.contactFormData.value.email,
      "subject": this.contactFormData.value.subject,
      "message": this.contactFormData.value.message,
      "status": 0,
      "whish": 0,
      // "date": this.datePie.transform(new Date(), 'yyyy-MM-dd')
    };
    if (this.serviceFront.sendMessage(data)) {
      // formulaire envoyé
      console.log("envoyé");
      this.contactFormData.reset;
    } else {
      // formulaire non envoyé
      console.log("echec envoi");

    }
  }

}
