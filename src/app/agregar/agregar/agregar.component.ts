import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/interfaces/posts.interface';
import { PostserviceService } from 'src/app/services/postservice.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent implements OnInit {
  post: Post = {
    userId: 0,
    id: 0,
    title: '',
    body: '',
    postId: 0,
    name: '',
    email: '',
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private postsService: PostserviceService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.postsService.addProduct(this.post).subscribe((post) => {
      console.log(post);
    });
  }
  // this.postsService.agregarPost(this.post).subscribe((post) => {
  //   this.router.navigate(['listado', post.id]);
  //   this.mostrarSnakbar('Post creado');
  // });
  // const post = {
  //   id: 101,
  //   userId: 11,
  //   title: '',
  //   body: '',
  // };

  // this.postsService.agregarPost(post).subscribe((post) => {
  //   this.router.navigate(['listado', post.id]);
  //   });
  // }

  // mostrarSnakbar(mensaje: string) {
  //   this._snackBar.open(mensaje, '!', {
  //     duration: 2500,
  //   });
  // }
}
