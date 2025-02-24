import { InfoCircleOutlined } from '@ant-design/icons';
import { Card, Col, Row, Table, Tooltip } from 'antd';
import { FormattedMessage } from 'umi';
import React from 'react';
import numeral from 'numeral';
import { SearchDataType, VisitDataType } from '../data.d';
import { MiniArea } from './Charts';
import NumberInfo from './NumberInfo';
import Trend from './Trend';
import styles from '../style.less';

const columns = [
  {
    title: 'Rank',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: 'Keyword',
    dataIndex: 'keyword',
    key: 'keyword',
    render: (text: React.ReactNode) => <a href="/">{text}</a>,
  },
  {
    title: 'Users',
    dataIndex: 'count',
    key: 'count',
    sorter: (
      a: {
        count: number;
      },
      b: {
        count: number;
      },
    ) => a.count - b.count,
    className: styles.alignRight,
  },
  {
    title: 'Weekly Range',
    dataIndex: 'range',
    key: 'range',
    sorter: (
      a: {
        range: number;
      },
      b: {
        range: number;
      },
    ) => a.range - b.range,
    render: (
      text: React.ReactNode,
      record: {
        status: number;
      },
    ) => (
      <Trend flag={record.status === 1 ? 'down' : 'up'}>
        <span
          style={{
            marginRight: 4,
          }}
        >
          {text}%
        </span>
      </Trend>
    ),
  },
];

const TopSearch = ({
  loading,
  visitData2,
  searchData,
  dropdownGroup,
}: {
  loading: boolean;
  visitData2: VisitDataType[];
  dropdownGroup: React.ReactNode;
  searchData: SearchDataType[];
}) => (
  <Card
    loading={loading}
    bordered={false}
    title="Online Top Search"
    extra={dropdownGroup}
    style={{
      height: '100%',
    }}
  >
    <Row gutter={68} type="flex">
      <Col
        sm={12}
        xs={24}
        style={{
          marginBottom: 24,
        }}
      >
        <NumberInfo
          subTitle={
            <span>
              Search Users
              <Tooltip title="Introduce">
                <InfoCircleOutlined
                  style={{
                    marginLeft: 8,
                  }}
                />
              </Tooltip>
            </span>
          }
          gap={8}
          total={numeral(12321).format('0,0')}
          status="up"
          subTotal={17.1}
        />
        <MiniArea line height={45} data={visitData2} />
      </Col>
      <Col
        sm={12}
        xs={24}
        style={{
          marginBottom: 24,
        }}
      >
        <NumberInfo
          subTitle={
            <span>
              Per Capita Search
              <Tooltip title="Introduce">
                <InfoCircleOutlined
                  style={{
                    marginLeft: 8,
                  }}
                />
              </Tooltip>
            </span>
          }
          total={2.7}
          status="down"
          subTotal={26.2}
          gap={8}
        />
        <MiniArea line height={45} data={visitData2} />
      </Col>
    </Row>
    <Table<any>
      rowKey={(record) => record.index}
      size="small"
      columns={columns}
      dataSource={searchData}
      pagination={{
        style: {
          marginBottom: 0,
        },
        pageSize: 5,
      }}
    />
  </Card>
);

export default TopSearch;
