// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addInterfaceInfo POST /api/userinterfaceInfo/add */
export async function addInterfaceInfoUsingPost1(
  body: API.UserInterfaceInfoAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponselong>('/api/userinterfaceInfo/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteInterfaceInfo POST /api/userinterfaceInfo/delete */
export async function deleteInterfaceInfoUsingPost1(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/userinterfaceInfo/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getInterfaceInfoById GET /api/userinterfaceInfo/get */
export async function getInterfaceInfoByIdUsingGet1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getInterfaceInfoByIdUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUserInterfaceInfo>('/api/userinterfaceInfo/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listInterfaceInfo GET /api/userinterfaceInfo/list */
export async function listInterfaceInfoUsingGet1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listInterfaceInfoUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListUserInterfaceInfo>('/api/userinterfaceInfo/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listInterfaceInfoByPage GET /api/userinterfaceInfo/list/page */
export async function listInterfaceInfoByPageUsingGet1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listInterfaceInfoByPageUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageUserInterfaceInfo>('/api/userinterfaceInfo/list/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** updateInterfaceInfo POST /api/userinterfaceInfo/update */
export async function updateInterfaceInfoUsingPost1(
  body: API.UserInterfaceInfoUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/userinterfaceInfo/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
