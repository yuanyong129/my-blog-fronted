export { default as variables } from '@/styles/variables.module.scss'

let url = ''

if (import.meta.env.MODE === 'production') {
  // 生产环境配置
  url = 'http://localhost:3080/blog/'
} else {
  // 开发环境配置
  url = 'http://localhost:3080/blog/'
}

export {
  url
}