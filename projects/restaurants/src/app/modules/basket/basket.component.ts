import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { Pizza } from '../../../../../core/src/lib/models/pizzas/pizza.model';
import { GetPizzasResponse } from '../../../../../core/src/lib/models/pizzas/get-pizzas-response.model';
import { BasketStoreSelectors } from '../../store/root/client';
import { Unsubscribe } from '../../../../../core/src/lib/components/unsubscribe.interface';
import { RootStoreState } from '../../store/root';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit, OnDestroy, Unsubscribe {
  readonly unsubscribe = new Subject<void>();

  pizzasResponse$: Observable<GetPizzasResponse> = this.store.pipe(
    select(BasketStoreSelectors.getPizzasResponseState),
    takeUntil(this.unsubscribe),
  );

  total$: Observable<number> = this.store.pipe(
    // @ts-ignore
    select(BasketStoreSelectors.getTotalState),
    takeUntil(this.unsubscribe),
  );

  // @ts-ignore
  activePizza$ = new BehaviorSubject<Pizza>(null);

  constructor(private store: Store<RootStoreState.State>) { }

  ngOnInit(): void {
    this.pizzasResponse$.subscribe(resp => {
      if (resp) {
        // @ts-ignore
        this.activePizza$.next(resp.pizzas[0]);
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }

  onPizzaHover(pizza: Pizza): void {
    this.activePizza$.next(pizza);
  }
}
