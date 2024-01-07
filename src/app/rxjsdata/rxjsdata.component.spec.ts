import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsdataComponent } from './rxjsdata.component';

describe('RxjsdataComponent', () => {
  let component: RxjsdataComponent;
  let fixture: ComponentFixture<RxjsdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsdataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RxjsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
