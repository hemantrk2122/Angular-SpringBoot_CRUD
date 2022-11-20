import { animate, group, query, stagger, state, style, transition, trigger } from '@angular/animations';
export let fade = trigger('fade',[
    state('void',style({opacity:0})),
    transition('void <=>  *',[ //:enter -> 'void => *' :leave for vice versa
      animate(2000)
    ])
  ])

  export let slideIn = trigger('slideIn',[
    transition('void => *',[animate(1000,style({transform:'translateX(10px)'}))]),
    transition('* => void',[animate(1000,style({transform:'translateX(-10px)',backgroundColor:'red'}))]),

  ])

  export let pageAnimations = trigger('pageAnimations', [
    transition(':enter', [
      query('.hero', [
        style({opacity: 0, transform: 'translateY(-100px)'}),
        stagger(30, [
          animate('500ms cubic-bezier(0.35, 0, 0.25, 1)',
          style({ opacity: 1, transform: 'none' }))
        ])
      ])
    ])
])

export let flyInOut = trigger('flyInOut', [
    state('in', style({
      width: '*',
      transform: 'translateX(0)', opacity: 1
    })),
    transition(':enter', [
      style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
      group([
        animate('0.3s 0.1s ease', style({
          transform: 'translateX(0)',
          width: '*'
        })),
        animate('0.3s ease', style({
          opacity: 1
        }))
      ])
    ]),
    transition(':leave', [
      group([
        animate('0.3s ease', style({
          transform: 'translateX(50px)',
          width: 10,
          backgroundColor: 'red'
        })),
        animate('0.3s 0.2s ease', style({
          opacity: 0
        }))
      ])
    ])
  ])