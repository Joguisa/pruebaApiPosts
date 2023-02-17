import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from 'src/app/interfaces/comentarios.interface';
import { PostserviceService } from 'src/app/services/postservice.service';

import { switchMap } from 'rxjs';
import { ComentariosserviceService } from 'src/app/services/comentariosservice.service';
import { Post } from 'src/app/interfaces/posts.interface';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
})
export class ComentariosComponent implements OnInit {
  @Input() comentario!: Comentario;

  //post!: Post;
  //comentario!: Comentario;

  constructor(
    private activateRoute: ActivatedRoute,
    private comentsService: ComentariosserviceService,
    private comentService: PostserviceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    // this.activateRoute.params
    //   .pipe(switchMap(({ id }) => this.comentService.getComentsPorId(id)))
    //   .subscribe((comentario) => (this.post = comentario));
    this.activateRoute.params
      .pipe(switchMap(({ id }) => this.comentsService.getComentsPorId(id)))
      .subscribe((comentario) => (this.comentario = comentario));
  }

  regresar() {
    this.router.navigate(['/listado']);
  }
}
