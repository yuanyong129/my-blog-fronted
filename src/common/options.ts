import { INavOptions } from '@/types'
const navOptions :INavOptions[] = [
  {
    href: '/',
    children: '首页',
    en: 'Home'
  },
  {
    href: '/blog',
    children: '我的博客',
    en: 'My Blog'
  },
  {
    href: '/novel',
    children: '我的小说',
    en: 'My Novel'
  },
  {
    href: '/origami',
    children: '我的折纸',
    en: 'My Origami'
  },
  {
    href: '/about',
    children: '关于',
    en: 'About'
  }

]

const useOptions = () => {
  return {
    navOptions
  }
}

export {
  useOptions
}