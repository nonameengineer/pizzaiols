import {GetPizzasResponse} from '@app/models/pizzas/get-pizzas-response.model';

export interface State {
  pizzasResponse: GetPizzasResponse;
  toppingsResponse: string[];
}

export const initialState: State = {
  pizzasResponse: {
    pizzas: []
  },
  toppingsResponse: [
    'anchovy', 'bacon', 'basil', 'chili', 'mozzarella', 'mushroom',
    'olive', 'onion', 'pepper', 'pepperoni', 'sweetcorn', 'tomato'
  ]
};
