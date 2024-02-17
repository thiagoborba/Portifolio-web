import cn from 'clsx';
import React from 'react';
import styles from './styles.module.scss';

type styles = typeof styles;

interface FlexProps {
  container?: boolean;
  alignItems?:
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'initial'
    | 'inherit';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'center'
    | 'initial'
    | 'inherit';
  direction?: 'column' | 'row';
  flexWrap?: 'wrap' | 'nowrap' | 'reverse';
  alignSelf?: 'stretch' | 'center' | 'start' | 'end';
  justifySelf?: 'stretch' | 'center' | 'start' | 'end';
  flex?: boolean;
  flexBasis?: string;
  flexGrow?: number;
  flexShrink?: number;

  pushDown?: boolean;
  pushLeft?: boolean;
  pushRight?: boolean;
  pushTop?: boolean;
}

interface Props extends React.HTMLAttributes<HTMLDivElement>, FlexProps {}

export function FlexBox(props: Props) {
  const { className } = props;
  return (
    <div
      className={cn(styles['flex-box'], className, {
        [styles['-container']]: props.container,
        [styles['-align-items-stretch']]: props.alignItems === 'stretch',
        [styles['-align-items-center']]: props.alignItems === 'center',
        [styles['-align-items-flex-start']]: props.alignItems === 'flex-start',
        [styles['-align-items-flex-end']]: props.alignItems === 'flex-end',
        [styles['-align-items-baseline']]: props.alignItems === 'baseline',
        [styles['-align-items-initial']]: props.alignItems === 'initial',
        [styles['-align-items-inherit']]: props.alignItems === 'inherit',
        [styles['-justify-content-flex-start']]:
          props.justifyContent === 'flex-start',
        [styles['-justify-content-flex-end']]:
          props.justifyContent === 'flex-end',
        [styles['-justify-content-space-between']]:
          props.justifyContent === 'space-between',
        [styles['-justify-content-space-around']]:
          props.justifyContent === 'space-around',
        [styles['-justify-content-center']]: props.justifyContent === 'center',
        [styles['-justify-content-initial']]:
          props.justifyContent === 'initial',
        [styles['-justify-content-inherit']]:
          props.justifyContent === 'inherit',
        [styles['-direction-column']]: props.direction === 'column',
        [styles['-direction-row']]: props.direction === 'row',
        [styles['-flex-wrap-wrap']]: props.flexWrap === 'wrap',
        [styles['-flex-wrap-nowrap']]: props.flexWrap === 'nowrap',
        [styles['-flex-wrap-reverse']]: props.flexWrap === 'reverse',
        [styles['-align-self-stretch']]: props.alignSelf === 'stretch',
        [styles['-align-self-center']]: props.alignSelf === 'center',
        [styles['-align-self-start']]: props.alignSelf === 'start',
        [styles['-align-self-end']]: props.alignSelf === 'end',
        [styles['-justify-self-stretch']]: props.justifySelf === 'stretch',
        [styles['-justify-self-center']]: props.justifySelf === 'center',
        [styles['-justify-self-start']]: props.justifySelf === 'start',
        [styles['-justify-self-end']]: props.justifySelf === 'end',
        [styles['-push-down']]: props.pushDown,
        [styles['-push-left']]: props.pushLeft,
        [styles['-push-right']]: props.pushRight,
        [styles['-push-top']]: props.pushTop,
        [styles['-flex']]: props.flex,
      })}
    >
      {props.children}
    </div>
  );
}

export default FlexBox;
