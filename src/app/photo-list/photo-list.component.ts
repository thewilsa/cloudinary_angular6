import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {PhotoAlbum} from '../model/photo-album.service';
import {Photo} from '../model/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  private photos: Observable<Photo[]>;
  private publicId = 'officialchucknorrispage';

  constructor(
      private photoAlbum: PhotoAlbum
  ) { }

  ngOnInit(): void {
      this.photos = this.photoAlbum.getPhotos();
      console.log(this.photos);
  }

  changePublicId() {
      this.publicId = (this.publicId === 'officialchucknorrispage') ? 'billclinton' : 'officialchucknorrispage';
  }

  onLoadImage(success) {
      console.log('On load', success);
  }
  onErrorImage(err) {
      console.log('On error!!', err);
  }

}
