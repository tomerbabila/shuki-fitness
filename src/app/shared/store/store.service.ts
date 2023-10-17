import { BehaviorSubject, Observable } from 'rxjs';

export class Store<T> {
  private _state: BehaviorSubject<T>;
  public readonly state$: Observable<T>;

  protected constructor(initialState: T) {
    this._state = new BehaviorSubject(initialState);
    this.state$ = this._state.asObservable();
  }

  protected get state(): T {
    return this._state.getValue();
  }

  protected setState(nextState: T): void {
    this._state.next(nextState);
  }
}
