import axios from "axios";

export const getCsrfToken = async () => {
  try {
    const response = await axios.get('url');
    return response.data.csrfToken;
  } catch (error) {
    console.error('Error while fetching CSRF token:', error);
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