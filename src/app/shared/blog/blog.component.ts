import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, CommentsComponent],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  @Input('blogs') blogs: any;
  constructor() {}

  ngOnInit(): void {}
}
