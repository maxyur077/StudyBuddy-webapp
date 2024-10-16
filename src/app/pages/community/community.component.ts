import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from '../../shared/blog/blog.component';

interface comment {
  owner: string;
  comment: string;
}
interface blog {
  blog: string;
  comments: Array<comment>;
}

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [CommonModule, BlogComponent],
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})
export class CommunityComponent implements OnInit {
  constructor() {}
  exampleBlogPosts: Array<blog> = [];
  exampleComments: Array<comment> = [];
  ngOnInit(): void {
    this.exampleComments.push({
      owner: 'jude',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, sequi possimus mollitia pariatur harum deserunt suscipit nihil provident nesciunt deleniti voluptatem soluta neque atque quas dolore sit beatae velit quasi?',
    });
    this.exampleComments.push({
      owner: 'rupak',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, sequi possimus mollitia pariatur harum deserunt suscipit nihil provident nesciunt deleniti voluptatem soluta neque atque quas dolore sit beatae velit quasi?',
    });
    this.exampleComments.push({
      owner: 'hanuman',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, sequi possimus mollitia pariatur harum deserunt suscipit nihil provident nesciunt deleniti voluptatem soluta neque atque quas dolore sit beatae velit quasi?',
    });
    this.exampleComments.push({
      owner: 'abhilash',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, sequi possimus mollitia pariatur harum deserunt suscipit nihil provident nesciunt deleniti voluptatem soluta neque atque quas dolore sit beatae velit quasi?',
    });
    this.exampleComments.push({
      owner: 'shubham',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, sequi possimus mollitia pariatur harum deserunt suscipit nihil provident nesciunt deleniti voluptatem soluta neque atque quas dolore sit beatae velit quasi?',
    });

    this.exampleBlogPosts.push({
      blog: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores id sed, amet porro doloribus, dolorem nobis quo, quidem quisquam in velit pariatur expedita. Animi impedit asperiores mollitia corporis, voluptate tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum adipisci quo ad sequi fuga provident, beatae cumque quos incidunt suscipit dolore, porro nemo ipsa amet perspiciatis. Magnam molestias ullam deserunt.',
      comments: this.exampleComments,
    });

    this.exampleBlogPosts.push({
      blog: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores id sed, amet porro doloribus, dolorem nobis quo, quidem quisquam in velit pariatur expedita. Animi impedit asperiores mollitia corporis, voluptate tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum adipisci quo ad sequi fuga provident, beatae cumque quos incidunt suscipit dolore, porro nemo ipsa amet perspiciatis. Magnam molestias ullam deserunt.',
      comments: this.exampleComments,
    });
    this.exampleBlogPosts.push({
      blog: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores id sed, amet porro doloribus, dolorem nobis quo, quidem quisquam in velit pariatur expedita. Animi impedit asperiores mollitia corporis, voluptate tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum adipisci quo ad sequi fuga provident, beatae cumque quos incidunt suscipit dolore, porro nemo ipsa amet perspiciatis. Magnam molestias ullam deserunt.',
      comments: this.exampleComments,
    });
    this.exampleBlogPosts.push({
      blog: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores id sed, amet porro doloribus, dolorem nobis quo, quidem quisquam in velit pariatur expedita. Animi impedit asperiores mollitia corporis, voluptate tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum adipisci quo ad sequi fuga provident, beatae cumque quos incidunt suscipit dolore, porro nemo ipsa amet perspiciatis. Magnam molestias ullam deserunt.',
      comments: this.exampleComments,
    });
    this.exampleBlogPosts.push({
      blog: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores id sed, amet porro doloribus, dolorem nobis quo, quidem quisquam in velit pariatur expedita. Animi impedit asperiores mollitia corporis, voluptate tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum adipisci quo ad sequi fuga provident, beatae cumque quos incidunt suscipit dolore, porro nemo ipsa amet perspiciatis. Magnam molestias ullam deserunt.',
      comments: this.exampleComments,
    });
    this.exampleBlogPosts.push({
      blog: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores id sed, amet porro doloribus, dolorem nobis quo, quidem quisquam in velit pariatur expedita. Animi impedit asperiores mollitia corporis, voluptate tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum adipisci quo ad sequi fuga provident, beatae cumque quos incidunt suscipit dolore, porro nemo ipsa amet perspiciatis. Magnam molestias ullam deserunt.',
      comments: this.exampleComments,
    });
  }
}



