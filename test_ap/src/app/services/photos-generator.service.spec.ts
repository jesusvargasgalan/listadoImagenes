import { TestBed } from '@angular/core/testing';

import { PhotosGeneratorService } from './photos-generator.service';

describe('PhotosGeneratorService', () => {
  let service: PhotosGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotosGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('randomString function generate correctly a random string', (done: DoneFn) => {
    const string = service.randomString();
    expect(string).toHaveSize(5);
    done()
  })

  it('generate function works correctly', (done: DoneFn) => {
    service.generateImages();
    expect(service.generatedImage).toHaveSize(4000);
    done()
  })
  it('generate function works correctly', (done: DoneFn) => {
    let result
    service.generateObservable().subscribe(element => result = element);
    expect(result).toHaveSize(4000);
    done()
  })
});
