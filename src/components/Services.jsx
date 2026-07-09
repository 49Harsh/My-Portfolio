import Section from "./Section";
import Heading from "./Heading";

import Tilt from "react-parallax-tilt";
import Button from "./Button";

import { Gradient } from "./design/Services";

import myimg from "../image/myimages.png";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Services = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);
    setResult("");

    // Web3Forms ke liye FormData
    const formData = new FormData(form.current);
    formData.append("access_key", "eb8fa4c2-2f03-472f-bd0d-9644568e71c4");

    // dono services ek saath call karo
    const emailjsPromise = emailjs.sendForm(
      "service_8uisjim",
      "template_94an65q",
      form.current,
      { publicKey: "4jJmrFneYWrBw75Y7" }
    );

    const web3formsPromise = fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    try {
      const results = await Promise.allSettled([
        emailjsPromise,
        web3formsPromise,
      ]);

      const emailjsOk = results[0].status === "fulfilled";
      const web3formsOk =
        results[1].status === "fulfilled" && results[1].value?.success;

      if (emailjsOk || web3formsOk) {
        setResult("Message sent!");
        form.current.reset();
      } else {
        console.log("EmailJS error:", results[0]);
        console.log("Web3Forms error:", results[1]);
        setResult("Something went wrong, please try again.");
      }
    } catch (error) {
      console.log("Unexpected error:", error);
      setResult("Something went wrong, please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Section id="how-to-use">
      <div className="container mx-auto px-4">
        <Heading
          title="If you have any kind of query, you can email me. Thank you.'"
          text="------------------------------------------------------------"
        />

        <div className="relative ">
          <div className="relative z-1 flex flex-col w-[97%]  lg:flex-row lg:justify-center lg:items-center mx-[10px] items-center h-auto  lg:h-[39rem] mb-5 p-4  border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            {/* bg image */}
            <div className="absolute     bottom-0 left-0 right-0 top-0 mx-8 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <div className="relative z-10 w-full lg:w-1/2 p-4 lg:p-8">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col space-y-4"
              >
                <label className="">Name</label>
                <input
                  type="text"
                  name="user_name"
                  className="bg-[#5eead4] border border-n-1/10 rounded-3xl bg-opacity-10 px-3 py-2"
                  required
                />
                <label className="">Email</label>
                <input
                  type="email"
                  name="user_email"
                  className="bg-[#5eead4] border border-n-1/10 rounded-3xl bg-opacity-10 px-3 py-2"
                  required
                />
                <label className="">Message</label>
                <textarea
                  name="message"
                  className="bg-[#5eead4] border border-n-1/10 rounded-3xl bg-opacity-10 px-3 py-2 h-32"
                  required
                />

                <Button
                  type="submit"
                  value={sending ? "Sending..." : "Send"}
                  className=" w-[90px] mx-auto mt-4"
                  href="#login"
                >
                  <input
                    type="submit"
                    value={sending ? "Sending..." : "Send"}
                    disabled={sending}
                    className=" w-full h-full "
                  />
                </Button>

                {result && (
                  <p className="text-center text-sm mt-2">{result}</p>
                )}
              </form>
            </div>

            <div className="relative z-10 w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
              <Tilt>
                <div className="rounded-full">
                  <img src={myimg} alt="Portrait of the developer" className="rounded-full drop-shadow-md" />
                </div>
              </Tilt>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;