import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Breadcrumbs } from "@/components/Breadcrumbs";

function Contact() {
  const { toast } = useToast();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_o2szija", "template_ec2yvo8", form.current, {
        publicKey: "0OARZqf9ukJo6JCQP",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          form.current.reset();
          toast({
            title: "Success",
            description: "Your email was sent successfully.",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          toast({
            title: "Error",
            description: "Oops! There was an error sending your message. Please try again later.",
          });
        }
      );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Breadcrumbs home="home" current="contact us" />
      <div className="flex flex-grow justify-center flex-wrap my-10">
        <div className="container justify-center flex flex-wrap w-full">
          <div className="md:container w-full lg:w-5/12 my-5">
            <h1 className="text-3xl font-semibold my-1">Contact us</h1>
            <p className="text-zinc-800 my-1">
              Count on us for attentive support every step of the way, from inquiries to
              post-purchase assistance.
            </p>
            <div className="w-full flex flex-col">
              <div className="flex items-center my-5">
                <div className="flex me-4">
                  <CiLocationOn className="text-3xl w-auto text-slate-800" />
                </div>
                <p className="text-sm w-auto">
                  Lot 1b Blk 3-E Marigold St. Jasmine St. Unit Ruby Park, Victoria Homes Tunasan
                  Muntinlupa City
                </p>
              </div>
              <div className="flex items-center my-5">
                <div className="flex me-4">
                  <CiMail className="text-3xl w-auto text-slate-800" />
                </div>
                <p className="text-sm w-auto">Service@Golftime.Ph</p>
              </div>
              <div className="flex items-center my-5">
                <div className="flex me-4">
                  <CiPhone className="text-3xl w-auto text-slate-800" />
                </div>
                <p className="text-sm w-auto">02-83506666</p>
              </div>
            </div>
          </div>
          <div className="md:container w-full lg:w-7/12 flex flex-wrap">
            <form ref={form} onSubmit={sendEmail} className="flex flex-wrap shadow-lg p-5 md:p-10">
              <input
                type="text"
                name="user_name"
                className="border w-full text-sm p-5 my-2 h-14"
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="user_email"
                className="border w-full text-sm p-5 my-2 h-14"
                placeholder="Email"
                required
              />
              <textarea
                name="message"
                className="border w-full text-sm p-5 my-2 h-24"
                placeholder="Message"
                required
              />
              <input
                type="submit"
                value="Send"
                className="w-full py-3 my-2 bg-green-950 text-white cursor-pointer"
              />
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}

export default Contact;
