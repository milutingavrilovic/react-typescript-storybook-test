import React from "react";
import styled from "styled-components";

import SettingToggle from "../SettingToggle";

export interface Props {
  enableSetting: Function;
  testFunction?: () => void;
}

const StyledSetting = styled.div`
  border: none;
  background-color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  width: 471px;
  height: 295px;
`;

const StyledSettingTitle = styled.p`
  font-family: Avenir Next;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 25px;
  padding: 38px 35px;
  text-align: left;
  margin: 0;
`

const StyledSettingLabel = styled.p`
  font-family: Avenir Next;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 25px;
  padding: 5px 38px;
  text-align: left;
  margin: 0;
`

const StyledSettingDesc = styled.p`
  font-family: Avenir Next;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 13px;
  padding-left: 58px;
  padding-right: 77px;
  text-align: left;
  margin: 0;
`

class Settings extends React.Component<Props> {
  render() {
    return(
        <StyledSetting {...this.props}>
          <StyledSettingTitle>Eat New Features</StyledSettingTitle>
          <StyledSettingLabel>Do you want diners to be able to request tables?</StyledSettingLabel>
          <SettingToggle enableSetting={this.props.enableSetting} />
          <StyledSettingDesc>This setting determines whether or not diners can request to ‘Eat Now’ at your restaurant.</StyledSettingDesc>
        </StyledSetting>
    )
  }
}

export default Settings;
