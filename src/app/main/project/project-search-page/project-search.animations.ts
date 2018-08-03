import {animate, query, stagger, style, transition, trigger} from "@angular/animations";

export const SlideInOut = trigger('slideInOut', [
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
  ]),
  transition('* => void', [
    query('.tile', style({
      opacity: 1,
      transform: 'translateY(0%)'
    })),
    query('.tile', stagger('500ms', [
      animate('100ms .1s ease-out', style({
        opacity: 0.2,
        transform: 'translateY(200%)'
      }))
    ]))
  ])
])
