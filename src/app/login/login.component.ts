import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onLogin(form: NgForm){
    console.log(form.value);
    if (form.invalid){
      return;
    }
}
goToRegistationForm(){
  this.router.navigate(['/registationform']);
}
}
