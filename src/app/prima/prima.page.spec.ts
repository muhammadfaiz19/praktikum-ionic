import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimaPage } from './prima.page';

describe('PrimaPage', () => {
  let component: PrimaPage;
  let fixture: ComponentFixture<PrimaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
