import React, { PureComponent } from 'react';
import Sider from '../component/Sider';
import Sidernext from '../component/Sider';
import Header from '../component/Header';
import '../static/css/right-wrapper.less';
import '../static/css/content.less';
import '../static/css/content-wrapper.less';
import '../static/css/index.less';

import { renderRoutes } from 'react-router-config';

export default class View extends PureComponent {
    render() {
        const { route } = this.props;
        return (
            <div className='content'>            
               {/*左邊未變的*/}
               <Sider {...this.props}/>
               {/*右邊的内容*/}
                <div className='right-wrapper'>
                    {/*頭部不變的，裏面的圖片可以變，位置和格式未變*/}
                    <Header {...this.props}/>
                    {/*變的内容*/}
                    <div className='content-wrapper'>
                        {renderRoutes(route.routes)}
                    </div>
                </div>              
            </div>
        );
    }
}
// 