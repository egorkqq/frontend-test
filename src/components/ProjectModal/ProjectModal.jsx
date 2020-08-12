import React, { useCallback, memo, useState, useMemo } from 'react';
import { Modal, Button, Input, DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

const ProjectModal = (props) => {
  const { visible, setVisible, onSubmit } = props;

  const [title, setTitle] = useState('');
  const [dates, setDates] = useState([]);
  const [owner, setOwner] = useState('');
  const [administrator, setAdministrator] = useState('');

  const handleTitle = useCallback(({ target: { value } }) => setTitle(value), [
    setTitle,
  ]);
  const handleDates = useCallback((newDates) => setDates(newDates), [setDates]);
  const handleOwner = useCallback(({ target: { value } }) => setOwner(value), [
    setOwner,
  ]);
  const handleAdministrator = useCallback(
    ({ target: { value } }) => setAdministrator(value),
    [setAdministrator]
  );

  const hideModal = useCallback(() => {
    setVisible(false);
    setTitle('');
    setDates([]);
    setOwner('');
    setAdministrator('');
  }, [setVisible]);

  const handleClick = useCallback(() => {
    const formattedDates = `${moment(dates[0])
      .clone()
      .format('DD.MM.YYYY')} -- ${moment(dates[1])
      .clone()
      .format('DD.MM.YYYY')} гг.`;

    onSubmit({
      title,
      dates: formattedDates,
      owner,
      administrator,
    });
    hideModal();
  }, [title, dates, owner, administrator, onSubmit, hideModal]);

  const isDisabled = useMemo(() => {
    return (
      !title.length || !dates.length || !owner.length || !administrator.length
    );
  }, [title, dates, owner, administrator]);

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
        <Button
          key="submit"
          type="primary"
          disabled={isDisabled}
          onClick={handleClick}
        >
          Создать
        </Button>,
      ]}
    >
      <p>
        <Input value={title} onChange={handleTitle} placeholder="Название" />
      </p>
      <p>
        <RangePicker value={dates} onChange={handleDates} />
      </p>
      <p>
        <Input
          value={owner}
          onChange={handleOwner}
          placeholder="Руководитель проекта"
        />
      </p>
      <p>
        <Input
          value={administrator}
          onChange={handleAdministrator}
          placeholder="Администратор проекта"
        />
      </p>
    </Modal>
  );
};

export default memo(ProjectModal);
