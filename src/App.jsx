import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="pokedex">
        <div className="left-container">
          <div className="left-container__top-section">
            <div className="top-section__blue"></div>
            <div className="top-section__small-buttons">
              <div className="top-section__red"></div>
              <div className="top-section__yellow"></div>
              <div className="top-section__green"></div>
            </div>
          </div>
          <div className="left-container__main-section-container">
            <div className="left-container__main-section">
              <div className="main-section__white">
                <div className="main-section__black">
                  <div className="main-screen hide">
                    <div className="screen__header">
                      <span className="poke-name"></span>
                      <span className="poke-id"></span>
                    </div>
                    <div className="screen__image">
                      <img src="" className="poke-front-image" alt="front" />
                      <img src="" className="poke-back-image" alt="back" />
                    </div>
                    <div className="screen__description">
                      <div className="stats__types">
                        <span className="poke-type-one"></span>
                        <span className="poke-type-two"></span>
                      </div>
                      <div className="screen__stats">
                        <p className="stats__weight">
                          weight: <span className="poke-weight"></span>
                        </p>
                        <p className="stats__height">
                          height: <span className="poke-height"></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="left-container__controllers">
                <div className="controllers__d-pad">
                  <div className="d-pad__cell top"></div>
                  <div className="d-pad__cell left"></div>
                  <div className="d-pad__cell middle"></div>
                  <div className="d-pad__cell right"></div>
                  <div className="d-pad__cell bottom"></div>
                </div>
                <div className="controllers__buttons">
                  <div className="buttons__button">B</div>
                  <div className="buttons__button">A</div>
                </div>
              </div>
            </div>
            <div className="left-container__right">
              <div className="left-container__hinge"></div>
              <div className="left-container__hinge"></div>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="inner">
            <div className="right-container__black">
              <div className="right-container__screen">
                <div className="search-bar">
                  <input
                    type="text"
                    className="search-bar__input"
                    placeholder="Search Pokemon..."
                  />
                  <button className="search-bar__button">Search</button>
                </div>
                <div className="list-parent">
                  <div className="list-item"></div>
                  <div className="list-item"></div>
                  <div className="list-item"></div>
                  <div className="list-item"></div>
                  <div className="list-item"></div>
                  <div className="list-item"></div>
                  <div className="list-item"></div>
                  <div className="list-item"></div>
                  <div className="list-item"></div>
                  <div className="list-item"></div>
                  <div className="list-item"></div>
                  <div className="list-item"></div>
                  <div className="list-item"></div>
                  <div className="list-item"></div>
                  <div className="list-item"></div>
                  <div className="list-item"></div>
                </div>
              </div>
            </div>
            <div className="line-container">
              <div className="line-1"></div>
              <div className="line-2"></div>
            </div>
            <div className="right-container__buttons">
              <div className="left-button">Prev</div>
              <div className="right-button">Next</div>
              <div className="right-section__yellow"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
