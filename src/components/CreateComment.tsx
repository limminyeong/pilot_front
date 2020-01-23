import React from 'react';
import './CreateComment.scss';

import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik';
import { PostCommentData } from '../apiclient'

const CreateComment = (props: { addComment: (commentValue: PostCommentData) => Promise<void> }) => {
  const { addComment } = props;
  const initialValues: PostCommentData = { commenter: "", content: "", password: "" }
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
        onSubmit={(values: PostCommentData, { setSubmitting }) => {
          setTimeout(() => {
            addComment(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="commenter" placeholder="작성자" />
            <ErrorMessage name="commenter" component="div" />
            <Field type="text" name="content" placeholder="따뜻한 한 마디는 작성자에게 힘이 됩니다."/>
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