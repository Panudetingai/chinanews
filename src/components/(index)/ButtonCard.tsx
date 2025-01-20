'use client'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
    data: {
        button: string
        link: string
    }
}

export const ButtonCard = ({data}: Props) => {
    const router = useRouter();
    return (
        <Button className={data.button} onPress={() => router.push(data.link)}>
            Click Me
        </Button>
    )
}