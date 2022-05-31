export default [
  {
    url: '/api/getList',
    method: 'get',
    response: ({ query }) => {
      const list = [
        {
          code: 100200,
          msg: '参数错误'
        },
        {
          code: 200,
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        {
          code: 200,
          data: [1, 2, 3, 4, 5]
        }
      ]

      switch (query.type) {
        case '1':
          return list[1]
        case '2':
          return list[2]

        default:
          return list[0]
      }
    }
  }
]
