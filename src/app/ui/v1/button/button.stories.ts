import {moduleMetadata, storiesOf} from '@storybook/angular';

import {ButtonModule} from './button.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {of} from 'rxjs';
import mockErrorResponse from '@app/mocks/error/error-response.mock';

const errorResponse$ = of(mockErrorResponse);

storiesOf('app.ui.v1.ButtonComponent', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        ButtonModule,
        BrowserAnimationsModule
      ],
    }),
  )
  .add('default', () => {
    return {
      template: `<app-ui-error-message [errorResponse$]="errorResponse$"></app-ui-error-message>`,
      props: {
        errorResponse$,
      },
    };
  });
