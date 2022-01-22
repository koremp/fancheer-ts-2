import { useSelector, useDispatch } from "react-redux";
import { dancerNames, dancer, chooseDancer } from 'features/dancerCrew/dancerCrewSlice'
import { Menu } from "antd";

const DancerMenu = () => {
  const dancerName = useSelector(dancerNames)
  const choosenDancer = useSelector(dancer)

  const dispatch = useDispatch()
  
  const onClickDancer = (e) => {
    dispatch(chooseDancer(e.key))
  }


  return (
    <Menu mode="inline" onClick={onClickDancer} selectedKeys={[choosenDancer.name.eng]}>
      {
        dancerName.map(({name}) => (
          <Menu.Item key={name.eng}>{name.eng}</Menu.Item>
        ))
      }
    </Menu>
  )
}

export default DancerMenu