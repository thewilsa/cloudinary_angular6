import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Cloudinary Requirements
import { HttpClientModule } from '@angular/common/http';
// File upload module
import { FileUploadModule } from 'ng2-file-upload';
// Cloudinary module
import { CloudinaryModule, CloudinaryConfiguration, provideCloudinary } from '@cloudinary/angular-5.x';
import * as cloudinary from 'cloudinary-core';

// Application modules
import {PhotoAlbum} from './model/photo-album.service';
import {PhotoListComponent} from './photo-list/photo-list.component';
import {PhotoUploadComponent } from './photo-upload/photo-upload.component';
import cloudinaryConfiguration from './config';
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    PhotoListComponent,
    PhotoUploadComponent,
    PhotoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CloudinaryModule.forRoot(cloudinary, cloudinaryConfiguration),
    FileUploadModule,
    routing
],
  providers: [PhotoAlbum],
  bootstrap: [AppComponent]
})
export class AppModule { }
