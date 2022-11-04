import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import React from 'react';
import { Form } from 'antd';
import { navBarPaths } from 'utils/constants/navBarPaths';
import { Languages } from 'utils/enum/languageEnum';
import LoginWithGoogle from 'components/shared/googleLogin';
import Image from 'components/shared/image';
import Input from 'components/shared/input';
import Button from 'components/shared/button';
import Link from 'components/shared/link';

import styles from './login.module.scss';

export default function Login() {
    const [form] = Form.useForm();
    const { t } = useTranslation('common');
    const route = useRouter();

    return (
        <div className={styles.loginPage}>
            <div className={styles.leftPart}>
                <Image src='/icons/sagol-logo-white.svg' width={600} height={200} alt="image" />
            </div>
            <div className={styles.loginFormContainer}>
                <Form form={form} initialValues={{ remember: true }} className={`${route.locale === Languages.HEBREW && styles.formHe} ${styles.form}`}>
                    <div className={styles.loginHeader}>{t("login")}</div>
                    <div className={styles.inputsContainer}>
                        <Form.Item
                            name="email"
                            className={styles.formItem}
                            rules={[
                                {
                                    type: 'email',
                                    message: t("no_valid_email"),
                                },
                                { required: true, message: t("enter_email") },
                            ]}
                        >
                            <Input type="email" label={t("email_Name")} className={styles.formInput} placeholder="username@gmail.com" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            className={styles.formItem}
                            rules={[
                                {
                                    message: t("password_valid"),
                                },
                                { required: true, message: t("enter_password") },
                            ]}
                        >
                            <Input
                                type="password"
                                label={t("password")}
                                className={styles.formInput}
                                placeholder={t("password")}
                            />
                        </Form.Item>
                    </div>
                    <Form.Item shouldUpdate>
                        {() => (
                            <Button
                                text={t("login")}
                                htmlType="submit"
                                className={styles.loginButton}
                            />
                        )}
                    </Form.Item>
                    <Form.Item >
                        <div className={styles.dividerContainer}>
                            <div className={styles.divider} />
                            <span>{t('or')}</span>
                            <div className={styles.divider} />
                        </div>
                        <div className={styles.googleAuth}>
                            <div>
                                <LoginWithGoogle />
                            </div>
                        </div>
                        <div className={styles.lastContent}>
                            <p>{t("have_an_account")}<Link href={navBarPaths.signUp} text={t("sign_up")} /></p>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
