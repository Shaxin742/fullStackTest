// 导出页面为PDF格式
import html2canvas from 'html2canvas'
import JSPDF from 'jspdf'
export default {
  install(Vue, options) {
    Vue.prototype.ExportSavePdf = function (idStr, title, currentTime) {
      return new Promise(function (resolve, reject) {
        html2canvas(document.querySelector('#' + idStr), {
          logging: false,
          allowTaint: true,
          // 保证跨域图片的显示
          useCORS: true
        }).then(function (canvas) {
          console.log(canvas)
          const contentWidth = canvas.width
          const contentHeight = canvas.height
          const pageHeight = (contentWidth / 592.28) * 841.89
          let leftHeight = contentHeight
          let position = 0
          const imgWidth = 595.28
          const imgHeight = (592.28 / contentWidth) * contentHeight
          const pageData = canvas.toDataURL('image/png', 1.0)

          let a = document.createElement("a");// 创建a标签
          if ('download' in a) {
            a.download = '111';// 设置下载文件的文件名
          }
          (document.body || document.documentElement).appendChild(a);
          a.href = pageData;// downUrl为后台返回的下载地址
          a.target = '_parent';
          a.click();// 设置点击事件
          a.remove(); // 移除a标签

          const PDF = new JSPDF('', 'pt', 'a4')
          if (leftHeight < pageHeight) {
            PDF.addImage(pageData, 'PNG', 0, 0, imgWidth, imgHeight)
          } else {
            while (leftHeight > 0) {
              PDF.addImage(pageData, 'PNG', 0, position, imgWidth, imgHeight)
              leftHeight -= pageHeight
              position -= 841.89
              if (leftHeight > 0) {
                PDF.addPage()
              }
            }
          }
          PDF.save(title + currentTime)
          resolve()
        })
      })
    }
  }
}
