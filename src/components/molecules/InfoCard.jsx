import React from 'react'
import AppIcon from '../atoms/AppIcon'
import Text from '../atoms/Text'

const InfoCard = ({ icon, label, value, valueColor }) => (
  <div className="bg-white/50 p-4 rounded-xl">
    <div className="flex items-center gap-3 mb-2">
      <AppIcon name={icon} className={`w-5 h-5 ${valueColor}`} />
      <Text as="span" className="font-medium text-surface-800">{label}</Text>
    </div>
    <Text as="div" className={`text-2xl font-bold ${valueColor}`}>{value}</Text>
  </div>
)

export default InfoCard