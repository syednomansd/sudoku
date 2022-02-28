
import { useEffect, useState } from 'react';
import GameControl from '../components/GameControls'
import {
  validateAllIndividualBoxes,
  board as initialBord,
  getinValidBoxes
} from '../utils/functions'

function Game() {
  const [difficulty, setDifficulty] = useState('')
  const [seleted, setSelected] = useState(false)
  const [boxes, setBoxes] = useState(initialBord)
  const [initialValues, setInitialValues] = useState(initialBord)
  const [isWon, setIsWon] = useState(false);

  useEffect(() => {
    startNewGame('medium')
  }, [])

  const clearGame = () => {
    setBoxes(initialValues)
    setIsWon(false)
  }

  const startNewGame = (value) => {
    let tampArrBox = JSON.parse(JSON.stringify(initialBord));
    fetch('https://vast-chamber-17969.herokuapp.com/generate?difficulty=' + value)
      .then(res => {
        res.json()
          .then(resp => {
            for (let i = 0; i < Object.entries(resp.puzzle).length; i++) {
              switch (Object.entries(resp.puzzle)[i][0][0]) {
                case 'A':
                  tampArrBox[0][Object.entries(resp.puzzle)[i][0][1] - 1].value = Object.entries(resp.puzzle)[i][1]
                  break;
                case 'B':
                  tampArrBox[1][Object.entries(resp.puzzle)[i][0][1] - 1].value = Object.entries(resp.puzzle)[i][1]
                  break;
                case 'C':
                  tampArrBox[2][Object.entries(resp.puzzle)[i][0][1] - 1].value = Object.entries(resp.puzzle)[i][1]
                  break;
                case 'D':
                  tampArrBox[3][Object.entries(resp.puzzle)[i][0][1] - 1].value = Object.entries(resp.puzzle)[i][1]
                  break;
                case 'E':
                  tampArrBox[4][Object.entries(resp.puzzle)[i][0][1] - 1].value = Object.entries(resp.puzzle)[i][1]
                  break;
                case 'F':
                  tampArrBox[5][Object.entries(resp.puzzle)[i][0][1] - 1].value = Object.entries(resp.puzzle)[i][1]
                  break;
                case 'G':
                  tampArrBox[6][Object.entries(resp.puzzle)[i][0][1] - 1].value = Object.entries(resp.puzzle)[i][1]
                  break;
                case 'H':
                  tampArrBox[7][Object.entries(resp.puzzle)[i][0][1] - 1].value = Object.entries(resp.puzzle)[i][1]
                  break;
                case 'I':
                  tampArrBox[8][Object.entries(resp.puzzle)[i][0][1] - 1].value = Object.entries(resp.puzzle)[i][1]
              }
            }
            setBoxes(tampArrBox)
            setInitialValues(tampArrBox)
            setDifficulty(value)
            setIsWon(false)
          })
      })
  }

  const findNo = (x, y) => {
    let x0 = Math.floor(x / 3);
    let y0 = Math.floor(y / 3);
    let BoxNumber = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ][x0][y0];
    return BoxNumber;
  }

  const checkStatus = (board) => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j].value === 0 || board[i][j].isValid === false) {
          return false;
        }
      }
    }
    return true;
  }

  const validate = (board) => {
    let rows = validateAllIndividualBoxes(board, true);
    let columns = validateAllIndividualBoxes(board, false);
    let inValidBoxes = getinValidBoxes(board);
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (
          rows.includes(i) ||
          columns.includes(j) ||
          inValidBoxes.includes(findNo(i, j))
        ) {
          board[i][j].isValid = false;
        } else {
          board[i][j].isValid = true;
        }
      }
    }
  };

  const onBoxClick = (row, column) => {
    let tempBox = JSON.parse(JSON.stringify(boxes));
    tempBox[row][column].value = seleted;
    validate(tempBox);
    if (checkStatus(tempBox)) {
      setIsWon(true);
    }
    setBoxes(tempBox);
  }

  return (
    <>
      <div className="body" id="sudoku">
        <h1>Sudoku Master</h1>
        <div className="card game">
          {
            isWon ?
              <div className='success'>
                <p>Congratulations!</p>
                <p>You solved the puzzle</p>
              </div>
              :
              <></>
          }
          <table id="puzzle-grid">
            <tbody>
              {
                boxes.map((item, row) => {
                  return <tr>
                    {item.map((item2, column) => {
                      return (
                        <td
                          key={column + '' + row}
                          style={{ cursor: seleted ? 'pointer' : '' }}
                          onClick={() => {
                            onBoxClick(row, column)
                          }}>

                          <div style={{
                            backgroundColor: item2.isValid == false ? '#fdeef7' : '#fff'
                          }}>
                            {item2.value ? item2.value : ''}
                          </div>
                        </td>
                      )
                    })}
                  </tr>

                })
              }
            </tbody>
          </table>
        </div>

        <GameControl
          difficulty={difficulty}
          setSelected={setSelected}
          seleted={seleted}
          clearGame={clearGame}
          setBoxes={setBoxes}
          startNewGame={startNewGame}
        />

        <div className="clear"></div>
      </div>
    </>
  );
}

export default Game;
