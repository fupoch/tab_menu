import React from 'react'
import { useNavigate } from 'react-router-dom';
import TabContent from './TabContent';
import './TabMenu.css'

const tabObj = [
  { id: 0, title: 'Типо главная', url: 'main', description: 'Это главная' },
  { id: 1, title: 'Услуги-хуюслуги', url: 'services', description: 'Это не главня' },
  { id: 2, title: 'О нас(пидарас)', url: 'about', description: 'Это третья' },
  { id: 3, title: 'Контакты(шастун)', url: 'contacts', description: 'Четвертая вроде' }
];

const TabMenu = ({ tabValue }) => {
  const initialValue = localStorage.getItem('tabid') ? localStorage.getItem('tabid') : tabValue
  console.log(initialValue)
  const [active, setActive] = React.useState(initialValue);
  const navigate = useNavigate()
  const openTab = (id, url) => {
    navigate(`/${url}`)
    setActive(id);
    localStorage.setItem('tabid', id.toString())
  }
  const isMounted = React.useRef(false)
  React.useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem('tabid', tabValue.toString())
    }
    isMounted.current = true
  }, [tabValue])
  return (
    <>
      <div className="">
        <ul className="li_wrapper">
          {tabObj.map((tabObj) => (
            <div
              key={tabObj.id}
              className={`tabsObj ${tabObj.id == active ? 'active' : ''}`}
              onClick={() => openTab(tabObj.id, tabObj.url)}>
              {tabObj.title}
            </div>
          ))}
        </ul>
      </div>
      {tabObj[active] && <TabContent {...tabObj[active]} />}
    </>

  )
}

export default TabMenu;
