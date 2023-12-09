import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss'],
})
export class SearcherComponent implements OnInit, OnDestroy {
  @Input() eventRequired = false;
  @Output() onSubmitEvent = new EventEmitter();

  campus = [
    {
      name: 'Option1bOption1bOption1bOption1bOption1bOption1b',
    },
    {
      name: 'Bption1',
    },
  ];

  searcherForm: FormGroup = this._fb.group({
    campus: new FormControl(null, [Validators.required]),
    state: new FormControl({ value: null, disabled: true }),
    city: new FormControl({ value: null, disabled: true }),
  });

  private destroy$ = new Subject();

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.searcherForm
      .get('campus')
      ?.valueChanges.pipe(
        takeUntil(this.destroy$),
        tap(() => {
          const stateControl = this.searcherForm.get('state');

          if (stateControl?.value) {
            stateControl.setValue(null, { emitEvent: false });
          } else {
            stateControl!.enable({ emitEvent: false });
          }

          this.searcherForm.get('city')?.reset();
          this.searcherForm.get('city')?.disable();
        })
      )
      .subscribe();

    this.searcherForm
      .get('state')
      ?.valueChanges.pipe(
        tap(() => {
          const cityControl = this.searcherForm.get('city');

          if (cityControl?.value) {
            cityControl?.reset();
          }
          cityControl!.enable();
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onSubmit() {
    if (this.searcherForm.valid) {
      if (this.eventRequired) {
        this.onSubmitEvent.emit(this.searcherForm.value);
        console.log('childMoe');
      } else {
        //Submit on parentMode === initial page searcher
        console.log('work');
      }
    }
  }
}
