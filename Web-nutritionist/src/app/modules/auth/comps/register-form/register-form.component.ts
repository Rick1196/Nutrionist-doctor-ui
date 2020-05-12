import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../../common/services/auth.service';
import { MiscService } from '../../../../common/services/misc.service';
import { fileValidator } from './fileValidator';
import {DomSanitizer} from '@angular/platform-browser'
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  @Output() onSuccess: EventEmitter<any> = new EventEmitter();

  file: any;
  imageUrl:any;
  genders: any = [
    'Hombre',
    'Mujer',
    'Otros'
  ];
  data: any = [];
  countries: any = [];
  states: any = [];
  cities: any = [];
  form = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    birth_date: new FormControl('', [Validators.required]),
    gender: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(11)]),
    countrie: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    citie: new FormControl('', Validators.required),
    direction: new FormControl('', Validators.required),
    card_id: new FormControl('', Validators.required),
    image: new FormControl('', [Validators.required, fileValidator]),
    user_name: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    role: new FormControl('doctor')
  });
  constructor(private cd: ChangeDetectorRef, private _auth: AuthService, private _misc: MiscService, private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this._misc.getCountires().then(data => {
      this.data = data;
      this.data.forEach(element => {
        for (let c in element) {
          this.countries.push(c);
        }

      });
    })
  }

  filterStates(countrie: string): void {
    let index = this.data.findIndex(x => Object.keys(x)[0] == countrie);
    this.states = Object.keys(this.data[index][countrie])
  }

  filterCitie(state: string): void {
    let index = this.data.findIndex(x => Object.keys(x)[0] == this.form.controls.countrie.value);
    this.cities =     this.data[index][this.form.controls.countrie.value][state];
    console.log(this.cities);
    
  }

  onFileChange(event) {
    let reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.file = reader.result
        this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.file);
      };

    }
  }

  submit() {
    let values = Object.assign({},this.form.value);
    values.image = this.file;
    console.log(this.form);
    
    if(this.form.valid){
      this._auth.registerNutritionist(values).then(success=>{
        this.onSuccess.emit({ success: true, user_name: this.form.controls.user_name.value })
      }).catch(error=>{
        console.error(error);

      })
    }else{
      console.log(this.form.errors);
      
    }
  }

  ngOnDestroy() {
  }

}
