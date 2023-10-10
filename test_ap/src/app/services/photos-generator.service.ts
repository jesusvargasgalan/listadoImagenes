import { Injectable } from '@angular/core';
import { Image } from '../interfaces/image';
import { Observable, from} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PhotosGeneratorService {

  generatedImage: Image[] = [{
    id: 0,
    photo: '',
    text: ''
  }]

  

  generateImages() : Image[] {
    let i: number
    for (i = 0; i < 4000; i++) {
      this.generatedImage[i] = {
        id: i,
        photo: 'https://picsum.photos/id/' + i + '/500/500',
        text: this.randomString(),
      }
    }
    return this.generatedImage
  }
  
  
  randomString(letters = 5) {
  
    let randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  
    let result = '';
  
    for (let i = 0; i < letters; i++) {
  
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  
    }
  
    return result;
  
  }

  generateObservable() : Observable<Image[]>{
    this.generateImages()
    let observable = from([this.generatedImage])
    return observable
  }
  
}
