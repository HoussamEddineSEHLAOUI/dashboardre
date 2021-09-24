
import './Dashbord.css';
import { Component } from 'react';
import Graph1 from './graph1';
import Graph2 from './graph2';
import Graph3 from './graph3';
import Graph4 from './graph4';
import Graph5 from './graph5';


class Dashbord extends Component{
 render(){
    return (
        <div className="dashbord">
          <div className='data-nb'>
              <div className='count count-bg-1'>
                  <p className='count-nb'>12</p>
                  <p className='count-ic'>icon</p>
              </div>

              <div className='count count-bg-1'>
                  <p className='count-nb'>12</p>
                  <p className='count-ic'>icon</p>
              </div>

              <div className='count count-bg-1'>
                  <p className='count-nb'>12</p>
                  <p className='count-ic'>icon</p>
              </div>

              <div className='count count-bg-4'>
                  <p className='count-nb'>1787700</p>
                  <p className='count-ic'>chiffre d'affaire</p>
              </div>

          </div>
          <div className='graph'>
              <div className='cart-graph'>
                <h1 className='titre-graph'>Titre</h1>
                <Graph1 className='graph-bar'/>
              </div>

              <div className='cart-graph'>
                <h1 className='titre-graph'>Titre</h1>
                <Graph2 className='graph-bar'/>
              </div>

              <div className='cart-graph'>
                <h1 className='titre-graph'>Titre</h1>
                <Graph3 className='graph-bar'/>
              </div>

              <div className='cart-graph'>
                <h1 className='titre-graph'>Titre</h1>
                <Graph4 className='graph-bar'/>
              </div>

              <div className='cart-graph'>
                <h1 className='titre-graph'>Titre</h1>
                <Graph5 className='graph-bar'/>
              </div>
          </div>
        </div>
      );
 }
}

export default Dashbord;
