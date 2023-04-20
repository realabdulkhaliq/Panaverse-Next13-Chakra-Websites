'use client'
import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import theme from "@/assets/theme";

type Props = {
    children : ReactNode
}

export default function ChakraWrapper ({children} : Props) {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}