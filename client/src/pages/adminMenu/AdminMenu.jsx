import React, { useMemo, useState } from 'react';
import Container from '../../components/container/Container';
import './AdminMenu.scss';
import Input from '../../components/UI/input/Input.jsx';
import Button from '../../components/UI/button/Button.jsx';
import Textarea from '../../components/UI/textarea/Textarea.jsx';
import ColorPicker from '../../components/UI/colorPicker/ColorPicker.jsx';
import Slider from '../../components/UI/slider/Slider.jsx';
import FileUploader from '../../components/UI/fileUploader/FileUploader.jsx';
import { ProductsAPI } from '../../http/productsAPI.js';

const emptyProduct = {
	productName: '',
	productCategory: '',
	productSku: '',
	productPrice: '',
	productDescription: '',
	productFullDescription: '',
	productColor: '#ffffff',
	images: [],
};

const AdminMenu = () => {
	const [product, setProduct] = useState(emptyProduct);

	const [files, setFiles] = useState([]);
	const filteredImages = useMemo(() => {
		return files.map((elem) => {
			return (
				<div className="create-product__slider-image-container">
					<img
						className="create-product__slider-image"
						src={URL.createObjectURL(elem)}
					/>
				</div>
			);
		});
	}, [files]);

	// convert images to byte code and put them into array
	function handleFileChange(newValue) {
		setFiles(newValue);
		const imagesByte = [];
		if (!newValue.length) {
			setProduct({ ...product, images: [] });
			return;
		}
		newValue.forEach((image) => {
			const reader = new FileReader();

			const finnishedByteImage = () => {
				reader.removeEventListener('load', finnishedByteImage);
				imagesByte.push(reader.result);
				if (imagesByte.length < newValue.length) return;
				setProduct({ ...product, images: imagesByte });
			};

			reader.addEventListener('load', finnishedByteImage);
			reader.readAsDataURL(image);
		});
		if (imagesByte.length != newValue.length) {
			setProduct({ ...product, images: [] });
		}
	}

	function handleInput(e) {
		setProduct({ ...product, [e.target.name]: e.target.value });
	}
	function handleNumberInput(e) {
		let num = parseFloat(e.target.value);
		if (isNaN(num)) num = '';
		else if (num < 0) num = -num;
		setProduct({ ...product, [e.target.name]: num });
	}

	// check if forms are not empty or have correct values
	function validateForm(e) {
		e.preventDefault();
		const productForm = document.forms.createProduct;
		const formElements = Array.from(productForm.elements);

		let anyHasError = false;

		for (let i = formElements.length - 1; i >= 0; i--) {
			if (formElements[i].classList.contains('error')) {
				formElements[i].classList.remove('error');
			}
			let hasError = false;
			const productElement = product[formElements[i].name];

			switch (formElements[i].name) {
				case 'productName':
				case 'productCategory':
				case 'productDescription':
				case 'productFullDescription':
				case 'productSku':
					if (productElement === '') hasError = true;
					break;
				case 'productPrice':
					if (
						productElement === '' ||
						isNaN(productElement) ||
						productElement < 0
					) {
						hasError = true;
					}
					break;
				case 'images':
					if (productElement.length === 0) {
						hasError = true;
					}
					break;
			}

			if (hasError) {
				anyHasError = true;
				formElements[i].classList.add('error');
				window.scrollTo({
					top:
						formElements[i].offsetTop -
						document.querySelector('.header').offsetHeight -
						15,
					behavior: 'smooth',
				});
			}
		}

		if (!anyHasError) {
			product.images = product.images.map((imageBytes, index) => {
				return {
					image: imageBytes,
					name: product.productName + ' ' + (index + 1),
				};
			});
			console.log(product);
			ProductsAPI.createNewProduct(product)
				.then(() => {
					setProduct(emptyProduct);
				})
				.catch((err) => {
					console.error(err);
				});
		}
	}

	return (
		<main>
			<Container>
				<form
					onSubmit={(e) => validateForm(e)}
					action="post"
					name="createProduct"
					className="create-product"
				>
					<div className="create-product__two-in-row">
						<Input
							value={product.productName}
							onChange={(e) => handleInput(e)}
							id="create-product__productName"
							tabIndex={1}
							label="Product name"
							className="create-product__input"
							name="productName"
							type="text"
						/>
						<Input
							value={product.productCategory}
							onChange={(e) => handleInput(e)}
							id="create-product__productCategory"
							tabIndex={2}
							label="Product category"
							className="create-product__input"
							name="productCategory"
							type="text"
						/>
					</div>

					<div className="create-product__two-in-row">
						<Input
							value={product.productSku}
							onChange={(e) => handleInput(e)}
							id="create-product__productSku"
							tabIndex={3}
							label="Product sku"
							className="create-product__input"
							name="productSku"
							type="text"
						/>
						<Input
							value={product.productPrice}
							onChange={(e) => handleNumberInput(e)}
							id="create-product__productPrice"
							tabIndex={4}
							label="Product price"
							className="create-product__input"
							name="productPrice"
							type="number"
						/>
					</div>

					<Textarea
						value={product.productDescription}
						onChange={(e) => handleInput(e)}
						tabIndex={5}
						id="create-product__productDescription"
						className="create-product__text-area"
						label="Product description"
						name="productDescription"
						type="text"
					></Textarea>

					<Textarea
						value={product.productFullDescription}
						onChange={(e) => handleInput(e)}
						tabIndex={5}
						id="create-product__productFullDescription"
						className="create-product__text-area"
						label="Product full description"
						name="productFullDescription"
						type="text"
					></Textarea>

					<div className="create-product__color-wrapper">
						<ColorPicker
							curColor={product.productColor}
							setCurColor={(newColor) =>
								setProduct({ ...product, productColor: newColor })
							}
							label="Product color"
							className="create-product__color"
							name="productColor"
							id={'create-product__productColor'}
							tabIndex={7}
						/>
					</div>

					<div className="create-product__image-uploader">
						<FileUploader
							tabIndex={8}
							filter={'.png,.jpg,.jpeg'}
							files={files}
							setFiles={(e) => handleFileChange(e)}
							name="images"
						/>
						{files.length > 0 ?
							<div className="create-product__slider-container">
								<Slider
									slidesPerView={1}
									spaceBetween={0}
									navigation
									scrollbar={{ draggable: true }}
									slides={filteredImages}
									className={'create-product__slider'}
								/>
							</div>
						:	''}
					</div>

					<Button className="create-product__button" type="submit">
						Create post
					</Button>
				</form>
			</Container>
		</main>
	);
};

export default AdminMenu;
