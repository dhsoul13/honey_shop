import { Form, FormInstance, Modal } from 'antd';

import styles from './modals.module.scss';
import clsx from 'clsx';
import { MainButton } from '../buttons';
import { UseCount } from 'src/utils/hooks/useCount';
import { EyeOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { AuthProps, RegProps } from './constant';
import { DefaultInput } from '../input';
import {
	IContentFromType,
	IModalCard,
	IModalFormAuthValues,
	IModalFormRegValues,
	IModalsAuthentically,
} from './types';
import { useDispatch, useSelector } from 'react-redux';
import { selectorModalState } from 'src/store/selector';
import { isCloseModal, isShowModal } from 'src/store/slices/modal-slice';

const TextForButtonFromStatus: React.FC<{ status: TStatusUseCount }> = ({
	status,
}) => {
	if (status === 'crowded' || status === 'not') {
		return <>Товар закончился</>;
	} else {
		return <>Добавить в корзину</>;
	}
};

///MODAL CARD
export const ModalCard: React.FC<IModalCard> = ({
	content,
	onChangeActiveOnClick = () => {},
	isActive = false,
}) => {
	const [count, addFunc, delFunc, status] = UseCount({
		availableCount: content.count,
	});

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
					<MainButton type="link" onClick={addFunc} disabled={status === 'not'}>
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
					<MainButton type="link" onClick={delFunc} disabled={status === 'not'}>
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

///MODAL Authentically

const AuthContent: React.FC = () => {
	const { Item } = Form;
	return (
		<>
			{AuthProps.map((prob) => (
				<div key={prob.name}>
					<h2 className={styles.title_input}>{prob.visibleText}</h2>
					<Item key={prob.name} name={prob.name} rules={prob.rules}>
						<DefaultInput
							type={prob.type}
							placeholder={`Введите ${prob.visibleText}`}
						/>
					</Item>
				</div>
			))}
		</>
	);
};

const RegContent: React.FC = () => {
	const { Item } = Form;
	return (
		<>
			{RegProps.map((prob) => (
				<div key={prob.name}>
					<h2 className={styles.title_input}>{prob.visibleText}</h2>
					<Item key={prob.name} name={prob.name} rules={prob.rules}>
						<DefaultInput
							placeholder={`Введите ${prob.visibleText}`}
							type={prob.type}
						/>
					</Item>
				</div>
			))}
		</>
	);
};

const FormContentFromType: React.FC<IContentFromType> = ({
	type,
	withAuthorization,
	withoutAuthorization,
}) => {
	if (type === 'AUTH') {
		return <>{withAuthorization}</>;
	} else {
		return <>{withoutAuthorization}</>;
	}
};

export const ModalsAuthentically: React.FC<IModalsAuthentically> = ({
	isActive: open,
}) => {
	const [form] = Form.useForm<IModalFormAuthValues | IModalFormRegValues>();

	const { typeModal } = useSelector(selectorModalState);
	const dispatch = useDispatch();

	const onFinish = (values: IModalFormAuthValues | IModalFormRegValues) => {
		console.log(form.getFieldError('username'));
	};

	const onChangeModalFromType = () => {
		if (typeModal === 'AUTH') {
			dispatch(isShowModal({ typeModal: 'REG', isActive: true }));
		} else {
			dispatch(isShowModal({ typeModal: 'AUTH', isActive: true }));
		}
	};

	const onCancel = () => {
		dispatch(isCloseModal());
	};

	return (
		<Modal
			className={clsx(styles.modal, styles.modal_authentically)}
			open={open}
			footer={false}
			onCancel={onCancel}
		>
			<h2 className={clsx(styles.title, styles.title_authentically)}>
				<FormContentFromType
					type={typeModal}
					withAuthorization="Авторизация"
					withoutAuthorization="Зарегистрироваться"
				/>
			</h2>
			<Form<IModalFormAuthValues | IModalFormRegValues>
				name="basic"
				className={styles.form}
				onFinish={onFinish}
				form={form}
				initialValues={{}}
				validateTrigger="click"
				autoComplete="off"
			>
				<FormContentFromType
					type={typeModal}
					withAuthorization={<AuthContent />}
					withoutAuthorization={<RegContent />}
				/>
				<MainButton cn={styles.btn_form} type="primary" htmlType="submit">
					<FormContentFromType
						type={typeModal}
						withAuthorization="Авторизироваться"
						withoutAuthorization="Зарегистрироваться"
					/>
				</MainButton>
			</Form>

			<MainButton
				cn={styles.btn_change}
				type="link"
				onClick={onChangeModalFromType}
			>
				<FormContentFromType
					type={typeModal}
					withAuthorization="Нет аккаунта?"
					withoutAuthorization="Есть аккаунт"
				/>
			</MainButton>
		</Modal>
	);
};
