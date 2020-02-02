import {
    trigger,
    transition,
    state,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes,
} from '@angular/animations'

export let slideLeft = trigger('slideLeft', [
  state('void', style({opacity:0})),
  transition('void => *', [
    style({transform: 'translateX(50px)'}),
    animate('.75s ease')
  ])
])

export let slideUp = trigger('slideUp', [
  state('void', style({opacity:0})),
  transition('void => *', [
    style({transform: 'translateY(50px)'}),
    animate('.75s ease')
  ])
])

export let slideRight = trigger('slideRight', [
  state('void', style({opacity:0})),
  transition('void => *', [
    style({transform: 'translateX(-50px)'}),
    animate('.75s ease')
  ])
])

export let fadeIn = trigger('fadeIn', [
  state('void', style({opacity:0})),
  transition('void => *', [
    style({opacity:0}),
    animate('2s ease')
  ])
])