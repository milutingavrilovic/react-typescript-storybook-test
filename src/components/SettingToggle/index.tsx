import React from 'react';
import styled from 'styled-components';

import { Switch } from 'antd';


export interface IProps {
    enableSetting?: Function;
    testFunction?: () => void;
}

export interface IState {
    enabled: boolean
}

const StyledToggle = styled.div`
    width: auto;
    height: 42px;
    background: #F5F5F5;
    border-radius: 10px;
    margin 13px 47px 8px 38px;
    display: flex;
`;

const StyledToggleLabel = styled.span`
    font-family: Avenir Next;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 25px;
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 20px;
`

const StyledSwitch = styled.span`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 20px;
    
    .ant-switch-checked {
        background-color: #19A8E0;
    }
`


class SettingToggle extends React.Component<IProps, IState> {

    state: IState = {
        enabled: true
    }

    toggle = () => {
        const { enabled } = this.state;
        const { enableSetting } = this.props;

        this.setState({
            enabled: !enabled
        }, () => enableSetting && enableSetting())
    }

    render() {
        const { enabled } = this.state;

        return(
            <StyledToggle {...this.props}>
                <StyledToggleLabel>{ enabled ? 'Enabled' : 'Disabled' }</StyledToggleLabel>
                <StyledSwitch>
                    <Switch checked={enabled} onChange={this.toggle} />
                </StyledSwitch>
            </StyledToggle>
        )
    }
}

export default SettingToggle;
