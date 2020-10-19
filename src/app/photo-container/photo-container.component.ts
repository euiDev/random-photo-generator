import { Component, OnInit } from '@angular/core';
import { PhotoGeneratorService } from '../photo-generator.service';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-photo-container',
  templateUrl: './photo-container.component.html',
  styleUrls: ['./photo-container.component.css']
})
export class PhotoContainerComponent implements OnInit {
  randomPhotoUrl: string = '';
  constructor(private photoGenerator: PhotoGeneratorService) { }

  ngOnInit(): void {
    this.fetchRandomPhoto();
  }

  fetchRandomPhoto() {
    this.photoGenerator.getRandomPhoto()
    .pipe(
      pluck('urls', 'small')
    )
    .subscribe(url => this.randomPhotoUrl = url);
  }

}
