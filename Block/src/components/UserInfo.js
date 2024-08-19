// userInfoAPI.js
export async function fetchUserInfo(token) {
    const response = await fetch('http://example.com/mypage', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch user details');
    }
    return await response.json();
  }
  