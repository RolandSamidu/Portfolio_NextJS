import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { GithubIcon } from "@/components/Icons";
import { DevIcon } from "@/components/Icons";
import { BookIcon } from "@/components/Icons";

import proj1 from "/public/images/projects/research-project.png";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
      <Head>
        <link
          rel="Projects"
          href="https://github.com/RolandSamidu/Research_Project_2023-24_015"
        ></link>
        <title>CardioCare Research Project | By DewA3RS</title>
        <meta
          name="description"
          content="As the team leader of a passionate group of final-year undergraduates, I led the development of CardioCare - a mobile app that promotes heart health and wellness. Combining our knowledge in technology and healthcare, we aimed to make heart health management more accessible and effective for all."
        />
      </Head>

      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="CardioCare Mobile App"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8"
            >
              <h2 className="mb-4 text-2xl font-bold capitalize text-dark/75 dark:text-light/75">
                Enhancing Heart Health with AI: A Multifunctional Mobile App for
                Prediction, Nutrition, and Pharmacy Support.
              </h2>
              <h3 className="mb-4 text-lg font-bold  text-lightGreen dark:text-primaryDark">
                Python | KNN | YOLOv5 | Flutter | Android Studio
              </h3>
              <div classNname="w-full border-2 border-solid border-light bg-light"></div>
              <p className="">
                Heart diseases remain one of the most pressing global health
                issues, underscoring the vital importance of early intervention
                and preventive care. With this in mind, our team set out to
                develop a mobile application that addresses various aspects of
                heart health management, aiming to make proactive care both
                accessible and efficient for the public.
              </p>
              <h4 className="mt-4 text-lg font-800 capitalize text-dark/75 dark:text-light/75">
                An All-in-One Mobile Health Solution
              </h4>
              <p className="my-4">
                The mobile application is designed with four core components:
                predicting the risk of becoming a heart patient, identifying the
                risk category for those already diagnosed, recognizing food
                items and providing dietary recommendations, and suggesting the
                best-rated nearby pharmacies for fulfilling prescriptions. Each
                feature was carefully designed to provide personalized support
                for individuals at different stages of heart health management.
              </p>

              <div className="mt-2 flex items-center grid-cols-8 gap-4 sm:gap-8">
                <Link
                  className="rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold
             sm:px-4 sm:text-base rounded-lg border-2 border-solid bg-dark
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base"
                  aria-label="Visit Theme Demo"
                  href="https://cardiosync.github.io/CardioCare/"
                  target={"_blank"}
                >
                  Visit Demo
                </Link>
                <Link
                  href="https://github.com/RolandSamidu/Research_Project_2023-24_015"
                  target={"_blank"}
                  className="w-10"
                  aria-label="github link"
                >
                  <GithubIcon />
                </Link>
                <Link
                  href="https://nspace.nsbm.ac.lk/items/d105bcb2-25de-4e57-9b29-e94ca6959e62"
                  target={"_blank"}
                  className="w-10"
                  aria-label="github link"
                >
                  <BookIcon />
                </Link>
              </div>
            </div>
            <div
              className="relative col-span-4 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            "
            >
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="h-auto w-full rounded-2xl"
                src={proj1}
                alt="Clay Gatsby Theme"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
