import React from 'react';
import './CreateComment.scss';

import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik';

type CommentValues = {
  commenter: string,
  content: string,
  password: string,
}


const CreateComment = (props: {addComment: any}) => {
  const {addComment} = props;
  const initialValues: CommentValues = { commenter: "작성자", content: "내용", password: "" }
  return (
    <div className="CreateComment">
      <Formik
        initialValues={initialValues}
        validate={values => {
          let errors = {};
          if (!values.commenter) {
            Object.assign(errors, { commenter: 'Required' });
          }
          if (!values.content) {
            Object.assign(errors, { content: "Required" });
          }
          if (!values.password) {
            Object.assign(errors, { password: "Required" });
          }
          return errors;
        }}
        onSubmit={(values: CommentValues, { setSubmitting }) => {
          setTimeout(() => {
            addComment(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="commenter" />
            <ErrorMessage name="commenter" component="div" />
            <Field type="text" name="content" />
            <ErrorMessage name="content" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              게시
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export { CreateComment };