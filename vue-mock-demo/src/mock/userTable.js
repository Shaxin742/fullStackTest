/*
 * @Author: ShaXin
 * @Date: 2020-06-05 16:58:56
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-05 18:07:28
 */

export default {
  getTableData: option => {
    return {
      code: 200,
      message: 'success',
      data: {
        tableData: [{ date: '2010-02-02', name: '阿毛', province: '辽宁', city: '划水', address: '宽甸东泰', zip: 100833 }],
        total: 10
      }
    }
  }
}
