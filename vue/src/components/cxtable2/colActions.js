export function authActionRender(opers) {
  return function(h, { record }) {
    return h(
      'div',
      {},
      opers.map((item) => {
        return h(
          'authorize',
          {
            props: {
              code: item.code
            }
          },
          [
            h(
              'el-button',
              {
                props: {
                  type: 'text',
                  size: 'small'
                },
                on: {
                  click: () => item.onClick(record)
                }
              },
              item.text
            )
          ]
        )
      })
    )
  }
}

export function actionRender(opers) {
  const length = opers.length
  return function(h, { record }) {
    return h(
      'div',
      {},
      opers.map((item, index) => {
        if (!item.hidden || !item.hidden(record)) {
          const btn = h(
            'el-button',
            {
              props: {
                type: 'text',
                size: 'small'
              },
              on: {
                click: () => item.onClick(record)
              }
            },
            item.text
          )
          const span = h(
            'span',
            {
              style: {
                padding: '0 4px'
              }
            },
            '|'
          )
          if (index + 1 > 0 && index + 1 < length) {
            return [btn, span]
          } else {
            return btn
          }
        }
      })
    )
  }
}
