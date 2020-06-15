import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../../common/services/auth.service';
import { MiscService } from '../../../../common/services/misc.service';
import { fileValidator } from '../../../../common/_helpers/fileValidator';
import { DomSanitizer } from '@angular/platform-browser';
import { ageValidator } from '../../../../common/_helpers/ageValidator';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  @Output() success: EventEmitter<any> = new EventEmitter();
  loading = false;
  file: any;
  imageUrl: any;
  responseError: any;
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
    birth_date: new FormControl('', [Validators.required, ageValidator]),
    gender: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(11)]),
    countrie: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    citie: new FormControl('', Validators.required),
    direction: new FormControl('', Validators.required),
    image: new FormControl('', [Validators.required, fileValidator]),
    user_name: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    role: new FormControl('doctor')
  });
  constructor(private cd: ChangeDetectorRef, private auth: AuthService, private misc: MiscService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.misc.getCountires().then(data => {
      this.data = data;
      this.data.forEach(element => {
        for (const c in element) {
          this.countries.push(c);
        }

      });
    });
  }

  filterStates(countrie: string): void {
    const index = this.data.findIndex(x => Object.keys(x)[0] === countrie);
    this.states = Object.keys(this.data[index][countrie]);
  }

  filterCitie(state: string): void {
    const index = this.data.findIndex(x => Object.keys(x)[0] === this.form.controls.countrie.value);
    this.cities = this.data[index][this.form.controls.countrie.value][state];
  }

  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.file = reader.result;
        this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.file);
      };

    }
  }

  submit() {
    const values = Object.assign({}, this.form.value);
    const array = this.file.split(',');
    values.image = array[1];
    values.data_type = array[0];

    if (this.form.valid) {
      this.auth.registerNutritionist(values).then(success => {
        this.success.emit({ success: true, user_name: this.form.controls.user_name.value });
        this.loading = false;
      }).catch(error => {
        this.loading = false;
        console.error(error.error.errors);
        this.responseError = error.error.errors;
      });
    }
  }


}
