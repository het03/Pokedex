import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div class="pokedex">
        <div class="left-container">
          <div class="left-container__top-section">
            <div class="top-section__blue"></div>
            <div class="top-section__small-buttons">
              <div class="top-section__red"></div>
              <div class="top-section__yellow"></div>
              <div class="top-section__green"></div>
            </div>
          </div>
          <div class="left-container__main-section-container">
            <div class="left-container__main-section">
              <div class="main-section__white">
                <div class="main-section__black">
                  <div class="main-screen hide">
                    <div class="screen__header">
                      <span class="poke-name"></span>
                      <span class="poke-id"></span>
                    </div>
                    <div class="screen__image">
                      <img src="" class="poke-front-image" alt="front" />
                      <img src="" class="poke-back-image" alt="back" />
                    </div>
                    <div class="screen__description">
                      <div class="stats__types">
                        <span class="poke-type-one"></span>
                        <span class="poke-type-two"></span>
                      </div>
                      <div class="screen__stats">
                        <p class="stats__weight">
                          weight: <span class="poke-weight"></span>
                        </p>
                        <p class="stats__height">
                          height: <span class="poke-height"></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="left-container__controllers">
                <div class="controllers__d-pad">
                  <div class="d-pad__cell top"></div>
                  <div class="d-pad__cell left"></div>
                  <div class="d-pad__cell middle"></div>
                  <div class="d-pad__cell right"></div>
                  <div class="d-pad__cell bottom"></div>
                </div>
                <div class="controllers__buttons">
                  <div class="buttons__button">B</div>
                  <div class="buttons__button">A</div>
                </div>
              </div>
            </div>
            <div class="left-container__right">
              <div class="left-container__hinge"></div>
              <div class="left-container__hinge"></div>
            </div>
          </div>
        </div>
        <div class="right-container">
          <div class="right-container__black">
            <div class="right-container__screen">
              <div class="search-bar">
                <input
                  type="text"
                  class="search-bar__input"
                  placeholder="Search..."
                />
                <button class="search-bar__button">Search</button>
              </div>
              <div class="list-item"></div>
              <div class="list-item"></div>
              <div class="list-item"></div>
              <div class="list-item"></div>
              <div class="list-item"></div>
              <div class="list-item"></div>
              <div class="list-item"></div>
              <div class="list-item"></div>
              <div class="list-item"></div>
              <div class="list-item"></div>
              <div class="list-item"></div>
              <div class="list-item"></div>
              <div class="list-item"></div>
              <div class="list-item"></div>
              <div class="list-item"></div>
              <div class="list-item"></div>
            </div>
          </div>
          <div class="right-container__buttons">
            <div class="left-button">Prev</div>
            <div class="right-button">Next</div>
            <div class="right-section__yellow"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
