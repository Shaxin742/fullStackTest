/*
 * @Author: ShaXin
 * @Date: 2020-07-27 13:24:21
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-07-27 15:13:16
 */
import React, { useState, useCallback, useRef } from 'react'
import styles from './dnd2.scss'
import { Button } from 'antd'
import {
  useDrop,
  useDrag,
  DndProvider,
  DropTargetMonitor,
  XYCoord,
  DragSourceMonitor,
} from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import update from 'immutability-helper'

const ItemTypes = {
  CARD: 'card',
  CONTAINER: 'container',
}


const Card = ({ id, text, index, moveCard }) => {
  const ref = useRef(null)
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect()

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      // Determine mouse position
      const clientOffset = monitor.getClientOffset()

      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex)

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 0 : 1
  drag(drop(ref))
  return (
    <div ref={ref} className={styles.card} style={{ opacity }}>
      {text}
    </div>
  )
}

const Container = () => {
  const [, drag] = useDrag({
    item: {
      type: ItemTypes.CONTAINER,
    },
  })

  const [cards, setCards] = useState([
    {
      id: 1,
      text: 'Write a cool JS library',
    },
    {
      id: 2,
      text: 'Make it generic enough',
    },
    {
      id: 3,
      text: 'Write README',
    },
    {
      id: 4,
      text: 'Create some examples',
    },
    {
      id: 5,
      text:
        'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
    },
    {
      id: 6,
      text: '???',
    },
    {
      id: 7,
      text: 'PROFIT',
    },
  ])

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = cards[dragIndex]
      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        }),
      )
    },
    [cards],
  )

  const renderCard = (card, index) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        text={card.text}
        moveCard={moveCard}
      />
    )
  }

  return (
    <>
      <div ref={drag} className={styles.container}>
        {cards.map((card, i) => renderCard(card, i))}
      </div>
      <Button onClick={console.log(cards)}>ddd</Button>
    </>
  )
}

export default () => {
  const clickss = () => {
    console.log("ss")
    console.log(Container.cards)
  }
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.app}>
        <Container />
        <Button onClick={clickss}>ddd</Button>
      </div>
    </DndProvider>
  )
}
