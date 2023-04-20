'use client'

import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Banner from './sections/Banner'
import CourseStatics from './sections/CourseStatics'
import FooterMenu from '../footer/FooterMenu'
import ShortDescription from './sections/shortDescription'
import ProgramNutshell from './sections/program'
import StudyOnZoom from './sections/studyOnZoom'
import Notification from './sections/Notification'

export default function Home() {
  return (
    <>
    <Flex as={'main'} role='main' direction={'column'} flex={1}>
        <Banner />
        <CourseStatics />
        <ShortDescription />
        <ProgramNutshell />
        <StudyOnZoom />
        <Notification />
        <FooterMenu />
    </Flex>
    </>
  )
}
