import { useRouter } from 'next/router';
import { useState } from 'react';
import { Collapse } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { Languages } from 'utils/enum/languageEnum';
import Link from '../link';
import Icon from '../icon';
import { FaqProps, questions } from './type';

import styles from './faq.module.scss';

export default function Faq(): JSX.Element {
    const [newArr, setNewArr] = useState<number[]>([]);
    const { t } = useTranslation('common');
    const route = useRouter();
    const { Panel } = Collapse;

    return (
        <div className={styles.container}>
            <div className={`${route.locale === Languages.HEBREW && styles.sectionHe} ${styles.section}`}>
                <div className={styles.asked}>
                    <Link href="/" text={t("support")} />
                    <p>{t("frequently")}</p>
                    <span>
                        {t("welcome")}
                    </span>
                </div>
                <div className={styles.questions}>
                    {questions?.map((el: FaqProps, index: number) => (
                        <Collapse
                            className={`${route.locale === Languages.HEBREW && styles.collapseHe} ${styles.collapse}`}
                            accordion
                            key={el.text}
                            bordered={false}
                            onChange={() => {
                                const arr: number[] = [...newArr];
                                if (arr.includes(index)) {
                                    const newArray = arr.filter((e: number) => e !== index);
                                    setNewArr([...newArray]);
                                } else {
                                    setNewArr([...arr, index]);
                                }
                            }}
                        >
                            <Panel
                                header={t(el?.text ?? "")}
                                key={el.text}
                                className={styles.panel}
                                showArrow={false}
                                extra={
                                    <Icon
                                        name={newArr.includes(index) ? 'carbon.svg' : 'carbonPlus.svg'}
                                        width={32}
                                        height={40}
                                    />
                                }
                            >
                                <p>{t(el?.desc ?? "")}</p>
                            </Panel>
                            <div className={styles.divider}/>
                        </Collapse>
                    ))}
                </div>
            </div>
        </div >
    );
}