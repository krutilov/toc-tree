import { ApiResponse } from '../types';

// Initial state
export const initialState: ApiResponse = {
  entities: {
    pages: {},
    anchors: {},
  },
  topLevelIds: []
}

// Mock API
export const getData = () =>
  new Promise<ApiResponse>((resolve) => {
    setTimeout(() => {
      const data = fetch('mockData.json').then(res => res.json())
      resolve(data);
    }, 700);
  });