"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function SitePage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "Shop", id: "/shop" },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="smallMedium"
      sizing="mediumLarge"
      background="aurora"
      cardStyle="layered-gradient"
      primaryButtonStyle="inset-glow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={navItems}
          brandName="InCup"
          bottomLeftText="Experience the best coffee"
          bottomRightText="hello@incup.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDualMedia
          title="Your Daily Brew of Happiness."
          description="At InCup, we craft more than just coffee; we create moments. From rich espresso to comforting lattes, discover your perfect escape."
          background={{ variant: "plain" }}
          tag="The Perfect Start"
          mediaItems={[
            {
              videoSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1771684785214-9g6egt6v.mp4",              imageAlt: "Coffee beans and espresso machine"},
            {
              imageSrc: "https://img.b2bpic.net/free-photo/vertical-shot-man-pouring-milk-into-cappuccino_181624-19406.jpg",              imageAlt: "Close up of latte art"},
          ]}
          rating={5}
          ratingText="Loved by Coffee Enthusiasts"
          buttons={[{ text: "View Our Menu", href: "#menu" }]}
          mediaAnimation="slide-up"
        />
      </div>
      
      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story, One Cup at a Time."
          description={[
            "InCup began with a simple passion: to serve exceptional coffee in a warm, welcoming space. We meticulously source our beans from the finest growers around the world, ensuring every cup delivers a rich, unforgettable experience.",            "More than just a coffee shop, InCup is a community hub where friends meet, ideas brew, and stories unfold. Our dedicated baristas are artisans, perfecting each pour with skill and care, making every visit a special moment."]}
          buttons={[{ text: "Learn More About Us", href: "#" }]}
          useInvertedBackground={true}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardThree
          products={[
            {
              id: "1",              name: "Classic Espresso",              price: "$3.50",              imageSrc: "https://img.b2bpic.net/free-photo/double-espresso-coffee-mug-with-cinnamon-sticks-coffee-beans-wooden-board_181624-57625.jpg",              imageAlt: "Rich classic espresso in a small cup"},
            {
              id: "2",              name: "Velvet Latte",              price: "$4.75",              imageSrc: "https://img.b2bpic.net/free-photo/top-view-glass-coffee-with-latte-art_140725-5204.jpg",              imageAlt: "Velvet latte with delicate latte art"},
            {
              id: "3",              name: "Artisan Croissant",              price: "$3.00",              imageSrc: "https://img.b2bpic.net/free-photo/croissant-coffee-food-photography_53876-104492.jpg",              imageAlt: "Flaky artisan croissant on a plate"},
            {
              id: "4",              name: "Signature Sandwich",              price: "$8.50",              imageSrc: "https://img.b2bpic.net/free-photo/peppercorns-salt-greenery-lie-before-healthy-wholemeal-sandwich_1304-2929.jpg",              imageAlt: "Gourmet signature sandwich with fresh ingredients"},
          ]}
          carouselMode="auto"
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          title="Our Signature Delights"
          description="Explore our menu of handcrafted beverages and freshly baked goods, made with the finest ingredients."
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardSix
          testimonials={[
            {
              id: "1",              name: "Sarah M.",              handle: "@sarah_lovescoffee",              testimonial: "InCup is my favorite spot! The coffee is always perfect, and the atmosphere is so inviting. It's truly a gem.",              imageSrc: "https://img.b2bpic.net/free-photo/beautiful-young-woman-is-using-app-her-smartphone-device-send-text-message-near-business-buildings_158595-6785.jpg?_wi=1",              imageAlt: "Sarah M. avatar"},
            {
              id: "2",              name: "David K.",              handle: "@davidk_dailygrind",              testimonial: "I've tried every coffee shop in town, and InCup stands out. Their lattes are exceptional and the staff are incredibly friendly.",              imageSrc: "https://img.b2bpic.net/free-photo/portrait-young-man-drinking-coffee-smiling-looking-camera-closeup_657883-686.jpg?_wi=1",              imageAlt: "David K. avatar"},
            {
              id: "3",              name: "Emily R.",              handle: "@emilyeatsandsips",              testimonial: "Beyond the amazing coffee, their pastries are a must-try. This place has become my daily ritual for good reason.",              imageSrc: "https://img.b2bpic.net/free-photo/young-woman-sitting-indoor-urban-cafe_158595-669.jpg",              imageAlt: "Emily R. avatar"},
            {
              id: "4",              name: "Michael S.",              handle: "@michaels_brew",              testimonial: "Consistently excellent coffee and a cozy environment to work or relax. Highly recommend the cold brew!",              imageSrc: "https://img.b2bpic.net/free-photo/close-up-portrait-happy-businesswoman-white-blouse-smiling-cheerfully-as-sitting-cafe_197531-23018.jpg",              imageAlt: "Michael S. avatar"},
            {
              id: "5",              name: "Jessica L.",              handle: "@jess_beans",              testimonial: "The best coffee in the city! The baristas remember my order, and it feels like home every time I visit.",              imageSrc: "https://img.b2bpic.net/free-photo/beautiful-young-woman-is-using-app-her-smartphone-device-send-text-message-near-business-buildings_158595-6785.jpg?_wi=2",              imageAlt: "Jessica L. avatar"},
            {
              id: "6",              name: "Chris T.",              handle: "@chris_cup",              testimonial: "A true coffee connoisseur's paradise. The attention to detail in every cup is evident.",              imageSrc: "https://img.b2bpic.net/free-photo/portrait-young-man-drinking-coffee-smiling-looking-camera-closeup_657883-686.jpg?_wi=2",              imageAlt: "Chris T. avatar"},
          ]}
          animationType="slide-up"
          title="What Our Community Says"
          description="Hear from our cherished customers about their InCup experience."
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          faqs={[
            {
              id: "1",              title: "What kind of coffee beans do you use?",              content: "We proudly use ethically sourced, single-origin Arabica beans from sustainable farms around the world, ensuring both quality and responsibility."},
            {
              id: "2",              title: "Do you offer dairy-free milk alternatives?",              content: "Yes, we offer a variety of dairy-free options including almond, oat, soy, and coconut milk for all our beverages."},
            {
              id: "3",              title: "Can I order coffee beans for home brewing?",              content: "Absolutely! We sell a selection of our premium roasted beans, available whole or ground to your preference, directly in-store."},
            {
              id: "4",              title: "Do you have gluten-free pastry options?",              content: "Yes, we have a rotating selection of delicious gluten-free pastries and snacks. Please ask our baristas for today's options."},
            {
              id: "5",              title: "Is there free Wi-Fi available?",              content: "Yes, we offer complimentary high-speed Wi-Fi for all our customers. Perfect for catching up on work or browsing."},
            {
              id: "6",              title: "Do you take reservations?",              content: "For small groups, no reservation is needed. For larger gatherings or private events, please contact us directly."},
          ]}
          title="Frequently Asked Questions"
          description="Find answers to common questions about InCup and our offerings."
          textboxLayout="default"
          faqsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Visit Us Today"
          title="Come and Experience InCup!"
          description="We can't wait to welcome you to InCup. Find us at [Your Address Here] or reach out with any questions."
          buttons={[
            { text: "Get Directions", href: "https://maps.google.com" },
            { text: "Contact Us", href: "mailto:hello@incup.com" },
          ]}
          background={{ variant: "plain" }}
          useInvertedBackground={true}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://img.b2bpic.net/free-photo/crop-hand-holding-portafilter-with-coffee_23-2147830571.jpg?_wi=2"
          imageAlt="Roasted coffee beans in a wooden scoop"
          columns={[
            {
              title: "Menu",              items: [
                { label: "Coffee", href: "#menu" },
                { label: "Pastries", href: "#menu" },
                { label: "Sandwiches", href: "#menu" },
              ],
            },
            {
              title: "About Us",              items: [
                { label: "Our Story", href: "#about" },
                { label: "Team", href: "#" },
              ],
            },
            {
              title: "Support",              items: [
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ],
            },
          ]}
          logoText="InCup"
          copyrightText="© 2024 InCup. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}
