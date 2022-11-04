import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Modal } from 'antd';
import { Languages } from 'utils/enum/languageEnum';
import CardProject from 'components/shared/cardForProjects';
import { cards } from 'utils/constants/projects';
import Image from 'components/shared/image';
import { Card } from 'utils/constants/projectType';
import useTranslation from 'next-translate/useTranslation';

import styles from './projects.module.scss';

export default function Projects() {
    const [open, setOpen] = useState(false);
    const [card, setCard] = useState<Card>();
    const { t } = useTranslation('common');
    const route = useRouter();

    return (
        <>
            <div className={open ? styles.hidden : styles.projects}>
                <div className={styles.projects}>
                    <div className={styles.projectImage}>
                        <h1>{t('projects_Title')}</h1>
                    </div>
                    <div className={styles.cardContainer}>
                        <div className={`${route.locale === Languages.HEBREW && styles.cardsHe} ${styles.cards}`}>
                            {cards?.map((e: Card) =>
                                <div className={styles.card} key={e.img}>
                                    <CardProject image={e?.img} title={t(e?.title ?? '')} width={345} className={styles.oneCard} onClick={() => { setOpen(true); setCard(e); }} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.modalCard}>
                {open && (
                    <div className={styles.modalStyles}>
                        <Modal width={1200} open={open} cancelButtonProps={{ style: { display: 'none' } }} okButtonProps={{ style: { display: 'none' } }} onCancel={() => setOpen(false)} footer={false} centered>
                            <div className={`${route.locale === Languages.HEBREW && styles.aboutCardHe} ${styles.aboutCard}`}>
                                <div className={styles.cardImage}>
                                    {card && <Image src={card?.img} width={500} height={340} alt='image' />}
                                </div>
                                <div>
                                    <p>{t(card?.title ?? "")}</p>
                                    <span>{t(card?.contentFirst ?? '')}</span>
                                    <div className={styles.contentSecond}>{t(card?.contentSecond ?? '')}</div>
                                </div>
                            </div>
                        </Modal>
                    </div>
                )}
            </div>
        </>
    );
};
