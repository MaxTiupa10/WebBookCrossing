import first from '../assets/img/test-products/01.jpg';
import second from '../assets/img/test-products/02.jpg';
import third from '../assets/img/test-products/03.jpg';
import fouth from '../assets/img/test-products/04.jpg';

let i = 0;
export const testArray = {
	data: {
		products: [
			{
				productId: i++,
				images: [
					{
						image: first,
						name: 'name' + i,
					},
				],
				productName: 'Syltherine',
				category: 'Stylish cafe chair',
				productPrice: 3_500,
			},
			{
				productId: i++,
				images: [
					{
						image: second,
						name: 'name' + i,
					},
				],
				productName: 'Leviosa',
				category: 'Stylish cafe chair',
				productPrice: 1_000,
			},
			{
				productId: i++,
				images: [
					{
						image: third,
						name: 'name' + i,
					},
				],
				productName: 'Lolito',
				category: 'Luxury big sofa',
				productPrice: 2_500,
			},
			{
				productId: i++,
				images: [
					{
						image: fouth,
						name: 'name' + i,
					},
				],
				productName: 'Respira',
				category: 'Outdoor bar table and stool',
				productPrice: 7_500,
			},
			{
				productId: i++,
				images: [
					{
						image: first,
						name: 'name' + i,
					},
				],
				productName: 'Syltherine',
				category: 'Stylish cafe chair',
				productPrice: 3_500,
			},
			{
				productId: i++,
				images: [
					{
						image: second,
						name: 'name' + i,
					},
				],
				productName: 'Leviosa',
				category: 'Stylish cafe chair',
				productPrice: 1_000,
			},
			{
				productId: i++,
				images: [
					{
						image: third,
						name: 'name' + i,
					},
				],
				productName: 'Lolito',
				category: 'Luxury big sofa',
				productPrice: 2_500,
			},
			{
				productId: i++,
				images: [
					{
						image: fouth,
						name: 'name' + i,
					},
				],
				productName: 'Respira',
				category: 'Outdoor bar table and stool',
				productPrice: 7_500,
			},
		],
		totalCount: i,
	},
};

export const testObject = {
	data: {
		product: {
			productID: 1,
			images: ['imageURL'],
			name: 'Syltherine',
			category: 'Stylish cafe chair',
			sku: 'sku_product',
			productPrice: 2_500_500,
			colors: [{ color: '#ffffff', productID: 3 }],
			description: 'Some description',
			amountOfReviews: 1,
			avarageRate: 4,
			reviews: [
				{
					user: { userID: 1, userName: 'Name' },
					message: 'Some message',
					rate: 4,
				},
			],
		},
	},
};
