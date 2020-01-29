import React from 'react';
import Modal from 'react-modal';
import './CheckModal.scss';

import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik';

const CheckModal = (props: { modalIsOpen: any, closeModal: any, customStyles: any, handleSubmit: any, reviewPassword: string, buttonText: string }) => {
  const { modalIsOpen, closeModal, customStyles, handleSubmit, reviewPassword, buttonText } = props;
  const initialValues = { password: "" }
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Password Check"
    >
      <Formik
        initialValues={initialValues}
        validate={values => {
          let errors = {};
          if (!values.password) {
            Object.assign(errors, { password: "Required" });
          }
          if (values.password !== reviewPassword) {
            Object.assign(errors, { password: "Wrong Password" })
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values);
          setSubmitting(false);
        }} >
        {({ isSubmitting }) => (
          <Form>
            <Field type="password" name="password" placeholder="비밀번호"/>
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              {buttonText}
            </button>
          </Form>
        )}
      </Formik>
    </Modal>
  )
}

export { CheckModal };