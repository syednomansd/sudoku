import React from 'react';

function GameControl(props) {
  return (
    <div className="card status">
      <ul className="game-status">
        <li>
          <div className="vertical-adjust">
            <span id="game-difficulty-label">Game Level</span>
          </div>
          <div id="game-difficulty" className="timer">{props.difficulty}</div>
        </li>
        <li>
          <div className="vertical-adjust">
            <span >Select Number</span>
          </div>
          <div className="remain-table">
            <div className="remain-column">
              <div className="remain-cell">
                <div
                  onClick={() => { props.setSelected(1) }}
                  className={`${props.seleted == 1 ? 'remain-cell-header-selected' : 'remain-cell-header'}`}
                >
                  1
                </div>
              </div>
              <div className="remain-cell">
                  <div 
                    onClick={() => { props.setSelected(4) }} 
                    className={`${props.seleted == 4 ? 'remain-cell-header-selected' : 'remain-cell-header'}`}
                  >
                    4
                  </div>
              </div>
              <div className="remain-cell">
                  <div
                    onClick={() => { props.setSelected(7) }} 
                    className={`${props.seleted == 7 ? 'remain-cell-header-selected' : 'remain-cell-header'}`}
                  >
                    7
                  </div>
              </div>
            </div>
            <div className="remain-column">
              <div className="remain-cell">
                <div 
                  onClick={() => { props.setSelected(2) }} 
                  className={`${props.seleted == 2 ? 'remain-cell-header-selected' : 'remain-cell-header'}`}
                >
                  2
                </div>
              </div>
              <div className="remain-cell">
                <div 
                  onClick={() => { props.setSelected(5) }}
                  className={`${props.seleted == 5 ? 'remain-cell-header-selected' : 'remain-cell-header'}`}
                >
                  5
                </div>
              </div>
              <div className="remain-cell">
                <div 
                  onClick={() => { props.setSelected(8) }}
                  className={`${props.seleted == 8 ? 'remain-cell-header-selected' : 'remain-cell-header'}`}
                >
                  8
                </div>
              </div>
            </div>
            <div className="remain-column">
              <div className="remain-cell">
                <div 
                  onClick={() => { props.setSelected(3) }} 
                  className={`${props.seleted == 3 ? 'remain-cell-header-selected' : 'remain-cell-header'}`}
                >
                  3
                </div>
              </div>
              <div className="remain-cell">
                <div 
                  onClick={() => { props.setSelected(6) }}
                  className={`${props.seleted == 6 ? 'remain-cell-header-selected' : 'remain-cell-header'}`}
                >
                  6
                </div>
              </div>
              <div className="remain-cell">
                <div
                  onClick={() => { props.setSelected(9) }}
                  className={`${props.seleted == 9 ? 'remain-cell-header-selected' : 'remain-cell-header'}`}
                >
                  9
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="vertical-adjust">
            <span id="game-difficulty-label">Generate</span>
          </div>
          <div className="btn" onClick={() => { props.startNewGame('easy') }}>{'Easy'}</div>
          <div className="btn" onClick={() => { props.startNewGame('medium')}}>{'Medium'}</div>
          <div className="btn" onClick={() => { props.startNewGame('hard') }}>{'Hard'}</div>
          <div className="btn" onClick={() => { props.clearGame() }}>{'Clear'}</div>
        </li>
      </ul>
    </div>
  )
}

export default GameControl;