import { Component } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';
import { transition, animate, style, trigger, state } from '@angular/animations'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('callAnimation', [state('void', style({ transform: 'translateX(-100%)', opacity: 0 })),
    transition(':enter', [animate(600, style({ transform: 'translateX(0)', opacity: 1 }))])])
  ]
})

export class HomePage {

  constructor(private animationCtrl: AnimationController) { }

  ngOnInit() {
    const animation: Animation = this.animationCtrl.create()
      .addElement(document.querySelector('.button'))
      .duration(2000)
      .iterations(Infinity)
      .fromTo('opacity', '1', '0.2')

    const movName: Animation = this.animationCtrl.create()
      .addElement(document.querySelector('#nombreUsuario'))
      .duration(2000)
      .iterations(Infinity)
      .from('transform', 'translateX(100%)')

    animation.play();
    movName.play();
  }
}

