/*
 * @Author: ShaXin
 * @Date: 2020-07-16 13:52:25
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-07-16 14:01:09
 */
/**
* 参数说明：
* content： string 编辑器内容
* tips: 验证表单提示
* width: 表单项标题的宽度
* height: 框高度
* articleFlag: 用于数据回填时的标志 父组件在初始化获取到文本内容要传给编辑器作为初始内容时 置为true 当编辑器内容改变 父组件要接收新内容时 在getContent函数里置为false
* getContent(content, tips)： 接收数据用的函数
*/

import React from 'react';
// import bind from 'react-autobind';
import 'braft-editor/dist/index.css';
import BraftEditor from 'braft-editor';
import { ContentUtils } from 'braft-utils';
import { ImageUtils } from 'braft-finder';
// import { upload } from 'services/fileManage';
import { Upload, Icon } from 'antd';
import cns from 'classnames';
import style from './editor.scss';

export default class UploadDemo extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      editorState: {},
      content: '',
      tips: false
    };
    // bind(this);
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.articleFlag && nextProps.tips === prevState.tips) {
      return false;
    }
    if (nextProps.articleFlag) {
      return {
        content: nextProps.content,
        editorState: BraftEditor.createEditorState(nextProps.content),   // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorStat
        tips: nextProps.tips
      };
    }
    if (nextProps.tips !== prevState.tips && !nextProps.content) {
      return {
        tips: nextProps.tips
      };
    }
  }
  handleChange(v) {
    let content = v.toHTML();  //调用editorState.toHTML()来获取HTML格式的内容
    console.log('v', v, 'content', content);
    this.setState({
      editorState: v,
      content,
      tips: v.isEmpty() ? true : false
    }, () => {
      this.props.getContent(this.state.content, this.state.tips);
    }
    );
  }

  uploadHandler = (param) => {
    if (!param.file) {
      return false;
    }
    let url = '';
    console.log(param)
    // upload(param).then(
    //   res => {
    //     if (res.success) {
    //       url = res.data.url;
    //       this.setState({
    //         editorState: ContentUtils.insertMedias(this.state.editorState, [{
    //           type: 'IMAGE',
    //           url: `https://ynszgxzcyy.bbdservice.com/api/v1.0/file/download?p=${url}`
    //         }])
    //       });
    //     }
    //   }
    // );

  }

  render() {
    const controls = ['undo', 'redo', 'separator', 'font-family', 'font-size', 'headings', 'separator',
      'text-color', 'bold', 'italic', 'underline', 'separator',
      'superscript', 'subscript', 'remove-styles', 'separator',
      'text-indent', 'text-align', 'separator',
      'list-ul', 'list-ol', 'separator'
    ];
    const extendControls = [
      {
        key: 'antd-uploader',
        type: 'component',
        component: (
          <Upload
            accept="image/*"
            showUploadList={false}
            customRequest={this.uploadHandler}
          >
            {/* 这里的按钮最好加上type="button"，以避免在表单容器中触发表单提交，用Antd的Button组件则无需如此 */}
            <button type="button" className="control-item button upload-button" data-title="插入图片">
              <Icon type="picture" theme="filled" />
            </button>
          </Upload>
        )
      }
    ];
    return (
      <div className={cns(style.formItem, 'formItem')}>
        <label className={style.labelRequired} style={{ width: this.props.width }}>{this.props.title}：</label>
        <div className={style.myEditor + `   ${this.props.boxWidth}`} >
          <BraftEditor
            value={this.state.editorState}
            onChange={this.handleChange}
            controls={controls}
            extendControls={extendControls}
            readOnly={!this.props.verified}
            contentStyle={{ height: this.props.height }}
          />
        </div>
        <p className={style.tips} style={{ marginLeft: this.props.width }}>{this.state.tips ? '请输入正文内容' : ''}</p>
      </div>
    );
  }
}
