import React, { useCallback, memo } from 'react';
import { Modal, Button, Input, DatePicker } from 'antd';

const { RangePicker } = DatePicker;

const ProjectModal = (props) => {
  const { visible, setVisible, onSubmit, onChange } = props;

  const hideModal = useCallback(() => setVisible(false), [setVisible]);

  return (
    <Modal
      visible={visible}
      title="Добавить проект"
      onOk={onSubmit}
      onCancel={hideModal}
      footer={[
        <Button key="back" onClick={hideModal}>
          Отмена
        </Button>,
        <Button key="submit" type="primary" onClick={onSubmit}>
          Создать
        </Button>,
      ]}
    >
      <p>
        <Input placeholder="Название" />
      </p>
      <p>
        <RangePicker onChange={onChange} />
      </p>
      <p>
        <Input placeholder="Руководитель проекта" />
      </p>
      <p>
        <Input placeholder="Администратор проекта" />
      </p>
    </Modal>
  );
};

export default memo(ProjectModal);
