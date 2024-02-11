import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve items from the server', () => {
    const mockItems = [
      { id: 1, name: 'Item-1' },
      { id: 2, name: 'Item-2' },
      { id: 3, name: 'Item-3' },
      { id: 4, name: 'Item-4' },
      { id: 5, name: 'Item-5' },
      { id: 6, name: 'Item-6' },
      { id: 7, name: 'Item-7' },
      { id: 8, name: 'Item-8' },
      { id: 9, name: 'Item-9' },
    ];

  });
});
