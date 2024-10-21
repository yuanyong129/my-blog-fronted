import { http } from '@/utils'
import { Post, Param } from '@/types'

export const getPostsApi = (params: any) => 
  http<{
    list: Post[],
    total: number,
    totalAll: number
  }>({
    url: 'post',
    method: 'GET',
    params
  }) // 获取帖子

export const getParamsApi = (params: any) => 
  http<{
    list: Param[],
    total: number
  }>({ 
    url:'params',
    method: 'GET',
    params
  }) // 获取参数
