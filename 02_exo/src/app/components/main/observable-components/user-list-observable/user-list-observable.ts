import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { delay } from 'rxjs';

/**
 * On décrit ici la forme des données qu'on attend de l'API.
 * Ce n'est PAS un cast réel — voir explication plus bas.
 */
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: { name: string };
}

@Component({
  selector: 'app-user-list-observable',
  imports: [],
  templateUrl: './user-list-observable.html',
  styleUrl: './user-list-observable.scss',
})
export class UserListObservable {
  // inject() est l'équivalent moderne de déclarer un paramètre dans le constructeur
  private http = inject(HttpClient);

  /**
   * FLOW COMPLET :
   *
   * 1. http.get<User[]>(url)
   *    → crée un Observable<User[]> (rien ne se passe encore, c'est lazy)
   *
   * 2. .pipe(delay(1500))
   *    → ajoute un opérateur qui retarde l'émission de 1,5s
   *    → l'Observable reste inactif
   *
   * 3. toSignal(...)
   *    → s'abonne à l'Observable (le déclenche vraiment)
   *    → retourne un Signal<User[] | undefined>
   *    → valeur initiale : undefined (pas encore de réponse)
   *
   * 4. Angular envoie la requête HTTP GET
   *    → le navigateur reçoit la réponse JSON brute (string)
   *    → HttpClient parse automatiquement le JSON en objet JS
   *    → après 1,5s de délai artificiel, l'Observable émet l'objet parsé
   *
   * 5. toSignal met à jour le Signal avec User[]
   *    → Angular détecte le changement et re-rend le template
   *
   * 6. Quand le composant est détruit, toSignal se désabonne
   *    → la requête en cours est annulée si elle n'est pas terminée
   *
   * ─────────────────────────────────────────────────────────
   * ⚠️  SUR LE "CAST" <User[]> :
   *
   * http.get<User[]>() n'est PAS un vrai cast TypeScript.
   * C'est un "generic type hint" — il dit au compilateur
   * "fais comme si la réponse était de type User[]".
   *
   * En réalité, HttpClient fait seulement JSON.parse() sur la
   * réponse texte. Si l'API renvoie un champ en plus ou en moins,
   * TypeScript ne le détectera pas à l'exécution.
   *
   * Pour valider les données à l'exécution, il faudrait une
   * librairie comme Zod — mais c'est hors sujet ici.
   * ─────────────────────────────────────────────────────────
   */
  readonly users = toSignal(
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(
      delay(1500) // simule un lag réseau de 1,5s
    )
  );
}
