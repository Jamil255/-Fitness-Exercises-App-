import React, { useContext } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import RightArrowIcon from '/icon/right-arrow.png'
import LeftArrowIcon from '/icon/left-arrow.png'
import BodyPart from '../BodyPart'
import ExerciseCard from "../ExerciseCard"

const HorizontalScrollbar = ({ data, isBodyParts, setBodyPart, bodyPart }) => (
  <Stack direction={'row'} flexWrap={'wrap'}>
    {data.slice(0, 8).map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
 { isBodyParts? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} isBodyParts={isBodyParts} /> : <ExerciseCard exercise={item} /> }      </Box>
    ))}
  </Stack>
)

export default HorizontalScrollbar
