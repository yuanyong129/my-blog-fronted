import { FC, Component, ReactNode } from 'react'

// 导航配置
export interface INavOptions {
  href: string
  children: ReactNode
  en: string
  component?: Component | FC
}

export interface IPost {
  _id?: string
  title: string
  author: string
  content: string
  type: IParam
  tags: IParam[]
  createdAt: string
  updatedAt: string
}

export interface IParam {
  _id?: string
  typeId: number
  title: string
  remark: string
  createdAt: string
  updatedAt: string
}
