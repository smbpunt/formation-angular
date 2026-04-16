import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { interval, map } from 'rxjs';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-my-first-observable',
  imports: [AsyncPipe],
  templateUrl: './my-first-observable.html',
  styleUrl: './my-first-observable.scss',
})
export class MyFirstObservable {
  /**
   * Un Observable est un flux de données qui émet des valeurs dans le temps.
   * Il n'est actif que lorsqu'on s'y abonne (lazy evaluation).
   *
   * interval(1000) émet automatiquement : 0, 1, 2, 3... toutes les secondes.
   * Convention : le suffixe $ identifie une variable de type Observable.
   */
  readonly timer$ = interval(1000).pipe(
    // pipe() enchaîne des opérateurs RxJS pour transformer le flux
    map(n => n + 1) // map() applique une fonction à chaque valeur émise
  );

  /**
   * APPROCHE 1 — toSignal() [recommandée, Angular 16+]
   *
   * Convertit l'Observable en Signal Angular.
   * - S'abonne automatiquement à la création du composant
   * - Se désabonne automatiquement à sa destruction (pas de fuite mémoire)
   * - initialValue : valeur renvoyée avant le premier emit
   */
  readonly timerSignal = toSignal(this.timer$, { initialValue: 0 });

  constructor() {
    /**
     * APPROCHE 2 — Abonnement manuel
     *
     * subscribe() déclenche l'écoute du flux.
     * Utile pour les effets de bord : logs, appels API, mise à jour d'état...
     *
     * takeUntilDestroyed() complète automatiquement l'abonnement
     * quand le composant est détruit. Sans ça, le timer continuerait
     * à tourner en arrière-plan (fuite mémoire).
     */
    this.timer$
      .pipe(takeUntilDestroyed())
      .subscribe(valeur => console.log('[Observable] tick :', valeur));
  }
}
