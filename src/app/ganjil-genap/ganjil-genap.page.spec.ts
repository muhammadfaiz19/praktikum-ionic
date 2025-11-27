import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GanjilGenapPage } from './ganjil-genap.page';

describe('GanjilGenapPage', () => {
  let component: GanjilGenapPage;
  let fixture: ComponentFixture<GanjilGenapPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GanjilGenapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
