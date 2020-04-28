import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import {AuthService} from '../../../../common/services/auth.service';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  @Output() onSuccess:EventEmitter<any> = new EventEmitter();

  file:any;
  //imageUlr:any;
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
    role: new FormControl('doctor')
  });
  constructor(private cd: ChangeDetectorRef, private sanitizer: DomSanitizer, private _auth:AuthService) { }

  ngOnInit(): void {
    
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
        //this.imageUlr = this.sanitizer.bypassSecurityTrustResourceUrl(this.file);
      };

    }
  }

  submit(){
    let values = this.form.value;
    values.image = this.file;
    if(this.form.valid){
      this._auth.registerNutritionist(values).then(success=>{
        this.onSuccess.emit(true);
      }).catch(error=>{
        console.error(error);
        
      })
    }
  }

}
