import React, { lazy, Suspense } from 'react';
import './style.scss';

const Comp = lazy(() => import('./Components/index'));

interface IProps {
  name: string;
}

const Test = (props: IProps): JSX.Element => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Comp name={props.name} />
      </Suspense>
    </div>
  );
};

export default Test;
