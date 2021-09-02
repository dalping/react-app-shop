import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ShopCarousel from './components/ShopCarousel';
import ShopNavbar from './components/ShopNavbar';
import ShopInfo from './components/ShopInfo';
import ShopList from './components/ShopList';
import GoodsDetail from './components/GoodsDetail';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <ShopNavbar/>
          <Switch>
            {/* 메인페이지 */}
            <Route exact path="/">
              <ShopCarousel/>
              <ShopList title={"Best"} type={"main"}/>
              <ShopList title={"New"} type={"main"}/>
            </Route>
            {/* 제품 상세 페이지 */}
            <Route path="/detail/:id">
              <GoodsDetail/>
            </Route>
            <Route path="/best">
              <ShopList title={"Best"} type={"all"}/>
            </Route>
            <Route path="/new">
              <ShopList title={"New"} type={"all"}/>
            </Route>
          </Switch>
        <ShopInfo/>
      </div>
      </BrowserRouter>
  );
}

export default App;
