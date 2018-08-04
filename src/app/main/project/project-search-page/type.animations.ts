import {animate, query, stagger, style, transition, trigger} from "@angular/animations";

export const TypeInOut = trigger('typeinout', [

// ANYTHING TO ALL SLIDES IN FROM THE BOTTOM
  transition('void => *', [
    query('.tile', style({
      transform: 'translateY(200%)',
      opacity: 0
    })),
    query('.tile', stagger('200ms', [
      animate('600ms .1s ease-out', style({
        opacity: 1,
        transform: 'translateY(0%)'
      }))
    ]))
  ])
]);
