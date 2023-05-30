import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})



export class SignUpComponent {
  model: Signup = new Signup('', '', '', '');

  constructor() {}

  onSubmit(): void {
   
    console.log(this.model);
  }
}



export class Signup {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  
  constructor(firstname: string,lastname: string, password: string, email: string) {
      this.firstname = firstname;
      this.lastname =lastname;
      this.email = email;
      this.password = password;
      
  }
}



