import { Component } from '@angular/core';
import {Usuario} from 'src/app/models/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
hide=true;

usuarios: Usuario = {
  uid:'',
  nombre:'',
  apellido:'',
  email:'',
  rol:'',
  password:'',
}

coleccionUsuarios: Usuario[] = [];

registrar() {
  const credenciales = {
    uid: this.usuarios.uid,
    nombre: this.usuarios.nombre,
    apellido: this.usuarios.apellido,
    email: this.usuarios.email,
    rol: this.usuarios.email,
    password: this.usuarios.password
  }

  this.coleccionUsuarios.push(credenciales)

  console.log(credenciales);
  console.log(this.coleccionUsuarios);
}
}
