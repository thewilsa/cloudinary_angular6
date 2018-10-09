import { TestBed } from '@angular/core/testing';

import { PhotoAlbum } from './photo-album.service';

describe('PhotoAlbum', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotoAlbum = TestBed.get(PhotoAlbum);
    expect(service).toBeTruthy();
  });
});
