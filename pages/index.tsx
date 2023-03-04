import React, { useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components";
import { Layout } from "../Layout/Layout";

export default function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(4);

	return (
		<Layout>
			<Htag tag='h1'>Заголовок</Htag>
			<Button apperance='primary' arrow='right' >Кнопка</Button>
			<Button apperance='ghost' arrow='down'>Кнопка</Button>
			<P size="l">Большой</P>
			<P>Средний</P>
			<P size="s">Маленький</P>
			<Tag size="s">Ghost</Tag>
			<Tag size="m" color="red">Red</Tag>
			<Tag size="s" color="green">Green</Tag>
			<Tag color="primary">Primary</Tag>
			<Rating rating={rating} isEditable setRating={setRating}/>
		</Layout>
	);
}