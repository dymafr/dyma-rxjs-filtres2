screenLog.init(); // affiche le log de la console
// Cliquez sur la flèche de rafraichissement dans la fenêtre de droite, juste à gauche de l'url pour relancer.

import { Observable, interval } from 'rxjs';
import { take, tap, first, map } from 'rxjs/operators';

// Création de streams
function createStream(name: string, iterations: number, intervalle: number): Observable<any> {
  return interval(intervalle).pipe(
    take(iterations),
    tap(val => console.log(`[ Stream ${name} ] : ${val}`))
  )
}

const streamA = createStream('A', 6, 100);

streamA.pipe(
  first(val => val > 3),
  map(val => `Val:${val}`)
).subscribe(val => console.log(`FIRST : ${val}`));