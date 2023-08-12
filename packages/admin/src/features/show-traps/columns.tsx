import {Col, DatePicker, Input, Row } from "antd";
import FmsButton from "../../../../shared-library/src/buttons/fms-button";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";

export function getColumns(setModalProps:any) {
  const { t } = useTranslation(TranslationFiles.COMMON);

  function changeTimestamp(timestamp:any){
    const date = new Date(timestamp);
    const hours = date.getHours().toString();
    const minutes = date.getMinutes().toString();
    const seconds = date.getSeconds().toString();
    return date.toDateString() + "  "+ hours+ ":" + minutes +":"+ seconds;
  }
  const { RangePicker } = DatePicker;
  return [
  {
    title: t("timestamp"),
    dataIndex: "timestamp",
    key: "timestamp",
    resizable: true, 
    defaultSortOrder: 'descend',
    render: (timestamp:any) => <>{changeTimestamp(timestamp)}</>,
    sorter: (a:any, b:any) => a.timestamp - b.timestamp,
    sortDirections: ['descend', 'ascend'],
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }:any) => (
      <div style={{ padding: 8 }}>
        <RangePicker
          value={selectedKeys[0]}
          onChange={value => setSelectedKeys(value ? [value] : [])}
          onOk={confirm}
          style={{ marginBottom: "8px", display: 'block' }}
        />
        <Row gutter={12}>
          <Col>
            <FmsButton
              type="primary"
              onClick={confirm}
              size="small"
              borderRadius={10}
              style={{ marginRight: 8 }}
            >
              {"Search"}
            </FmsButton>
          </Col>
        </Row>
      </div>
    ),
    onFilter: (value:any, record:any) => {
      const [start, end] = value;
      const date = new Date(record.timestamp);
      return (
        (!start || date >= start.startOf('day')) &&
        (!end || date <= end.endOf('day'))
      );
      
    },
  },
  {
    title: t("agent-address"),
    dataIndex: "agentAddress",
    key: "agentAddress",
    resizable: true, 
    sorter: (a:any, b:any) => a.agentAddress.localeCompare(b.agentAddress),
    sortDirections: ['descend', 'ascend'],
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm  }:any) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder="Search"
          value={selectedKeys[0]}
          onChange={(e:any) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={confirm}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Row gutter={12}>
          <Col>
        <FmsButton
          type="primary"
          onClick={confirm}
          size="small"
          borderRadius={10}
        >
          {"Search"}
        </FmsButton>
        </Col>
        </Row>
      </div>
    ),
    onFilter: (value:any, record:any) => record.agentAddress.toLowerCase().includes(value.toLowerCase()),
  },

  {
    title: t("severity"),
    dataIndex: "severity",
    key: "severity",
    resizable: true, 
    render: (text:any) => <Col className={`severity-${text}`}>{text}</Col>,
    sorter: (a:any, b:any) => a.severity.localeCompare(b.severity),
    sortDirections: ['descend', 'ascend'],
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm  }:any) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder="Search"
          value={selectedKeys[0]}
          onChange={(e:any) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={confirm}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Row gutter={12}>
          <Col>
        <FmsButton
          type="primary"
          onClick={confirm}
          size="small"
          borderRadius={10}
        >
          {"Search"}
        </FmsButton>
        </Col>
        </Row>
      </div>
    ),
    onFilter: (value:any, record:any) => record.severity.toLowerCase().includes(value.toLowerCase()),
  },
  {
    title: t("specific-trap"),
    dataIndex: "specificTrap",
    key: "specificTrap",
    resizable: true, 
    sorter: (a:any, b:any) => a.specificTrap.localeCompare(b.specificTrap),
    sortDirections: ['descend', 'ascend'],
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm  }:any) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder="Search"
          value={selectedKeys[0]}
          onChange={(e:any) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={confirm}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Row gutter={12}>
          <Col>
        <FmsButton
          type="primary"
          onClick={confirm}
          size="small"
          borderRadius={10}
        >
          {"Search"}
        </FmsButton>
        </Col>
        </Row>
      </div>
    ),
    onFilter: (value:any, record:any) => record.specificTrap.toLowerCase().includes(value.toLowerCase()),
  },
  {
    title: t("generic-trap"),
    dataIndex: "genericTrap",
    key: "genericTrap",
    resizable: true, 
    sorter: (a:any, b:any) => a.genericTrap.localeCompare(b.genericTrap),
    sortDirections: ['descend', 'ascend'],
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm  }:any) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder="Search"
          value={selectedKeys[0]}
          onChange={(e:any) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={confirm}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Row gutter={12}>
          <Col>
        <FmsButton
          type="primary"
          onClick={confirm}
          size="small"
          borderRadius={10}
        >
          {"Search"}
        </FmsButton>
        </Col>
        </Row>
      </div>
    ),
    onFilter: (value:any, record:any) => record.genericTrap.toLowerCase().includes(value.toLowerCase()),
  },
  {
    title: t("actions"),
    key: "actions",
    render: (text: any, record: any) => (
      <FmsButton
        type="primary"
        size="middle"
        borderRadius={8}
        onClick={() => setModalProps({ isOpen: true, variableBinding: record.variableBindings })}
      >
        {t("show-details")}
      </FmsButton>
    ),
  },
];
};