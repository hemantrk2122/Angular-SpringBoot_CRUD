import { animate, state, style, transition, trigger } from '@angular/animations';
export let fade = trigger('fade',[
    state('void',style({opacity:0})),
    transition('void <=>  *',[ //:enter -> 'void => *' :leave for vice versa
      animate(2000)
    ])
  ])

  export let slideIn = trigger('slideIn',[
    transition('void => *',[animate(100,style({transform:'translateX(10px)'}))]),
    transition('* => void',[animate(100,style({transform:'translateX(-10px)',backgroundColor:'red'}))]),

  ])