import { useSelector, useDispatch } from "react-redux";
import { crewNames, crew, chooseCrew } from 'features/dancerCrew/dancerCrewSlice'
import { Menu } from "antd";

const CrewMenu = () => {
  const crewName = useSelector(crewNames)
  const choosenCrew = useSelector(crew)

  const dispatch = useDispatch()
  
  const onClickCrew = (e) => {
    dispatch(chooseCrew(e.key))
  }

  return (
    <Menu theme="dark" mode="horizontal" onClick={onClickCrew} selectedKeys={[choosenCrew.name.eng]}>
    {
      crewName.map(({name}) => (
        <Menu.Item key={name.eng}>{name.eng}</Menu.Item>
      ))
    }
    </Menu>
  )
}

export default CrewMenu