import React from 'react';
import './ReviewForm.scss';

import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik';
import { PostReviewData } from '../apiclient'

const ReviewForm = (props: { addReview: (reviewValue: PostReviewData) => Promise<void> }) => {
  const { addReview } = props;
  const initialValues: PostReviewData = { title: "", author: "", password: "", content: "", imgUrl: "", categoryId: 1, hasSpoiler: false }
  const categories: {id: number, name: string}[] = [
    {
      id: 1,
      name: "영화"
    },{
      id: 2,
      name: "드라마"
    },{
      id: 3,
      name: "다큐멘터리"
    },{
      id: 4,
      name: "애니메이션"
    },{
      id: 5,
      name: "TV프로그램"
    },
  ];
  return (
    <div className="ReviewForm">
      <Formik
        initialValues={initialValues}
        validate={values => {
          let errors = {};
          if (!values.title) {
            Object.assign(errors, { commenter: 'Required' });
          }
          if (!values.author) {
            Object.assign(errors, { author: 'Required' });
          }
          if (!values.categoryId) {
            Object.assign(errors, { categoryId: 'Required' });
          }
          if (!values.content) {
            Object.assign(errors, { content: "Required" });
          }
          if (!values.password) {
            Object.assign(errors, { password: "Required" });
          }
          return errors;
        }}
        onSubmit={(values: PostReviewData, { setSubmitting }) => {
          setTimeout(() => {
            addReview(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="title" placeholder="제목"/>
            <ErrorMessage name="title" component="div" />

            <Field type="text" name="author" placeholder="작성자"/>
            <ErrorMessage name="author" component="div" />

            <Field as="select" name="categoryId">
              {categories.map(item => (
                <option value={item.id} key={item.id}> {item.name} </option>
              ))}
            </Field>
            <ErrorMessage name="categoryId" component="div" />

            <Field as="select" name="hasSpoiler">
                <option value="false">스포일러 없음</option>
                <option value="true">스포일러 있음</option>
            </Field>

            <Field type="textarea" name="content" placeholder="내용"/>
            <ErrorMessage name="content" component="div" />

            <Field type="text" name="imgUrl" placeholder="이미지 주소를 넣어주세요"/>

            <Field type="password" name="password"/>
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

export { ReviewForm };