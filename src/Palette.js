import React, { Component } from 'react';

import PaletteImage from './PaletteImage';
import PaletteColorsList from './PaletteColorsList';
import ColorBox from './ColorBox';
import Footer from './Footer';

import './styles/Palette.css';

class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: 'arizona',
			imageName: 'Arizona',
			imageUrl:
				'https://images.unsplash.com/photo-1542810444-ad1a29a9fd7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
			photoCredit: 'Photo by Francesco Ungaro on Unsplash',
			colors: [
				{
					colorId: 'dark-goldenrod',
					colorName: 'Dark Goldenrod',
					hex: '#B93905',
					shades: [
						{
							hue: '100',
							hex: '#D58869'
						},
						{
							hue: '300',
							hex: '#C76137'
						},
						{
							hue: '500',
							hex: '#B93905'
						},
						{
							hue: '700',
							hex: '#942E04'
						},
						{
							hue: '900',
							hex: '#6F2203'
						}
					]
				},
				{
					colorId: 'light-sky-blue',
					colorName: 'Light Sky Blue',
					hex: '#52E1FA',
					shades: [
						{
							hue: '100',
							hex: '#97EDFC'
						},
						{
							hue: '300',
							hex: '#75E7FB'
						},
						{
							hue: '500',
							hex: '#52E1FA'
						},
						{
							hue: '700',
							hex: '#42B4C8'
						},
						{
							hue: '900',
							hex: '#318796'
						}
					]
				},
				{
					colorId: 'pale-goldenrod',
					colorName: 'Pale Goldenrod',
					hex: '#EACE92',
					shades: [
						{
							hue: '100',
							hex: '#F2E2BE'
						},
						{
							hue: '300',
							hex: '#EED8A8'
						},
						{
							hue: '500',
							hex: '#EACE92'
						},
						{
							hue: '700',
							hex: '#BBA575'
						},
						{
							hue: '900',
							hex: '#8C7C58'
						}
					]
				},
				{
					colorId: 'dark-red',
					colorName: 'Dark Red',
					hex: '#882208',
					shades: [
						{
							hue: '100',
							hex: '#B87A6B'
						},
						{
							hue: '300',
							hex: '#A04E39'
						},
						{
							hue: '500',
							hex: '#882208'
						},
						{
							hue: '700',
							hex: '#6D1B06'
						},
						{
							hue: '900',
							hex: '#521405'
						}
					]
				},
				{
					colorId: 'saddle-brown',
					colorName: 'Saddle Brown',
					hex: '#120404',
					shades: [
						{
							hue: '100',
							hex: '#716868'
						},
						{
							hue: '300',
							hex: '#413636'
						},
						{
							hue: '500',
							hex: '#120404'
						},
						{
							hue: '700',
							hex: '#0E0303'
						},
						{
							hue: '900',
							hex: '#0B0202'
						}
					]
				}
			],
			currentShadesId: '',
			currentShades: [],
			showShadesList: true
		};
		this.selectCurrentShades = this.selectCurrentShades.bind(this);
		this.hideShadesList = this.hideShadesList.bind(this);
	}
	selectCurrentShades(id) {
		let shades = this.state.colors.filter((color) => color.colorId === id);
		this.setState({ currentShadesId: id, currentShades: shades[0].shades, showShadesList: true });
	}
	hideShadesList() {
		this.setState({ showShadesList: false });
	}
	render() {
		return (
			<div className='Palette'>
				<div className='Palette-container'>
					<PaletteImage imageUrl={this.state.imageUrl} imageName={this.state.imageName} />
					<PaletteColorsList>
						{this.state.colors.map((color) => (
							<ColorBox
								key={color.colorId}
								id={color.colorId}
								colorName={color.colorName}
								hex={color.hex}
								currentShadesId={this.state.currentShadesId}
								showShades={true}
								selectCurrentShades={this.selectCurrentShades}
								hideShadesList={this.hideShadesList}
								showShadesList={this.state.showShadesList}
							/>
						))}
					</PaletteColorsList>
					<PaletteColorsList>
						{this.state.showShadesList &&
							this.state.currentShades.map((shade) => (
								<ColorBox key={shade.hue} colorName={shade.hue} hex={shade.hex} showShades={false} />
							))}
					</PaletteColorsList>
				</div>
				<Footer imageName={this.state.imageName} credit={this.state.photoCredit} />
			</div>
		);
	}
}

export default Palette;
