const BASE_URL = "http://127.0.0.1:3000";

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
}

export type ReviewList = {
  reviews: ReviewData[],
  total: number,
}

export type CommentData = {
  id: number,
  commenter: string,
  content: string,
  password: string,
}

async function getReviews(page: number): Promise<ReviewList> {
  const res = await fetch(`${BASE_URL}/reviews?page=${page}`);
  const data = await res.json();
  return {
    reviews: data.reviews,
    total: data.review_count.total,
  };
}

async function getReview(id:number): Promise<ReviewData> {
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
    updated_at: data.updated_at
  }
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

export default { 
  getReviews,
  getReview,
  postComment,
};