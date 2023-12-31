import { useEffect, useState } from "react"

export default function CountDown() {
    const [timeL, setTimeL] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    const deadline = "February 24, 2024";

    useEffect(() => {
        setTimeout(() => {
            const time = Date.parse(deadline) - Date.parse(new Date());
            // console.log(time);
            if (time < 0) {
                setTimeL({ ...timeL, days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const seconds = Math.floor((time / 1000) % 60);
                const minutes = Math.floor((time / 1000 / 60) % 60);
                const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
                const days = Math.floor(time / (1000 * 60 * 60 * 24));
                setTimeL({ ...timeL, days, hours, minutes, seconds });
            }
        }, 1000)
    }, [timeL])

    function leading0(num) {
        return num < 10 ? "0" + num : num;
    }

    useEffect(() => {
        // console.log(timeL);
    }, [timeL])

    return (
        <>
            <p className="regEnds">Registration Ends in</p>
            <div className="divf countD">
                <div className="countCard divf fdirc">
                    <p>{leading0(timeL.days)}</p>
                    <p className="countTit">Days</p>
                </div>
                <p className="fColon">:</p>
                <div className="countCard divf fdirc">
                    <p>{leading0(timeL.hours)}</p>
                    <p className="countTit">Hours</p>
                </div>
                <p className="fColon">:</p>
                <div className="countCard divf fdirc">
                    <p>{leading0(timeL.minutes)}</p>
                    <p className="countTit">Minutes</p>
                </div>
                <p className="fColon">:</p>
                <div className="countCard divf fdirc">
                    <p>{leading0(timeL.seconds)}</p>
                    <p className="countTit">Seconds</p>
                </div>
            </div>
        </>
    )
}