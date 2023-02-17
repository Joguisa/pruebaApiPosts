import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './agregar/agregar/agregar.component';
import { ComentariosComponent } from './comentarios/comentarios/comentarios.component';
import { ListadoComponent } from './listado/listado/listado.component';
import { LoginComponent } from './login/login/login.component';
import { PostComponent } from './post/post/post.component';
import { PostTarjetaComponent } from './postTarjeta/post-tarjeta/post-tarjeta.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'listado', component: ListadoComponent },
  { path: 'listado/:id', component: ListadoComponent },
  { path: 'post', component: PostComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'tarjeta', component: PostTarjetaComponent },
  { path: 'agregar', component: AgregarComponent },
  // { path: 'comentarios', component: ComentariosComponent },
  { path: 'post/:id/comentarios', component: ComentariosComponent },
  { path: 'comentarios', component: ComentariosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
