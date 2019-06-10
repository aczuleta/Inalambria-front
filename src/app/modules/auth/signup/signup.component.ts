import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private usuarioService:UsuariosService) { }

  ngOnInit() {
  }

  registrar(username, fullname, rol){
    this.usuarioService.createUsuario(username, fullname, rol);
  }

}
