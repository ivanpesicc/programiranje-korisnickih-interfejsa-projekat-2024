import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

public email = ""
public password = "" 

public onSubmit() {
    console.log(this.email, this.password)
}

}


// FormsModule, RouterLink