import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsPageComponent } from './tags-page.component';

describe('TagsPageComponent', () => {
  let component: TagsPageComponent;
  let fixture: ComponentFixture<TagsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagsPageComponent]
    });
    fixture = TestBed.createComponent(TagsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
