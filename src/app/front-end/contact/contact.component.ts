import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  public bannerTitle: string = "Contact";
  public bannerBg: string = "assets/images/bg/";
  public bannerText: string = "Contactez nous";

  public contactFormData !: FormGroup;

  constructor(
    private setTitle: Title,
    private formbuilder: FormBuilder,
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
    
  }

}
