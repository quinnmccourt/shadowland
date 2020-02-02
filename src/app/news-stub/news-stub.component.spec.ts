import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsStubComponent } from './news-stub.component';

describe('NewsStubComponent', () => {
  let component: NewsStubComponent;
  let fixture: ComponentFixture<NewsStubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsStubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsStubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
