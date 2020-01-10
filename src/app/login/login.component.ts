import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CompanyService } from '../service/company.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
LoginFrom: FormGroup;
PasswordType: string ="password";
PasswordShown:boolean = false;
  constructor(private fb: FormBuilder, private httpservice:CompanyService, private router:Router) {
    this.LoginFrom = this.fb.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required],
     
    })
  }

  ngOnInit() {

  }
  onSubmit() {
    console.log("loginData", this.LoginFrom.value);
    let obj = {
      UserName: this.LoginFrom.value.Email,
      Password: this.LoginFrom.value.Password
    }
    this.httpservice.login(obj).subscribe(data => {
      console.log("res coming from nodejs service", data);
      this.LoginFrom.reset();
     localStorage.setItem("username",this.LoginFrom.value.Username);
 if(data['message'] == "login success"){
   this.router.navigate(['/Dashbord']);
 } else{
  alert("provide valid email and password");
}
//alert("data"+data);
},err=>{
// alert("err"+err);
console.log("err",err['err']);

});
  }
  


}