import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

async function get(apiUrl: string) {
  try {
    const result = await axios.get(`${BASE_URL}${apiUrl}`, {
      withCredentials: true,
    });

    if (!result) {
      throw new Error('ERROR');
    }

    return result;
  } catch (error: any) {
    console.error(error);
  }
}

async function post<T>(apiUrl: string, data: T) {
  try {
    const result = await axios.post(`${BASE_URL}${apiUrl}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    return result;
  } catch (error: any) {
    throw new Error(error);
  }
}

async function patch<T>(apiUrl: string, data: T) {
  try {
    const result = await axios.patch(`${BASE_URL}${apiUrl}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    return result;
  } catch (error: any) {
    throw new Error(error);
  }
}

// 삭제 요청 할 데이터를 객체 형식으로 할당

async function del(apiUrl: string) {
  try {
    const result = await axios.delete(`${BASE_URL}${apiUrl}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    return result;
  } catch (error: any) {
    throw new Error(error);
  }
}
async function uploadFile<T>(apiUrl: string, data: T) {
  try {
    const result = await axios.patch(`${BASE_URL}${apiUrl}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });
    return result;
  } catch (error: any) {
    throw new Error(error);
  }
}

// 아래처럼 export하면, import * as Api 로 할 시 Api.get, Api.post 등으로 쓸 수 있음.
export { get, post, patch, del as delete, uploadFile };
