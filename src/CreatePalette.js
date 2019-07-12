import React from 'react';
import Palette from 'react-palette';
import PaletteImage from './PaletteImage';
import './styles/CreatePalette.css';

const CreatePalette = (props) => {
	const imageURL =
		'https://images.unsplash.com/photo-1542810444-ad1a29a9fd7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
	return (
		<Palette image={imageURL}>
			{(palette) => {
				return (
					<div className='CreatePalette-container'>
						<PaletteImage imageURL={imageURL} imageName='uploaded image' />

						<div style={{ backgroundColor: palette.lightVibrant }}>lightVibrant</div>
						<div style={{ backgroundColor: palette.vibrant }}>vibrant</div>
						<div style={{ backgroundColor: palette.muted }}>muted</div>
						<div style={{ backgroundColor: palette.darkMuted }}>darkMuted</div>
						<div style={{ backgroundColor: palette.darkVibrant }}>darkVibrant</div>
					</div>
				);
			}}
		</Palette>
	);
};

export default CreatePalette;
