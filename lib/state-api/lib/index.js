class StateApi {
	constructor(rowData) {
		this.data = {
            articles: this.mapIntoObject(rowData.articles),
            authors: this.mapIntoObject(rowData.authors), 
        };
	}
	
	mapIntoObject(arr) {
		return arr.reduce( (acc, curr) => {
			acc[curr.id] = curr;
			return acc;
		}, {});
	}
    lookupAuthor = (authorId) => {
        return this.data.authors[authorId]
    }
    getState = () => {
        return this.data;
    }
}

export default StateApi;


