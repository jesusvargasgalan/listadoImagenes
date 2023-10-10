import { Component } from '@angular/core';
import { PhotosGeneratorService } from './services/photos-generator.service';
import { Image } from './interfaces/image';
import { Observable, catchError, first, of, switchMap, take, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Album random';

  searchInputValue: number | string = "";

  searchResult: Image[] = [{
    id: 0,
    photo: '',
    text: ''
  }]
  
  photos: Image[] = [{
    id: 0,
    photo: '',
    text: ''
  }]

  searchActivated: boolean = false;

  showErrorMessage: boolean = false;

  album$?: Observable<Image[]>

  constructor(private photosGeneratorService: PhotosGeneratorService) { }

  ngOnInit() {
    this.initAlbum()
  }


  initAlbum() {
    this.album$ = this.photosGeneratorService.generateObservable();
    this.album$.subscribe(element =>
      this.photos = element)
    }

  search(searchInputValue: string | number) {
    this.searchActivated = true
    this.searchResult = this.photos.filter(element => searchInputValue == element.id || searchInputValue == element.text);
    if(this.searchResult.length === 0){
      this.showErrorMessage = true;
    } else {
      this.showErrorMessage = false;
    }
  }

  resetSearch() {
    this.searchActivated = false
    this.showErrorMessage = false;
    this.searchInputValue = ""
  }
  

}



