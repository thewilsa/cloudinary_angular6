import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { Photo } from './photo';

@Injectable()
export class PhotoAlbum {

    constructor(private http: HttpClient, private cloudinary: Cloudinary) {
    }

    getPhotos(): Observable<Photo[]> {
        // instead of maintaining the list of images, we rely on the 'myphotoalbum' tag
        // and simply retrieve a list of all images with that tag.
        const url = this.cloudinary.url(this.cloudinary.config().cloud_tag, {
            format: 'json',
            type: 'list',
            // cache bust (lists are cached by the CDN for 1 minute)
            // *************************************************************************
            // Note that this is practice is DISCOURAGED in production code and is here
            // for demonstration purposes only
            // *************************************************************************
            version: Math.ceil(new Date().getTime() / 1000)
        });

        return this.http
            .get(url)
            .pipe(map((data: any) => data.resources));
    }
}
