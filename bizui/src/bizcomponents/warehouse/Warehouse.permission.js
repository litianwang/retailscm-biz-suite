

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
import styles from './Warehouse.profile.less'
import DescriptionList from '../../components/DescriptionList';

import GlobalComponents from '../../custcomponents';
import PermissionSetting from '../../permission/PermissionSetting'
import appLocaleName from '../../common/Locale.tool'
const { Description } = DescriptionList;
const {defaultRenderExtraHeader}= DashboardTool


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const internalSummaryOf = (warehouse,targetComponent) =>{
    const userContext = null
	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="Id">{warehouse.id}</Description> 
<Description term="Location">{warehouse.location}</Description> 
<Description term="Contact Number">{warehouse.contactNumber}</Description> 
<Description term="Total Area">{warehouse.totalArea}</Description> 
<Description term="Latitude">{warehouse.latitude}</Description> 
<Description term="Longitude">{warehouse.longitude}</Description> 
<Description term="Last Update Time">{ moment(warehouse.lastUpdateTime).format('YYYY-MM-DD')}</Description> 
	
      </DescriptionList>
	)
}


const renderPermissionSetting = warehouse => {
  const {WarehouseBase} = GlobalComponents
  return <PermissionSetting targetObject={warehouse}  targetObjectMeta={WarehouseBase}/>
}

const internalRenderExtraHeader = defaultRenderExtraHeader

class WarehousePermission extends Component {


  componentDidMount() {

  }
  

  render() {
    // eslint-disable-next-line max-len
    const  warehouse = this.props.warehouse;
    const { id,displayName, storageSpaceCount, smartPalletCount, supplierSpaceCount, receivingSpaceCount, shippingSpaceCount, damageSpaceCount, warehouseAssetCount } = warehouse
    const cardsData = {cardsName:"Warehouse",cardsFor: "warehouse",cardsSource: warehouse,
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
  warehouse: state._warehouse,
}))(Form.create()(WarehousePermission))

