import { useState } from 'react'
import { useDragAndDrop } from '@formkit/drag-and-drop/react'
import './App.css'

interface GridItem {
  id: number
  type: string
  x: number
  y: number
  width: number
  height: number
}

const GRID_SIZE = 20

function App() {
  const [gridParent, gridItems, setGridItems] = useDragAndDrop<HTMLDivElement, GridItem>([], {
    group: 'grid-dropzone',
    dragEffectAllowed: 'move',
    dragDropEffect: 'move'
  })

  const [draggableParent, draggableItems] = useDragAndDrop<HTMLDivElement, GridItem>(
    [{ id: 1, type: 'test', x: 0, y: 0, width: 2, height: 3 }],
    {
      group: 'grid-dropzone',
      dragEffectAllowed: 'move',
      dragDropEffect: 'move'
    }
  )

  const isCellOccupied = (x: number, y: number) => {
    return gridItems.some(item =>
      x >= item.x && x < item.x + item.width &&
      y >= item.y && y < item.y + item.height
    )
  }

  return (
    <div className="app">
      <div ref={draggableParent} className="draggable-container">
        {draggableItems.map((item) => (
          <div key={item.id} className="draggable-square">
            {item.type}
          </div>
        ))}
      </div>

      <div ref={gridParent} className="grid-container">
        {Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, i) => {
          const x = i % GRID_SIZE
          const y = Math.floor(i / GRID_SIZE)
          const occupied = isCellOccupied(x, y)

          return (
            <div key={i} className={`grid-square ${occupied ? 'occupied' : ''}`} />
          )
        })}
        {gridItems.map((item) => (
          <div
            key={item.id}
            className="grid-item"
            style={{
              gridColumnStart: item.x + 1,
              gridRowStart: item.y + 1,
              gridColumnEnd: item.x + 1 + item.width,
              gridRowEnd: item.y + 1 + item.height,
            }}
          >
            {item.type}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
