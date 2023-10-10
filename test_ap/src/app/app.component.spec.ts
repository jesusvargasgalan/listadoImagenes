import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppModule],
    declarations: [AppComponent]
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(fixture).toBeTruthy();
  });

  it(`should have as title 'Album random'`, () => {
    expect(component.title).toEqual('Album random');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Album random');
  });

  it('should render div with search bar', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.mainContainer')?.firstChild).toHaveClass('search')
  });

  it('should render photos container', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.albumContainer')?.firstChild).toHaveClass('photoContainer')
  });

  it('button search should be clickable and trigger the function', fakeAsync(() => {
    spyOn(component, 'search');

    let button = fixture.debugElement.nativeElement.querySelector('.searchButton');
    button.click();

    tick();
    expect(component.search).toHaveBeenCalled();

  }))

  it('button reset should be clickable and trigger the function', fakeAsync(() => {
    spyOn(component, 'resetSearch');

    let button = fixture.debugElement.nativeElement.querySelector('.resetButton');
    button.click();

    tick();
    expect(component.resetSearch).toHaveBeenCalled();
  }))

  it('input should initialize', () => {
    expect(component.searchInputValue).toEqual('');
  })

  it('search works correctly', () => {
    let photo = [{
      id: 2,
      photo: '',
      text: ''
    }]
    component.search(2)
    expect(component.searchResult[0].id).toEqual(photo[0].id);
  })

  it('id search doesnt exist so the error message appears', () => {
    component.search(10000)
    expect(component.showErrorMessage).toEqual(true)
  })

  it('Button reset works correctly', () => {
    component.resetSearch()
    expect(component.searchActivated).toEqual(false)
    expect(component.showErrorMessage).toEqual(false)
    expect(component.searchInputValue).toEqual('')

  })


});
