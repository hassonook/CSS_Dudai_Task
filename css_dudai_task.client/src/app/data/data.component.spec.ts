import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataComponent } from './data.component';

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataComponent);
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

    component.ngOnInit();

    const req = httpMock.expectOne('/item');
    expect(req.request.method).toEqual('GET');
    req.flush(mockItems);

    expect(component.data).toEqual(mockItems);
  });
});
