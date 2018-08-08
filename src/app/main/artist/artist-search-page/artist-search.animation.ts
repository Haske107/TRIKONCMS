import {animate, group, query, stagger, style, transition, trigger} from "@angular/animations";



//TRIGGER 1
export const SlideInOut = trigger('slideInOut', [
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
  transition('in => void', [
    query('.tile', style({
      opacity: 1,
      transform: 'translateY(0%)'
    })),
    query('.tile', stagger('-500ms', [
      animate('100ms .1s ease-out', style({
        opacity: 0,
        transform: 'translateY(-200%)'
      }))
    ]))
  ])
]);
