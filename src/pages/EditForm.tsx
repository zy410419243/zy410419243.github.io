/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Form } from 'antd';
import Dialog from 'rc-dialog';
import 'rc-dialog/assets/index.css';
import { SelectValue } from 'antd/lib/select';
import { DocumentCategoryProps, SiderProps } from '../../server/utils/document';
import { MappingProps } from '../../server/controller/DocumentController';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import Button from '../component/Button';
import Input from '../component/Input';
import Select from '../component/Select';

export interface FormProps {
  title: string;
  category: DocumentCategoryProps;
  type: string;
  subType: string;
}
export interface EditFormProps {
  visible: boolean;
  selectData: SiderProps[];
  onSubmit: (form?: FormProps, dataItem?: MappingProps) => void;
  onCancel: () => void;
  loading: boolean;
  dataItem: MappingProps;
  pageInfo: { x: number; y: number };
}
export interface EditFormState {
  currentType: SelectValue;
  extraTypeSelectItem: string;
  extraSubTypeSelectItem: string;
}

const formItemLayout = {
  labelCol: {
    xs: { span: 4 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};

let isInit = true;

const renderTitle = () => (
  <Form.Item
    label="标题"
    name="title"
    required
    rules={[
      {
        required: true,
        message: '标题不能为空',
      },
    ]}
  >
    <Input style={{ width: '100%' }} />
  </Form.Item>
);

const renderCategory = (isEditMode: boolean) => (
  <Form.Item
    label="显示类别"
    name="category"
    required
    rules={[
      {
        required: true,
        message: '显示类别不能为空',
      },
    ]}
  >
    {isEditMode ? (
      <Input style={{ width: '100%' }} />
    ) : (
      <Select style={{ width: '100%' }}>
        <option value="markdown">markdown</option>
        <option value="mapping">mapping</option>
      </Select>
    )}
  </Form.Item>
);

const EditForm = ({
  visible,
  loading,
  selectData,
  onCancel,
  onSubmit,
  pageInfo,
  dataItem = { id: '', type: '', subType: '', category: undefined, title: '' },
}: EditFormProps) => {
  const [form] = Form.useForm();
  const [currentTypeSelectItem, setCurrentTypeSelectItem] = useState(dataItem.type);
  const [isEditMode, setEditMode] = useState(false);

  const onFinish = ({ type, subType, title, category }: FormProps) => {
    onSubmit({ title, category, type, subType }, dataItem);
  };

  const onFinishFailed = ({ errorFields }: ValidateErrorEntity) => {
    form.scrollToField(errorFields.name);
    onSubmit();
  };

  const handleCancel = () => {
    isInit = true;
    setCurrentTypeSelectItem('');
    onCancel();
  };

  const setTypeValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const type = e.target.value;
    form.setFieldsValue({ type });
    setCurrentTypeSelectItem(type);
  };

  const renderType = () => (
    <Form.Item
      label="文档类别"
      name="type"
      required
      rules={[
        {
          required: true,
          message: '文档类别不能为空',
        },
      ]}
    >
      {isEditMode ? (
        <Input style={{ width: '100%' }} />
      ) : (
        <Select style={{ width: '100%' }} onChange={setTypeValue}>
          {selectData.map(item => (
            <option value={item.key} key={`type-${item.key}`}>
              {item.title}
            </option>
          ))}
        </Select>
      )}
    </Form.Item>
  );

  const renderSubType = () => (
    <Form.Item
      label="文档子类"
      name="subType"
      required
      rules={[
        {
          required: true,
          message: '文档子类不能为空',
        },
      ]}
    >
      {isEditMode ? (
        <Input style={{ width: '100%' }} />
      ) : (
        <Select style={{ width: '100%' }}>
          {selectData
            .filter(item => item.key === (currentTypeSelectItem || dataItem.type))
            .map(({ children = [] }) =>
              children.map(jtem => (
                <option value={jtem.key} key={jtem.key}>
                  {jtem.value}
                </option>
              )),
            )}
        </Select>
      )}
    </Form.Item>
  );

  const renderConfirmButtonGroup = () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 25%)' }}>
      <Button onClick={() => setEditMode(!isEditMode)}>编辑</Button>
      <div />
      <Button onClick={() => form.resetFields()}>清空</Button>
      <Button onClick={() => form.submit()} disabled={loading}>
        确定
      </Button>
    </div>
  );

  const formValues = form.getFieldsValue();
  if (!dataItem.id) {
    if (isInit) {
      form.resetFields();
    } else {
      form.setFieldsValue(Object.assign({}, dataItem, formValues));
    }
  } else {
    isInit
      ? form.setFieldsValue(Object.assign({}, formValues, dataItem))
      : form.setFieldsValue(Object.assign({}, dataItem, formValues));
  }

  return (
    <Dialog
      visible={visible}
      title="新建文档"
      footer={null}
      onClose={handleCancel}
      animation="zoom"
      maskAnimation="fade"
      mousePosition={pageInfo}
    >
      <Form
        {...formItemLayout}
        name="edit-form"
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onValuesChange={() => (isInit = false)}
      >
        {renderTitle()}
        {renderCategory(isEditMode)}
        {renderType()}
        {renderSubType()}
        {renderConfirmButtonGroup()}
      </Form>
    </Dialog>
  );
};

export default EditForm;
