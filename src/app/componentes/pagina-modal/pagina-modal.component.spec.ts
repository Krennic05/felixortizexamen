import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PaginaModalComponent } from './pagina-modal.component';

describe('PaginaModalComponent', () => {
  let component: PaginaModalComponent;
  let fixture: ComponentFixture<PaginaModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PaginaModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
