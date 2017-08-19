import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBookModalComponent } from './add-book-modal.component';

describe('AddEditBookModalComponent', () => {
  let component: AddEditBookModalComponent;
  let fixture: ComponentFixture<AddEditBookModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditBookModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditBookModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
