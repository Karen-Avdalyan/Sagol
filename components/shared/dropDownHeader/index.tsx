import { Dropdown } from 'antd';
import Image from 'components/shared/image';
import { DropdownProps } from './types';

import styles from './dropdown.module.scss';

export default function DropdownHeader({
  overlay,
  placement = 'bottom',
  children,
  ...rest
}: DropdownProps): JSX.Element {
  return (
    <div className={styles.headerContainer}>
      <Dropdown
        overlay={overlay}
        placement={placement}
        {...rest}
        overlayStyle={{ maxWidth: '350px' }}
      >
        {children}
      </Dropdown>
      <Image src="/icons/bottomArrow.svg" alt="" width={10} height={10} />
    </div>
  );
};
