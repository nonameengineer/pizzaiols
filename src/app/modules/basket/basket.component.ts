import {Component, OnDestroy, OnInit} from '@angular/core';
import {Unsubscribe} from '@app/interfaces/unsubscribe.interface';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {GetPizzasResponse} from '@app/models/pizzas/get-pizzas-response.model';
import {select, Store} from '@ngrx/store';
import {BasketStoreSelectors} from '@app/store/root/client';
import {takeUntil} from 'rxjs/operators';
import {RootStoreState} from '@app/store/root';
import {Pizza} from '@app/models/pizzas/pizza.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit, OnDestroy, Unsubscribe {
  readonly unsubscribe = new Subject<void>();

  pizzasResponse$: Observable<GetPizzasResponse> = this.store.pipe(
    select(BasketStoreSelectors.getPizzasResponseState),
    takeUntil(this.unsubscribe)
  );

  total$: Observable<number> = this.store.pipe(
    select(BasketStoreSelectors.getTotalState),
    takeUntil(this.unsubscribe)
  );

  activePizza$ = new BehaviorSubject<Pizza>(null);

  constructor(private store: Store<RootStoreState.State>) { }

  ngOnInit(): void {
    this.pizzasResponse$.subscribe(resp => {
      if (resp) {
        this.activePizza$.next(resp.pizzas[0]);
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }

  onPizzaHover(pizza: Pizza) {
    this.activePizza$.next(pizza);
  }
}
