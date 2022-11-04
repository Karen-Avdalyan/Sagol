import useTranslation from "next-translate/useTranslation";
import MainBackground from "components/shared/infoCenterBackground";
import Faq from "components/shared/faq";
import background from "public/image/infoCenter/infoBg.png";

export default function InfoCenter() {
    const { t } = useTranslation('common');

    return (
        <div>
            <MainBackground title={t("information_center")} description={t("information_description")} background={background} />
            <Faq />
        </div>
    );
}
