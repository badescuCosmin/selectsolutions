import React from 'react';
import Title from '../components/Title';

const withTitleContainer = (component) => (props) => {
  const Component = component;
  return (
    <div>
      <Title title={props.title} />
      <Component {...props} />
    </div>
  );
};

export default withTitleContainer;
