

import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import { connect } from 'dva'
import moment from 'moment'
import BooleanOption from 'components/BooleanOption';
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown,Badge, Switch,Select,Form,AutoComplete,Modal } from 'antd'
import { Link, Route, Redirect} from 'dva/router'
import numeral from 'numeral'

import DashboardTool from '../../common/Dashboard.tool'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './TransportTask.profile.less'
import DescriptionList from '../../components/DescriptionList';

import GlobalComponents from '../../custcomponents';
import PermissionSetting from '../../permission/PermissionSetting'
import appLocaleName from '../../common/Locale.tool'
const { Description } = DescriptionList;
const {defaultRenderExtraHeader}= DashboardTool


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const internalSummaryOf = (transportTask,targetComponent) =>{
    const userContext = null
	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="Id">{transportTask.id}</Description> 
<Description term="Name">{transportTask.name}</Description> 
<Description term="Start">{transportTask.start}</Description> 
<Description term="Begin Time">{ moment(transportTask.beginTime).format('YYYY-MM-DD')}</Description> 
<Description term="Latitude">{transportTask.latitude}</Description> 
<Description term="Longitude">{transportTask.longitude}</Description> 
	
      </DescriptionList>
	)
}


const renderPermissionSetting = transportTask => {
  const {TransportTaskBase} = GlobalComponents
  return <PermissionSetting targetObject={transportTask}  targetObjectMeta={TransportTaskBase}/>
}

const internalRenderExtraHeader = defaultRenderExtraHeader

class TransportTaskPermission extends Component {


  componentDidMount() {

  }
  

  render() {
    // eslint-disable-next-line max-len
    const  transportTask = this.props.transportTask;
    const { id,displayName, goodsCount, transportTaskTrackCount } = transportTask
    const cardsData = {cardsName:"Transport Task",cardsFor: "transportTask",cardsSource: transportTask,
  		subItems: [
    
      	],
  	};
    const renderExtraHeader = this.props.renderExtraHeader || internalRenderExtraHeader
    const summaryOf = this.props.summaryOf || internalSummaryOf
   
    return (

      <PageHeaderLayout
        title={`${cardsData.cardsName}: ${displayName}`}
        content={summaryOf(cardsData.cardsSource,this)}
        wrapperClassName={styles.advancedForm}
      >
      {renderExtraHeader(cardsData.cardsSource)}
      {renderPermissionSetting(cardsData.cardsSource)}
      
      </PageHeaderLayout>
    )
  }
}

export default connect(state => ({
  transportTask: state._transportTask,
}))(Form.create()(TransportTaskPermission))

