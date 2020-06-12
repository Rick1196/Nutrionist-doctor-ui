import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DomSanitizer } from '@angular/platform-browser'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { NutritionistService } from '../../../../common/services/nutritionist.service';
import { MiscService } from '../../../../common/services/misc.service';
import { Nutritionist } from './../../../../common/entities/nutritionist';
import { fileValidator } from '../../../../common/_helpers/fileValidator';
import { ageValidator } from '../../../../common/_helpers/ageValidator';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  loading: boolean = false;
  genders: any = [
    'Hombre',
    'Mujer',
    'Otros'
  ];
  profile: Nutritionist;
  imageUrl: any;
  file: any;
  username: string;
  form: FormGroup;
  data: any;
  countries: any = [];
  states: any = [];
  cities: any = [];


  constructor(private _toastr: ToastrService, private _misc: MiscService, private _router: ActivatedRoute, private _nutritionist: NutritionistService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this._misc.getCountires().then(data => {
      this.data = data;
      this.data.forEach(element => {
        for (let c in element) {
          this.countries.push(c);
        }
      });
    }).then(() => {
      this.getParams().then(username => {
        this._nutritionist.getNutritionistProfile(username).then(data => {
          this.profile = data;
          this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.profile.data_type + ',' + this._nutritionist.toBase64(this.profile.image));
          console.log(this.imageUrl);

          this.buildForm();
          this.setPlaces();
        })
      })
    })
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

  getParams(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._router.queryParams.subscribe((params) => {
        resolve(params.user_name);
      })
    })
  }

  buildForm(): void {
    this.form = new FormGroup({
      first_name: new FormControl(this.profile.user.first_name, Validators.required),
      last_name: new FormControl(this.profile.user.last_name, Validators.required),
      birth_date: new FormControl(this.profile.user.birth_date, [Validators.required, ageValidator]),
      gender: new FormControl(this.profile.user.gender, Validators.required),
      direction: new FormControl(this.profile.user.direction, Validators.required),
      countrie: new FormControl(this.profile.user.countrie, Validators.required),
      state: new FormControl('', Validators.required),
      citie: new FormControl('', Validators.required),
      image: new FormControl(null, fileValidator)
    })
  }

  setPlaces(): void {

    this.filterStates(this.profile.user.countrie);
    this.filterCitie(this.profile.user.state);
  }

  filterStates(countrie: string): void {
    let index = this.data.findIndex(x => Object.keys(x)[0] == countrie);
    this.states = Object.keys(this.data[index][countrie]);
    this.form.controls.state.setValue(this.profile.user.state);
  }

  filterCitie(state: string): void {
    let index = this.data.findIndex(x => Object.keys(x)[0] == this.form.controls.countrie.value);
    this.cities = this.data[index][this.form.controls.countrie.value][state];
    this.form.controls.citie.setValue(this.profile.user.citie);
  }

  submit(): void {
    if (this.file) {
      this.profile.image = null;
      this.profile.image = this.file.split(',')[1];
      this.profile.data_type = this.file.split(',')[0];
    }
    this.profile.user.birth_date = this.form.controls.birth_date.value;
    this.profile.user.first_name = this.form.controls.first_name.value;
    this.profile.user.last_name = this.form.controls.last_name.value;
    this.profile.user.gender = this.form.controls.gender.value;
    this.profile.user.countrie = this.form.controls.countrie.value;
    this.profile.user.state = this.form.controls.state.value;
    this.profile.user.citie = this.form.controls.citie.value;
    this.profile.user.direction = this.form.controls.direction.value;
    this._nutritionist.putNutritionist(this.profile).then(success => {
      this.showSuccess("Exito!", "Informacion actualizada")
      this.loading = false;
    }).catch(err => {
      this.loading = false;
      this.showError("Ups!", "ALgo ha salido mal.")
      console.error(err);

    })

  }

  showSuccess(title: string, body: string) {
    this._toastr.success(title, body);
  }

  showError(title: string, body: string) {
    this._toastr.error(title, body);
  }

}
