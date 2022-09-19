import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToggleableContainerDirective } from './toggleable-container.directive';
import { ToggleableDirective } from './toggleable.directive';

@NgModule({
  declarations: [ToggleableDirective, ToggleableContainerDirective],
  imports: [CommonModule],

  exports: [ToggleableDirective, ToggleableContainerDirective],
})
export class SharedModule {}
