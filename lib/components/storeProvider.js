import React from 'react';
import PropTypes from 'prop-types';

const StoreProvider = (Component) => {
    const withStore = (props, { store }) => {
        return (
            <Component {...props} store={store} />
        )}
    withStore.contextTypes = {
        store: PropTypes.object
    }

    withStore.displayName = `${Component.name}Container`;
    return withStore
}

export default StoreProvider;