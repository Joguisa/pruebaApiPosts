import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/interfaces/posts.interface';
import { PostserviceService } from 'src/app/services/postservice.service';
import { switchMap } from 'rxjs';
import { Comentario } from 'src/app/interfaces/comentarios.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {
  post!: Post;

  constructor(
    private activateRoute: ActivatedRoute,
    private postsService: PostserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(switchMap(({ id }) => this.postsService.getPostsPorId(id)))
      .subscribe((post) => (this.post = post)); // destructuracion dentro del suscribe
  }

  regresar() {
    this.router.navigate(['/listado']);
  }

  comentarios() {
    this.router.navigate(['/comentarios']);
  }
}
