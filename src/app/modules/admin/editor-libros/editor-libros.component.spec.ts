import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorLibrosComponent } from './editor-libros.component';

describe('EditorLibrosComponent', () => {
  let component: EditorLibrosComponent;
  let fixture: ComponentFixture<EditorLibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorLibrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
