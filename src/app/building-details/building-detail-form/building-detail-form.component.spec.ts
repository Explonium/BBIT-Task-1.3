import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingDetailFormComponent } from './building-detail-form.component';

describe('BuildingDetailFormComponent', () => {
  let component: BuildingDetailFormComponent;
  let fixture: ComponentFixture<BuildingDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingDetailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
