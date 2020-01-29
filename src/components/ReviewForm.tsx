import React from 'react';
import './ReviewForm.scss';

import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik';
import { PostReviewData } from '../apiclient'

const ReviewForm = (props: { handleReview: (reviewValue: PostReviewData) => Promise<void> }) => {
  const { handleReview } = props;
  const initialValues: PostReviewData = { title: "", author: "", password: "", content: "", imgUrl: "", categoryId: 1, hasSpoiler: false }
  const categories: { id: number, name: string }[] = [
    {
      id: 1,
      name: "영화"
    }, {
      id: 2,
      name: "드라마"
    }, {
      id: 3,
      name: "다큐멘터리"
    }, {
      id: 4,
      name: "애니메이션"
    }, {
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
            Object.assign(errors, { title: 'Required' });
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
          handleReview(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="ReviewForm__field">
              <Field type="text" name="title" placeholder="제목" className="ReviewForm__title"/>
              <ErrorMessage name="title" component="span" className="error"  />
            </div>
            <div className="ReviewForm__field">
              <Field type="text" name="author" placeholder="작성자"  className="ReviewForm__author"/>
              <ErrorMessage name="author" component="span" className="error" />
            </div>
            <div className="ReviewForm__field">
              <Field as="select" name="categoryId">
                {categories.map(item => (
                  <option value={item.id} key={item.id}> {item.name} </option>
                ))}
              </Field>
              <ErrorMessage name="categoryId" component="span" className="error" />
              <Field as="select" name="hasSpoiler">
                <option value="false">스포일러 없음</option>
                <option value="true">스포일러 있음</option>
              </Field>
            </div>
            <div className="ReviewForm__field">
              <Field as="textarea" name="content" rows={15} placeholder="내용"  className="ReviewForm__content"/>
              <ErrorMessage name="content" component="span" className="error" />
            </div>
            <div className="ReviewForm__field">
              <Field type="text" name="imgUrl" placeholder="이미지 주소를 넣어주세요"  className="ReviewForm__imgUrl"/>
            </div>
            <div className="ReviewForm__field">
              <Field type="password" name="password" placeholder="비밀번호"  className="ReviewForm__password"/>
              <ErrorMessage name="password" component="span" className="error" />
            </div>
            <button type="submit" disabled={isSubmitting} className="ReviewForm__submit">
              게시
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export { ReviewForm };