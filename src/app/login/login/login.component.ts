import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private _snackBar: MatSnackBar) {}

  usuarioLogin = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  ngOnInit(): void {}

  onSubmit() {
    if (
      this.usuarioLogin.value.usuario == 'admin' &&
      this.usuarioLogin.value.password == 'admin'
    ) {
      this.router.navigate(['/listado']);
    } else {
      this.error();
      this.usuarioLogin.reset();
    }
  }

  error() {
    this._snackBar.open('Usuario o Contraseña Ingresados son invalidos', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
