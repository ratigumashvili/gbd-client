"use client"

import CountUp from 'react-countup';

export const Counter = ({ start = 0, total, duration = 5 }) => {

    return <CountUp start={start} end={total} duration={duration} />
};