import React, {useState} from 'react'
import { Drawer, Button, Checkbox, Select } from 'antd';

import {FilterOutlined} from '@ant-design/icons';
import './Filters.css';

const { Option } = Select;

const Filters = (props) => {
    const [visible, setVisible] = useState(false); // use state hook to see if drawer is open and open/close it

    // our tags for checkboxes
    const options = props.tags.map( tag => {
        return {label: tag, value: tag}
    });

    // Drawer open
    const showDrawer = () => {
        setVisible(true);
    };

    // Drawer close
    const onClose = () => {
        setVisible(false);
    };

    // on tags check/uncheck
    const onTagsChange = (checkedValues) => {
        // console.log(checkedValues);
        props.setTags(checkedValues);
    };

    // on ordering change
    const handleOrderChange = value => {
        // console.log(value);
        props.setOrder(value);
    };


    return (
        <div>
            <div>
                <span>Τιμή: </span>
                <Select defaultValue="random" onChange={handleOrderChange} style={{ width: 120 }} >
                    <Option key="random" value="random">Τυχαία</Option>
                    <Option key="ascending" value="ascending">Αύξουσα</Option>
                    <Option key="descending" value="descending">Φθίνουσα</Option>
                </Select>

                {/* Button for the Drawer */}
                <Button className="button" icon={<FilterOutlined />} onClick={showDrawer}>
                    <span>Φίλτρα</span>
                </Button>
                <Drawer
                    title="Tags"
                    placement="right"
                    closable={true}
                    onClose={onClose}
                    visible={visible}
                >
                    {/* Our tags as checkboxes */}
                    <Checkbox.Group options={options} onChange={onTagsChange}/>
                </Drawer>
            </div>
        </div>
    )
};

export default Filters;
