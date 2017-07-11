import data from './data.json'
import Mock from 'mockjs'

Mock.mock('/api/home', {error: 0, data: data.home})
Mock.mock('/api/all', {error: 0, data: data.all})
