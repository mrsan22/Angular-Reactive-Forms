import {TestBed, async, ComponentFixture} from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let elem: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    // component represents your component and its methods, variables etc.
    component = fixture.componentInstance;
    // elem represents all the html elements used in the template associated with that
    // component
    elem = fixture.debugElement.nativeElement;
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  // it(`should have as title 'app works!'`, async(() => {
  //   expect(component.title).toEqual('app works!');
  // }));
  //
  // it('should render title in a h1 tag', async(() => {
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('app works!');
  // }));
});
