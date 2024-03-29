class StateApi {
	constructor(rowData) {
		this.data = {
            articles: this.mapIntoObject(rowData.articles),
            authors: this.mapIntoObject(rowData.authors), 
            searchTerm: '',
            timestamp : new Date()
        };
        this.subscriptions = {};
        this.lastSubscriptionId = 0;
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

    mergeWithState = (stateChange) => {
        this.data = {
            ...this.data,
            ...stateChange
        }
        this.notifySubscribers();
    }

    setSearchTerm = (searchTerm) => {
        this.mergeWithState( {
            searchTerm
        })
    }

    subscribe = (cb) => {
        this.lastSubscriptionId++;
        this.subscriptions[this.lastSubscriptionId] = cb;
        return this.lastSubscriptionId;
    }
    unsubscibe = (subscriptionId) => {
        delete this.subscriptions[subscriptionId];
    }
    notifySubscribers = () => {
        Object.values(this.subscriptions).forEach((cb) => cb());
    }

    startClock = () => {
        setInterval(() => {
            this.mergeWithState({timestamp : new Date()})
        }, 1000)
    }
}

export default StateApi;


