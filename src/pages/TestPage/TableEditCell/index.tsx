import styles from './index.less';
import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import { connect } from 'umi';
import { ModalState } from '../model';
import { TradeItemDataType } from '../data.d';

const EditableContext = React.createContext<any>();

interface Item {
  key: number;
  cusip: string
  par: number;
  price: number;
  side: string;
}

interface EditableRowProps {
  index: number;
}

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  dataIndex: string;
  record: Item;
  handleSave: (record: Item) => void;
}

const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef();
  const form = useContext(EditableContext);

  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async e => {
    try {
      const values = await form.validateFields();

      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
        <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
          {children}
        </div>
      );
  }

  return <td {...restProps}>{childNode}</td>;
};

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    // let { list } = props.list
    // console.log(props)

    this.columns = [
      {
        title: 'CUSIP',
        dataIndex: 'cusip',
        editable: true
      },
      {
        title: 'Par Amount(M)',
        dataIndex: 'par',
        editable: true,
      },
      {
        title: 'Price',
        dataIndex: 'price',
      },
      {
        title: 'Side',
        dataIndex: 'side',
      },
      {
        title: 'operation',
        dataIndex: 'Action',
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
              <a>Remove</a>
            </Popconfirm>
          ) : null,
      },
    ];

    this.state = {
      dataSource: [],
      count: 0,
    };
  }

  handleDelete = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  };

  updateState = (list: TradeItemDataType[]) => {
    console.log(list)

    const { count, dataSource } = this.state;

    this.setState({
      dataSource: dataSource.concat(list),
      count: count + list.length,
    });
  }

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      cusip: '135087B45',
      par: Math.floor(Math.random() * 50),
      price: '108.' + Math.floor(Math.random() * 100),
      side: 'buy'
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };

  handleSave = row => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    this.setState({ dataSource: newData });
  };

  componentWillReceiveProps(nextProps: { list: TradeItemDataType[] }) {
    const { count, dataSource } = this.state;
    const { list } = nextProps;

    this.setState({
      dataSource: dataSource.concat(list.map(i => {
        i['key'] = i.id;
        return i
      })),
      count: count + list.length,
    });
  }

  render() {
    const { dataSource } = this.state;

    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
        <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
          Add a trade
        </Button>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    );
  }
}

const Applications: React.FC<ModalState> = (props) => {
  const { list } = props

  return (
    <div className={styles.container}><div id="components-table-demo-edit-cell"><EditableTable list={list} /></div></div>
  )
}

export default connect(({ trade }: { trade: ModalState }) => ({ list: trade.list }))(Applications);
