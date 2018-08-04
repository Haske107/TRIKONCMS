import {animate, group, query, stagger, style, transition, trigger} from "@angular/animations";

export const SlideInOut = trigger('slideInOut', [
  transition('void => *', [
      query('.tab', style({
        transform: 'translateX(-200%)',
        opacity: 0
      })),
      query('.tab', stagger('200ms', [
          animate('600ms .1s ease-out', style({
            opacity: 1,
            transform: 'translateY(0%)'
          })),
      ]))
    ]),
  transition('* => void', [
    query('.tab', style({
      transform: 'translateX(0)',
      opacity: 1
    })),
    query('.tab', stagger('200ms', [
      animate('600ms .1s ease-out', style({
        opacity: 0,
        transform: 'translateY(-200%)'
      })),
    ]))
  ])
  ]);
