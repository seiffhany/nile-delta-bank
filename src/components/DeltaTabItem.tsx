import React, {useState} from 'react'
import '../css/nav-menu.css'

function DeltaTabItem({id, title, active, onClick} : {id: number, title: string, active: boolean, onClick: Function}) {
  return (
    <div className={`delta_tab_item ${active ? "delta_tab_item_active" : ""}`} onClick={() => onClick(id)}>
      {title}
    </div>
  )
}

export default DeltaTabItem