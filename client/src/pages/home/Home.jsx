import React from 'react';
import Container from '../../components/container/Container.jsx';
import './Home.scss';
import background from '../../assets/img/heading/page-title-background.jpg';
import Button from '../../components/UI/button/Button.jsx';

const Home = () => {
	return (
		<main>
			<section className="main-block">
				<Container className="main-block__container">
					<div className="main-block__content">
						<h6 className="main-block__subtitle">New Arrival</h6>
						<h1 className="main-block__title">
							Discover Our New Collection
						</h1>
						<div className="main-block__text">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Ut elit tellus, luctus nec ullamcorper mattis.
							</p>
						</div>
						<Button>Buy now</Button>
					</div>
				</Container>
				<div className="main-block__background">
					<img src={background} alt="Background Image" />
				</div>
			</section>
		</main>
	);
};

export default Home;
