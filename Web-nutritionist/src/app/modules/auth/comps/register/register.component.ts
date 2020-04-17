import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  genders:any = [
    'Hombre',
    'Mujer',
    'Otros'
  ];
  countries:any = [];
  states:any=[];
  cities:any=[];
  form = new FormGroup({
    first_name: new FormControl('',Validators.required),
    last_name: new FormControl('', Validators.required),
    birth_date: new FormControl('', [Validators.required]),
    gender: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    phone: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    countrie: new FormControl('',Validators.required),
    state: new FormControl('',Validators.required),
    citie: new FormControl('',Validators.required),
    direction: new FormControl('',Validators.required),
    card_id: new FormControl('',Validators.required),
    image: new FormControl('', Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.form.value);
    
  }

}
