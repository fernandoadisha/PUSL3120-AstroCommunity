const BASE_URL = 'http://localhost:9000'

export const ITEMS_URL = BASE_URL + '/shopitem/api/items';
export const ITEMS_TAGS_URL = ITEMS_URL + '/tags';
export const ITEMS_BY_SEARCH_URL = ITEMS_URL + '/search/';
export const ITEMS_BY_TAG_URL = ITEMS_URL + '/tags/';
export const ITEMS_BY_ID = ITEMS_URL + '/';

export const USER_LOGIN_URL = BASE_URL + '/user/api/login';
export const USER_REGISTER_URL = BASE_URL + '/user/seed';

export const ORDERS_URL = BASE_URL + '/order';
export const ORDERS_CREATE_URL = ORDERS_URL + '/create';
export const ORDERS_NEW_FOR_CURRENT_USER_URL = ORDERS_URL + '/newOrderForCurrentUser';
export const ORDERS_PAY_URL = ORDERS_URL + '/pay';
