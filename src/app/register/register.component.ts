import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl, AbstractControl } from '@angular/forms';

import { Router} from '@angular/router';
import { CompanyService } from '../service/company.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  [x: string]: any;
  registerForm: FormGroup;
  submitted = false;
  onedata:any;
  
  constructor(private formBuilder: FormBuilder,private httpservice:CompanyService,private router:Router) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
        firstname: ['', Validators.required],
        Lastname: ['', Validators.required],
        Email: ['', [Validators.required, Validators.email, Validators.pattern("[^ @]*@[^ @]*")]],
        Password: ['', [Validators.required, Validators.minLength(6)]],
        Confirm_Password:['',[Validators.required, Validators.minLength(6)]]
      });
        }
        onPasswordChange() {
        if (this.confirm_password.value == this.Password.value) {
            this.confirm_password.setErrors(null);
          } else {
            this.confirm_password.setErrors({ mismatch: true });
          }
        }
         
        
        // getting the form control elements
        get password(): AbstractControl {
          return this.registerForm.controls['Password'];
        }
        
        get confirm_password(): AbstractControl {
          return this.registerForm.controls['confirm_password'];
        }

        get f() { return this.registerForm.controls; }
        onSubmit() {
          var $this = this;
          console.log("StudentData", this.registerForm.value);
          this.submitted = true;
          let obj = {
            firstname:this.registerForm.value.firstname,
            Lastname:this.registerForm.value.Lastname,            
             Email: this.registerForm.value.Email,
              Password: this.registerForm.value.Password,
            Confirm_Password: this.registerForm.value.Confirm_Password
          }
          this.httpservice.register(obj).subscribe(data =>{
          console.log("response coming",data);
          
          if(data['msg']==' inserted successfully'){
             alert("registered successfully! please login to continue");
            $this.router.navigate(['/Login']);
          }
          else{
            // alert(data['msg']);
            //  $this.router.navigate(['/login']);
          }
          this.registerForm.reset();
          })
          
          if (this.registerForm.invalid) {
              return;
          }
  
        
      }
     
    

      
    }
  

