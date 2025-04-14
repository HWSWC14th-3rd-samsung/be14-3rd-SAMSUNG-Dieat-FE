const BASE_URL = 'http://localhost:3000'

export async function fetchPosts() {
  const res = await fetch(`${BASE_URL}/posts`)
  if (!res.ok) throw new Error('게시글 불러오기 실패')
  const data = await res.json()
  return data // 또는 return data (구조에 따라 확인)
}
