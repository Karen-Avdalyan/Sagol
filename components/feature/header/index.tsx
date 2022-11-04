import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import Icon from "components/shared/icon";
import Image from "components/shared/image";
import { navBarPaths } from "utils/constants/navBarPaths";
import { Button, Menu, Collapse } from 'antd';
import { navItems } from "utils/constants/headerType";
import DropdownHeader from "components/shared/dropDownHeader";
import { Languages } from 'utils/enum/languageEnum';
import { images } from "utils/constants/images";

import styles from "./header.module.scss";

export default function Header(): JSX.Element {
  const route = useRouter();
  const { t } = useTranslation('common');
  const [showHamburger, setShowHamburger] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [windowScreen, setWindowScreen] = useState<number | undefined>();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [newArr, setNewArr] = useState<number[]>([]);
  const { Panel } = Collapse;

  const navLists = [
    { name: t("home_header"), href: "/", dropdown: false },
    { name: t("about_header"), href: route.locale === Languages.HEBREW ? `${Languages.HEBREWLINK}${navBarPaths.about}` : navBarPaths.about, dropdown: false },
    {
      name: t("products_header"), href: route.locale === Languages.HEBREW ? `${Languages.HEBREWLINK}${navBarPaths.products}` : navBarPaths.products, dropdown: true,
      menuMobile: [
        { name: "see_all" },
        { name: "products_items0" },
        { name: "products_items1" },
        { name: "products_items2" },
        { name: "products_items3" },
        { name: "products_items4" },
        { name: "products_items5" },
      ],
      menu: (<Menu
        items={[
          {
            key: '0',
            label: (
              !isMobile && <Link href={navBarPaths.products}>{t("see_all")}</Link>
            ),
          },
          {
            key: '1',
            label: (
              <Link href={navBarPaths.litvalamps}>{t("products_items0")}</Link>
            ),
          },
          {
            key: '2',
            label: (
              <Link href={navBarPaths.air}>{t("products_items1")}</Link>
            ),
          },
          {
            key: '3',
            label: (
              <Link href={navBarPaths.deodorization}>{t("products_items2")}</Link>
            ),
          },
          {
            key: '4',
            label: (
              <Link href={navBarPaths.disinfection}>{t("products_items3")}</Link>
            ),
          },
          {
            key: '5',
            label: (
              <Link href={navBarPaths.system}>{t("products_items4")}</Link>
            ),
          },
          {
            key: '6',
            label: (
              <Link href={navBarPaths.p900gx}>{t("products_items5")}</Link>
            ),
          },
        ]}
      />)
    },
    {
      name: t("domains_header"), href: route.locale === Languages.HEBREW ? `${Languages.HEBREWLINK}${navBarPaths.medical}` : navBarPaths.medical, dropdown: true,
      menuMobile: [
        { name: "home_card_title0" },
        { name: "home_card_title3" },
        { name: "home_card_title4" },
        { name: "home_card_title1" },
        { name: "home_card_title2" },
      ],
      menu: (<Menu
        items={[
          {
            key: '1',
            label: (
              <Link href={navBarPaths.medical}>{t("home_card_title0")}</Link>
            ),
          },
          {
            key: '2',
            label: (
              <Link href={navBarPaths.public}>{t("home_card_title3")}</Link>
            ),
          },
          {
            key: '3',
            label: (
              <Link href={navBarPaths.home}>{t("home_card_title4")}</Link>
            ),
          },
          {
            key: '4',
            label: (
              <Link href={navBarPaths.cannabis}>{t("home_card_title1")}</Link>
            ),
          },
          {
            key: '5',
            label: (
              <Link href={navBarPaths.cold}>{t("home_card_title2")}</Link>
            ),
          },
        ]}
      />)
    },
    {
      name: t("info_center_header"), href: route.locale === Languages.HEBREW ? `${Languages.HEBREWLINK}${navBarPaths.infoCenter}` : navBarPaths.infoCenter, dropdown: true,
      menuMobile: [
        { name: "info_center_drop1" },
        { name: "info_center_drop2" },
      ],
      menu: (<Menu
        items={[
          {
            key: '1',
            label: (
              <Link href={navBarPaths.studies}>{t("info_center_drop1")}</Link>
            ),
          },
          {
            key: '2',
            label: (
              <Link href={navBarPaths.infoCenter}>{t("info_center_drop2")}</Link>
            ),
          },
        ]}
      />)
    },
    { name: t("projects_header"), href: route.locale === Languages.HEBREW ? `${Languages.HEBREWLINK}${navBarPaths.projects}` : navBarPaths.projects, dropdown: false },
    {
      name: t("lectures_header"), href: route.locale === Languages.HEBREW ? `${Languages.HEBREWLINK}${navBarPaths.lectures}` : navBarPaths.lectures, dropdown: true, menu: (<Menu
        items={[
          {
            key: '1',
            label: (
              <Link href="/">None</Link>
            ),
          },
        ]}
      />)
    },
    { name: t("contact_us_header"), href: route.locale === Languages.HEBREW ? `${Languages.HEBREWLINK}${navBarPaths.contactUs}` : navBarPaths.contactUs, dropdown: false },
  ];

  const languages = [
    {
      name: t("language"), dropdown: true, menu: (<Menu
        items={[
          {
            key: '1',
            label: (
              <a href={`${Languages.ENGLISHLINK}`}>Eng</a>
            ),
          },
          {
            key: '2',
            label: (
              <a href={`${Languages.HEBREWLINK}`}>עברית</a>
            ),
          },
        ]}
      />)
    },
  ];

  const isActive = useCallback((href: string) => {
    const path = route.pathname.split('/')?.[1];
    const activePath = href.split('/')?.[1];
    return activePath === path;
  }, [route]);

  const openDropDownMenu = ((index: number) => {
    const arr: number[] = [...newArr];
    if (arr.includes(index)) {
      const newArray = arr.filter((e: number) => e !== index);
      setNewArr([...newArray]);
    } else {
      setNewArr([...arr, index]);
    }
  });

  useEffect(() => {
    const windowSize = window?.innerWidth;
    setWindowScreen(windowSize);
    const closeHamburgerMenu = () => {
      if (windowSize > 1024) {
        setShowHamburger(false);
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    closeHamburgerMenu();
    window.addEventListener('resize', closeHamburgerMenu);
    return () => window.removeEventListener("resize", closeHamburgerMenu);
  }, []);

  useEffect(() => {

    const checkIfClickedOutside = (e: MouseEvent) => {

      if (showHamburger && ref.current && !ref.current.contains(e.target as HTMLElement)) {
        setShowHamburger(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showHamburger]);

  return (
    <header className={styles.headerContainer} ref={ref}>
      <div className={`${route.locale === Languages.HEBREW && styles.innerHe} ${styles.inner}`}>
        <div className={!isMobile ? styles.burger : styles.inner}>
          <div className={!isMobile ? styles.burgerFlex : styles.burgerClose}>
            <div className={styles.logoInner}>
              <Link href="/" passHref>
                <Image src={images.logoHeader} width={170} height={75} alt="" />
              </Link>
            </div>
            <div className={!(windowScreen && windowScreen > 1024) ? styles.languageSelector : styles.languageStyle}>
              {languages.map((list: navItems) => {
                if (list.dropdown && list.menu) {
                  return (
                    <DropdownHeader overlay={list.menu} placement="bottom" key={list.name}>
                      <a href={list.href}>{list.name}</a>
                    </DropdownHeader>
                  );
                }
                return (<Link href={list.href ?? ''} key={list.name} >{list.name}</Link>);
              })}
            </div>
          </div>
          <nav className={`${route.locale === Languages.HEBREW && styles.navbarHe} ${styles.navbar}`}>
            <ul className={`${route.locale === Languages.HEBREW && styles.navigationBoxHe} ${styles.navigationBox}`} >
              {navLists.map((list: navItems) => {
                if (list.dropdown && list.menu) {
                  return (
                    <li key={list.href}>
                      <DropdownHeader overlay={list.menu} placement="bottom" key={list.name}>
                        <a href={list.href} className={isActive(list.href ?? '') ? styles.activeLink : undefined}>{list.name}</a>
                      </DropdownHeader>
                    </li>
                  );
                }
                return (<li className={isActive(list.href ?? '') ? styles.activeLink : undefined} key={list.href}><Link href={list.href ?? ''} key={list.name} >{list.name}</Link></li>);
              })}
            </ul>
          </nav>
          <div className={styles.navMenu} onClick={() => { setShowHamburger(!showHamburger); }} onKeyDown={() => setShowHamburger(!showHamburger)} role="button" tabIndex={0}>
            <Image src='/icons/burgerMenu.svg' width={30} height={30} />
          </div>
          {isMobile &&
            <div className={styles.buttonConatiner}>
              <Button className={styles.loginButton} onClick={() => { route.push(navBarPaths.login); }}>{t('login_header')}</Button>
              <Button className={styles.signUpButton} onClick={() => { route.push(navBarPaths.signUp); }}>{t('sign_up_header')}</Button>
            </div>
          }
        </div>
      </div>
      <div className={`${styles.hamburgerContainer} ${showHamburger ? styles.active : {}}`} >
        <div className={styles.navigationList}>
          {navLists.map((list: navItems, index: number) => {
            if (list.dropdown && list.menu) {
              return (
                <div className={styles.navigationDropDown} key={list.name}>
                  <div className={`${route.locale === Languages.HEBREW && styles.sectionHe} ${styles.section}`}>
                    <div className={styles.questions}>
                      <Collapse
                        className={`${route.locale === Languages.HEBREW && styles.collapseHe} ${styles.collapse}`}
                        accordion
                        key={list.name}
                        bordered={false}
                        onChange={() => {
                          openDropDownMenu(index);
                        }}
                      >
                        <Panel
                          header={t(list?.name)}
                          key={list.name}
                          className={styles.panel}
                          showArrow={false}
                          extra={
                            <Icon
                              name={newArr.includes(index) ? images.arrowBottom : images.arrowRight}
                              width={15}
                              height={15}
                            />
                          }
                        >
                          {list.menuMobile?.map((e: { name: string }) => {
                            return (
                              <div className={styles.accordionItems} key={e.name}>
                                <a href={list.href}>{t(e.name)}</a>
                              </div>
                            );
                          })}
                        </Panel>
                      </Collapse>
                    </div>
                  </div >
                </div>
              );
            }
            return (<div className={styles.navigationDropDown} key={list.name} onClick={() => setShowHamburger(false)}><Link href={list.href ?? ''} key={list.name} className={styles.burgerMenuItem}>{list.name}</Link></div>);
          })}
          <div className={styles.buttonConatinerBurger}>
            <Button className={styles.loginButtonBurger} onClick={() => { route.push(navBarPaths.login); }}><p>{t('login_header')}</p></Button>
            <Button className={styles.signUpButtonBurger} onClick={() => { route.push(navBarPaths.signUp); }}><p>{t('sign_up_header')}</p></Button>
          </div>
        </div>
      </div>
    </header>
  );
}
