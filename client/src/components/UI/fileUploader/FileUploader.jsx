import React, { useMemo } from 'react';
import './FileUploader.scss';
import uploadURL from '../../../assets/additional icons/upload.svg';
// filter = ".png,.jpeg,.jpg"
function FileUploader({ filter, className, files, setFiles, ...props }) {
	const classNames = ['file-uploader', className];

	function getExtension(filename) {
		var parts = filename.split('.');
		return parts[parts.length - 1];
	}
	function checkFile(file) {
		if (filter.includes(getExtension(file.name))) return true;
		return false;
	}
	return (
		<div className={classNames.join(' ')}>
			<label
				className="file-uploader__container"
				onDragOver={(e) => e.preventDefault()}
				onDrop={(e) => {
					e.preventDefault();
					setFiles(
						Array.from(e.dataTransfer.files).filter((e) => checkFile(e))
					);
				}}
				htmlFor="file-uploader__files"
			>
				<input
					id="file-uploader__files"
					className="file-uploader__files"
					accept={filter}
					files={files}
					onChange={(e) => {
						setFiles(Array.from(e.target.files));
					}}
					type="file"
					multiple
					{...props}
				/>
				<img
					className="file-uploader__icon"
					src={uploadURL}
					alt="upload icon"
				/>
				<p className="file-uploader__text">
					Drag and drop or click here to upload files
				</p>
				<h1  className="file-uploader__counter">{files.length} files uploaded</h1>
			</label>
		</div>
	);
}

export default FileUploader;
