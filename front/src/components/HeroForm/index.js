import React from 'react';
import { Formic, form, Field } from 'formic';
import { createHeroRequestAction } from '../../actions/actionCreators';
import { connect } from 'react-redux';

const HeroForm = (props) => {
  const onSubmitForm = (values, formikBag) => {
    props.createHeroRequestAction(values);
  };

  return (
  <>
    <h1>Create new superhero</h1>
    <Formic>
      initialValues={{
        
      }}
    </Formic>
  </>
  );
};

export default HeroForm;
