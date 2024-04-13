import {
  ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import '@umijs/max';
import { Modal } from 'antd';
import React from 'react';


export type Props = {
  columns:ProColumns<API.InterfaceInfo>[];
  //用户点取消按钮时触发，应传递什么信息
  onCancel: () => void;
  //用户提交表单时，将用户输入的数据作为参数传递给后台
  onSubmit: (values:API.InterfaceInfo) => Promise<void>;
  //模态框是否可见
  visible: boolean;
};
const CreateModal: React.FC<Props> = (props) => {
  //使用解构赋值获取props中的属性
  const{visible,columns,onCancel,onSubmit }=props;

  return (
    //创建一个Modal组件,通过visible届性控制其显示或隐藏,footer设置为nu11把表单项的’取消‘和’确认‘按钮去掉
    <Modal visible={visible} footer={null} onCancel={()=>onCancel?.()}>
      {/*创建一个ProTable组件,设定它为表单类型,通过columns属性设置表格的列，提交表单时调用onSubmit函数*/}
    <ProTable
      type="form"
      columns={columns}
      onSubmit={async(value)=>{
        //把参数传递给外层
        onSubmit?.(value);
      }}
    />
    </Modal>
  );
};
export default CreateModal;
