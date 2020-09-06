import axios from 'axios';
import { DummyItem } from '../containers/dummy/dummy.types';


const api_url = "http://5826ed963900d612000138bd.mockapi.io";

export async function fetchItems() {
  const response = await axios.get<DummyItem[]>(`${api_url}/items`);

  if(response.data)
  {
    return response.data;
  }
  else
  {
    throw new Error(response.statusText);
  }
}