import request from 'umi-request';

export async function getBlotter() {
  return request('/api/get_blotter');
}

export async function quotePrice() {
  return request('/api/quote_price');
}

export async function fillOrder() {
  return request('/api/fill_order');
}
