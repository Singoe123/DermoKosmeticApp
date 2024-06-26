import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoPreguntasComponent } from './catalogo-preguntas.component';

describe('CatalogoPreguntasComponent', () => {
  let component: CatalogoPreguntasComponent;
  let fixture: ComponentFixture<CatalogoPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogoPreguntasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
