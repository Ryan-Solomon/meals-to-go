import React, { FC } from 'react'

type Props = {
    name: string;
    icon: string;
    photos: string[]
    address: string;
    isOpenNow: boolean;
    rating: string;
    isClosedTemporarily: boolean;

}

export const RestaurantInfo:FC<Partial<Props>> = () => {
    return (

    )
}