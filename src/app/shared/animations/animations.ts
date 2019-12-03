import { trigger, state, style, transition, animate } from '@angular/animations';

export class Animations {
  // Height & Opacity Toggle
  static heightOpacityToggle(timer: number = 200) {
    return trigger('visibilityChanged', [
      state('hidden', style({ height: '0', opacity: '0', display: 'none' })),
      state('shown', style({ height: '*', opacity: '1', display: 'block' })),
      transition('shown <=> hidden', animate(`${timer}`))
    ]);
  }
}
