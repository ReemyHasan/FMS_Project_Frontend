import { Col, Popover, Row, Tag } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import React from "react";
import fmsAvatar, { AvatarSize } from "../avatars/fms-avatar";
import classes from "./styles.module.css";
import TrashIcon from "../../assets/icons/trash-icon";
import PencelIcon from "../../assets/icons/pencel-icon";

export const useTestData = () => {
  const teams = [
    {
      id: "1",
      label: "Design",
      color: "var(--primary-blue-700)",
      backgroundColor: "var(--primary-gray-25)",
    },
    {
      id: "2",
      label: "Product",
      color: "var(--secondary-blue-700)",
      backgroundColor: "var(--secondary-blue-50)",
    },
    {
      id: "3",
      label: "Marketing",
      color: "var(--primary-indego-700)",
      backgroundColor: "var(--primary-indego-50)",
    },
    {
      id: "4",
      label: "test",
      color: "var(--primary-gray-700)",
      backgroundColor: "--secondary-gray-100",
    },
    {
      id: "5",
      label: "test",
      color: "var(--primary-gray-700)",
      backgroundColor: "--secondary-gray-100",
    },
    {
      id: "6",
      label: "test",
      color: "var(--primary-gray-700)",
      backgroundColor: "--secondary-gray-100",
    },
    {
      id: "7",
      label: "test",
      color: "var(--primary-gray-700)",
      backgroundColor: "--secondary-gray-100",
    },
  ];

  const dataSource = [
    {
      key: "1",
      name: "Olivia Rhye",
      tag: "@olivia",
      role: "Product Designer",
      status: {
        id: "8",
        label: (
          <Row>
            <Col>
              <div
                style={{
                  width: 6,
                  height: 6,
                  backgroundColor: "var(--success-green)",
                  borderRadius: "100%",
                  marginTop: 6,
                  marginRight: 3,
                }}
              />
            </Col>
            <Col className={classes.activeTagLabel}>Active</Col>
          </Row>
        ),
        color: "var(--success-green-700)",
        backgroundColor: "var(--success-green-50)",
      },
      email: "Olivia Rhye",
      teams: teams,
    },
    {
      key: "2",
      name: "Olivia Rhye",
      tag: "@olivia",
      role: "Product Designer",
      status: {
        id: "8",
        label: (
          <Row>
            <Col>
              <div
                style={{
                  width: 6,
                  height: 6,
                  backgroundColor: "var(--success-green)",
                  borderRadius: "100%",
                  marginTop: 6,
                  marginRight: 3,
                }}
              />
            </Col>
            <Col className={classes.activeTagLabel}>Active</Col>
          </Row>
        ),
        color: "var(--success-green-700)",
        backgroundColor: "var(--success-green-50)",
      },
      email: "Olivia Rhye",
      teams: teams,
    },
    {
      key: "3",
      name: "Olivia Rhye",
      tag: "@olivia",
      role: "Product Designer",
      status: {
        id: "8",
        label: (
          <Row>
            <Col>
              <div
                style={{
                  width: 6,
                  height: 6,
                  backgroundColor: "var(--success-green)",
                  borderRadius: "100%",
                  marginTop: 6,
                  marginRight: 3,
                }}
              />
            </Col>
            <Col className={classes.activeTagLabel}>Active</Col>
          </Row>
        ),
        color: "var(--success-green-700)",
        backgroundColor: "var(--success-green-50)",
      },
      email: "Olivia Rhye",
      teams: teams,
    },
    {
      key: "4",
      name: "Olivia Rhye",
      tag: "@olivia",
      role: "Product Designer",
      status: {
        id: "8",
        label: (
          <Row>
            <Col>
              <div
                style={{
                  width: 6,
                  height: 6,
                  backgroundColor: "var(--success-green)",
                  borderRadius: "100%",
                  marginTop: 6,
                  marginRight: 3,
                }}
              />
            </Col>
            <Col className={classes.activeTagLabel}>Active</Col>
          </Row>
        ),
        color: "var(--success-green-700)",
        backgroundColor: "var(--success-green-50)",
      },
      email: "Olivia Rhye",
      teams: teams,
    },
    {
      key: "5",
      name: "Olivia Rhye",
      tag: "@olivia",
      role: "Product Designer",
      status: {
        id: "8",
        label: (
          <Row>
            <Col>
              <div
                style={{
                  width: 6,
                  height: 6,
                  backgroundColor: "var(--success-green)",
                  borderRadius: "100%",
                  marginTop: 6,
                  marginRight: 3,
                }}
              />
            </Col>
            <Col className={classes.activeTagLabel}>Active</Col>
          </Row>
        ),
        color: "var(--success-green-700)",
        backgroundColor: "var(--success-green-50)",
      },
      email: "Olivia Rhye",
      teams: teams,
    },
    {
      key: "6",
      name: "Olivia Rhye",
      tag: "@olivia",
      role: "Product Designer",
      status: {
        id: "8",
        label: (
          <Row>
            <Col>
              <div
                style={{
                  width: 6,
                  height: 6,
                  backgroundColor: "var(--success-green)",
                  borderRadius: "100%",
                  marginTop: 6,
                  marginRight: 3,
                }}
              />
            </Col>
            <Col className={classes.activeTagLabel}>Active</Col>
          </Row>
        ),
        color: "var(--success-green-700)",
        backgroundColor: "var(--success-green-50)",
      },
      email: "Olivia Rhye",
      teams: teams,
    },
    {
      key: "7",
      name: "Olivia Rhye",
      tag: "@olivia",
      role: "Product Designer",
      status: {
        id: "8",
        label: (
          <Row>
            <Col>
              <div
                style={{
                  width: 6,
                  height: 6,
                  backgroundColor: "var(--success-green)",
                  borderRadius: "100%",
                  marginTop: 6,
                  marginRight: 3,
                }}
              />
            </Col>
            <Col className={classes.activeTagLabel}>Active</Col>
          </Row>
        ),
        color: "var(--success-green-700)",
        backgroundColor: "var(--success-green-50)",
      },
      email: "Olivia Rhye",
      teams: teams,
    },
    {
      key: "8",
      name: "Olivia Rhye",
      tag: "@olivia",
      role: "Product Designer",
      status: {
        id: "8",
        label: (
          <Row>
            <Col>
              <div
                style={{
                  width: 6,
                  height: 6,
                  backgroundColor: "var(--success-green)",
                  borderRadius: "100%",
                  marginTop: 6,
                  marginRight: 3,
                }}
              />
            </Col>
            <Col className={classes.activeTagLabel}>Active</Col>
          </Row>
        ),
        color: "var(--success-green-700)",
        backgroundColor: "var(--success-green-50)",
      },
      email: "Olivia Rhye",
      teams: teams,
    },
    {
      key: "9",
      name: "Olivia Rhye",
      tag: "@olivia",
      role: "Product Designer",
      status: {
        id: "8",
        label: (
          <Row>
            <Col>
              <div
                style={{
                  width: 6,
                  height: 6,
                  backgroundColor: "var(--success-green)",
                  borderRadius: "100%",
                  marginTop: 6,
                  marginRight: 3,
                }}
              />
            </Col>
            <Col className={classes.activeTagLabel}>Active</Col>
          </Row>
        ),
        color: "var(--success-green-700)",
        backgroundColor: "var(--success-green-50)",
      },
      email: "Olivia Rhye",
      teams: teams,
    },
    {
      key: "10",
      name: "Olivia Rhye",
      tag: "@olivia",
      role: "Product Designer",
      status: {
        id: "8",
        label: (
          <Row>
            <Col>
              <div
                style={{
                  width: 6,
                  height: 6,
                  backgroundColor: "var(--success-green)",
                  borderRadius: "100%",
                  marginTop: 6,
                  marginRight: 3,
                }}
              />
            </Col>
            <Col className={classes.activeTagLabel}>Active</Col>
          </Row>
        ),
        color: "var(--success-green-700)",
        backgroundColor: "var(--success-green-50)",
      },
      email: "Olivia Rhye",
      teams: teams,
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: string, record: any) => {
        return (
          <Row gutter={8}>
            <Col>
              <fmsAvatar testImage size={AvatarSize.md} />
            </Col>
            <Col>
              <Row>
                <Col span={24} className={classes.username}>
                  {text}
                </Col>
                <Col span={24} className={classes.userTag}>
                  {record?.tag}
                </Col>
              </Row>
            </Col>
          </Row>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_: string, { status }: any) => (
        <Tag
          key={status.id}
          className={classes.teamTag}
          style={{
            color: status.color,
            backgroundColor: status.background,
          }}
        >
          {status.label}
        </Tag>
      ),
    },
    {
      title: (
        <div>
          Role
          <QuestionCircleOutlined className={classes.questionIcon} />
        </div>
      ),
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Email address",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Teams",
      key: "teams",
      dataIndex: "teams",
      render: (_: string, { teams }: any) => {
        return (
          <>
            {teams?.slice(0, 3).map((team: any) => (
              <Tag
                key={team.id}
                className={classes.teamTag}
                style={{
                  color: team.color,
                  backgroundColor: team.background,
                }}
              >
                {team.label}
              </Tag>
            ))}
            {teams?.length > 3 && (
              <Popover
                key="more-tags"
                placement="rightTop"
                content={teams?.slice(3, teams.length).map((team: any) => (
                  <Tag
                    key={team.id}
                    className={classes.teamTag}
                    style={{
                      color: team.color,
                      backgroundColor: team.background,
                    }}
                  >
                    {team.label}
                  </Tag>
                ))}
                trigger="click"
              >
                <Tag
                  className={`${classes.teamTag} ${classes.showMoreTag}`}
                  style={{
                    color: "var(--primary-gray-700)",
                    backgroundColor: "var(--secondary-gray-100)",
                  }}
                >
                  +{teams.length - 3}
                </Tag>
              </Popover>
            )}
          </>
        );
      },
    },
    {
      title: " ",
      dataIndex: "controls",
      key: "controls",
      render: () => (
        <Row gutter={24}>
          <Col>
            <TrashIcon width={20} height={20} />
          </Col>
          <Col>
            <PencelIcon width={20} height={20} />
          </Col>
        </Row>
      ),
    },
  ];
  return {
    rows: dataSource,
    columns: columns,
  };
};
