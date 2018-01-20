import React from 'react';
import ArticleList from './ArticleListTest';

import renderer from 'react-test-renderer';

describe('article list ') = () => {
	const testProps = {
		articles : {
			a: { id: ''},
			b: { id: ''}
		},
		articleActions: {
			lookupAuthor: jest.fn(() => ({}))
		}
	}
	it('renders correctly') = () => {
		const tree = renderer.create(
			<ArticleList {...testProps }/>
		).toJSON();	
	}
}