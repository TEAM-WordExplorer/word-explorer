import axios from "axios";

// useEffect(() => {
//   const fetchCsrfToken = async () => {
//     try {
//       const response = await axios.get('csrf 가져올 url');
//       setCsrfToken(response.data.csrfToken);
//     } catch (error) {
//       console.error('CSRF 토큰을 가져오는 중 에러 발생:', error);
//     }
//   };

//   fetchCsrfToken();
// }, []);

export const getCsrfToken = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data.csrfToken;
  } catch (error) {
    console.error('Csrf Token 가져오기 실패:', error);
    return undefined;
  }
};

export const postApi = async(csrfToken: string, url: string, data: any) => {
  try {
    const response = await axios.post(url, data,
      {
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken
        }
      }
    )
    return response.data

  } catch (error) {
    return console.log("post 요청 실패:", error);
  }
}