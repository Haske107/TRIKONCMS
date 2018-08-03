import {animate, query, stagger, style, transition, trigger} from "@angular/animations";



//TRIGGER 1
export const FlipInOut = trigger('FlipInOut', [
  //going in
  transition('false => true', [
    query('.background', style({
      width: '36px',
      height: '36px',
      transform: 'translateX(-36px) rotate(-90deg)',
      borderTopLeftRadius: '24px',
      borderBottomRightRadius: '24px'
    }), {optional: true}),
    query('.User, .Pass', style({
      opacity: 0,
      transform: 'translateY(200%)'
    }), {optional: true}),
    query('.background',
      animate('.4s', style({
        width: '300px',
        height: '96px',
        transform:  'translateX(0) rotate(0deg)',
        borderTopLeftRadius: '1px',
        borderBottomRightRadius: '1px'
      })), {optional: true}
    ),
    query('.User, .Pass',
      animate('.2s', style({
        opacity: 1,
        transform: 'translateY(0)'
      })), {optional: true}
    )

  ]),
  // GOING OUT
  transition('true => false', [
    query('.User, .Pass',
      animate('.3s', style({
        opacity: 0
      })), {optional: true}),
    query('.background',
      animate('.3s', style({
        width: '36px',
        height: '36px',
        transform: 'translateX(-36px) rotate(-90deg)',
        borderTopLeftRadius: '24px',
        borderBottomRightRadius: '24px'
      })), {optional: true}),


  ])
]);


export const SpinInOut = trigger('SpinInOut', [
  // GOING IN
  transition('false => true', [
    query('.info-button', style({
      transform: 'rotate(-1000deg)',
    }), {optional: false}),
    query('.info-button',
      animate('2s .5s ease', style({
        transform:  'rotate(0deg)'
      })), {optional: false}),
  ]),

  transition('true => false', [
    query('.info-button', style({
      transform: 'rotate(1000deg)',
    }), {optional: false}),
    query('.info-button',
      animate('1.5s .5s ease', style({
        transform:  'rotate(0deg)'
      })), {optional: false}),


  ])
]);
