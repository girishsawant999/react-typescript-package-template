import React from 'react';

export interface ITestprops {
  name?: string;
}

const Test: React.FC<ITestprops> = (props: ITestprops) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};

export default Test;
