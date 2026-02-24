"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function BlogPage() {
    const { posts, isLoading } = useBlogPosts();

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
            <ReactLenis root>
                <NavbarStyleFullscreen
                    navItems={[{ "name": "Home", "id": "/" }, { "name": "Menu", "id": "menu" }, { "name": "About", "id": "about" }, { "name": "Reviews", "id": "reviews" }, { "name": "Contact", "id": "contact" }]}
                    brandName="InCup"
                    bottomLeftText="Experience the best coffee"
                    bottomRightText="hello@incup.com"
                />

                {isLoading ? (
                    <div className="w-content-width mx-auto py-20 text-center">
                        <p className="text-foreground">Loading posts...</p>
                    </div>
                ) : (
                    <BlogCardOne
                        blogs={posts}
                        title="Latest Articles"
                        description="Insights and updates from our team"
                        animationType="slide-up"
                        textboxLayout="default"
                        useInvertedBackground={false}
                        carouselMode="buttons"
                    />
                )}

                <FooterMedia
                    imageSrc="https://img.b2bpic.net/free-photo/crop-hand-holding-portafilter-with-coffee_23-2147830571.jpg?_wi=3"
                    imageAlt="Roasted coffee beans in a wooden scoop"
                    columns={[
                        {
                            title: "Menu",                            items: [
                                { label: "Coffee", href: "#menu" },
                                { label: "Pastries", href: "#menu" },
                                { label: "Sandwiches", href: "#menu" },
                            ],
                        },
                        {
                            title: "About Us",                            items: [
                                { label: "Our Story", href: "#about" },
                                { label: "Team", href: "#" },
                            ],
                        },
                        {
                            title: "Support",                            items: [
                                { label: "FAQ", href: "#faq" },
                                { label: "Contact", href: "#contact" },
                            ],
                        },
                    ]}
                    logoText="InCup"
                    copyrightText="© 2024 InCup. All rights reserved."
                />
            </ReactLenis>
        </ThemeProvider>
    );
}
