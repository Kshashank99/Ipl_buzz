import React from "react";
import { Link } from "react-router-dom";
import TagsInput from "./TagsInput";
export default function Navbar({ selectedItem, setSelectedItem }) {
	function handleSelecetedTags(items) {
		console.log(items);
	}
	return (
		<nav className='navbar'>
			<TagsInput
				selectedItem={selectedItem}
				setSelectedItem={setSelectedItem}
				selectedTags={handleSelecetedTags}
				fullWidth
				variant='outlined'
				id='tags'
				name='tags'
				placeholder='Seach Team'
			/>

			<div className='nav-center'>
				<ul className='nav-links'>
					<li>
						<a>
							<Link className='link' to='/'>
								Matches
							</Link>
						</a>
					</li>
					<li>
						<Link className='link' to='/about'>
							Table
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
