import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import linkedinurl from "/linkedin.png";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { team2024, newteammembers, oldteammembers } from "../constants";

const TeamMemberCard = ({ name, designation, image, linkedin, cardColor, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="p-6 rounded-2xl flex flex-col items-center xs:w-[250px] w-full border hover:border-white transition-all duration-300"
        style={{ backgroundColor: cardColor }}
    >
        <img
            src={image}
            alt={name}
            className="rounded-full object-cover mb-4"
            style={{ width: "150px", height: "150px" }}
            onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/default-avatar.png";
            }}
        />
        <h3 className="text-white font-bold text-[18px] text-center">@ {name}</h3>
        <p className="text-secondary text-[14px] text-center">{designation}</p>
        <button
            onClick={() => window.open(linkedin, "_blank")}
            className="mt-3 bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition-colors"
        >
            <img src={linkedinurl} alt="LinkedIn" className="w-5 h-5" />
        </button>
    </motion.div>
);

const Team = () => {
    const teamData = [
        { team: oldteammembers, title: "Year 22-23" },
        { team: newteammembers, title: "Year 23-24" },
        { team: team2024, title: "Year 24-25" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isHovering, setIsHovering] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const { team: currentTeam, title: currentTitle } = teamData[currentIndex];

    const variants = {
        enter: (dir) => ({
            opacity: 0,
            x: dir > 0 ? 100 : -100,
        }),
        center: {
            opacity: 1,
            x: 0,
        },
        exit: (dir) => ({
            opacity: 0,
            x: dir > 0 ? -100 : 100,
        }),
    };

    // auto-rotate
    useEffect(() => {
        if (!isHovering && !isAnimating) {
            const t = setTimeout(() => {
                setDirection(1);
                setCurrentIndex((p) => (p + 1) % teamData.length);
            }, 5000);
            return () => clearTimeout(t);
        }
    }, [currentIndex, isHovering, isAnimating, teamData.length]);

    const goNext = () => {
        if (isAnimating) return;
        setDirection(1);
        setCurrentIndex((p) => (p + 1) % teamData.length);
    };
    const goPrev = () => {
        if (isAnimating) return;
        setDirection(-1);
        setCurrentIndex((p) => (p - 1 + teamData.length) % teamData.length);
    };
    const goToSlide = (i) => {
        if (isAnimating || i === currentIndex) return;
        setDirection(i > currentIndex ? 1 : -1);
        setCurrentIndex(i);
    };

    return (
        <div className="mt-10 bg-black-100 rounded-[20px] p-6">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    onAnimationStart={() => setIsAnimating(true)}
                    onAnimationComplete={() => setIsAnimating(false)}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    {/* Title */}
                    <div className="flex flex-col items-center mb-6">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className={styles.sectionSubText + " text-center"}
                        >
                            Our Team
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-white text-[24px] font-bold mt-2 text-center"
                        >
                            {currentTitle}
                        </motion.h2>
                    </div>

                    {/* Cards */}
                    <div className="flex flex-wrap justify-center gap-8">
                        {currentTeam.map((member, idx) => (
                            <TeamMemberCard
                                key={idx}
                                {...member}
                                index={idx}
                                cardColor="#151030"
                            />
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={goPrev}
                    disabled={isAnimating}
                    className={`text-white text-[30px] bg-gray-700 hover:bg-gray-600 rounded-full w-10 h-10 flex items-center justify-center transition-colors
                        ${isAnimating ? "opacity-50 pointer-events-none" : ""}`}
                >
                    &lt;
                </motion.button>

                <div className="flex gap-2">
                    {teamData.map((_, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.2 }}
                            onClick={() => goToSlide(idx)}
                            className={`w-3 h-3 rounded-full cursor-pointer ${
                                idx === currentIndex ? "bg-white" : "bg-gray-500"
                            } ${isAnimating ? "pointer-events-none" : ""}`}
                        />
                    ))}
                </div>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={goNext}
                    disabled={isAnimating}
                    className={`text-white text-[30px] bg-gray-700 hover:bg-gray-600 rounded-full w-10 h-10 flex items-center justify-center transition-colors
                        ${isAnimating ? "opacity-50 pointer-events-none" : ""}`}
                >
                    &gt;
                </motion.button>
            </div>
        </div>
    );
};

export default SectionWrapper(Team, "");