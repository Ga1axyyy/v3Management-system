import Mock from 'mockjs'

import homeApi from './mockData/home'
import userApi from './mockData/user'
import menuApi from './mockData/permisson'
// 拦截请求  第一个参数，是拦截的地址（这种是正则写法） 第二个是请求的方法 第三个是处理请求的方法
Mock.mock(/api\/home\/getTableData/, "get",homeApi.getTableData)
Mock.mock(/api\/home\/getCountData/, "get",homeApi.getCountData)
Mock.mock(/api\/home\/getChartData/, "get",homeApi.getChartData)
Mock.mock(/api\/user\/getUserData/, "get",userApi.getUserList)
Mock.mock(/api\/user\/deleteUser/, "delete",userApi.deleteUser)
Mock.mock(/api\/user\/addUser/, "post",userApi.createUser)
Mock.mock(/api\/user\/editUser/, "post",userApi.updateUser)
Mock.mock(/api\/permission\/getMenu/, "post",menuApi.getMenu)