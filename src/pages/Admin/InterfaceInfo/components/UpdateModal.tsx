import {ProColumns, ProTable,ProFormInstance} from '@ant-design/pro-components';
import '@umijs/max';
import { Modal } from 'antd';
import React,{useEffect,useRef} from 'react';

//定义组件的属性类型
export type Props = {
  //表单中需要编辑的数据
  values:API.InterfaceInfo;
  //表格的列定义
  columns:ProColumns<API.InterfaceInfo>[];
  //用户点取消按钮时触发，
  onCancel: () => void;
  //用户提交表单时，将用户输入的数据作为参数传递给后台
  onSubmit: (values:API.InterfaceInfo) => Promise<void>;
  //模态框是否可见
  visible: boolean;
};
const UpdateModal: React.FC<Props> = (props) => {
  //使用解构赋值获取props中的属性
  const{values,visible,columns,onCancel,onSubmit }=props;

  //使用React的useRef创建一个引用，以访问ProTable中的表单实例
  const formRef=useRef<ProFormInstance>();

  //防止修改的表单内容一直是同一个内容,要监听values的变化
  //使用React的useEffect在值改变时更新表单的值
  useEffect(()=>{
    if(formRef){
      formRef.current?.setFieldsValue(values);
    }
  },[values]);

 //返回模态框组件
  return (
    //创建一个Modal组件,通过visible届性控制其显示或隐藏,footer设置为nu11把表单项的’取消‘和’确认‘按钮去掉
    <Modal visible={visible} footer={null} onCancel={()=>onCancel?.()}>
      {/*创建一个ProTable组件,设定它为表单类型,通过columns属性设置表格的列，提交表单时调用onSubmit函数*/}
    <ProTable
      type="form"
      formRef={formRef}
      columns={columns}
      //用户点击提交后，将会触发外部的onSubmit方法
      onSubmit={async(value)=>{
        //把参数传递给外层
        // @ts-ignore
        onSubmit?.(value);
      }}
    />
    </Modal>
  );
};
export default UpdateModal;
