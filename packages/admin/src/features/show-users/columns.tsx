import {Col, DatePicker, Input, Row } from "antd";
import FmsButton from "../../../../shared-library/src/buttons/fms-button";
export function getColumns(setModalProps:any) { 
  
  const { RangePicker } = DatePicker;
  return [
  {
    title: "first-name",
    dataIndex: "fname",
    key: "fname",
    resizable: true, 
    sorter: (a:any, b:any) => a.fname.localeCompare(b.fname),
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
    onFilter: (value:any, record:any) => record.fname.toLowerCase().includes(value.toLowerCase()),
  },
  {
    title: "last-name",
    dataIndex: "lname",
    key: "lname",
    resizable: true, 
    sorter: (a:any, b:any) => a.lname.localeCompare(b.lname),
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
    onFilter: (value:any, record:any) => record.lname.toLowerCase().includes(value.toLowerCase()),
  },
  {
    title: "username",
    dataIndex: "username",
    key: "username",
    resizable: true, 
    sorter: (a:any, b:any) => a.username.localeCompare(b.username),
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
    onFilter: (value:any, record:any) => record.username.toLowerCase().includes(value.toLowerCase()),
  },
  {
    title: "email",
    dataIndex: "email",
    key: "email",
    resizable: true, 
    sorter: (a:any, b:any) => a.email.localeCompare(b.email),
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
    onFilter: (value:any, record:any) => record.email.toLowerCase().includes(value.toLowerCase()),
  },
  {
    title: "gender",
    dataIndex: "gender",
    key: "gender",
    resizable: true, 
    sorter: (a:any, b:any) => a.gender.localeCompare(b.gender),
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
    onFilter: (value:any, record:any) => record.gender.toLowerCase().includes(value.toLowerCase()),
  },
  {
    title: "role",
    dataIndex: "role",
    key: "role",
    resizable: true, 
    sorter: (a:any, b:any) => a.role.localeCompare(b.role),
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
    onFilter: (value:any, record:any) => record.role.toLowerCase().includes(value.toLowerCase()),
  },
  {
    title: "workingDate",
    dataIndex: "workingDate",
    key: "workingDate",
    sorter: (a: any, b: any) => a.workingDate.localeCompare(b.workingDate),
    sortDirections: ['descend', 'ascend'],
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: any) => (
      <div style={{ padding: 8 }}>
        <RangePicker
          value={selectedKeys[0]}
          onChange={(value: any) => setSelectedKeys(value ? [value] : [])}
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
    onFilter: (value: any, record: any) => {
      const [start, end] = value;
      const date = new Date(record.workingDate); // Convert to a Date object
      return (
        (!start || date >= start.startOf('day')) &&
        (!end || date <= end.endOf('day'))
      );
    },
  },
  {
    title: "country",
    dataIndex: "country",
    key: "country",
    resizable: true, 
    sorter: (a:any, b:any) => a.country.localeCompare(b.country),
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
    onFilter: (value:any, record:any) => record.country.toLowerCase().includes(value.toLowerCase()),
  },
  {
    title: "Actions",
    key: "actions",
    render: (text: any, record: any) => (
      <FmsButton
        type="primary"
        size="middle"
        borderRadius={32}
        onClick={() => setModalProps({ isOpen: true, data: record })}
      >
        {"edit"}
      </FmsButton>
    ),
  },
];
};