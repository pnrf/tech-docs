import styles from './myCard.module.css'

export default function MyCard({image, title, href, text}) {
	return (
		<a className={styles.link} href={href}>
			<div className={styles.wrapper}>
				<img className={styles.image} src={image} alt='Фоновая картинка' />
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.text}>{text}</p>
			</div>
		</a>
	)
}
