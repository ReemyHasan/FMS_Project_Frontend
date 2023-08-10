import {Col, DatePicker, Input, Row } from "antd";
import FmsButton from "../../../../shared-library/src/buttons/fms-button";
import useTranslation from "next-translate/useTranslation";
import { TranslationFiles } from "@/src/data/core";
export function getColumns(setModalProps:any) { 
  const { t } = useTranslation(TranslationFiles.COMMON);

  const { RangePicker } = DatePicker;
  return [
  {
    title: ("fname"),
    dataIndex: "fname",
    key: "fname",
    resizable: true, 
    sorter: (a:any, b:any) => a.fname.localeCompare(b.fname),
    sortDirections: ['descend', 'ascend'],
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm  }:any) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={t("search")}
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
          {t("search")}
        </FmsButton>
        </Col>
        </Row>
      </div>
    ),
    onFilter: (value:any, record:any) => record.fname.toLowerCase().includes(value.toLowerCase()),
  },
  {
    title: t("lname"),
    dataIndex: "lname",
    key: "lname",
    resizable: true, 
    sorter: (a:any, b:any) => a.lname.localeCompare(b.lname),
    sortDirections: ['descend', 'ascend'],
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm  }:any) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={t("search")}
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
          {t("search")}
        </FmsButton>
        </Col>
        </Row>
      </div>
    ),
    onFilter: (value:any, record:any) => record.lname.toLowerCase().includes(value.toLowerCase()),
  },
  {
    title: t("username"),
    dataIndex: "username",
    key: "username",
    resizable: true, 
    sorter: (a:any, b:any) => a.username.localeCompare(b.username),
    sortDirections: ['descend', 'ascend'],
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm  }:any) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={t("search")}
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
          {t("search")}
        </FmsButton>
        </Col>
        </Row>
      </div>
    ),
    onFilter: (value:any, record:any) => record.username.toLowerCase().includes(value.toLowerCase()),
  },
  {
    title: t("email"),
    dataIndex: "email",
    key: "email",
    resizable: true, 
    sorter: (a:any, b:any) => a.email.localeCompare(b.email),
    sortDirections: ['descend', 'ascend'],
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm  }:any) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={t("search")}
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
          {t("search")}
        </FmsButton>
        </Col>
        </Row>
      </div>
    ),
    onFilter: (value:any, record:any) => record.email.toLowerCase().includes(value.toLowerCase()),
  },
  {
    title: t("gender"),
    dataIndex: "gender",
    key: "gender",
    resizable: true, 
    sorter: (a:any, b:any) => a.gender.localeCompare(b.gender),
    sortDirections: ['descend', 'ascend'],
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm  }:any) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={t("search")}
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
          {t("search")}
        </FmsButton>
        </Col>
        </Row>
      </div>
    ),
    onFilter: (value:any, record:any) => record.gender.toLowerCase().includes(value.toLowerCase()),
  },
  {
    title: t("role"),
    dataIndex: "role",
    key: "role",
    resizable: true, 
    sorter: (a:any, b:any) => a.role.localeCompare(b.role),
    sortDirections: ['descend', 'ascend'],
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm  }:any) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={t("search")}
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
          {t("search")}
        </FmsButton>
        </Col>
        </Row>
      </div>
    ),
    onFilter: (value:any, record:any) => record.role.toLowerCase().includes(value.toLowerCase()),
  },
  {
    title: t("working-date"),
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
              {t("search")}
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
    title: t("country"),
    dataIndex: "country",
    key: "country",
    resizable: true, 
    sorter: (a:any, b:any) => a.country.localeCompare(b.country),
    sortDirections: ['descend', 'ascend'],
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm  }:any) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={t("search")}
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
          {t("search")}
        </FmsButton>
        </Col>
        </Row>
      </div>
    ),
    onFilter: (value:any, record:any) => record.country.toLowerCase().includes(value.toLowerCase()),
  },
  {
    title: t("actions"),
    key: "actions",
    render: (text: any, record: any) => (
      <FmsButton
        type="primary"
        size="middle"
        borderRadius={32}
        onClick={() => setModalProps({ isOpen: true, data: record })}
      >
        {t("edit")}
      </FmsButton>
    ),
  },
];
};