import styles from './Input.module.scss'

export const Input = ({ onChange, value, type, placeholder }) => {
	return (
		<input
			type={type}
			onChange={onChange}
			value={value}
			placeholder={placeholder}
			className={styles.input}
		/>
	)
}
