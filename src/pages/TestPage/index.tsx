import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import styles from './index.less';
import TableEditCell from './TableEditCell';
import ButtonMultiple from './ButtonMultiple';

function onQoutePrice() {
  console.log("qoute price")
}

function onFillOrder() {
  console.log("Fill order")
}

export default () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <PageHeaderWrapper title="" content="Trading Interface" className={styles.main}>
      <ButtonMultiple/>
      <br />
      <TableEditCell />
      {/* <div
        style={{
          paddingTop: 100,
          textAlign: 'center',
        }}
      >
        <Spin spinning={loading} size="large" />
      </div> */}
    </PageHeaderWrapper>
  );
};
