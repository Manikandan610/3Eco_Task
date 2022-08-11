import React, { useState } from 'react'
import { Button, Modal, Row, Col } from 'antd';
import { AreaChartOutlined } from '@ant-design/icons'

//const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

const ModalComp = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

  return (
    <div>
        <Button type="primary" onClick={showModal}>
            Click
        </Button>
        <Modal title="8513 - B Statistics" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={false}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="first_rows">
                <Col className="gutter-row" span={4}>
                    <div className='cols'>
                        <AreaChartOutlined className='iconstyle'/>
                        <h1>Nunam</h1>
                        <p>Battery Provider</p>
                    </div>
                </Col>
                <Col className="gutter-row" span={4}>
                    <div className='cols'>
                        <AreaChartOutlined className='iconstyle'/>
                            <div className='col_content'>
                            <h1>60<sub>%</sub></h1>
                            </div>
                        <p>SOC</p>
                    </div>
                </Col>
                <Col className="gutter-row" span={4}>
                    <div className='cols'>
                        <AreaChartOutlined className='iconstyle'/>
                            <div className='col_content'>
                                <h1>5<sub>h</sub></h1>
                            </div>
                        <p>Charge</p>
                    </div>
                </Col>
                <Col className="gutter-row" span={4}>
                    <div className='cols'>
                        <AreaChartOutlined className='iconstyle'/>
                        <div className='col_content'>
                                <h1>37<sub>%</sub></h1>
                            </div>
                        <p>Discharge</p>
                    </div>
                </Col>
                <Col className="gutter-row" span={4}>
                    <div className='cols'>
                        <AreaChartOutlined className='iconstyle'/>
                        <div className='col_content'>
                                <h1>10<sub>V</sub></h1>
                            </div>
                        <p>Voltage</p>
                    </div>
                </Col>
                <Col className="gutter-row" span={4}>
                    <div className='cols'>
                        <AreaChartOutlined className='iconstyle'/>
                        <h1>0</h1>
                        <p>Alarms</p>
                    </div>
                </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="first_rows">
                <Col className="gutter-row" span={4}>
                    <div className='cols'>
                        <AreaChartOutlined className='iconstyle'/>
                        <h1>5.21</h1>
                        <p>FCE</p>
                    </div>
                </Col>
                <Col className="gutter-row" span={4}>
                    <div className='cols'>
                        <AreaChartOutlined className='iconstyle'/>
                        <h1>0</h1>
                        <p>Violations</p>
                    </div>
                </Col>
                <Col className="gutter-row" span={4}>
                    <div className='cols'>
                        <AreaChartOutlined className='iconstyle'/>
                        <div className='col_content'>
                                <h1>48.54<sub>kwh</sub></h1>
                            </div>
                        <p>Energy Delivered</p>
                    </div>
                </Col>
                <Col className="gutter-row" span={4}>
                    <div className='cols'>
                        <AreaChartOutlined className='iconstyle'/>
                        <h1>29:40</h1>
                        <p>Hours Used</p>
                    </div>
                </Col>
                <Col className="gutter-row" span={4}>
                    <div className='cols'>
                        <AreaChartOutlined className='iconstyle'/>
                        <h1>N/A</h1>
                        <p>SOH</p>
                    </div>
                </Col>
                <Col className="gutter-row" span={4}>
                    <div className='cols'>
                        <AreaChartOutlined className='iconstyle'/>
                        <h1>24:00</h1>
                        <p>Hours of Charge</p>
                    </div>
                </Col>
            </Row>
            
        </Modal>
      </div>
  )
}

export default ModalComp