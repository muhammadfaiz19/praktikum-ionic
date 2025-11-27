import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IdealPage } from './ideal.page';

describe('IdealPage', () => {
  let component: IdealPage;
  let fixture: ComponentFixture<IdealPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IdealPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
