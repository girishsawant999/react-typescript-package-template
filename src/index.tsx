import React, { lazy, Suspense } from 'react';
import './style.scss';

const Comp = lazy(() => import('./Components/index'));

interface IProps {
  name: string;
}

const Test = (props: IProps): JSX.Element => {
  return (
    <div>
      {props.name}
      <Suspense fallback={<div>Loading...</div>}>
        <Comp name="Lazy Component" />
      </Suspense>
    </div>
  );
};

export default Test;
