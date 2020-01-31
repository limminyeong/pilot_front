
const BASE_URL = "http://127.0.0.1:4000";

export type ReviewData = {
  title: string,
  author: string,
  category_id: number,
  has_spoiler: boolean,
  img_url: string,
  content: string,
  id: number,
  comments: CommentData[],
  created_at: string,
  updated_at: string,
  password: string
}

export type ReviewList = {
  reviews: ReviewData[],
  total: number,
}

export type CommentData = {
  review_id: number,
  id: number,
  commenter: string,
  content: string,
  password: string,
}

//GET
async function getReviews(page: number, categoryId: number): Promise<ReviewList> {
  if (categoryId === 0) {
    const res = await fetch(`${BASE_URL}/reviews?page=${page}`);
    const data = await res.json();
    return {
      reviews: data.reviews,
      total: data.review_count.total,
    };
  }
  const res = await fetch(`${BASE_URL}/reviews?page=${page}&category_id=${categoryId}`);
  const data = await res.json();
  return {
    reviews: data.reviews,
    total: data.review_count.total,
  };
}

async function getReview(id: number): Promise<ReviewData> {
  const res = await fetch(`${BASE_URL}/reviews/${id}`);
  const data = await res.json();
  return {
    title: data.title,
    author: data.author,
    category_id: data.category_id,
    has_spoiler: data.has_spoiler,
    img_url: data.img_url,
    content: data.content,
    id: data.id,
    comments: data.comments,
    created_at: data.created_at,
    updated_at: data.updated_at,
    password: data.password
  }
}

//POST
export type PostCommentData = {
  commenter: string,
  content: string,
  password: string,
}

async function postComment(id: number, commmentValue: { commenter: string; content: string; password: string; }) {
  const body = new FormData();
  body.append("commenter", commmentValue.commenter);
  body.append("content", commmentValue.content);
  body.append("password", commmentValue.password);

  const res = await fetch(`${BASE_URL}/reviews/${id}/comments`, {
    body,
    method: "POST",
  });

  return await res.json();
}

export type PostReviewData = {
  title: string,
  author: string,
  categoryId: number,
  hasSpoiler: boolean,
  imgUrl: string,
  content: string,
  password: string,
}

async function postReview(reviewValue: PostReviewData) {
  const body = new FormData();
  body.append("title", reviewValue.title);
  body.append("author", reviewValue.author);
  body.append("category_id", String(reviewValue.categoryId));
  body.append("has_spoiler", JSON.stringify(reviewValue.hasSpoiler));
  body.append("img_url", reviewValue.imgUrl);
  body.append("content", reviewValue.content);
  body.append("password", reviewValue.password);

  const res = await fetch(`${BASE_URL}/reviews`, {
    body,
    method: "POST",
  })
  return await res.json();
}

//PUT
async function updateReview(reviewValue: PostReviewData, id: number) {
  const body = new FormData();
  body.append("id", JSON.stringify(id));
  body.append("title", reviewValue.title);
  body.append("author", reviewValue.author);
  body.append("category_id", String(reviewValue.categoryId));
  body.append("has_spoiler", JSON.stringify(reviewValue.hasSpoiler));
  body.append("img_url", reviewValue.imgUrl);
  body.append("content", reviewValue.content);
  body.append("password", reviewValue.password);

  const res = await fetch(`${BASE_URL}/reviews/${id}`, {
    body,
    method: "PUT",
  })
  return await res.json();
}

//DELETE
async function deleteReview(value: { password: string }, id: number) {
  const body = new FormData();
  body.append("password", value.password);
  const res = await fetch(`${BASE_URL}/reviews/${id}`, {
    body,
    method: "DELETE",
  })
  return await res.json();
}

async function deleteComment(value: { password: string }, reviewId: number, id: number) {
  const body = new FormData();
  body.append("password", value.password);
  const res = await fetch(`${BASE_URL}/reviews/${reviewId}/comments/${id}`, {
    body,
    method: "DELETE",
  })
  if (res.status !== 200) {
    return;
  }
  return res;
}

export default {
  getReviews,
  getReview,
  postComment,
  postReview,
  updateReview,
  deleteReview,
  deleteComment
};