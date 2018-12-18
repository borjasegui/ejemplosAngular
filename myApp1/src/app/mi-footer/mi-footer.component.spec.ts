import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiFooterComponent } from './mi-footer.component';

describe('MiFooterComponent', () => {
  let component: MiFooterComponent;
  let fixture: ComponentFixture<MiFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
