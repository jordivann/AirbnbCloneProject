'use client';

import Container from "../Container"
import { TbBeach, TbMountain, TbPool }  from 'react-icons/tb'
import {IoDiamond} from 'react-icons/io5'
import {GiBarn, GiBoatFishing, 
        GiCactus, 
        GiCastle, 
        GiCaveEntrance, 
        GiForestCamp, 
        GiIsland, 
        GiWindmill} from 'react-icons/gi'
import { MdOutlineVilla } from  'react-icons/md'
import { FaSkiing } from  'react-icons/fa'
import { BsSnow } from  'react-icons/bs'
import CategoryBox from '../CategoryBox'
import { usePathname, useSearchParams } from "next/navigation"

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This Property is close to the beach!'
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'This Property has windmills!'
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'This Property is modern!'
    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: 'This Property is in the countryside!'
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'This Property has a pool.'
    },
    {
        label: 'Icelands',
        icon: GiIsland,
        description: 'This Property is on an island!'
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'This Property is close to a lake!'
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'This Property has skiing activities!'
    },
    {
        label: 'Castle',
        icon: GiCastle,
        description: 'This Property is in a castle.'
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'This Property has camping activities.'
    },
    {
        label: 'Artic',
        icon: BsSnow,
        description: 'This Property has camping activities.'
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance,
        description: 'This Property is in a cave!'
    },
    {
        label: 'Desert',
        icon: GiCactus,
        description: 'This Property is the desert!'
    },
    {
        label: 'Barns',
        icon: GiBarn,
        description: 'This Property is in the barn!'
    },
    {
        label: 'Lux',
        icon: IoDiamond,
        description: 'This Property is Luxurious!'
    },
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');

    const pathname = usePathname();
    const isMainPage = pathname === '/';
    if(!isMainPage){
        return null
    }
    
    return (
        <Container>
            <div
                className="
                    pt-4
                    flex
                    flex-row
                    items-center
                    justify-between
                    overflow-x-auto
                    gap-1
                "
            >
                {categories.map((item)=> (
                    <CategoryBox 
                        key={item.label}
                        label={item.label}
                        selected={category === item.label}
                        icon={item.icon}
                    />
                ))}
            </div>
        </Container>
    )
}

export default Categories