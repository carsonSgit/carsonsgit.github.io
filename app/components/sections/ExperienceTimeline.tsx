import React, { useRef, useState, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { education } from '../../data/education';
import { experience } from '../../data/experience';
import TimelineItem from '../ui/TimelineItem';
import TimelineSection from '../ui/TimelineSection';
import '../../styles/components.scss';

gsap.registerPlugin(ScrollTrigger);

const ExperienceTimeline = () => {
  const [hoveredEducationIndex, setHoveredEducationIndex] = useState<number | null>(null);
  const [hoveredExperienceIndex, setHoveredExperienceIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timelineItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleEducationMouseEnter = useCallback((index: number): void => {
    setHoveredEducationIndex(index);
  }, []);
  const handleEducationMouseLeave = useCallback((): void => {
    setHoveredEducationIndex(null);
  }, []);
  const handleExperienceMouseEnter = useCallback((index: number): void => {
    setHoveredExperienceIndex(index);
  }, []);
  const handleExperienceMouseLeave = useCallback((): void => {
    setHoveredExperienceIndex(null);
  }, []);

  useEffect(() => {
    const items = timelineItemsRef.current.filter(Boolean) as HTMLDivElement[];
    
    if (items.length === 0) return;

    gsap.set(items, {
      y: 50,
      opacity: 0,
    });

    const timelines: gsap.core.Timeline[] = [];

    items.forEach((item, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none none", 
        },
      });

      timelines.push(tl);

      tl.to(item, {
        y: 0,
        opacity: 1,
        duration: 0.4, 
        ease: "back.out(1.7)",
        delay: index * 0.05,
      });
    });

    return () => {
      timelines.forEach(tl => {
        const scrollTrigger = tl.scrollTrigger;
        if (scrollTrigger) {
          scrollTrigger.kill();
        }
        tl.kill();
      });
      // Clean up any remaining triggers for these items
      ScrollTrigger.getAll().forEach(trigger => {
        if (items.some(item => trigger.trigger === item)) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div
      className="experience-grid"
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="timeline">
        <TimelineSection title="EDUCATION">
          {education.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              isEducation={true}
              isHovered={isHovered}
              hoveredIndex={hoveredEducationIndex}
              onMouseEnter={handleEducationMouseEnter}
              onMouseLeave={handleEducationMouseLeave}
              itemRef={(el) => (timelineItemsRef.current[index] = el)}
            />
          ))}
        </TimelineSection>

        <TimelineSection title="EXPERIENCE">
          {experience.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              isEducation={false}
              isHovered={isHovered}
              hoveredIndex={hoveredExperienceIndex}
              onMouseEnter={handleExperienceMouseEnter}
              onMouseLeave={handleExperienceMouseLeave}
              itemRef={(el) => (timelineItemsRef.current[education.length + index] = el)}
            />
          ))}
        </TimelineSection>
      </div>
    </div>
  );
};

export default ExperienceTimeline;

