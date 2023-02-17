import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/interfaces/posts.interface';
import { PostserviceService } from 'src/app/services/postservice.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {
  posts: Post[] = [];

  constructor(
    private router: Router,
    private postsService: PostserviceService
  ) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((posts) => (this.posts = posts));
  }

  agregar() {
    this.router.navigate(['/agregar']);
  }
}
