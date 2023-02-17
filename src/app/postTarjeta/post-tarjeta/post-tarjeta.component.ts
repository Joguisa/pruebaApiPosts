import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/posts.interface';

@Component({
  selector: 'app-post-tarjeta',
  templateUrl: './post-tarjeta.component.html',
  styles: [
    `
      mat-card {
        margin-top: 20px;
      }
    `,
  ],
})
export class PostTarjetaComponent implements OnInit {
  @Input() post!: Post;

  constructor() {}

  ngOnInit(): void {}
}
