import fetch from 'isomorphic-unfetch'

/**
 * Insert API KEY HERE
 * @type {String}
 * @{@link  https://developers.giphy.com/docs/}
 */
export const API_KEY = 'gCiS0PvW4dTtFA9OeyoAPJb5NeoQO1Ek'

/**
 * Simple service class for Giphy
 */
export default class GiphySerice {
	constructor( api_key ) {
		this.API_KEY = api_key
		this.URL = `https://api.giphy.com/v1/gifs/CRITERIA?api_key=${ this.API_KEY }`
	}

	/**
	 * Get the promise of fetching from giphy
	 * @param  {string} from  criteria: trending, search
	 * @param  {object} params query params
	 * @return {promise}
	 */
	getGifs( from, params ) {
		const queryString = params ? this._getQueryString( params ) : ''
		const url = this.URL.replace( /CRITERIA/gi, from ) + queryString
		

		return fetch( url ).then( res => res.json() )
	}

	/**
	 * Simple wrapper for shorthands lazyness
	 * @param  {string} text 
	 * @return {promise}      
	 */
	searchGifs( text ) {
		return this.getGifs( 'search', { q: text });
	}

	/**
	 * Simple wrapper for trending gifs
	 * @param  {int} limit 
	 * @return {promise}       
	 */
	getTrendindGifs( limit = 7 ) {
		return this.getGifs( 'trending', { limit: limit });
	}

	/**
	 * Helper function for query strings
	 * @param  {obj} object 
	 * @return {string}        
	 */
	_getQueryString( object ) {
		return '&' + Object.keys( object ).map( key => key + '=' + object[ key ] ).join('&');
	}
}