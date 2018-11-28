import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from './redux/store';
import { createMemoryHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { matchRoutes, renderRoutes } from 'react-router-config';

import routes from './route';

// const debug = require('debug')('app:entry_server');

export default async (url) => {
    // loadAllDataServer(routes, store, url);
    const history = createMemoryHistory();
    const store = createStore(history);

    const components = matchRoutes(routes, url);
    
    const pros = components.map(({ route, match }) => {
        const { loadData } = route.component;
        return loadData
            ? loadData(store, match, url)
            : Promise.resolve(null);
    });
    await Promise.all(pros);

    const initState = store.getState();
    return {
        App: () => (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <StaticRouter location={url} >
                        <Switch>
                        {renderRoutes(routes)}
                        </Switch>
                    </StaticRouter>
                </ConnectedRouter>
            </Provider>
        ),
        initState,
    };
};

