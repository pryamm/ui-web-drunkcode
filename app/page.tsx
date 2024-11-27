"use client";

import courses from "./courses.json";
import contacts from "./contacts.json";
import AboutUsGrid from "@/components/grid/about-us.grid";
import ContactGrid from "@/components/grid/contact.grid";
import CourseOptionGrid from "@/components/grid/course-option.grid";
import WhoShouldJoinUsGrid from "@/components/grid/who-should-join-us.grid";
import WhyChooseUsGrid from "@/components/grid/why-choose-us.grid";
import { cn } from "@/libs/utils";
import { Layout, Responsive, WidthProvider } from "react-grid-layout";
import SocialMediaGrid from "@/components/grid/social-media";
const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Home() {
  const layout: Layout[] = [
    { i: "about", x: 0, y: 0, w: 4, h: 2 },
    { i: "who-should-join-us", x: 4, y: 1, w: 2, h: 2 },
    { i: "why-choose-us", x: 6, y: 1, w: 2, h: 4 },
    { i: "contact", x: 2, y: 2, w: 2, h: 2 },
    { i: "community", x: 2, y: 4, w: 2, h: 2 },
    ...contacts.map((_, index) => ({
      i: `contact-${index}`,
      x: index % 2, // Alternates between 0 and 1 for two columns
      y: Math.floor(index / 2), // Moves to the next row after every 2 items
      w: 1,
      h: 1,
    })),
    ...courses.map((_, index) => ({
      i: `course-${index}`,
      x: (index % 2) * 2,
      y: Math.floor(index / 2) * 2 + 6,
      w: 2,
      h: 2,
    })),
  ];

  const responsiveProps = {
    layouts: { lg: layout, md: layout },
    breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
    cols: { lg: 8, md: 6, sm: 4, xs: 2, xxs: 2 },
    // isBounded: true,
    rowHeight: 150,
    useCSSTransforms: false,
  };

  return (
    <div className='p-4'>
      <ResponsiveGridLayout
        className={cn(
          "mx-auto max-w-[1200px] max-lg:max-w-[800px] max-md:max-w-[375px] max-sm:max-w-[320px]",
          "translate-y-0 opacity-100",
          "transition-[opacity,_transform] duration-700"
        )}
        {...responsiveProps}
      >
        <div key='about'>
          <AboutUsGrid />
        </div>
        <div key='who-should-join-us'>
          <WhoShouldJoinUsGrid />
        </div>
        <div key='why-choose-us'>
          <WhyChooseUsGrid />
        </div>
        <div key='contact'>
          <ContactGrid />
        </div>
        {contacts.map((contact, index) => (
          <div key={`contact-${index}`}>
            <SocialMediaGrid key={index} {...contact} />
          </div>
        ))}
        {/* <div key='community'>
          <AboutUsGrid />
        </div> */}
        {courses.map((course, index) => (
          <div key={`course-${index}`}>
            <CourseOptionGrid key={index} {...course} />
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
}
