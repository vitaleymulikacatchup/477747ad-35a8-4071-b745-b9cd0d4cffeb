"use client";

import { Suspense, useCallback } from "react";
import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import ProductCatalog from "@/components/ecommerce/productCatalog/ProductCatalog";
import { useProductCatalog } from "@/hooks/useProductCatalog";
import { useCart } from "@/hooks/useCart";
import { useCheckout } from "@/hooks/useCheckout";
import ProductCart from "@/components/ecommerce/cart/ProductCart";

function ShopPageContent() {
    const {
        products,
        isLoading,
        search,
        setSearch,
        filters,
    } = useProductCatalog({ basePath: "/shop" });

    const {
        items: cartItems,
        isOpen: cartOpen,
        setIsOpen: setCartOpen,
        updateQuantity,
        removeItem,
        total: cartTotal,
        getCheckoutItems,
    } = useCart();

    const { checkout, isLoading: isCheckoutLoading } = useCheckout();

    const handleCheckout = useCallback(async () => {
        if (cartItems.length === 0) return;

        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set("success", "true");

        await checkout(getCheckoutItems(), { successUrl: currentUrl.toString() });
    }, [cartItems, checkout, getCheckoutItems]);

    const themeProviderProps = {
        defaultButtonVariant: "shift-hover",        defaultTextAnimation: "entrance-slide",        borderRadius: "rounded",        contentWidth: "smallMedium",        sizing: "mediumLarge",        background: "aurora",        cardStyle: "layered-gradient",        primaryButtonStyle: "inset-glow",        secondaryButtonStyle: "radial-glow",        headingFontWeight: "normal"
    };

    const navbarProps = {
        navItems: [{ name: "Home", id: "/" }, { name: "Shop", id: "/shop" }],
        brandName: "InCup",        bottomLeftText: "Experience the best coffee",        bottomRightText: "hello@incup.com"};

    const footerProps = {
        imageSrc: "https://img.b2bpic.net/free-photo/crop-hand-holding-portafilter-with-coffee_23-2147830571.jpg",        imageAlt: "Roasted coffee beans in a wooden scoop",        columns: [
            { title: "Menu", items: [{ label: "Coffee", href: "/#menu" }, { label: "Pastries", href: "/#menu" }, { label: "Sandwiches", href: "/#menu" }] },
            { title: "About Us", items: [{ label: "Our Story", href: "/#about" }, { label: "Team", href: "#" }] },
            { title: "Support", items: [{ label: "FAQ", href: "/#faq" }, { label: "Contact", href: "/#contact" }] }
        ],
        logoText: "InCup",        copyrightText: "© 2024 InCup. All rights reserved."
    };

    if (isLoading) {
        return (
            <ThemeProvider {...themeProviderProps}>
                <ReactLenis root>
                    <div id="nav" data-section="nav">
                        <NavbarStyleFullscreen {...navbarProps} />
                    </div>
                    <div id="loading-state" data-section="loading-state">
                        <main className="min-h-screen flex items-center justify-center pt-20">
                            <p className="text-foreground">Loading products...</p>
                        </main>
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
                                    text: isCheckoutLoading ? "Processing..." : "Check Out",                                    onClick: handleCheckout,
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

    return (
        <ThemeProvider {...themeProviderProps}>
            <ReactLenis root>
                <div id="nav" data-section="nav">
                    <NavbarStyleFullscreen {...navbarProps} />
                </div>
                <div id="product-catalog" data-section="product-catalog">
                    <ProductCatalog
                        layout="page"
                        products={products}
                        searchValue={search}
                        onSearchChange={setSearch}
                        searchPlaceholder="Search products..."
                        filters={filters}
                        emptyMessage="No products found"
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

export default function ShopPage() {
    return (
        <Suspense>
            <ShopPageContent />
        </Suspense>
    );
}
