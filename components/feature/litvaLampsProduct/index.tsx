import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Breadcrumbs from "components/shared/breadcrumb";
import { Languages } from "utils/enum/languageEnum";
import zoomIcon from "public/image/litvaLampsImages/zoomIcon.png";
import loadingImg from "public/image/litvaLampsImages/loadingImg.jpg";
import { smallImagesArrayLitva, smallImagesArrayAir, smallImagesArrayDeodorization, smallImagesArrayDisinfection, smallImagesArraySystem, smallImagesArrayP900gx, textsArrayAir, textsArrayLitva, textsArrayDeodorization, textsArrayDisinfection, textsArraySystem, textsArrayP900gx, } from "utils/constants/products";
import ProductButton from "./productButton";
import { ProductItemTypes, PagesNames } from "./types";

import styles from "./productitem.module.scss";

const defaultValue = {
    texts: '',
    smallImages: [],
    rightButtonValue: false,
    leftButtonValue: false,
    rightButtonText: '',
    leftButtonText: '',
};

export default function ProductSection({
    name
}: ProductItemTypes) {
    const { t } = useTranslation('common');
    const route = useRouter();
    const [products, setProducts] = useState<any>(defaultValue);
    const [bigImg, setBigImg] = useState<StaticImageData>(loadingImg);
    const [zoom, setZoom] = useState(false);

    const { texts, smallImages, rightButtonValue, leftButtonValue, rightButtonText, leftButtonText } = products;

    useEffect(() => {
        if (name === PagesNames?.LITVALAMPS) {
            setProducts({
                ...defaultValue,
                texts: textsArrayLitva,
                smallImages: smallImagesArrayLitva,
            });
        } else if (name === PagesNames?.AIR) {
            setProducts({
                ...defaultValue,
                texts: textsArrayAir,
                smallImages: smallImagesArrayAir,
                rightButtonValue: true,
                leftButtonValue: true,
                rightButtonText: t("download_quatro"),
                leftButtonText: t("download_bioWall"),
            });
        } else if (name === PagesNames?.DEODORIZATION) {
            setProducts({
                ...defaultValue,
                texts: textsArrayDeodorization,
                smallImages: smallImagesArrayDeodorization,
                rightButtonValue: true,
                leftButtonValue: true,
                rightButtonText: t("download_informationSheet"),
                leftButtonText: t("download_technialSpec"),
            });
        } else if (name === PagesNames?.DISINFECTION) {
            setProducts({
                ...defaultValue,
                texts: textsArrayDisinfection,
                smallImages: smallImagesArrayDisinfection,
                leftButtonValue: true,
                leftButtonText: t("download_saberMagnet"),
            });
        } else if (name === PagesNames?.SYSTEM) {
            setProducts({
                ...defaultValue,
                texts: textsArraySystem,
                smallImages: smallImagesArraySystem,
                leftButtonValue: true,
                leftButtonText: t("download_aseptix"),
            });
        } else {
            setProducts({
                ...defaultValue,
                texts: textsArrayP900gx,
                smallImages: smallImagesArrayP900gx,
                rightButtonValue: true,
                leftButtonValue: true,
                rightButtonText: t("download_meteorSystem"),
                leftButtonText: t("download_technialSpec"),
            });
        };

    }, [name]);

    useEffect(() => {
        if (smallImages.length > 0 && smallImages[0].bigImage !== undefined) {
            setBigImg(smallImages[0]?.bigImage);
        }
    }, [smallImages]);

    const changeBigImage = (e: StaticImageData) => {
        setBigImg(e);
    };

    return (
        <div className={styles.litvaLampsContainer}>
            <div className={`${route.locale === Languages.HEBREW && styles.breadcrumbHe} ${styles.breadcrumb}`}>
                <Breadcrumbs />
            </div>
            <div className={styles.litvaLampsSection}>
                <div className={styles.leftSection}>
                    {zoom ? (<div onClick={() => { setZoom(false); }} className={styles.zoomImageContainer}>
                        <div className={styles.zoomImageSection}>
                            <Image src={bigImg} sizes="100vw" width={100} height={100} />
                        </div>
                    </div>) : (<div className={styles.bigImage}>
                        <div onClick={() => { setZoom(true); }} className={styles.zoomButton}>
                            <Image src={zoomIcon} />
                        </div>
                        <Image layout="fill"
                            objectFit="contain" src={bigImg} sizes="100vw" />
                    </div>)}

                    <div className={styles.smallImages}>
                        {smallImages?.map((item: any) => (
                            <div className={styles.smallImage} onClick={() => changeBigImage(item?.bigImage)} key={item.src}>{item?.src !== '' && <Image src={item?.src} alt="" width={100} height={100} />} </div>
                        ))}
                    </div>
                </div>
                <div className={`${route.locale === Languages.HEBREW && styles.rightSectionHe} ${styles.rightSection}`}>
                    {texts && texts?.map((item: any, index: number) => (
                        <div className={styles.textSection} key={item.title}>
                            <div className={styles.title}>
                                <span>{t(item.title)}</span>
                            </div>
                            <ul className={styles.description}>
                                {item.description.map((e: string) => e !== "" && <li>{t(e)}</li>
                                )}
                            </ul>
                            {index === 0 && <ProductButton leftButtonValue={leftButtonValue} rightButtonValue={rightButtonValue} rightButtonText={rightButtonText} leftButtonText={leftButtonText} />}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}