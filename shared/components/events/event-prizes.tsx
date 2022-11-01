import { EventType } from '@pages/events'
import Link from 'next/link'
import TiltCard from '@shared/components/events/tilt-card'

const EventPrizes = (props: {event:EventType})=>{
const {prizes} = props.event
return (<></>)
}

export default EventPrizes;