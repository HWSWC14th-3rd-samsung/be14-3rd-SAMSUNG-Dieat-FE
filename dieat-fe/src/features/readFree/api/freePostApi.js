// API 호출 관련 함수
export async function fetchPosts() {
    const res = await fetch('http://localhost:3000/freeposts');
    if (!res.ok) {
        throw new Error('게시글 데이터를 불러오지 못했습니다.');
    }
    return await res.json();
}