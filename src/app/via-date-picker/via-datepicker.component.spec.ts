import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePickerComponent } from './via-datepicker.component';
import * as moment from 'moment';

const Moment: any = (<any>moment).default || moment;

describe('DatePickerComponent', () => {
  let component: DatePickerComponent;
  let fixture: ComponentFixture<DatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open when clicked', () => {
    fixture.debugElement.nativeElement.querySelector('body').click();
    fixture.whenStable().then(() => {
      expect(component.opened);
    });
    component.close();
  });

  describe('While open', () => {
    beforeEach(() => {
      component.open();
    });

    describe('Pressing the "Today\'s date" button', () => {
      it('should set the value of the picker to the current date and close it', () => {
        fixture.debugElement.nativeElement.querySelector('.datepicker-buttons button').click();
        expect(Moment().isSame(component.value, 'day') && Moment().isSame(component.value, 'month'));
        expect(!component.opened);
      });
    });

    describe('Clicking on a date', () => {
      it('should change the value of the picker and close it', () => {
        let oldValue: any = component.value;
        fixture.debugElement.nativeElement.querySelectorAll('.day')[10].click();
        expect(!component.opened);
        expect(!component.value.isSame(oldValue));
      });
    });

  });

});
