import React from 'react';
import AlgoliaPlaces from 'algolia-places-react';

const WeatherSearch = (props) => {

  return (
		<div className='col-12'>
				<AlgoliaPlaces
					placeholder='Find a location'
					options={{
						appId: 'plBFKNFMEX9J',
						apiKey: '0c0c097f5d8e4281d9103b54e27e4eaf',
						language: 'cn',
						type: 'city',
					}}
	
					onChange={({ query, rawAnswer, suggestion, suggestionIndex }) => {
						console.log(suggestion)
						props.searchCallback(suggestion);
						console.log('Fired when suggestion selected in the dropdown or hint was validated.')}}
		
					onSuggestions={({ rawAnswer, query, suggestions }) => {
						console.log(rawAnswer)
						console.log('Fired when dropdown receives suggestions. You will receive the array of suggestions that are displayed.')}}
		
					onCursorChanged={({ rawAnswer, query, suggestion, suggestonIndex }) => 
						console.log('Fired when arrows keys are used to navigate suggestions.')}
		
					onClear={() => 
						console.log('Fired when the input is cleared.')}
		
					onLimit={({ message }) => 
						console.log('Fired when you reached your current rate limit.')}
		
					onError={({ message }) => 
						console.log('Fired when we could not make the request to Algolia Places servers for any reason but reaching your rate limit.')}
				/>

			<div className='search-spacing'></div>
		</div>
  )
}

export default WeatherSearch