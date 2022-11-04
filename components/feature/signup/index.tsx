import React from 'react';
import { Form } from 'antd';
import { useRouter } from 'next/router';
import { Languages } from 'utils/enum/languageEnum';
import { navBarPaths } from 'utils/constants/navBarPaths';
import useTranslation from 'next-translate/useTranslation';
import SignUpWithGoogle from 'components/shared/googleSignUp';
import Image from 'components/shared/image';
import Input from 'components/shared/input';
import Button from 'components/shared/button';
import Link from 'components/shared/link';

import styles from "./signup.module.scss";

export default function Signup() {
    const [form] = Form.useForm();
    const { t } = useTranslation('common');
    const route = useRouter();

    return (
        <div className={styles.loginPage}>
            <div className={styles.leftPart}>
                <Image src='/icons/sagol-logo-white.svg' width={600} height={200} alt="image" />
            </div>
            <div className={styles.loginFormContainer}>
                <Form form={form} initialValues={{ remember: true }} className={`${route.locale === Languages.HEBREW && styles.formHe} ${styles.form}`} >
                    <div className={styles.loginHeader}>{t("sign_up")}</div>
                    <div className={styles.inputsContainer}>
                        <Form.Item
                            name="fullname"
                            className={styles.formItem}
                            rules={[
                                {
                                    message: t('empty_input'),
                                },
                                { required: true, message: t('enter_full_name') },
                            ]}
                        >
                            <Input
                                type="name"
                                label={t('full_name')}
                                className={styles.formInput}
                                placeholder={t('full_name')}
                            />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            className={styles.formItem}
                            rules={[
                                {
                                    type: 'email',
                                    message: t('no_valid_email'),
                                },
                                { required: true, message: t('enter_email') },
                            ]}
                        >
                            <Input type="email" label={t('email_Name')} className={styles.formInput} placeholder="username@gmail.com" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            className={styles.formItem}
                            rules={[
                                {
                                    message: t('password_valid'),
                                },
                                { required: true, message: t('enter_password') },
                            ]}
                        >
                            <Input
                                type="password"
                                label={t('password')}
                                className={styles.formInput}
                                placeholder={t('password')}
                            />
                        </Form.Item>
                        <Form.Item
                            name="confirmPassword"
                            className={styles.formItem}
                            rules={[
                                {
                                    message: t('password_valid'),
                                },
                                { required: true, message: t('enter_password') },
                            ]}
                        >
                            <Input
                                type="password"
                                label={t('re_type')}
                                className={styles.formInput}
                                placeholder={t('re_type')}
                            />
                        </Form.Item>
                    </div>
                    <Form.Item shouldUpdate>
                        {() => (
                            <Button
                                text={t('sign_up')}
                                htmlType="submit"
                                className={styles.loginButton}
                            />
                        )}
                    </Form.Item>
                    <div className={styles.dividerContainer}>
                        <div className={styles.divider} />
                        <span>{t('or')}</span>
                        <div className={styles.divider} />
                    </div>
                    <div className={styles.lastPart}>
                        <div className={styles.googleAuth}>
                            <SignUpWithGoogle />
                        </div>
                        <div className={styles.lastContent}>
                            <p>{t('have_account')}<Link href={navBarPaths.login} text={t('login')} /></p>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
}
