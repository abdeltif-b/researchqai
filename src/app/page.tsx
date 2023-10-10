import Link from "next/link";
import { ArrowRight, GraduationCapIcon, LanguagesIcon, MicroscopeIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ReactNode } from "react";

const StepUI: React.FC<{ step: number; title: string; children: ReactNode }> = ({ step, title, children }) => (
  <div className="sm:text-center">
    <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-blue-400 bg-blue-100 sm:mx-auto">
      {step}
    </div>
    <h6 className="mb-2 text-xl font-semibold leading-5">{title}</h6>
    <p className="sm:mx-auto max-w-md mb-3 mt-2 text-zinc-700">{children}</p>
  </div>
);

const FeatureUI: React.FC<{ icon: ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="p-8 border-t sm:border-r">
    <div className="max-w-md text-center">
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 text-blue-400 sm:w-16 sm:h-16">
        {icon}
      </div>
      <h6 className="mb-2 text-xl font-semibold leading-5">{title}</h6>
      <p className="mb-3 text-zinc-700">{description} </p>
    </div>
  </div>
);

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="flex flex-col lg:flex-col mb-12 mt-6 items-center justify-center text-center">
        <div>
          <h1 className="mt-20 max-w-4xl text-5xl font-bold">Chat with any research paper</h1>

          <p className="mt-5 max-w-prose text-zinc-700 sm:text-3xl">Ask questions about any research paper using AI.</p>
          <p className="mt-5 max-w-prose text-zinc-900 sm:text-lg">
            We make research papers easier to understand by providing summaries, answers to questions, and information
            retrieval.
          </p>

          <Link
            className={buttonVariants({
              className: "mt-5",
            })}
            href="/dashboard"
          >
            Get started <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div>
          <div className="relative isolate">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/3 rotate-[30deg] bg-gradient-to-tr from-blue-100 to-blue-600 opacity-10 sm:left-[calc(50%-30rem)] sm:w-[100.1875rem]" />
            </div>

            <div>
              <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="mt-16 flow-root sm:mt-24">
                  <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                    <Image
                      src="/img/screenshot_1.png"
                      alt="screenshot_1"
                      width={1904}
                      height={934}
                      quality={100}
                      className="rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            ></div>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Feature section */}
      <div className="relative  py-1">
        <div className="mx-auto mb-10 mt-20 max-w-5xl">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="mt-2 font-bold text-3xl text-gray-900">Start chatting in minutes</h2>
              <p className="mt-4 text-lg text-gray-600">
                Unlock the Power of AI to Interact with scientific papers and academic articles.
              </p>
            </div>
          </div>

          {/* steps */}
          <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
            <StepUI step={1} title={"Sign up for an account"}>
              Either starting out with a free plan or choose our{" "}
              <Link href="/pricing" className="text-blue-700 underline underline-offset-2">
                pro plan.
              </Link>
            </StepUI>
            <StepUI step={2} title={"Upload or link a research paper"}>
              We&apos;ll process the research paper and make it ready for you to chat with.
            </StepUI>
            <StepUI step={3} title={"Engage in Conversation with AI"}>
              Ask questions or request summaries. It&apos;s that simple. Try out researchQAI today for free.
            </StepUI>
          </div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  src="/img/screenshot_2.png"
                  alt="screenshot_2"
                  width={1919}
                  height={935}
                  quality={100}
                  className="rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid row-gap-8 sm:grid-cols-1 lg:grid-cols-3">
          <FeatureUI
            icon={<MicroscopeIcon />}
            title={"For Researchers"}
            description={
              "Access the information necessary for your research from scientific papers, scholarly articles, and books."
            }
          />
          <FeatureUI
            icon={<GraduationCapIcon />}
            title={"For Students"}
            description={"Get ready for exams and get help with assignments."}
          />
          <FeatureUI
            icon={<LanguagesIcon />}
            title={"Any Language"}
            description={
              "Functions globally! researchqai can handle PDFs in any language and engage in conversations in any language."
            }
          />
        </div>
        <Link
          className={buttonVariants({
            className: "w-full",
            variant: "outline",
          })}
          href="/dashboard"
        >
          Get started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </>
  );
}
