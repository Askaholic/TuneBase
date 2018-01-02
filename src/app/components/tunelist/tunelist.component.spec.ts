import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TunelistComponent } from './tunelist.component';

describe('TunelistComponent', () => {
  let component: TunelistComponent;
  let fixture: ComponentFixture<TunelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TunelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TunelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
