import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Breadcrumb } from 'antd';
import Link from 'components/shared/link';
import Icon from 'components/shared/icon';
import useTranslation from 'next-translate/useTranslation';
import imagesSvg from 'public/icons/breadcrumb.svg';
import { RoutesProps } from './types';

import styles from './breadcrumb.module.scss';

const itemRender = (route: RoutesProps, _: any, __: any, paths: any): JSX.Element => {
  return (
    <Link
      href={paths.length ? `/${route.path}` : '/'}
      text={route.breadcrumbName}
    />
  );
};

export default function Breadcrumbs(): JSX.Element {
  const router = useRouter();
  const { t } = useTranslation('common');

  const [routes, setRoutes] = useState<RoutesProps[]>([
    {
      path: '/',
      breadcrumbName: t('home'),
    },
  ]);

  const getBreadcrumbName = (e: string): string => {
    return (
      e
        .replace(/([A-Z])/g, ' $1')
        .charAt(0)
        .toUpperCase() + e.replace(/([A-Z])/g, ' $1').slice(1)
    );
  };

  const getPaths = (): void => {
    const paths: string[] | boolean = router.asPath !== '/' && router.asPath.split('/');
    if (paths) {
      paths?.forEach((e: string) => {
        // eslint-disable-next-line no-unused-expressions
        e !== '' &&
          e !== '[id]' &&
          e !== '[slug]' &&
          routes?.push({
            path: e,
            breadcrumbName: getBreadcrumbName(t(e)),
          });
        setRoutes([...routes]);
      });
    }
  };

  useEffect(() => {
    getPaths();
  }, []);

  return (
    <div className={styles.container}>
      <Breadcrumb
        separator={<Icon src={imagesSvg} width={4} height={10} />}
        itemRender={itemRender}
        routes={routes}
      />
    </div>
  );
}
