import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexDetailsComponent } from './pokedex-details.component';

describe('PokedexDetailsComponent', () => {
  let component: PokedexDetailsComponent;
  let fixture: ComponentFixture<PokedexDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
