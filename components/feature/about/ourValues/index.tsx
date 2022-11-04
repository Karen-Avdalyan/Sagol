import Card from "components/shared/card";
import Title from "components/shared/title";
import useTranslation from "next-translate/useTranslation";

import styles from "./ourValues.module.scss";

const cards = [
    {
        img: '/icons/valuesIcons/speed.svg',
        title: 'Speed',
        description: 'Due to our working high speed, our team of professionals provides the best and most innovative solutions in the shortest amount of time possible.'
    },
    {
        img: '/icons/valuesIcons/innovation.svg',
        title: 'Innovation',
        description: 'Using innovative technologies is one of the keys of our successful solutions We easily adapt to new  features in the blockchain and cryptocurrency world.'
    },
    {
        img: '/icons/valuesIcons/hard-work.svg',
        title: 'HARD WORK',
        description: 'Sagol team is hard working and always strives to find the best innovative solutions for your issues despite the complications.'
    },
    {
        img: '/icons/valuesIcons/memes.svg',
        title: 'Memes',
        description: ' Sagol knows how to combine hard work with fun, therefore we integrate memes into our daily lives and make the working atmosphere more exciting.'
    },
];

export default function OurValues() {
    const { t } = useTranslation('common');

    return (
        <div id='ourValues' className={styles.ourValuesContainer}>
            <Title titleText="Our Values" alignBorder="center" />
            <div className={styles.cards}>
                {cards.map((card) => {
                    return <Card className={`${styles.card} ${""}`} title={t(card.title)} description={card.description} icon={card.img} key={card.title} />;
                })}
            </div>
        </div>
    );
}
