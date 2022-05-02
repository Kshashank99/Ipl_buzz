import React from "react";
import TagsInput from "./TagsInput";
export default function SearchForm() {
	function handleSelecetedTags(items) {
		console.log(items);
	}
	return (
		<>
			
			<TagsInput
				selectedTags={handleSelecetedTags}
				fullWidth
				variant='outlined'
				id='tags'
				name='tags'
				placeholder='Seach Team'
				// label='tags'
			/>
			
		</>
	);
}
