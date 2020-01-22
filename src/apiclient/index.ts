const BASE_URL = "http://127.0.0.1:3000";

export type ReviewData = {
  title: string,
  author: string,
  category_id: number,
  has_spoiler: boolean,
  img_url: string,
  id: number,
  comments: any[],
  created_at: string,
  updated_at: string,
}

export type ReviewList = ReviewData[]

async function getReviews(page: number): Promise<ReviewList> {
  const res = await fetch(`${BASE_URL}/reviews?page=${page}`);
  if (res.status !== 200) {
    throw Error();
  }
  const data = await res.json();
  return data;
}


export default { getReviews };