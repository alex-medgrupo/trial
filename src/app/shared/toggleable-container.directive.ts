import {
  AfterViewInit,
  Directive,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ToggleableDirective } from './toggleable.directive';
import { tap } from 'rxjs/operators';

@Directive({
  selector: '[appToggleableContainer]',
})
export class ToggleableContainerDirective {
  @ViewChildren(ToggleableDirective)
  toggleables!: QueryList<ToggleableDirective>;

  ionViewWillEnter() {
    console.log('togg', this.toggleables);

    this.toggleables?.changes.pipe(
      tap((tapable) => {
        console.log(tapable);
      })
    );
  }
}
