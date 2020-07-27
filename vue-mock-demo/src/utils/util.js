export function currencyFormatter(currency, precision = 2) {
  if (currency !== undefined && currency !== null) {
    currency = currency.toString().replace(/\$|,/g, '')
  }
  // 检查传入数值为数值类型
  if (isNaN(currency) || currency === '' || currency === null) {
    return ''
  }

  // 获取符号(正/负数)
  const sign = currency * 1 === (currency = Math.abs(currency))

  currency = Math.floor(currency * Math.pow(10, precision) + 0.50000000001) // 把指定的小数位先转换成整数.多余的小数位四舍五入
  let cents = currency % Math.pow(10, precision) // 求出小数位数值
  currency = Math.floor(currency / Math.pow(10, precision)).toString() // 求出整数位数值

  if (precision !== 0) {
    cents = cents.toString() // 把小数位转换成字符串,以便求小数位长度

    // 补足小数位到指定的位数
    while (cents.length < precision) {
      cents = '0' + cents
    }
    cents = '.' + cents
  } else {
    cents = ''
  }

  if (currency) {
    currency = thousandthFormatter(currency)
  }
  return (sign ? '' : '-') + currency + cents
}

export function thousandthFormatter(value) {
  let currency = value + ''
  let result = 0
  if (currency) {
    // 对整数部分进行千分位格式化.
    for (let i = 0; i < Math.floor((currency.length - (1 + i)) / 3); i++) {
      currency =
        currency.substring(0, currency.length - (4 * i + 3)) +
        ',' +
        currency.substring(currency.length - (4 * i + 3))
    }
    result = currency
  }
  return result
}

export function arrayFind(arr, key, value) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i][key] === value) {
      return arr[i]
    }
  }
}

export function uniqueArray(arr, key) {
  const uni = []
  arr.forEach((item) => {
    if (!arrayFind(uni, key, item[key])) {
      uni.push(item)
    }
  })
  return uni
}

export function arrayFindDeep(arr, key, value) {
  for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i]
    if (arr[i][key] === value) {
      return arr[i]
    } else if (item.children) {
      const menu = arrayFindDeep(item.children, key, value)
      if (menu) {
        return menu
      }
    }
  }
}

// echarts绘图有些情况下rgba带有透明度不识别 换算成十六进制
export function hexify(color) {
  if (/rgba/.test(color)) {
    const values = color
      .replace(/rgba?\(/, '')
      .replace(/\)/, '')
      .replace(/[\s+]/g, '')
      .split(',')
    const a = parseFloat(values[3] || 1)
    const r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255)
    const g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255)
    const b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255)
    return (
      '#' +
      ('0' + r.toString(16)).slice(-2) +
      ('0' + g.toString(16)).slice(-2) +
      ('0' + b.toString(16)).slice(-2)
    )
  } else {
    return color
  }
}

// 查询树形节点的父节点
export function findParentNode(tree, node, prop) {
  let theMan = null
  for (let i = 0; i < tree.length; i++) {
    const item = tree[i]
    if (item.children) {
      if (
        item.children.some((child) =>
          prop ? child[prop] === node[prop] : child === node
        )
      ) {
        theMan = item
        break
      } else {
        theMan = findParentNode(item.children, node, prop)
        if (theMan) {
          break
        }
      }
    }
  }

  return theMan
}

// 除去请求参数里面的属性值为空的键值对
export function removeNullInObject(config) {
  if (config instanceof Object && !Array.isArray(config)) {
    for (const key in config) {
      if (Array.isArray(config[key]) && config[key].length === 0) {
        delete config[key]
      } else if (!config[key] && config[key] !== 0) {
        delete config[key]
      }
    }
  }
  return config
}

// 将对象转换成form-data形式
export function obj2FormData(obj, form, namespace) {
  const formData = form || new FormData()
  const keys = Object.keys(obj)
  for (const key of keys.values()) {
    const val = obj[key]
    if (val) {
      // 对象嵌套
      const formKey = namespace ? `${namespace}[${key}]` : key

      if (val instanceof Array) {
        //  数组内容
        if (val[0] && val[0] instanceof File) {
          // 文件上传
          for (const f of val.values()) {
            formData.append(formKey, f)
          }
        } else {
          formData.append(formKey, val.join(','))
        }
      } else if (typeof val === 'object') {
        if (val instanceof File) {
          formData.append(formKey, val)
        } else {
          // 递归调用
          obj2FormData(val, formData, formKey)
        }
      } else {
        // 文本内容(不含对象)
        formData.append(formKey, val)
      }
    }
  }

  return formData
}

export function obj3FormData(obj, form, namespace, isArray) {
  const formData = form || new FormData()
  const keys = Object.keys(obj)
  for (const key of keys.values()) {
    const val = obj[key]
    if (!val && val !== false) {
      continue
    }
    let formKey
    if (isArray) {
      formKey = namespace ? `${namespace}[${key}]` : key
    } else {
      formKey = namespace ? `${namespace}.${key}` : key
    }
    if (val instanceof File) {
      formData.append(formKey, val)
    } else if (val instanceof Array) {
      if (val[0] instanceof File) {
        formKey = namespace ? `${namespace}` : key
        // 文件上传
        for (const f of val.values()) {
          formData.append(formKey, f)
        }
      } else {
        obj3FormData(val, formData, formKey, true)
      }
    } else if (val instanceof Object) {
      obj3FormData(val, formData, formKey, false)
    } else {
      // 文本内容(不含对象)
      formData.append(formKey, val)
    }
  }
  return formData
}

export function getQueryStringArgs() {
  const qs = location.search.length > 0 ? location.search.substring(1) : ''
  const args = {}
  const items = qs.length ? qs.split('&') : []
  let item = null
  let name = null
  let value = null

  let i = 0
  const len = items.length
  for (i = 0; i < len; i++) {
    item = items[i].split('=')
    name = decodeURIComponent(item[0])
    value = decodeURIComponent(item[1])

    if (name.length) {
      args[name] = value
    }
  }

  return args
}

/**
 * 在一定时间内执行最后一次操作
 * 返回一个代理函数，该函数会在500毫秒之后执行实际函数
 * 当在500ms内再次调用该函数时，取消上一次的调用
 */
export function lastCallWapper(interval = 500) {
  let timer = null
  return function(fun) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(fun, interval)
  }
}

export function delEmptyAttr(params) {
  for (const attr in params) {
    if (
      params[attr] === null ||
      params[attr] === '' ||
      params[attr] === undefined
    ) {
      delete params[attr]
    }
  }
}

export function arrayFindDeepWithType(arr, key, value) {
  for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i]
    if (item.children && item.children.length) {
      const menu = arrayFindDeepWithType(item.children, key, value)
      if (menu) {
        return menu
      }
    } else if (arr[i][key] === value) {
      return arr[i]
    }
  }
}

export function uuid() {
  const s = []
  const hexDigits = '0123456789abcdefghijklmnopqrstuvwxyz'
  s[0] = 'z'
  for (let i = 1; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = ''

  return s.join('')
}

export function quickSort(array) {
  const sort = (arr, left = 0, right = arr.length - 1) => {
    if (left >= right) { // 如果左边的索引大于等于右边的索引说明整理完毕
      return
    }
    let i = left
    let j = right
    const baseVal = arr[j] // 取无序数组最后一个数为基准值
    while (i < j) { // 把所有比基准值小的数放在左边大的数放在右边
      while (i < j && arr[i] <= baseVal) { // 找到一个比基准值大的数交换
        i++
      }
      arr[j] = arr[i] // 将较大的值放在右边如果没有比基准值大的数就是将自己赋值给自己（i 等于 j）
      while (j > i && arr[j] >= baseVal) { // 找到一个比基准值小的数交换
        j--
      }
      arr[i] = arr[j] // 将较小的值放在左边如果没有找到比基准值小的数就是将自己赋值给自己（i 等于 j）
    }
    arr[j] = baseVal // 将基准值放至中央位置完成一次循环（这时候 j 等于 i ）
    sort(arr, left, j - 1) // 将左边的无序数组重复上面的操作
    sort(arr, j + 1, right) // 将右边的无序数组重复上面的操作
  }
  const newArr = array.concat() // 为了保证这个函数是纯函数拷贝一次数组
  sort(newArr)
  return newArr
}
