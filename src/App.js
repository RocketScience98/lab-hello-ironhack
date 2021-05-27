import './App.css';
import Cards from './Cards';
function App() {
  return (
<div>
        <section className="section_one">
        <div class="navbar">
        <img src="./images/ironhack-logo.svg"/>
        <img src="./images/menu-top.svg"/>
        </div>
         
          <div className="section_one_content">
            <h1 className="section_one_title">Say hello to ReactJS</h1>
            <p className="section_one_text">
              You wll learn how to use the most popular frontend library, and
              become a super Ninja developer
            </p>
          </div>
          <p className="section_one_rectangle">
            <a className="section_one_rectangle_text">Awesome!</a>
          </p>
        </section>
        <div className="cards-container">
        <Cards images='/images/icon1.png' title='Declarative' description='React makes it painless to create interactive UIs.'/>
        <Cards images='images/icon2.png' title='Components' description='Build encapsulated components that manage their state.'/>
        <Cards images='/images/icon3.png' title='Single-Way' description='A set of inmutable values are passed to the components.'/>
        <Cards images='/images/icon4.png' title='JSX' description='Statiscally-typed, designed to run on modern browsers.'/>
        </div>
      </div>
  );
}

export default App;
