import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparePartsPageComponent } from './spare-parts-page.component';

describe('SparePartsPageComponent', () => {
  let component: SparePartsPageComponent;
  let fixture: ComponentFixture<SparePartsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparePartsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SparePartsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
