import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GethubFolowersComponent } from './gethub-folowers.component';

describe('GethubFolowersComponent', () => {
  let component: GethubFolowersComponent;
  let fixture: ComponentFixture<GethubFolowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GethubFolowersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GethubFolowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
