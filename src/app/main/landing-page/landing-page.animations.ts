import {animate, query, stagger, style, transition, trigger} from "@angular/animations";

export const slideInOut  = trigger('slideInOut', [
  //going in
  transition('void => *', [
    query('.tab', style({
      transform: 'translateX(-200%)',
      opacity: 0
    })),
    query('.tab', stagger('-200ms', [
      animate('600ms .1s ease-out', style({
        opacity: 1,
        transform: 'translateY(0%)'
      }))
    ]))
  ]),
  //going out
  transition('* => void', [
    query('.tile', style({
      opacity: 1,
      transform: 'translateY(0%)'
    })),
    query('.tile', stagger('-500ms', [
      animate('100ms .1s ease-out', style({
        opacity: 0.2,
        transform: 'translateY(-200%)'
      }))
    ]))
  ])
]);


export const FadeInOut  = trigger('FadeInOut', [
  //going in
  transition('void => *', [
    query('.Logo', style({
      opacity: 0
    })),
    query('.tab', style({
        opacity: 1,
      }))
  ]),
  //going out
  transition('* => void', [
    query('.Logo', style({
      opacity: 1
    })),
    query('.tab', style({
      opacity: 0,
    }))
  ])
]);
