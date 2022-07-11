import axios from 'axios';

async function get(apiUrl: string) {
  try {
    const result = await axios.get(apiUrl);

    return result;
  } catch (error: any) {
    throw new Error(error);
  }
}

async function post<T>(apiUrl: string, data: T) {
  try {
    const result = await axios.post(apiUrl, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return result;
  } catch (error: any) {
    throw new Error(error);
  }
}

async function patch<T>(apiUrl: string, data: T) {
  try {
    const result = await axios.patch(apiUrl, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return result;
  } catch (error: any) {
    throw new Error(error);
  }
}

// 삭제 요청 할 데이터를 객체 형식으로 할당

async function del<T>(apiUrl: string, data: T) {
  try {
    const result = await axios.delete(apiUrl, {
      data,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return result;
  } catch (error: any) {
    throw new Error(error);
  }
}

// 아래처럼 export하면, import * as Api 로 할 시 Api.get, Api.post 등으로 쓸 수 있음.
export { get, post, patch, del as delete };
