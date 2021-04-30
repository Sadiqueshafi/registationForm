import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomevalidationserviceService } from '../../service/customevalidationservice.service';
import { StudentRegistationForm } from './registation.model';
@Component({
  selector: 'app-registation-form',
  templateUrl: './registation-form.component.html',
  styleUrls: ['./registation-form.component.css']
})
export class RegistationFormComponent implements OnInit {
  minPw = 8;
  hide = true;
  registationFormsData = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    fatherName: ['', Validators.required],
    motherName: ['', Validators.required],
    schoolName: ['', Validators.required],
    gender: ['male', [Validators.required]],
    address: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required, Validators.minLength(8)],
    confirmpassword: ['', Validators.required]
  }, {
    // Validator : this.servicevalidation.passwordMatchValidator('password', 'password2')
  });
  public schoolName: any[] = ['JIT School', 'Good School', 'Ausome School', 'SAG School ', 'SRB School', 'IND school', 'Indus School', 'SBPA School'] ;
  public value: any[] = ['value:1', 'value:2', 'value:3', 'value:4', 'value:5', 'value:6', 'value:7', 'value:8', 'value:9', 'value:10'];
  constructor(private formBuilder: FormBuilder, private servicevalidation: CustomevalidationserviceService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  submit(){
    const registationForm = JSON.stringify(this.registationFormsData.value);
    localStorage.setItem( 'Registation Form Data', registationForm );
    this.registationFormsData.reset();
  }
}
