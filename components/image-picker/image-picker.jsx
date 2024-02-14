'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import styles from './image-picker.module.css';

const ImagePicker = ({ label, name }) => {
	const [pickedImage, setPickedImage] = useState();
	const imageInput = useRef();

	const onButtonClickHandler = () => {
		imageInput.current.click();
	};

	const onInputChangeHandler = e => {
		e.preventDefault();
		const file = e.target.files[0];

		if (!file) {
			setPickedImage(null);
			return;
		}

		const fileReader = new FileReader();
		fileReader.readAsDataURL(file);
		fileReader.onload = () => {
			setPickedImage(fileReader.result);
		};
	};

	return (
		<div className={styles.picker}>
			<label htmlFor={name}>{label}</label>
			<div className={styles.controls}>
				<div className={styles.preview}>
					{!pickedImage && <p>No image picked yet</p>}
					{pickedImage && (
						<Image src={pickedImage} alt='The image selcted by a user' fill />
					)}
				</div>
				<input
					className={styles.input}
					type='file'
					id={name}
					accept='image/png, imgage/jpeg'
					name={name}
					ref={imageInput}
					onChange={onInputChangeHandler}
					required
				/>
				<button
					className={styles.button}
					type='button'
					onClick={onButtonClickHandler}>
					Pick an image
				</button>
			</div>
		</div>
	);
};

export default ImagePicker;
