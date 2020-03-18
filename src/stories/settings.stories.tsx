import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Settings from '../components/Settings';

storiesOf('Atoms|Settings', module)
    .add('Eat Now Settings', () => <Settings enableSetting={action('Button onClick')} />);
