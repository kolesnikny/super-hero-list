import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useEffect, useState } from 'react';
import { createHeroRequestAction } from '../../actions/actionCreators';
import { getAllPowers } from '../../api';
import { connect } from 'react-redux';

const stylesMulty = {
  fontFamily: 'sans-serif',
  width: '100px',
  height: '200px',
};

const HeroForm = (props) => {
  const onSubmitForm = (values, formikBag) => {
    props.createHeroRequestAction(values);
  };

  const [allPowers, setAllPowers] = useState([]);
  useEffect(() => {
    getAllPowers().then((response) => {
      console.log(response.data);
      if (response.data.length > 0) {
        setAllPowers(response.data);
      }
    });
  }, []);

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
        render={(values, setFieldValue) => (
          <Form>
            <Field name="nickName" placeholder="nick name"></Field>
            <Field name="realName" placeholder="real name"></Field>
            <Field
              name="originDescription"
              placeholder="origin description"
            ></Field>
            <Field name="catchePrase" placeholder="catche prase"></Field>
            <input type="file" name="file" multiple />
            <Field
              style={stylesMulty}
              component="select"
              name="superpowers"
              onChange={(evt) =>
                setFieldValue(
                  'superpowers',
                  [].slice
                    .call(evt.target.selectedOptions)
                    .map((option) => option.value)
                )
              }
              multiple={true}
            >
              {allPowers.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.superpower}
                </option>
              ))}
            </Field>
            <button type="submit">Submit</button>
          </Form>
        )}
        onSUbmit={onSubmitForm}
      />
    </>
  );
};

export default connect(null, { createHeroRequestAction })(HeroForm);
