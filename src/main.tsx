import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import '@/styles/index.scss'
import Layout from '@/layout'

ReactDOM.render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>,
  document.getElementById('root')
)
