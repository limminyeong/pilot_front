import React from 'react';
import './CommentForm.scss';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik';
import { CommentData } from '../apiclient';


const Comment = (props: {
  comments: CommentData[],
  handleSubmit: (value: {
    password: string;
  }, id: number) => Promise<void>
}) => {
  const { comments, handleSubmit } = props;
  const initialValues = { password: "" }

  return (
    <div className="Comment">
      <h2>Comments</h2>
      {comments.map(comment => (
        <div key={comment.id} className="Comment__comment">
          <span className="Comment__commenter"> {comment.commenter} </span>
          <span className="Comment__content"> {comment.content} </span>
          <Formik
            initialValues={initialValues}
            validate={values => {
              let errors = {};
              if (!values.password) {
                Object.assign(errors, { password: "Required" });
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              handleSubmit(values, comment.id);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field type="password" name="password" placeholder="비밀번호" />
                <ErrorMessage name="password" component="div" />
                <button type="submit" disabled={isSubmitting}>
                  x
            </button>
              </Form>
            )}
          </Formik>
        </div>
      ))}
    </div>
  )
}
export { Comment };