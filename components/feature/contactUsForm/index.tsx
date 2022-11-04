import Image from "next/image";
import React from "react";
import { FormProps } from "antd/lib/form";
import { Form } from "antd";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import Input from "components/shared/input";
import TextArea from "components/shared/textArea";
import Button from "components/shared/button";
import { sendEmailByType, EmailType, ContactUsTemplate } from "utils/services/email";
import { Languages } from "utils/enum/languageEnum";
import { NotificationType } from "components/shared/notification/types";
import openNotification from "components/shared/notification";

import styles from "./contactUsForm.module.scss";

export default function ContactUsForm({
    ...rest
}: FormProps) {
    const [form] = Form.useForm();
    const { t } = useTranslation('common');
    const route = useRouter();

    const onFinish = async (): Promise<void> => {
        const { name, lastName, email, message } = form.getFieldsValue();
        const templateParams: ContactUsTemplate = {
            first_name: name,
            last_name: lastName,
            email,
            message,
        };
        const data = await sendEmailByType(EmailType.ContactUs, templateParams);

        if (data.status === 200) {
            openNotification({
                descriptions: 'Email Sent Successfully',
                messages: 'Contact Us',
                status: NotificationType.Success
            });
        } else {
            openNotification({
                descriptions: 'Something went wrong',
                messages: 'Error',
                status: NotificationType.Error
            });
        }
        form.resetFields();
    };

    return (
        <div>
            <div className={styles.contactUsContainer}>
                <div className={`${route.locale === Languages.HEBREW && styles.formDetailsHe} ${styles.formDetails}`}>
                    <div className={styles.detail}>
                        <Image
                            width={400}
                            height={138}
                            src='/icons/sagol-logo.svg'
                            alt=""
                        />
                        <div className={styles.detailInfoBox}>
                            <div className={`${route.locale === Languages.HEBREW && styles.contactSectionHe} ${styles.contactSection}`}>
                                <p>{t("phone")}<span> 03-5276657</span></p>
                                <p>{t("email")}<span> office@sagol-tec.co.il</span></p>
                                <p>{t("address")}</p>
                                <p>{t("workTime")}</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${route.locale === Languages.HEBREW && styles.formBoxHe} ${styles.formBox}`}>
                        <h1>{t("contact_us")}</h1>
                        <Form {...rest} form={form} className={`${styles.form} ${rest.className}`} onFinish={onFinish} initialValues={{ remember: true }}>
                            <div className={styles.topInputs}>
                                <Form.Item name='name' rules={[{ required: true, message: t("name_validation") }]}>
                                    <Input placeholder={t("Name")} />
                                </Form.Item>
                                <Form.Item name="lastName" rules={[{ required: true, message: t("lastName_validation") }]}>
                                    <Input placeholder={t("last_Name")} />
                                </Form.Item>
                            </div>
                            <div className={styles.topInputs}>
                                <Form.Item name="phone" rules={[{ required: true, message: t("phone_validation") }]}>
                                    <Input placeholder={t("phone_Name")} />
                                </Form.Item>
                                <Form.Item name="email" rules={[{
                                    type: t("email_name"), message: t("valid_email"),
                                },
                                { required: true, message: t("email_validation") }]}>
                                    <Input placeholder={t("email_Name")} type={t("email_name")} />
                                </Form.Item>
                            </div>
                            <Form.Item name="message" rules={[{ required: true, message: t("detailt_validation") }]}>
                                <TextArea placeholder={t("details")} />
                            </Form.Item>
                            <div className={styles.subBox}>
                                <div>
                                    <Button className={styles.button} text={t("send_text")} htmlType="submit" />
                                </div>
                            </div>
                        </Form>
                    </div>

                </div>
            </div>
        </div>
    );
}
