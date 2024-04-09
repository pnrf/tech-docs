import styles from './myCards.module.css'
import MyCard from './myCard'

export default function MyCards(cards) {
	return (
		<section className={styles.wrapper}>
			<ul className={styles.list}>
				{cards.cards.map((card) => (
					<MyCard
						image = {card.image}
						title = {card.title}
						href = {card.href}
						text = {card.text}
					/>
				))}
			</ul>
		</section>
	)
}
