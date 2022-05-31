export default [
  {
    url: '/api/getList',
    method: 'get',
    response: ({ query }) => {
      const list = [
        {
          code: 200,
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        {
          code: 200,
          data: [1, 2, 3, 4, 5]
        }
      ]

      if (query.type === '1') {
        return list[0]
      } else {
        return list[1]
      }
    }
  }
]
