import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService:UsuariosService, private router: Router) { }

  ngOnInit() {
  }


  login(username){
    this.usuarioService.getUsuario(username)
    .subscribe( usuario => {
      localStorage.setItem('user', JSON.stringify(usuario));
      switch(usuario.rol){
        case 'USER':
        this.router.navigate(['/reservas']);
        break;

        case 'ADMIN':
        this.router.navigate(['/admin']);
        break;
      }
    });
  }

}
