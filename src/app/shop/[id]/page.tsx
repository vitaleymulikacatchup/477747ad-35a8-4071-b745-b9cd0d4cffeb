"use client";

import { Suspense, use, useCallback } from "react";
import { useRouter } from "next/navigation";
import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import ProductDetailCard from "@/components/ecommerce/productDetail/ProductDetailCard";
import ProductCart from "@/components/ecommerce/cart/ProductCart";
import { useProductDetail } from "@/hooks/useProductDetail";
import { useCart } from "@/hooks/useCart";
import { useCheckout } from "@/hooks/useCheckout";

interface ProductPageProps {
    params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
    return (
        <Suspense fallback={null}>
            <ProductPageContent params={params} />
        </Suspense>
    );
}

function ProductPageContent({ params }: ProductPageProps) {
    const { id } = use(params);
    const router = useRouter();

    const {
        product,
        isLoading,
        images,
        meta,
        variants,
        quantityVariant,
        selectedQuantity,
        createCartItem,
    } = useProductDetail(id);

    const {
        items: cartItems,
        isOpen: cartOpen,
        setIsOpen: setCartOpen,
        addItem,
        updateQuantity,
        removeItem,
        total: cartTotal,
        getCheckoutItems,
    } = useCart();

    const { buyNow, checkout, isLoading: isCheckoutLoading } = useCheckout();

    const handleAddToCart = useCallback(() => {
        const item = createCartItem();
        if (item) {
            addItem(item);
        }
    }, [createCartItem, addItem]);

    const handleBuyNow = useCallback(() => {
        if (product) {
            buyNow(product, selectedQuantity);
        }
    }, [product, selectedQuantity, buyNow]);

    const handleCheckout = useCallback(async () => {
        if (cartItems.length === 0) return;

        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set("success", "true");

        await checkout(getCheckoutItems(), { successUrl: currentUrl.toString() });
    }, [cartItems, checkout, getCheckoutItems]);

    const themeProviderProps = {
        children: null as any,
        defaultButtonVariant: "shift-hover" as const,
        defaultTextAnimation: "entrance-slide" as const,
        borderRadius: "rounded",
        contentWidth: "smallMedium",
        sizing: "mediumLarge",
        background: "aurora",
        cardStyle: "layered-gradient",
        primaryButtonStyle: "inset-glow",
        secondaryButtonStyle: "radial-glow",
        headingFontWeight: "normal"
    };

    const navbarProps = {
        navItems: [{ name: "Home", id: "/" }, { name: "Shop", id: "/shop" }],
        brandName: "InCup",        bottomLeftText: "Experience the best coffee",        bottomRightText: "hello@incup.com",        button: { text: "Cart", onClick: () => setCartOpen(true) }
    };

    const footerProps = {
        imageSrc: "https://img.b2bpic.net/free-photo/crop-hand-holding-portafilter-with-coffee_23-2147830571.jpg?_wi=5",        imageAlt: "Roasted coffee beans in a wooden scoop",        columns: [
            { title: "Menu", items: [{ label: "Coffee", href: "#menu" }, { label: "Pastries", href: "#menu" }, { label: "Sandwiches", href: "#menu" }] },
            { title: "About Us", items: [{ label: "Our Story", href: "#about" }, { label: "Team", href: "#" }] },
            { title: "Support", items: [{ label: "FAQ", href: "#faq" }, { label: "Contact", href: "#contact" }] }
        ],
        logoText: "InCup",        copyrightText: "© 2024 InCup. All rights reserved."
    };

    if (isLoading) {
        return (
            <ThemeProvider {...themeProviderProps}>
                <ReactLenis root>
                    <div id="navbar" data-section="navbar">
                        <NavbarStyleFullscreen {...navbarProps} />
                    </div>
                    <div id="loading-state" data-section="loading-state">
                        <main className="min-h-screen flex items-center justify-center pt-20">
                            <p className="text-foreground">Loading product...</p>
                        </main>
                    </div>
                    <div id="footer" data-section="footer">
                        <FooterMedia {...footerProps} />
                    </div>
                </ReactLenis>
            </ThemeProvider>
        );
    }

    if (!product) {
        return (
            <ThemeProvider {...themeProviderProps}>
                <ReactLenis root>
                    <div id="navbar" data-section="navbar">
                        <NavbarStyleFullscreen {...navbarProps} />
                    </div>
                    <div id="not-found-state" data-section="not-found-state">
                        <main className="min-h-screen flex items-center justify-center pt-20">
                            <div className="text-center">
                                <p className="text-foreground mb-4">Product not found</p>
                                <button
                                    onClick={() => router.push("/shop")}
                                    className="primary-button px-6 py-2 rounded-theme text-primary-cta-text"
                                >
                                    Back to Shop
                                </button>
                            </div>
                        </main>
                    </div>
                    <div id="footer" data-section="footer">
                        <FooterMedia {...footerProps} />
                    </div>
                </ReactLenis>
            </ThemeProvider>
        );
    }

    return (
        <ThemeProvider {...themeProviderProps}>
            <ReactLenis root>
                <div id="navbar" data-section="navbar">
                    <NavbarStyleFullscreen {...navbarProps} />
                </div>
                <div id="product-detail-card" data-section="product-detail-card">
                    <ProductDetailCard
                        layout="page"
                        name={product.name}
                        price={product.price}
                        salePrice={meta.salePrice}
                        rating={product.rating || 0}
                        description={product.description}
                        images={images}
                        variants={variants.length > 0 ? variants : undefined}
                        quantity={quantityVariant}
                        ribbon={meta.ribbon}
                        inventoryStatus={meta.inventoryStatus}
                        inventoryQuantity={meta.inventoryQuantity}
                        sku={meta.sku}
                        buttons={[
                            { text: "Add To Cart", onClick: handleAddToCart },
                            { text: "Buy Now", onClick: handleBuyNow },
                        ]}
                    />
                </div>
                <div id="product-cart" data-section="product-cart">
                    <ProductCart
                        isOpen={cartOpen}
                        onClose={() => setCartOpen(false)}
                        items={cartItems}
                        onQuantityChange={updateQuantity}
                        onRemove={removeItem}
                        total={`$${cartTotal}`}
                        buttons={[
                            {
                                text: isCheckoutLoading ? "Processing..." : "Check Out",                                onClick: handleCheckout,
                            },
                        ]}
                    />
                </div>
                <div id="footer" data-section="footer">
                    <FooterMedia {...footerProps} />
                </div>
            </ReactLenis>
        </ThemeProvider>
    );
}
