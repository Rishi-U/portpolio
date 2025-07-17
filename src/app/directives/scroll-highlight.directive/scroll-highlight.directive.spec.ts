import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollHighlightDirective } from './scroll-highlight.directive';

describe('ScrollHighlightDirective', () => {
  let component: ScrollHighlightDirective;
  let fixture: ComponentFixture<ScrollHighlightDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollHighlightDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollHighlightDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
