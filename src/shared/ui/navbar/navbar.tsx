"use client";

import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import {Cross as Hamburger} from "hamburger-react";
import {useState} from "react";

import styles from "./navbar.module.css";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <header className={styles.header}>
            <nav className={classNames("container", styles.nav)}>
                <div>
                    <Link href="/" className={styles.logo}>
                        <Image
                            src="/logo.svg"
                            alt="SmileA-logo"
                            width={40}
                            height={40}
                        />
                        <span>Стоматология Смайл-А</span>
                    </Link>
                </div>
                <div
                    className={classNames(
                        styles.linkItems,
                        isOpen && styles.open,
                    )}
                >
                    <Link href="/about" onClick={handleLinkClick}>
                        О стоматологии
                    </Link>
                    <Link href="/pricelist" onClick={handleLinkClick}>
                        Услуги
                    </Link>
                    <Link href="/discounts" onClick={handleLinkClick}>
                        Акции
                    </Link>
                    <Link href="/doctors" onClick={handleLinkClick}>
                        Врачи
                    </Link>
                    <Link href="/feedback" onClick={handleLinkClick}>
                        Отзывы
                    </Link>
                    <Link href="/contacts" onClick={handleLinkClick}>
                        Контакты
                    </Link>
                    {isOpen && (
                        <div className={styles.shortMobile}>
                            <Link href="https://wa.me/+79218956571">
                                <Image
                                    src="/whatsapp.svg"
                                    alt="whatsapp"
                                    width={20}
                                    height={20}
                                />
                                WhatsApp
                            </Link>
                            <Link href="tel:+79218956571">
                                <Image
                                    src="/phone.svg"
                                    alt="tel"
                                    width={18}
                                    height={18}
                                />
                                +7 (921) 895-65-71
                            </Link>
                            <Link href="tel:+78125160027">
                                <Image
                                    src="/phone.svg"
                                    alt="tel"
                                    width={18}
                                    height={18}
                                />
                                +7 (812) 516-00-27
                            </Link>
                        </div>
                    )}
                </div>
                <div className={styles.shortContacts}>
                    <Link href="https://wa.me/+79218956571">
                        <Image
                            src="/whatsapp.svg"
                            alt="whatsapp"
                            width={20}
                            height={20}
                        />
                    </Link>
                    <Link href="tel:+78125160027">
                        <Image
                            src="/phone.svg"
                            alt="tel"
                            width={18}
                            height={18}
                        />
                    </Link>
                    <Link href="tel:+78125160027">
                        <Image
                            src="/map-point.svg"
                            alt="location"
                            width={18}
                            height={18}
                        />
                    </Link>
                </div>
                <div className={styles.menu}>
                    <Hamburger
                        size={18}
                        rounded
                        onToggle={setIsOpen}
                        toggled={isOpen}
                    />
                </div>
            </nav>
        </header>
    );
};
