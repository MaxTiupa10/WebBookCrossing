import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Slider.scss';
//slides is an array with content of one slide
function Slider({
	slides,
	className,
	...props
}) {
	const classNames = [className, 'custom-slider'];
	const modules = [A11y];
	if ("navigation" in props) modules.push(Navigation)
	if ("pagination" in props) modules.push(Pagination);
	if ("scrollbar" in props) modules.push(Scrollbar);
	return (
		<Swiper
			className={classNames.join(' ')}
			modules={modules}
			{...props}
		>
			{slides.map((slide, index) => {
				return (
					<SwiperSlide key={index} className="custom-slider__slide">
						{slide}
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
}
export default Slider;
