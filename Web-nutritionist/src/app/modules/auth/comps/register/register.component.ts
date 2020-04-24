import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  file:any;
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
    image: new FormControl('', [Validators.required, this.fileValidator]),
    user_name: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required,Validators.minLength(8)]),
  });
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log(this.form.controls.image);
    
  }

  fileValidator(img:AbstractControl){
    let flag = false;
    if(!['jpg','jpeg','svg','png'].includes(img.value.split('.')[img.value.split('.').length - 1])) flag =  true;
    console.log(flag);
    
    return {extension:flag};
  }

  onFileChange(event) {
    let reader = new FileReader();
   
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
        this.file = reader.result
      };

    }
  }

  submit(){
    let values = this.form.value;
    values.image = this.file;
    console.log(values);
  }

}
