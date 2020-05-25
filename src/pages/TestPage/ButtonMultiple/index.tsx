import React from "react";
import styles from "./index.less";
import { Button, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { ClickParam } from 'antd/es/menu';
import { render } from "ejs";
import { connect } from 'umi';
import { ModalState } from '../model';
import { any } from "prop-types";

function handleMenuClick(param: ClickParam) {
  console.log("click", param);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

const buttonStyle = {
  width: "100px"
};

const Applications: React.FC<{onMessageSubmit: Function, onSocketClose: Function}> = (props) => {

  const {onMessageSubmit, onSocketClose} = props;

//   const handleOnClick = () => {
//     const { dispatch } = props;
//     dispatch({
//       type: 'trade/getBlotter',
//     })
//   }

  return (
    <div className={styles.container}>
      <div id="components-button-demo-multiple">
        <div>
          {/* <Button type="primary" style={buttonStyle} onClick={handleOnClick}>Get Blotter</Button> */}
          <Button type="primary" style={buttonStyle} onClick={onMessageSubmit} >Quote</Button>
          <Button style={buttonStyle} onClick={ onSocketClose }>Fill</Button>
          {/* <Dropdown overlay={menu}>
            <Button>
              Actions <DownOutlined />
            </Button>
          </Dropdown> */}
        </div>
      </div>
    </div>
  );
}

export default Applications;
