import {animate, query, stagger, style, transition, trigger} from "@angular/animations";

export const TypeInOut = trigger('typeinout', [

// ANYTHING TO ALL SLIDES IN FROM THE BOTTOM
  transition('* => all', [
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



// ALL TO ANYTHING SLIDES IN FROM THE LEFT
  transition('fashion => *', [
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
  ]),


  // TO TO MUSIC  SLIDES IN FROM THE RIGHT
  transition('fashion => music', [
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
  ]),



  // NARRATIVE TO FASHION  SLIDES IN FROM THE RIGHT
  transition('narrative => fashion', [
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
  ]),



  // MUSIC TO FASHION SLIDES IN FROM THE RIGHT
  transition('music => fashion', [
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
]);
