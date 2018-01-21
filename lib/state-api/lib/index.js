class DataApi {
	constructor(rowData) {
		this.rowData = rowData;
	}
	
	mapIntoObject(arr) {
		return arr.reduce( (acc, curr) => {
			acc[curr.id] = curr;
			return acc;
		}, {});
	}

	getArticles() {
		return this.mapIntoObject(this.rowData.articles);
	}
	
	getAuthors() {
		return this.mapIntoObject(this.rowData.authors);
	}
}

export default DataApi;


