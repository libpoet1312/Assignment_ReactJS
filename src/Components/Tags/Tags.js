import React, {useState} from 'react'
import { Drawer, Button, Checkbox, Select } from 'antd';

import {FilterOutlined} from '@ant-design/icons';

const { Option } = Select;

const Tags = (props) => {
    const [visible, setVisible] = useState(false);
    const options = props.tags.map( tag => {
        return {label: tag, value: tag}
    });

    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    const onTagsChange = (checkedValues) => {
        // console.log(checkedValues);
        props.setTags(checkedValues);
    };

    const handleOrderChange = value => {
        console.log(value);
        props.setOrder(value);
    };


    return (
        <div>
            <div>
                <span>Τιμή: </span>
                <Select defaultValue="random" onChange={handleOrderChange} style={{ width: 120 }} >
                    <Option key="random" value="random">Random</Option>
                    <Option key="ascending" value="ascending">Αύξουσα</Option>
                    <Option key="descending" value="descending">Φθίνουσα</Option>

                </Select>

                <Button  style={{float: 'right', backgroundColor: 'orange'}}  icon={<FilterOutlined />} onClick={showDrawer}>
                    Filters
                </Button>
                <Drawer
                    title="Tags"
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                >

                    <Checkbox.Group options={options} onChange={onTagsChange}/>
                </Drawer>
            </div>
        </div>
    )
};

export default Tags
