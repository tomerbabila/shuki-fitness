import { BehaviorSubject, Observable } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';

export class Store<T> {
  private stateSubject: BehaviorSubject<T>;
  public readonly state$: Observable<T>;

  protected constructor(initialState: T) {
    this.stateSubject = new BehaviorSubject(initialState);
    this.state$ = this.stateSubject.asObservable();
  }

  protected get state(): T {
    return this.stateSubject.getValue();
  }

  protected select<K>(mapFn: (state: T) => K): Observable<K> {
    return this.stateSubject.asObservable().pipe(
      map((state: T) => mapFn(state)),
      distinctUntilChanged()
    );
  }

  protected setState(newState: Partial<T>): void {
    this.stateSubject.next({
      ...this.state,
      ...newState,
    });
  }
}
