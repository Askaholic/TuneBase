import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TunelistItemComponent } from './tunelist-item.component';

describe('TunelistItemComponent', () => {
  let component: TunelistItemComponent;
  let fixture: ComponentFixture<TunelistItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TunelistItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TunelistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
