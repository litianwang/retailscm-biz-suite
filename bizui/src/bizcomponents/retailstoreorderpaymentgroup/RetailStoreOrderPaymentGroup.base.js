import React from 'react'
import { Icon,Divider } from 'antd'

import { Link } from 'dva/router'
import moment from 'moment'
import ImagePreview from '../../components/ImagePreview'
import appLocaleName from '../../common/Locale.tool'
import BaseTool from '../../common/Base.tool'
import GlobalComponents from '../../custcomponents'
import DescriptionList from '../../components/DescriptionList'
const { Description } = DescriptionList
const {
	defaultRenderReferenceCell,
	defaultRenderBooleanCell,
	defaultRenderMoneyCell,
	defaultRenderDateTimeCell,
	defaultRenderImageCell,
	defaultRenderDateCell,
	defaultRenderIdentifier,
	defaultRenderTextCell,
} = BaseTool

const renderTextCell=defaultRenderTextCell
const renderIdentifier=defaultRenderIdentifier
const renderDateCell=defaultRenderDateCell
const renderDateTimeCell=defaultRenderDateTimeCell
const renderImageCell=defaultRenderImageCell
const renderMoneyCell=defaultRenderMoneyCell
const renderBooleanCell=defaultRenderBooleanCell
const renderReferenceCell=defaultRenderReferenceCell


const menuData = {menuName:"Retail Store Order Payment Group", menuFor: "retailStoreOrderPaymentGroup",
  		subItems: [
  
  		],
}

const fieldLabels = {
  id: 'Id',
  name: 'Name',
  bizOrder: 'Biz Order',
  cardNumber: 'Card Number',

}

const displayColumns = [
  { title: fieldLabels.id, debugtype: 'string', dataIndex: 'id', width: '20',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.name, debugtype: 'string', dataIndex: 'name', width: '8',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.bizOrder, dataIndex: 'bizOrder', render: (text, record) => renderReferenceCell(text, record), sorter:true},
  { title: fieldLabels.cardNumber, debugtype: 'string', dataIndex: 'cardNumber', width: '21',render: (text, record)=>renderTextCell(text,record)},

]
// refernce to https://ant.design/components/list-cn/
const renderItemOfList=(retailStoreOrderPaymentGroup,targetComponent)=>{

	
	
	
	const userContext = null
	return (
	<div key={retailStoreOrderPaymentGroup.id}>
	
	<DescriptionList  key={retailStoreOrderPaymentGroup.id} size="small" col="4">
<Description term="Id">{retailStoreOrderPaymentGroup.id}</Description> 
<Description term="Name">{retailStoreOrderPaymentGroup.name}</Description> 
<Description term="Biz Order">{retailStoreOrderPaymentGroup.bizOrder==null?appLocaleName(userContext,"NotAssigned"):`${retailStoreOrderPaymentGroup.bizOrder.displayName}(${retailStoreOrderPaymentGroup.bizOrder.id})`}
</Description>
<Description term="Card Number">{retailStoreOrderPaymentGroup.cardNumber}</Description> 
	
        
      </DescriptionList>
       <Divider style={{ height: '2px' }} />
      </div>
	)

}
	



const RetailStoreOrderPaymentGroupBase={menuData,displayColumns,fieldLabels,renderItemOfList}
export default RetailStoreOrderPaymentGroupBase



