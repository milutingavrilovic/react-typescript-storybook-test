import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SettingToggle from '.';

storiesOf('Atoms|SettingToggle', module)
    .add('Eat Now Settings SettingToggle', () => <SettingToggle enableSetting={action('Button onClick')} />);
