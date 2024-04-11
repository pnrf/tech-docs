import styles from './myCardsListLarge.module.css'
import MyCard from './myCardLarge'

export default function MyCards(cards) {
	return (
		<section className={styles.wrapper}>
			<ul className={styles.list}>
				{cards.cards.map((card) => (
					<MyCard
						image = {card.image}
						title = {card.title}
						text = {card.text}
						pics = {card.pics}
					/>
				))}
			</ul>
		</section>
	)
}