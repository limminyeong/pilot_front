const BASE_URL = "http://127.0.0.1:3000";

export type ReviewData = {
  title: string,
  author: string,
  categoryId: number,
  hasSpoiler: boolean,
  imgUrl: string,
  id: number,
  comments: any[],
  createdAt: string,
  updatedAt: string,
}

export type ReviewList = ReviewData[]

async function getReviews(page: number): Promise<ReviewList> {
  const res = await fetch(`${BASE_URL}/reviews?page=${page}`);
  if (res.status !== 200) {
    throw Error("sth wrong")
  }
  const data = await res.json();
  return [{
    id: data.id,
    title: data.title,
    author: data.author,
    categoryId: data.category_id,
    imgUrl: data.img_url,
    hasSpoiler: data.has_spoiler,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
    comments: data.comments
  }]
}


export { getReviews };