import styles from './myCardLarge.module.css'

export default function MyCard({image, title, text, pics}) {
	return (
		<div className={styles.wrapper}>
			<img className={styles.image} src={image} alt='Фоновая картинка' />
			<div className={styles.content}>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.text}>{text}</p>
				<div className={styles.imagesList}>
					<img className={styles.imagesList__item} src={pics} alt='Иконки документов' />
				</div>
			</div>
		</div>
	)
}