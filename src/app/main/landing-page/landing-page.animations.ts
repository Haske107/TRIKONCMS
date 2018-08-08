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

//TRIGGER 2
  export const ScaleIn = trigger('scalein', [
    //going in
    transition('void => *', [
      query('.crop-wrapper, .Border', style({
        transform: 'scale(.1) ',
        opacity: 0
      })),

      group([
        query('.crop-wrapper, Border', animate('7s .5s ease-in-out', style({
            opacity: 1,
            transform: 'scale(1) '
          }))
        )

      ])
    ]),
    //going out
    transition('* => void', [
      query('.crop-wrapper, .Border', style({
        transform: 'scale(-200%) rotate(-720deg)',
        opacity: 0
      })),
      query('.crop-wrapper, .Border', animate('4s .1s ease-out', style({
          opacity: 1,
          transform: 'scale(0%) rotate(0deg)'
        }))
      )
    ])
  ]);


export const ContactSlide = trigger('contactslide', [



]);

export const AboutSlide = trigger('aboutslide', [
  transition('false => true', [
    query('.about', style({
      transform: 'translateX(200%)',
      opacity: 0
    })),
    group([
      query('.about',animate('.5s .4s ease-in-out', style({
        transform: 'translateX(-0)',
        opacity: 1
      }))),
      query('.crop-wrapper',animate('.5s .4s ease-in-out', style({
        transform: 'translateX(-300%)',
        opacity: 1
      }))),
    ])

  ]),
  transition('true => false', [
    query('.about', style({
      transform: 'translateX(0)',
      opacity: 1
    })),
    query('.crop-wrapper', style({
      transform: 'translateX(-300%)',
      opacity: 0
    })),
    group([
      query('.about',animate('.3s .4s ease-in-out', style({
        transform: 'translateX(200%)',
        opacity: 0
      }))),
      query('.crop-wrapper',animate('.5s .4s ease-in-out', style({
        transform: 'translateX(0)',
        opacity: 1
      }))),
    ])
  ])

]);
