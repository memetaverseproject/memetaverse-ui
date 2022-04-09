import * as React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'
import { AvatarFace } from './AvatarFace'
import { Bean } from '../Bean/Bean'
import { avatar } from '../../data/avatar'

storiesOf('AvatarFace', module)
  .addDecorator(centered)
  .add('Single', () => <AvatarFace size="large" avatar={avatar} />)
  .add('Sizes', () => (
    <>
      <AvatarFace size="tiny" avatar={avatar} />
      <AvatarFace size="small" avatar={avatar} />
      <AvatarFace size="medium" avatar={avatar} />
      <AvatarFace size="large" avatar={avatar} />
    </>
  ))
  .add('In a paragraph', () => (
    <p>
      You've transferred <Bean inline>1,000</Bean> to{' '}
      <AvatarFace size="tiny" inline avatar={avatar} /> <strong>cazala</strong>
    </p>
  ))
