export default [
  {
    url: '/api/getList',
    method: 'get',
    status: '200',
    response: () => {
      return {
        code: 200,
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
    }
  }
]
