import { http } from '@/utils'
import { IPost, IParam } from '@/types'

export const getPostsApi = (params: any) => 
  http<{
    list: IPost[],
    total: number,
    totalAll: number
  }>({
    url: 'post',
    method: 'GET',
    params
  }) // 获取帖子

export const getParamsApi = (params: any) => 
  http<{
    list: IParam[],
    total: number
  }>({ 
    url:'params',
    method: 'GET',
    params
  }) // 获取参数
