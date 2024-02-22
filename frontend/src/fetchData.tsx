import { IPost } from "./models";

type CallBackType = (jsonData?: IPost[]) => void;

interface FetchParamsType {
  method: string,
  headers: {},
  body?: string
}

export const fetchData = (method: string, url: string, jsonData?: IPost, callback?: CallBackType) => {
  let params: FetchParamsType = {
    method: method,
    headers: {
      Accept: 'application/json'
    }
  };

  if (method === 'POST' || method === 'PUT') {
    params.body = jsonData ? JSON.stringify(jsonData) : '';

    fetch(url, params)
      .catch(() => {
        console.log('err:');
      });

    if (callback) 
      callback();
  } else if (method === 'GET') {
    fetch(url, params)
      .then((res => res.json()))
      .then(json => {
        if (callback) 
          callback(json);
      })
      .catch(() => {
        console.log('error');
      })
  } else if (method === 'DELETE') {
    params.body = jsonData ? JSON.stringify(jsonData) : '';
    fetch(url, params)
    .then((res => res.text()))
    .then(_text => {
      if (callback) 
        callback([]);
    })
    .catch(() => {
      console.log('error');
    })
  }  
}