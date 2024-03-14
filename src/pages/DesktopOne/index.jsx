import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Text, Button, Input } from "../../components";

export default function DesktopOnePage() {
  return (
    <>
      <Helmet>
        <title>Aadesh's Application3</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="h-[1024px] w-full pr-[18px] py-[18px] bg-gradient2 relative">
        <div className="flex justify-center w-[78%] right-[6%] top-[13%] p-[11px] m-auto bg-white-A700 shadow-lg absolute rounded-[23px]">
          <div className="h-[669px] w-full pr-[37px] mx-auto md:p-5 sm:pr-5 bg-gradient1 relative max-w-[1035px] rounded-[29px]">
            <div className="flex flex-col items-end w-[35%] h-full left-0 bottom-0 top-0 p-[27px] my-auto sm:p-5 bg-gradient shadow-md absolute rounded-[29px]">
              <Img src="images/img_vector_1.svg" alt="vectorone_one" className="h-[521px] mt-[92px] mr-1" />
            </div>
            <div className="h-[510px] w-[44%] left-0 top-[9%] m-auto shadow-sm absolute" />
            <Img
              src="images/img_saly_13.png"
              alt="salythirteen"
              className="h-[510px] w-[44%] left-0 top-[9%] m-auto object-cover absolute"
            />
            <a href="#" className="bottom-[12%] right-[35%] m-auto absolute">
              <Heading
                as="h1"
                className="!text-gray-900_02 tracking-[8.39px] !font-inriaserif !text-[23.98px] !font-bold"
              >
                Sign up
              </Heading>
            </a>
            <div className="h-[75px] w-[28%] bottom-[9%] right-[32%] m-auto border-black-900 border border-solid shadow-xs absolute rounded-[11px]" />
            <div className="flex flex-col items-center w-[50%] gap-[26px] right-[4%] top-[20%] m-auto absolute">
              <Button
                shape="round"
                leftIcon={<Img src="images/img_logosgoogleicon.svg" alt="logos:google-icon" />}
                className="gap-[9px] sm:pr-5 tracking-[2.64px] font-light min-w-[187px]"
              >
                Google
              </Button>
              <Heading as="h2" className="tracking-[2.64px] !text-[23.98px]">
                OR
              </Heading>
              <Input
                shape="round"
                type="email"
                name="email"
                placeholder="Email"
                suffix={<Img src="images/img_icroundmarkemailread.svg" alt="ic:round-mark-email-read" />}
                className="self-stretch gap-[35px] tracking-[8.39px]"
              />
              <div className="self-stretch h-[86px] relative">
                <Img
                  src="images/img_ri_lock_password_fill.svg"
                  alt="rilock_one"
                  className="h-[44px] w-[44px] right-[3%] top-[22%] m-auto absolute"
                />
                <Input
                  shape="round"
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full left-0 bottom-0 right-0 top-0 m-auto sm:pr-5 tracking-[7.31px] absolute"
                />
              </div>
            </div>
            <div className="flex justify-end items-center w-[27%] gap-[29px] bottom-[9%] right-[4%] m-auto absolute">
              <Heading as="h3" className="self-end tracking-[2.64px] !text-[23.98px]">
                OR
              </Heading>
              <Button
                color="black_900"
                size="sm"
                className="sm:px-5 tracking-[8.39px] font-inriaserif font-bold min-w-[200px] rounded-[11px]"
              >
                Login
              </Button>
            </div>
            <Text as="p" className="right-[23%] top-[5%] m-auto tracking-[1.01px] !text-[28.77px] absolute">
              <span className="text-black-900 font-semibold">Welcome back to </span>
              <span className="text-transparent font-semibold bg-gradient3 bg-clip-text">adhikara</span>
              <span className="text-transparent font-semibold bg-gradient3 bg-clip-text">,</span>
            </Text>
          </div>
        </div>
        <Img
          src="images/img_removal_1.png"
          alt="removalone_one"
          className="h-[259px] w-[21%] bottom-[2%] left-0 m-auto object-cover absolute"
        />
        <Heading
          size="s"
          as="h2"
          className="w-[30%] left-[2%] top-[4%] m-auto !text-deep_orange-300_ce tracking-[12.00px] italic absolute"
        >
          <>
            Know Your
            <br />
            Rights
          </>
        </Heading>
      </div>
    </>
  );
}
