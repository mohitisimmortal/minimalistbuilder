import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { ContainerIcon} from '@radix-ui/react-icons'

const ToolTipReal = () => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <ContainerIcon className='text-white' />
                </TooltipTrigger>
                <TooltipContent>
                    <p>Automatically adapts to different screen sizes</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default ToolTipReal
