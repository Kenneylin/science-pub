import React, { PureComponent } from 'react';
import Sider from '../component/Sider';
import Header from '../component/Header';

import { renderRoutes } from 'react-router-config';

export default class View extends PureComponent {
    render() {
        const { route } = this.props;
        return (
            <div>
                <Sider />
                <div className='right-wrapper'>
                    <Header {...this.props}/>
                    <div className='content-wrapper'>
                        {renderRoutes(route.routes)}
                    </div>
                </div>

            </div>
        );
    }
}
// 