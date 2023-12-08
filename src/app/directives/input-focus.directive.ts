import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInputFocus]',
})
export class InputFocusDirective {
  private nativeElement = this.el.nativeElement;

  constructor(private el: ElementRef, private _render: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this._changeWeightToBold();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._changeWeightToBold(false);
  }

  @HostListener('focusout', ['$event.relatedTarget']) onFocusOut(
    relatedTarget: EventTarget
  ) {
    const dropdownEl = this.nativeElement.querySelector('p-dropdown');
    const dropdownFocused = dropdownEl.classList.contains(
      'p-inputwrapper-focus'
    );
    if (!this.nativeElement.contains(relatedTarget) && !dropdownFocused) {
      this._changeWeightToBold(false);
    }
  }

  private _changeWeightToBold(bold = true) {
    const weight = bold ? 'bold' : '400';
    const spanElement = this.nativeElement.querySelector('.camp');

    this._render.setStyle(spanElement, 'font-weight', weight);
  }
}
