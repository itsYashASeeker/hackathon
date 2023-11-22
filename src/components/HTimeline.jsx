import { animate, delay, motion } from "framer-motion";
import "../css/timeline.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

export default function HTimeline() {
    return (
        <>
            {/* <p className="s2HT">Timeline</p> */}
            <div className="divf mainTim posR fdirc">

                <div className="fVert"></div>
                <p className="timAdd">Day 1</p>
                <div className="divf">
                    <div className="divf part1">
                        <motion.div className="divf fdirc vCL"
                            id="tr1"
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <p className="timeForE divf"><FontAwesomeIcon icon={faClock} />08:30</p>
                            <p className="vCMT">Check in & Registration starts</p>
                            {/* <p className="vCBod">Founded in the year 2001 </p> */}
                        </motion.div>
                        <div className="diviVL"></div>
                    </div>
                    <div className="divf part1"></div>
                </div>
                <div className="divf">
                    <div className="divf part1"></div>
                    <div className="divf part1 part2">
                        <div className="diviVL"></div>
                        <motion.div className="divf fdirc vCL vCR"
                            id="tr2"
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <p className="timeForE divf"><FontAwesomeIcon icon={faClock} />09:30</p>
                            <p className="vCMT">Opening Ceremony</p>
                        </motion.div>
                    </div>
                </div>

                <div className="divf">
                    <div className="divf part1 ">
                        <div className="diviVL"></div>
                        <motion.div className="divf fdirc vCL"
                            id="tr3"
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <p className="timeForE divf"><FontAwesomeIcon icon={faClock} />10:30</p>
                            <p className="vCMT">Get to know each other & Networking</p>
                        </motion.div>
                        <div className="diviVL"></div>
                    </div>
                    <div className="divf part1"></div>
                </div>
                <div className="divf">
                    <div className="divf part1"></div>
                    <div className="divf part1 part2">
                        <div className="diviVL"></div>
                        <motion.div className="divf fdirc vCL vCR"
                            id="tr2"
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <p className="timeForE divf"><FontAwesomeIcon icon={faClock} />11:00</p>
                            <p className="vCMT">Hacking starts</p>
                        </motion.div>
                    </div>
                </div>
                <div className="divf">
                    <div className="divf part1 ">
                        <div className="diviVL"></div>
                        <motion.div className="divf fdirc vCL"
                            id="tr3"
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <p className="timeForE divf"><FontAwesomeIcon icon={faClock} />14:00</p>
                            <p className="vCMT">Meet the mentors</p>
                        </motion.div>
                        <div className="diviVL"></div>
                    </div>
                    <div className="divf part1"></div>
                </div>
                <div className="divf">
                    <div className="divf part1"></div>
                    <div className="divf part1 part2">
                        <div className="diviVL"></div>
                        <motion.div className="divf fdirc vCL vCR"
                            id="tr2"
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <p className="timeForE divf"><FontAwesomeIcon icon={faClock} />17:30</p>
                            <p className="vCMT">Fun events & Indoor games</p>
                        </motion.div>
                    </div>
                </div>
                <div className="divf">
                    <div className="divf part1 ">
                        <div className="diviVL"></div>
                        <motion.div className="divf fdirc vCL"
                            id="tr3"
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <p className="timeForE divf"><FontAwesomeIcon icon={faClock} />20:00</p>
                            <p className="vCMT">Dinner</p>
                        </motion.div>
                        <div className="diviVL"></div>
                    </div>
                    <div className="divf part1"></div>
                </div>

                <p className="timAdd">Day 2</p>

                <div className="divf">
                    <div className="divf part1"></div>
                    <div className="divf part1 part2">
                        <div className="diviVL"></div>
                        <motion.div className="divf fdirc vCL vCR"
                            id="tr2"
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <p className="timeForE divf"><FontAwesomeIcon icon={faClock} />00:30</p>
                            <p className="vCMT">Fun events & Indoor games</p>
                        </motion.div>
                    </div>
                </div>
                <div className="divf">
                    <div className="divf part1 ">
                        <div className="diviVL"></div>
                        <motion.div className="divf fdirc vCL"
                            id="tr3"
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <p className="timeForE divf"><FontAwesomeIcon icon={faClock} />08:00</p>
                            <p className="vCMT">Final Round of Mentors & Judges</p>
                        </motion.div>
                        <div className="diviVL"></div>
                    </div>
                    <div className="divf part1"></div>
                </div>
                <div className="divf">
                    <div className="divf part1"></div>
                    <div className="divf part1 part2">
                        <div className="diviVL"></div>
                        <motion.div className="divf fdirc vCL vCR"
                            id="tr2"
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <p className="timeForE divf"><FontAwesomeIcon icon={faClock} />09:00</p>
                            <p className="vCMT">Presentation of the project</p>
                        </motion.div>
                    </div>
                </div>
                <div className="divf">

                    <div className="divf part1 ">

                        <motion.div className="divf fdirc vCL "
                            id="tr2"
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <p className="timeForE divf"><FontAwesomeIcon icon={faClock} />11:00</p>
                            <p className="vCMT">Hacking ends</p>
                        </motion.div>
                        <div className="diviVL"></div>
                    </div>
                    <div className="divf part1"></div>
                </div>
            </div>
        </>
    )
}