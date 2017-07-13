import data from './data.json'
import Mock from 'mockjs'

Mock.mock('/api/home',
  {
    code: 0,
    data: data.home
  })
Mock.mock('/api/all',
  {
    code: 0,
    data: data.all
  })
Mock.mock('/api/stroll',
  {
    code: 0,
    data: data.stroll
  })
