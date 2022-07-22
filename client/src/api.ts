import axios from 'axios';

async function get(apiUrl: string) {
  const result = await axios.get(`${process.env.REACT_APP_BASE_URL}${apiUrl}`, {
    withCredentials: true,
  });

  if (!result) {
    throw new Error('ERROR');
  }

  return result;
}

async function post<T>(apiUrl: string, data: T) {
  const result = await axios.post(
    `${process.env.REACT_APP_BASE_URL}${apiUrl}`,
    data,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    },
  );
  return result;
}

async function patch<T>(apiUrl: string, data: T) {
  const result = await axios.patch(
    `${process.env.REACT_APP_BASE_URL}${apiUrl}`,
    data,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    },
  );
  return result;
}

// 삭제 요청 할 데이터를 객체 형식으로 할당

async function del(apiUrl: string) {
  const result = await axios.delete(
    `${process.env.REACT_APP_BASE_URL}${apiUrl}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    },
  );
  return result;
}
async function uploadFile<T>(apiUrl: string, data: T) {
  const result = await axios.patch(
    `${process.env.REACT_APP_BASE_URL}${apiUrl}`,
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    },
  );
  return result;
}

// 아래처럼 export하면, import * as Api 로 할 시 Api.get, Api.post 등으로 쓸 수 있음.
export { get, post, patch, del as delete, uploadFile };
