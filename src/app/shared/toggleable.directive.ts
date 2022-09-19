import {
  Directive,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appToggleable]',
})
export class ToggleableDirective implements OnInit {
  @HostBinding('class.open') currentValue!: boolean;

  appToogleable = false;

  constructor(private renderer: Renderer2) {}

  @HostListener('click', ['$event']) toggle(e?: any) {
    e?.stopPropagation();

    this.currentValue = !this.currentValue;
  }

  ngOnInit() {
    this.renderer.listen('window', 'click', () => {
      if (this.currentValue) {
        this.currentValue = false;
      }
    });
  }
}
