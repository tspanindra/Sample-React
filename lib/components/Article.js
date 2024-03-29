import React, { PureComponent }  from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import StoreProvider from './storeProvider';

const styles = {
	article : {
		paddingBottom : 10,
		borderBottomStyle: 'solid',
		borderBottomColor:  '#aaa',
		borderBottomWidth: 1,
		marginBottom : 10
	},
	title : {
		fontWeight: 'bold'
	},
	date : {
		fontSize: '0.85em',
		color: '#888'
	},
	author: {
		paddingTop: 10,
		paddingBottom: 10
	},
	body: {
		paddingLeft: 20
	}
}

const dateDisplay = (dateString) => 
		new Date(dateString).toDateString();

 class Article extends PureComponent {
  render() {
	const { article, author } = this.props;
	  
	return (
	  <div>
			<div style={ styles.title }> {article.title} </div>
			<div style={ styles.date}> 
				{dateDisplay(article.date)} 
			</div> 
			<div style= { styles.author }>
				<a href={author.website}>
					{author.firstName} { author.lastName}			
				</a>
			</div>
			<div> {article.body}</div>
	  </div>
	)
  }
}

function extraProps(store, originalProps) {
	return {
		author: store.lookupAuthor(originalProps.article.authorId)
	}
}

Article.propTypes = {
	article: PropTypes.shape({
		title: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired, 
		date: PropTypes.string.isRequired
	})
}

export default StoreProvider(extraProps)(Article)	;