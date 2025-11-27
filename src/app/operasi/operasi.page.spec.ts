import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperasiPage } from './operasi.page';

describe('OperasiPage', () => {
  let component: OperasiPage;
  let fixture: ComponentFixture<OperasiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OperasiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
