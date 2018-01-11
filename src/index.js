import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import {render} from 'react-dom';
// import {Router,Route} from 'react-router';
// import {Link} from 'react-router-dom';
// import {Route} from 'react-router';
// import {BrowserRouter, Route,Router,HashRouter,Match,hashHistory,IndexLink,Link} from 'react-router-dom';
import {BrowserRouter, Route,Router,HashRouter,Link,Switch} from 'react-router-dom';

import Hello from './Hello';
import Compo1 from './Compo1';





// const Appp = React.Component({
//     render() {
//         return (
//             <div>
//                 <h1>App</h1>
//                 {/* 把 <a> 变成 <Link> */}
//                 <ul>
//                     <li><Link to="/about">About</Link></li>
//                     <li><Link to="/inbox">Inbox</Link></li>
//                 </ul>
//
//                 {/*
//           接着用 `this.props.children` 替换 `<Child>`
//           router 会帮我们找到这个 children
//         */}
//                 {this.props.children}
//             </div>
//         )
//     }
// })
//
// // 最后，我们用一些 <Route> 来渲染 <Router>。
// // 这些就是路由提供的我们想要的东西。

//这个用法没意义，虽然也好用，是要在app里面给route留下空间,这个route更应该写在app组件里
// ReactDOM.render((
//     <BrowserRouter >
//         <Switch>
//                 <Route path="/" component={App} />
//                 <Route path="/hello" component={Hello} />
//                 <Route path="/compo1" component={Compo1} />
//         </Switch>
//     </BrowserRouter >
// ), document.getElementById('root'));
//
//

//正确用法
ReactDOM.render(
    (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    ),
    document.getElementById('root')
);














// ReactDOM.render(<App />, document.getElementById('root'));


// // const App = React.createClass({
// //     render() {
// //         return (
// //             <div>
// //                 <h1>App</h1>
// //                 {/* 把 <a> 变成 <Link> */}
// //                 <ul>
// //                     <li><Link to="/about">About</Link></li>
// //                     <li><Link to="/inbox">Inbox</Link></li>
// //                 </ul>
// //
// //                 {/*
// //           接着用 `this.props.children` 替换 `<Child>`
// //           router 会帮我们找到这个 children
// //         */}
// //                 {this.props.children}
// //             </div>
// //         )
// //     }
// // })
//
//


// ReactDOM.render(
//     (
//         <Router>
//             <Route path="/" component={App}>
//                 <Route path="hello" component={Hello}/>
//                 <Route path="compo1" component={Compo1}/>
//             </Route>
//         </Router>
//     ),
//     document.getElementById('root')
// );

registerServiceWorker();
