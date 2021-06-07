import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaListaPaginadaComponent } from './pessoa-lista-paginada.component';

describe('PessoaListaPaginadaComponent', () => {
  let component: PessoaListaPaginadaComponent;
  let fixture: ComponentFixture<PessoaListaPaginadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoaListaPaginadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaListaPaginadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
