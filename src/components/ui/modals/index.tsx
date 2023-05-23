import { Form, Modal } from 'antd';

import styles from './modals.module.scss';
import clsx from 'clsx';
import { MainButton } from '../buttons';
import { UseCount } from 'src/utils/hooks/useCount';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { AuthProps } from './constant';
import { DefaultInput } from '../input';
import { IModalCard, IModalFormAuthValues, IModalFormRegValues } from './types';

const TextForButtonFromStatus: React.FC<{ status: TStatusUseCount }> = ({
  status,
}) => {
  if (status === 'crowded' || status === 'not') {
    return <>Товар закончился</>;
  } else {
    return <>Добавить в корзину</>;
  }
};

export const ModalCard: React.FC<IModalCard> = ({
  content,
  onChangeActiveOnClick = () => {},
  isActive = false,
}) => {
  const [count, addFunc, delFunc, status] = UseCount({
    availableCount: content.count,
  });

  console.log(content);

  return (
    <Modal
      className={clsx(styles.modal, styles.modal_card)}
      open={isActive}
      footer={false}
      onCancel={onChangeActiveOnClick}
    >
      <h2 className={styles.title}>{content.title}</h2>
      <div className={styles.modal_card_imgs}>
        <img
          src="https://2sotki.ru/wp-content/uploads/2/7/9/279cb03a22dc0bce7cd7244f4f2eff5e.png"
          alt=""
        />
      </div>
      <div className={styles.block_informs}>
        <div className={clsx(styles.block, styles.span_block)}>
          <h2 className={styles.sub_title}>Описание</h2>
          <p className={styles.descriptions}>{content.info}</p>
        </div>
        <div className={styles.block}>
          <h2 className={styles.sub_title}>Объем(л):</h2>
          <p>{content.volume}</p>
        </div>
        <div className={clsx(styles.block, styles.block__price)}>
          <h2 className={styles.sub_title}>Цена(Р):</h2>
          <p className={styles.price}>{+content.price * count}</p>
        </div>
      </div>
      <div className={styles.block_functional}>
        <div className={styles.block_adding}>
          <MainButton
            type="link"
            onClick={addFunc}
            disabled={status === 'not'}
          >
            <PlusOutlined />
          </MainButton>
          <div
            className={clsx(
              styles.count,
              status !== 'available' ? styles.disable : ''
            )}
          >
            {count}
          </div>
          <MainButton
            type="link"
            onClick={delFunc}
            disabled={status === 'not'}
          >
            <MinusOutlined />
          </MainButton>
        </div>
        <MainButton
          disabled={status === 'crowded' || status === 'not'}
          onClick={() => {
            alert(1);
          }}
        >
          <TextForButtonFromStatus status={status} />
        </MainButton>
      </div>
    </Modal>
  );
};

///Authentically

const ModalsAuthenticallyTitleRender: React.FC<{ type?: 'auth' | 'reg' }> = ({
  type = 'auth',
}) => {
  if (type === 'auth') {
    return <>Авторизация</>;
  } else {
    return <>Регистрация</>;
  }
};

const AuthContent: React.FC = () => {
  const { Item } = Form;
  return (
    <>
      {AuthProps.map((prob) => (
        <>
          <h2 className={styles.title_input}>{prob.visibleText}</h2>
          <Item
            key={prob.name}
            name={prob.name}
            rules={prob.rules}
          >
            <DefaultInput type={prob.type} />
          </Item>
        </>
      ))}
    </>
  );
};

export const ModalsAuthentically: React.FC = () => {
  const onFinish = (values: IModalFormAuthValues | IModalFormRegValues) => {
    alert(JSON.stringify(values));
  };

  return (
    <Modal
      className={clsx(styles.modal, styles.modal_authentically)}
      open={true}
      footer={false}
    >
      <h2 className={clsx(styles.title, styles.title_authentically)}>
        <ModalsAuthenticallyTitleRender />
      </h2>
      <Form<IModalFormAuthValues | IModalFormRegValues>
        name="basic"
        className={styles.form}
        onFinish={onFinish}
      >
        <AuthContent />
        <MainButton
          cn={styles.btn_form}
          type="primary"
          htmlType="submit"
        >
          Авторизация
        </MainButton>
      </Form>
    </Modal>
  );
};
