import React from 'react';
import { Formik, Form, Field } from 'formik';

import {
  createHeroRequestAction,
  getPowersRequestAction,
} from '../../actions/actionCreators';
import { connect } from 'react-redux';
// import Thumb from './Thumb';

let file = '';

const HeroForm = (props) => {
  const onSubmitForm = (values, formikBag) => {
    // props.createHeroRequestAction(values);
    console.log(values);
  };

  return (
    <>
      <h1>Create new superhero</h1>
      <Formik
        initialValues={{
          nickName: '',
          realName: '',
          originDescription: '',
          catchPrase: '',
          files: [],
          superpowers: [],
        }}
        onSUbmit={onSubmitForm}
      >
        <Form>
          <Field name="nickName" placeholder="nick name"></Field>
          <Field name="realName" placeholder="real name"></Field>
          <Field
            name="originDescription"
            placeholder="origin description"
          ></Field>
          <Field name="catchePrase" placeholder="catche prase"></Field>
          <input
            type="file"
            name="files"
            ref={(input) => {
              file = input;
            }}
            multiple
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default connect(null, { createHeroRequestAction })(HeroForm);
