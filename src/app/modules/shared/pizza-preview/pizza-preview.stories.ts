import {moduleMetadata, storiesOf} from '@storybook/angular';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PizzaPreviewModule} from '@app/modules/shared/pizza-preview/pizza-preview.module';

storiesOf('app.modules.shared.pizza-preview.PizzaPreviewComponent', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        PizzaPreviewModule,
      ],
    }),
  )
  .add('default', () => {
    return {
      template: `<app-pizza-preview></app-pizza-preview>`
    };
  });
